"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import {
  Bold,
  Italic,
  Underline as UnderlineIcon,
  List,
  ListOrdered,
  CloudUpload,
  X,
} from "lucide-react";
import { useEditor, EditorContent } from "@tiptap/react";
import useDrivePicker from "react-google-drive-picker";
import { getGooglePickerConfig } from "@/actions/google";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Heading from "@tiptap/extension-heading";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Category } from "@prisma/client";
import { toast } from "sonner";
import { createBlogSchema } from "@/features/blog/schemas/blog.schema";
import HardBreak from "@tiptap/extension-hard-break";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import ListItem from "@tiptap/extension-list-item";

interface CreatePostModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialData?: any;
}

export function CreatePostModal({
  open,
  onOpenChange,
  initialData,
}: CreatePostModalProps) {
  const router = useRouter();

  // Form State
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [image, setImage] = useState("");
  const [imageCredit, setImageCredit] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [authorId, setAuthorId] = useState("");
  const [status, setStatus] = useState("DRAFT");
  const [errors, setErrors] = useState<Record<string, string[]>>({});

  // Users State
  const [users, setUsers] = useState<any[]>([]);

  const fetchUsers = async () => {
    try {
      const res = await fetch("/api/user");
      if (res.ok) {
        const data = await res.json();
        const usersList = Array.isArray(data) ? data : data?.data || [];
        setUsers(usersList);
      } else {
        toast.error("Failed to load users");
      }
    } catch {
      toast.error("An error occurred while fetching users");
    }
  };

  // Categories State
  const [categories, setCategories] = useState<Category[]>([]);

  const fetchCategories = async () => {
    try {
      const res = await fetch("/api/category");
      if (res.ok) {
        const data = await res.json();
        setCategories(data);
      } else {
        toast.error("Failed to load categories");
      }
    } catch {
      toast.error("An error occurred while fetching categories");
    }
  };

  // Google Drive config state
  const [googleConfig, setGoogleConfig] = useState<{
    clientId: string;
    apiKey: string;
    appId: string;
  } | null>(null);

  // NextAuth Session
  const { data: session } = useSession();

  const [openPicker, authResponse] = useDrivePicker();

  const handleOpenPicker = () => {
    if (!googleConfig) return;

    // Prevent scrolling by adding a class to the html element
    const html = document.documentElement;
    html.classList.add("picker-open");

    const google = (window as any).google;

    openPicker({
      clientId: googleConfig.clientId,
      developerKey: googleConfig.apiKey,
      viewId: "DOCS",
      token: session?.accessToken || authResponse?.access_token || undefined,
      showUploadView: true,
      showUploadFolders: true,
      supportDrives: true,
      multiselect: false,
      customViews: google
        ? [
            new google.picker.DocsView()
              .setIncludeFolders(true)
              .setEnableDrives(true), // standard docs view with drives enabled
            new google.picker.DocsView(google.picker.ViewId.SHARED_DRIVES), // specialized Shared Drives tab
          ]
        : undefined,
      callbackFunction: (data) => {
        // Restore scrolling by removing the class
        html.classList.remove("picker-open");

        if (data.action === "picked") {
          const file = data.docs[0];

          // Use the Google Drive thumbnail URL approach by pulling the file ID

          const previewUrl = `https://drive.google.com/thumbnail?id=${file.id}&sz=w1600`;
          // const previewUrl = `https://drive.google.com/uc?export=view&id=${file.id}`;

          console.log("Picked File Data Object from Google Picker:", file);
          console.log("Setting Image URL to:", previewUrl);
          setImage(previewUrl);
        }
      },
    });
  };

  const CustomHeading = Heading.configure({
    levels: [1, 2],
  }).extend({
    renderHTML({ node, HTMLAttributes }) {
      const level = node.attrs.level;

      const classes =
        level === 1
          ? "text-3xl font-bold mt-6 mb-3"
          : "text-xl font-semibold mt-5 mb-2";

      return [
        `h${level}`,
        {
          ...HTMLAttributes,
          class: classes,
        },
        0,
      ];
    },
  });

  const CustomHardBreak = HardBreak.extend({
    renderHTML() {
      return ["br"];
    },
    addKeyboardShortcuts() {
      return {
        "Shift-Enter": () => this.editor.commands.setHardBreak(),
      };
    },
  });

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: false,
        hardBreak: false,
        bulletList: false,
        orderedList: false,
        listItem: false,
      }),

      CustomHeading,
      CustomHardBreak,

      BulletList.configure({
        HTMLAttributes: {
          class: "list-disc pl-6",
        },
      }),

      OrderedList.configure({
        HTMLAttributes: {
          class: "list-decimal pl-6",
        },
      }),

      ListItem,

      Underline,
    ],
    content: "<p></p>",
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class:
          "min-h-[220px] w-full bg-transparent text-slate-700 outline-none p-4 prose prose-neutral max-w-none leading-7",
      },
    },
  });

  useEffect(() => {
    // Fetch categories when modal opens
    if (open) {
      fetchCategories();
      fetchUsers();

      // Fetch Google Config via Server Action
      getGooglePickerConfig()
        .then((config) => {
          if (config.clientId && config.apiKey && config.appId) {
            setGoogleConfig({
              clientId: config.clientId,
              apiKey: config.apiKey,
              appId: config.appId,
            });
          }
        })
        .catch((err) => console.error("Failed to load Google Config:", err));

      if (initialData) {
        setTitle(initialData.title || "");
        setSubtitle(initialData.subtitle || "");
        setImage(initialData.image || "");
        setImageCredit(initialData.imageCredit || "");
        setCategoryId(initialData.categoryId || "");
        setAuthorId(initialData.authorId || "");
        setStatus(initialData.status || "DRAFT");
        // Ensure editor is ready before setting content
        if (editor) {
          editor.commands.setContent(initialData.content || "");
        }
      } else {
        // Reset form completely if not editing
        setTitle("");
        setSubtitle("");
        setImage("");
        setImageCredit("");
        setCategoryId("");
        setAuthorId("");
        setStatus("DRAFT");
        if (editor) {
          editor.commands.clearContent();
        }
      }
    }
  }, [open, initialData, editor]);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    const rawHtml = editor?.getHTML() || "";

    // CLEAN tapi JANGAN HAPUS <br>
    const cleanContent = rawHtml
      .replace(/<p><\/p>/g, "")
      .replace(/<p>\s*<\/p>/g, "")
      .trim();

    // Zod Validation
    const parsed = createBlogSchema.safeParse({
      title,
      subtitle,
      categoryId,
      authorId,
      image,
      imageCredit,
      status,
      content:
        cleanContent === "<p></p>" ||
        cleanContent === "<p>Start writing your masterpiece...</p>"
          ? ""
          : cleanContent,
    });

    if (!parsed.success) {
      setErrors(parsed.error.flatten().fieldErrors as Record<string, string[]>);
      toast.error("Please check the form for errors.");
      return;
    }

    if (editor) {
      try {
        setIsSubmitting(true);

        const url = initialData?.id
          ? `/api/blog/${initialData.id}`
          : "/api/blog";
        const method = initialData?.id ? "PUT" : "POST";

        const response = await fetch(url, {
          method,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            subtitle,
            image,
            imageCredit,
            categoryId,
            content: cleanContent,
            status: status,
            authorId: authorId,
          }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(
            errorData.message ||
              (initialData?.id
                ? "Failed to update post"
                : "Failed to create post"),
          );
        }

        toast.success(
          initialData?.id
            ? "Blog post updated successfully!"
            : "Blog post created successfully!",
        );

        // Close modal
        onOpenChange(false);

        // Let's reload the page to see the new post in the table (when we hook up the table)
        router.refresh();
      } catch (error: any) {
        console.log(error.message);
        toast.error(error.message);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  if (!editor) {
    return null;
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="sm:max-w-5xl max-h-[90vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] p-0 rounded-2xl"
        onInteractOutside={(e) => {
          const target = e.target as HTMLElement;
          if (
            target.closest(".picker-dialog") ||
            target.closest(".picker-dialog-bg") ||
            document.querySelector(".picker-dialog")
          ) {
            e.preventDefault();
          }
        }}
      >
        {/* HEADER */}
        <div className="px-8 pt-8 pb-6 border-b border-slate-200">
          <div className="flex justify-between items-center">
            <div>
              <DialogTitle className="text-2xl font-semibold text-slate-900">
                {initialData ? "Edit Blog Post" : "Create Blog Post"}
              </DialogTitle>
              <DialogDescription className="text-slate-500 mt-1">
                Manage your article content and metadata.
              </DialogDescription>
            </div>
            <Button
              onClick={() => onOpenChange(false)}
              className="cursor-pointer bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-lg"
            >
              <X />
            </Button>
          </div>
        </div>

        {/* BODY */}
        <div className="px-8 py-6 space-y-6">
          {/* ROW 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>
                Title <span className="text-red-500">*</span>
              </Label>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="The Future of EdTech in 2024"
                className={`h-11 ${errors.title ? "border-red-500 focus-visible:ring-red-500" : ""}`}
              />
              {errors.title && (
                <p className="text-red-500 text-sm mt-1">{errors.title[0]}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label>
                Subtitle <span className="text-red-500">*</span>
              </Label>
              <Input
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
                placeholder="Exploring how AI is transforming classrooms."
                className={`h-11 ${errors.subtitle ? "border-red-500 focus-visible:ring-red-500" : ""}`}
              />
              {errors.subtitle && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.subtitle[0]}
                </p>
              )}
            </div>
          </div>

          {/* ROW 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>
                Category <span className="text-red-500">*</span>
              </Label>
              <Select value={categoryId} onValueChange={setCategoryId}>
                <SelectTrigger className="h-11 w-full">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat.id} value={cat.id}>
                      {cat.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.categoryId && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.categoryId[0]}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label>
                Author <span className="text-red-500">*</span>
              </Label>
              <Select value={authorId} onValueChange={setAuthorId}>
                <SelectTrigger className="h-11 w-full">
                  <SelectValue placeholder="Select author" />
                </SelectTrigger>
                <SelectContent>
                  {users.map((user) => (
                    <SelectItem key={user.id} value={user.id}>
                      {user.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.authorId && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.authorId[0]}
                </p>
              )}
            </div>
          </div>

          {/* COVER IMAGE */}
          <div className="space-y-2">
            <Label>
              Cover Image <span className="text-red-500">*</span>
            </Label>

            <div
              className={`border-2 border-dashed border-slate-300 rounded-xl bg-slate-50 text-center relative hover:border-blue-500 transition overflow-hidden ${
                !image ? "p-10" : "p-1"
              }`}
            >
              {image ? (
                <div className="relative w-full h-56 group rounded-lg overflow-hidden bg-slate-200">
                  <img
                    src={image}
                    alt="cover"
                    className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-75 pointer-events-none"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none transition duration-300 bg-black/40">
                    <p className="text-white font-medium flex items-center gap-2 shadow-sm">
                      <CloudUpload className="w-5 h-5" />
                      Click to change file
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-2 text-slate-500">
                  <CloudUpload className="mx-auto h-8 w-8" />
                  <p className="text-sm">
                    Drag and drop or click to upload cover image
                  </p>
                  <p className="text-xs text-slate-400">
                    PNG, JPG or WebP (Max. 2MB)
                  </p>
                </div>
              )}

              <div
                className="absolute inset-0 cursor-pointer"
                onClick={handleOpenPicker}
              />
            </div>
            {errors.image && (
              <p className="text-red-500 text-sm mt-1">{errors.image[0]}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>
                Image Credit <span className="text-red-500">*</span>
              </Label>
              <Input
                value={imageCredit}
                onChange={(e) => setImageCredit(e.target.value)}
                placeholder="Photo by Unsplash"
                className={`h-11 ${errors.imageCredit ? "border-red-500 focus-visible:ring-red-500" : ""}`}
              />
              {errors.imageCredit && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.imageCredit[0]}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label>Published At</Label>
              <Input
                type="datetime-local"
                defaultValue={new Date().toISOString().slice(0, 16)}
                className="h-11"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>
              Status <span className="text-red-500">*</span>
            </Label>
            <Select value={status} onValueChange={setStatus}>
              <SelectTrigger className="h-11 w-full">
                <SelectValue placeholder="Select Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="DRAFT">Draft</SelectItem>
                <SelectItem value="PUBLISHED">Published</SelectItem>
              </SelectContent>
            </Select>
            {errors.status && (
              <p className="text-red-500 text-sm mt-1">{errors.status[0]}</p>
            )}
          </div>

          {/* CONTENT EDITOR */}
          <div className="space-y-2">
            <Label>Content</Label>

            <div className="border border-slate-200 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-blue-600 transition">
              {/* TOOLBAR */}
              <div className="bg-slate-50 border-b border-slate-200 px-3 py-2 flex items-center gap-2 flex-wrap">
                {/* Bold */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => editor.chain().focus().toggleBold().run()}
                >
                  <Bold className="h-4 w-4" />
                </Button>

                {/* Italic */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => editor.chain().focus().toggleItalic().run()}
                >
                  <Italic className="h-4 w-4" />
                </Button>

                {/* Underline */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => editor.chain().focus().toggleUnderline().run()}
                >
                  <UnderlineIcon className="h-4 w-4" />
                </Button>

                <div className="w-px h-4 bg-slate-300 mx-1" />

                {/* H1 */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 1 }).run()
                  }
                >
                  H1
                </Button>

                {/* H2 */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 2 }).run()
                  }
                >
                  H2
                </Button>

                <div className="w-px h-4 bg-slate-300 mx-1" />

                {/* UL */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() =>
                    editor.chain().focus().toggleBulletList().run()
                  }
                >
                  <List className="h-4 w-4" />
                </Button>

                {/* OL */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() =>
                    editor.chain().focus().toggleOrderedList().run()
                  }
                >
                  <ListOrdered className="h-4 w-4" />
                </Button>
              </div>

              <EditorContent
                editor={editor}
                className={`min-h-[250px] px-4 py-4 prose prose-neutral max-w-none ${
                  errors.content ? "bg-red-50" : ""
                }`}
              />
            </div>
            {errors.content && (
              <p className="text-red-500 text-sm mt-1">{errors.content[0]}</p>
            )}
          </div>
        </div>

        {/* FOOTER */}
        <DialogFooter className="px-8 py-6 border-t border-slate-200 flex justify-between">
          <Button variant="ghost" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>

          <Button
            className="cursor-pointer bg-emerald-500 hover:bg-emerald-600 text-white px-6"
            onClick={handleSubmit}
          >
            Save Changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
