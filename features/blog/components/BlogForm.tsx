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
  ChevronLeft,
  X,
  Save,
  Loader2,
  FileText
} from "lucide-react";
import { useEditor, EditorContent } from "@tiptap/react";
import useDrivePicker from "react-google-drive-picker";
import { getGooglePickerConfig } from "@/actions/google";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Heading from "@tiptap/extension-heading";
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
import { AnimatedCard } from "@/components/admin/components/dashboard-client";

interface BlogFormProps {
  initialData?: any;
  onSuccess?: () => void;
  onCancel?: () => void;
}

export function BlogForm({ initialData, onSuccess, onCancel }: BlogFormProps) {
  const router = useRouter();
  const { data: session } = useSession();

  // Form State
  const [title, setTitle] = useState(initialData?.title || "");
  const [subtitle, setSubtitle] = useState(initialData?.subtitle || "");
  const [image, setImage] = useState(initialData?.image || "");
  const [imageCredit, setImageCredit] = useState(initialData?.imageCredit || "");
  const [categoryId, setCategoryId] = useState(initialData?.categoryId || "");
  const [authorId, setAuthorId] = useState(initialData?.authorId || "");
  const [status, setStatus] = useState(initialData?.status || "DRAFT");
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Data State
  const [users, setUsers] = useState<any[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [googleConfig, setGoogleConfig] = useState<{
    clientId: string;
    apiKey: string;
    appId: string;
  } | null>(null);

  const [openPicker, authResponse] = useDrivePicker();

  // Editor setup
  const CustomHeading = Heading.configure({ levels: [1, 2] }).extend({
    renderHTML({ node, HTMLAttributes }) {
      const level = node.attrs.level;
      const classes = level === 1 ? "text-3xl font-bold mt-6 mb-3" : "text-xl font-semibold mt-5 mb-2";
      return [`h${level}`, { ...HTMLAttributes, class: classes }, 0];
    },
  });

  const CustomHardBreak = HardBreak.extend({
    renderHTML() { return ["br"]; },
    addKeyboardShortcuts() { return { "Shift-Enter": () => this.editor.commands.setHardBreak() }; },
  });

  const editor = useEditor({
    extensions: [
      StarterKit.configure({ heading: false, hardBreak: false, bulletList: false, orderedList: false, listItem: false }),
      CustomHeading,
      CustomHardBreak,
      BulletList.configure({ HTMLAttributes: { class: "list-disc pl-6" } }),
      OrderedList.configure({ HTMLAttributes: { class: "list-decimal pl-6" } }),
      ListItem,
      Underline,
    ],
    content: initialData?.content || "<p></p>",
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: "min-h-[400px] w-full bg-transparent text-slate-700 outline-none p-4 prose prose-neutral max-w-none leading-7",
      },
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [usersRes, catsRes, config] = await Promise.all([
          fetch("/api/user"),
          fetch("/api/category"),
          getGooglePickerConfig()
        ]);
        
        if (usersRes.ok) {
          const data = await usersRes.json();
          setUsers(Array.isArray(data) ? data : data?.data || []);
        }
        if (catsRes.ok) {
          const data = await catsRes.json();
          setCategories(data);
        }
        if (config.clientId && config.apiKey && config.appId) {
          setGoogleConfig({ clientId: config.clientId, apiKey: config.apiKey, appId: config.appId });
        }
      } catch (err) {
        console.error("Failed to load form data", err);
      }
    };
    fetchData();
  }, []);

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
      customViews: google ? [
        new google.picker.DocsView().setIncludeFolders(true).setEnableDrives(true),
        new google.picker.DocsView(google.picker.ViewId.SHARED_DRIVES),
      ] : undefined,
      callbackFunction: (data) => {
        // Restore scrolling by removing the class
        html.classList.remove("picker-open");
        
        if (data.action === "picked") {
          setImage(`https://drive.google.com/thumbnail?id=${data.docs[0].id}&sz=w1600`);
        }
      },
    });
  };

  const handleSubmit = async () => {
    const rawHtml = editor?.getHTML() || "";
    const cleanContent = rawHtml.replace(/<p><\/p>/g, "").replace(/<p>\s*<\/p>/g, "").trim();

    const parsed = createBlogSchema.safeParse({
      title,
      subtitle,
      categoryId,
      authorId,
      image,
      imageCredit,
      status,
      content: cleanContent === "<p></p>" ? "" : cleanContent,
    });

    if (!parsed.success) {
      setErrors(parsed.error.flatten().fieldErrors as Record<string, string[]>);
      toast.error("Please check the form for errors.");
      return;
    }

    try {
      setIsSubmitting(true);
      const url = initialData?.id ? `/api/blog/${initialData.id}` : "/api/blog";
      const method = initialData?.id ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, subtitle, image, imageCredit, categoryId, content: cleanContent, status, authorId }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to save post");
      }

      toast.success(initialData?.id ? "Blog post updated successfully!" : "Blog post created successfully!");
      if (onSuccess) onSuccess();
      else {
        router.push("/admin/dashboard/blogs");
        router.refresh();
      }
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!editor) return null;

  return (
    <div className="space-y-8">
      {/* Header with Navigation */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={onCancel || (() => router.back())}
            className="rounded-xl bg-white shadow-sm border border-gray-100 hover:bg-gray-50"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              {initialData ? "Edit Article" : "Create New Article"}
            </h1>
            <p className="text-gray-500">Masterpiece in the making...</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            onClick={onCancel || (() => router.back())}
            className="rounded-xl px-6 font-semibold"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="rounded-xl px-8 bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-all shadow-lg shadow-gray-200 active:scale-95"
          >
            {isSubmitting ? (
              <Loader2 className="w-4 h-4 animate-spin mr-2" />
            ) : (
              <Save className="w-4 h-4 mr-2" />
            )}
            {initialData ? "Update Article" : "Publish Now"}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Main Editor Section */}
        <div className="xl:col-span-2 space-y-8">
          <div className="p-0! overflow-hidden border-none shadow-xl shadow-gray-100/50 bg-white rounded-[2rem]">
            <div className="bg-gray-50/50 border-b border-gray-100 px-6 py-4 flex items-center justify-between">
              <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">
                Main Content
              </span>
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-gray-200 text-xs font-semibold text-gray-400">
                <FileText className="w-3.5 h-3.5" />
                Draft Mode
              </div>
            </div>

            <div className="p-8 space-y-8">
              <div className="space-y-2">
                <Label className="text-sm font-bold text-gray-700">
                  Article Title
                </Label>
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="The Future of EdTech..."
                  className={`border-none px-0 text-4xl font-extrabold placeholder:text-gray-200 shadow-none focus-visible:ring-0 ${errors.title ? "text-red-500" : "text-gray-900"}`}
                />
                {errors.title && (
                  <p className="text-red-500 text-xs font-medium">
                    {errors.title[0]}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-bold text-gray-700">
                  Subtitle
                </Label>
                <Input
                  value={subtitle}
                  onChange={(e) => setSubtitle(e.target.value)}
                  placeholder="Ex: Exploring how AI is transforming classrooms for the next generation of learners."
                  className={`border-none px-0 text-xl font-medium placeholder:text-gray-200 shadow-none focus-visible:ring-0 italic ${errors.subtitle ? "text-red-500" : "text-gray-500"}`}
                />
                {errors.subtitle && (
                  <p className="text-red-500 text-xs font-medium">
                    {errors.subtitle[0]}
                  </p>
                )}
              </div>

              <div className="h-px bg-gray-100" />

              <div className="space-y-4">
                {/* TOOLBAR */}
                <div className="bg-gray-50/80 p-2 rounded-2xl flex items-center gap-1 border border-gray-100 sticky top-4 z-10 backdrop-blur-md">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    className={
                      editor.isActive("bold") ? "bg-white shadow-sm" : ""
                    }
                  >
                    <Bold className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    className={
                      editor.isActive("italic") ? "bg-white shadow-sm" : ""
                    }
                  >
                    <Italic className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() =>
                      editor.chain().focus().toggleUnderline().run()
                    }
                    className={
                      editor.isActive("underline") ? "bg-white shadow-sm" : ""
                    }
                  >
                    <UnderlineIcon className="h-4 w-4" />
                  </Button>
                  <div className="w-px h-6 bg-gray-200 mx-1" />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() =>
                      editor.chain().focus().toggleHeading({ level: 1 }).run()
                    }
                    className={
                      editor.isActive("heading", { level: 1 })
                        ? "bg-white shadow-sm font-bold"
                        : "font-semibold"
                    }
                  >
                    H1
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() =>
                      editor.chain().focus().toggleHeading({ level: 2 }).run()
                    }
                    className={
                      editor.isActive("heading", { level: 2 })
                        ? "bg-white shadow-sm font-bold"
                        : "font-semibold"
                    }
                  >
                    H2
                  </Button>
                  <div className="w-px h-6 bg-gray-200 mx-1" />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() =>
                      editor.chain().focus().toggleBulletList().run()
                    }
                    className={
                      editor.isActive("bulletList") ? "bg-white shadow-sm" : ""
                    }
                  >
                    <List className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() =>
                      editor.chain().focus().toggleOrderedList().run()
                    }
                    className={
                      editor.isActive("orderedList") ? "bg-white shadow-sm" : ""
                    }
                  >
                    <ListOrdered className="h-4 w-4" />
                  </Button>
                </div>

                <EditorContent
                  editor={editor}
                  className={`min-h-[400px] rounded-2xl border-2 border-transparent focus-within:border-blue-100 transition-all ${errors.content ? "bg-red-50/30" : ""}`}
                />
                {errors.content && (
                  <p className="text-red-500 text-xs font-medium">
                    {errors.content[0]}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Metadata Section */}
        <div className="space-y-8">
          {/* Media Card */}
          <div className="overflow-hidden border-none shadow-xl shadow-gray-100/50 bg-white rounded-[2rem] p-8">
            <h3 className="text-lg font-bold text-gray-900 mb-6">
              Article Cover
            </h3>
            <div
              className={`group relative border-2 border-dashed border-gray-100 rounded-3xl bg-gray-50/50 text-center transition-all hover:bg-white hover:border-blue-500 cursor-pointer overflow-hidden ${!image ? "p-8" : "p-1"}`}
              onClick={handleOpenPicker}
            >
              {image ? (
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-200">
                  <img
                    src={image}
                    alt="cover"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white text-sm font-bold flex items-center gap-2">
                      <CloudUpload className="w-4 h-4" /> Change Background
                    </span>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <CloudUpload className="w-8 h-8 text-blue-500" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-bold text-gray-900">
                      Upload Image
                    </p>
                    <p className="text-xs text-gray-500">
                      Google Drive Integration
                    </p>
                  </div>
                </div>
              )}
            </div>
            {errors.image && (
              <p className="text-red-500 text-xs font-medium mt-2">
                {errors.image[0]}
              </p>
            )}

            <div className="mt-6 space-y-4">
              <div className="space-y-2">
                <Label className="text-xs font-bold text-gray-500 uppercase">
                  Image Credit
                </Label>
                <Input
                  value={imageCredit}
                  onChange={(e) => setImageCredit(e.target.value)}
                  placeholder="Photo by Unsplash"
                  className="rounded-xl bg-gray-50/50 border-gray-100 h-11 focus:bg-white"
                />
                {errors.imageCredit && (
                  <p className="text-red-500 text-xs font-medium">
                    {errors.imageCredit[0]}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Settings Card */}
          <div className="border-none shadow-xl shadow-gray-100/50 bg-white rounded-[2rem] p-8">
            <h3 className="text-lg font-bold text-gray-900 mb-6">
              Publishing Settings
            </h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <Label className="text-xs font-bold text-gray-500 uppercase">
                  Category
                </Label>
                <Select value={categoryId} onValueChange={setCategoryId}>
                  <SelectTrigger className="rounded-xl h-11 bg-gray-50/50 border-gray-100 focus:bg-white">
                    <SelectValue placeholder="Select topic..." />
                  </SelectTrigger>
                  <SelectContent className="rounded-2xl shadow-xl border-gray-100">
                    {categories.map((cat) => (
                      <SelectItem
                        key={cat.id}
                        value={cat.id}
                        className="rounded-xl mx-1 my-0.5"
                      >
                        {cat.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.categoryId && (
                  <p className="text-red-500 text-xs font-medium">
                    {errors.categoryId[0]}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label className="text-xs font-bold text-gray-500 uppercase">
                  Author
                </Label>
                <Select value={authorId} onValueChange={setAuthorId}>
                  <SelectTrigger className="rounded-xl h-11 bg-gray-50/50 border-gray-100 focus:bg-white">
                    <SelectValue placeholder="Assign author..." />
                  </SelectTrigger>
                  <SelectContent className="rounded-2xl shadow-xl border-gray-100">
                    {users.map((user) => (
                      <SelectItem
                        key={user.id}
                        value={user.id}
                        className="rounded-xl mx-1 my-0.5"
                      >
                        {user.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.authorId && (
                  <p className="text-red-500 text-xs font-medium">
                    {errors.authorId[0]}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label className="text-xs font-bold text-gray-500 uppercase">
                  Status
                </Label>
                <div className="grid grid-cols-2 gap-2 p-1 bg-gray-50 rounded-2xl border border-gray-100">
                  <button
                    onClick={() => setStatus("DRAFT")}
                    className={`py-2 text-xs font-bold rounded-xl transition-all ${status === "DRAFT" ? "bg-white text-amber-600 shadow-sm" : "text-gray-400 hover:text-gray-600"}`}
                  >
                    DRAFT
                  </button>
                  <button
                    onClick={() => setStatus("PUBLISHED")}
                    className={`py-2 text-xs font-bold rounded-xl transition-all ${status === "PUBLISHED" ? "bg-white text-green-600 shadow-sm" : "text-gray-400 hover:text-gray-600"}`}
                  >
                    PUBLISHED
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
