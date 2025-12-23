import OurClient from "@/components/sections/home/OurClient";
import Image from "next/image";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";

const articles = [
  {
    id: 1,
    category: "Education Technology",
    title: "Empowering Schools Through IT Training",
    imageUrl: "/About.jpg",
    description:
      "How structured IT training helps teachers and school staff adapt to digital tools and modern learning environments.",
    author: "Muhammad Khosy",
    authorImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDVIDjya6njIbyIqGsFZ4VeokBHyJfrizy0STDlZZbzdXS_Cl9Uh2znnngW4no-hTBPpN3ZTHAVjnnLm0fq8RRdVTTWs1okVTafUSn81Gh0ZRDu4Ha7imdEFWVMGflzJ_V_PlXTUiuB_NshzFMrjdSF7jx0n5yGCDYS6CQ_z4o4fIQ4mS70EyX3uNaJ0M1ck8uwZnyYXoFFoK1MmNpR78rAJuV67x4uCO7hov7iJrBO5PGNyBRqQ72xv46YCWPAbReCbJHynNNinJVW",
    date: "Nov 10, 2024",
    readTime: "5 min read",
  },
  {
    id: 2,
    category: "Google Workspace",
    title: "Optimizing School Collaboration with Google Workspace",
    imageUrl: "/blog.JPG",
    description:
      "A practical guide to using Google Workspace for Education to enhance communication, collaboration, and productivity.",
    author: "Ardelia Putri",
    authorImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCjpNw74K4RJpG1CZege5oOBsE_E0Yg7jkrzUvlnU695wrzXau1LG31NfQf2HiZlexmQw_Ig3HEnCldvHu64L4uj6IqfweZ6iI_0BA0peqt2CjQ-hF7hXNI0y2HJHbYsB5Lzg9SyO7qeKcXgOpGEFLFhvCbBcn3KR9LeeV2-Ioy1GMr6n7L3OtNY1w0vU6QdoxQoIin1fxjcUfN9w-PctyScVIELrTojFKRe8KjmwIsMjS3kBDI-CkFtGpOgJQquiDhF1519HStTXp5",
    date: "Nov 7, 2024",
    readTime: "8 min read",
  },
  {
    id: 3,
    category: "Artificial Intelligence",
    title: "AI Technology Transforming Education Management",
    imageUrl: "/blog3.JPG",
    description:
      "Exploring how AI technology supports smarter decision-making, automation, and personalized learning in schools.",
    author: "Muhammad Khosy",
    authorImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCULVWAstR6EmPJ2g11IRpHBYPqieqXiwX0y0NUrKQ5EwqO_V-g7aOi6ZhoBvzrzU6z7wtHwVT0WcrLzZZgNPzNQyNWgh8tlUdlQcdvNlgp9BgwXF-QAD7LWp-5b2HgtpyH0rOe7twSiRTB9ZrMo2rjGyt-rzh0upK3THyzNrU_1TIsicVl7Hx68U01F4Fjlkbipi96dFbs7XjxpZTU8zffo5nnG8yscAE89bW6QeeoekY1co6G_mUhg9dC5nbplFMnDaxMx5Gv-fIt",
    date: "Nov 5, 2024",
    readTime: "4 min read",
  },
];

export default function BlogPage() {
  return (
    <div className="bg-[#F6F6F8] text-slate-900 selection:bg-primary-green/30">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <main className="flex-1 flex justify-center pt-20 pb-20">
          <div className="flex flex-col max-w-400 w-full gap-8 px-6">
            {/* HERO */}
            <div className="relative w-full rounded-2xl overflow-hidden min-h-112.5 flex flex-col justify-center items-center text-center p-6 md:p-12 gap-6 group bg-primary-green">
              <div className="absolute inset-0 bg-linear-to-t from-primary-blue/80 via-primary-blue/60 to-primary-blue/30 z-10"></div>
              <div className="relative z-20 flex flex-col gap-4 max-w-2xl">
                <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-[-0.033em]">
                  Building the Future of Education
                </h1>
                <p className="text-slate-200 text-lg md:text-xl font-sans">
                  Perspectives, innovations, and strategies for modern schools
                  and foundations.
                </p>
              </div>

              {/* SEARCH */}
              <div className="relative z-20 w-full max-w-lg mt-4">
                <div className="relative flex items-center w-full h-14 rounded-xl shadow-2xl bg-white/20 backdrop-blur-sm border border-white/30">
                  <div className="grid place-items-center h-full w-12 text-white">
                    <IoSearch />
                  </div>
                  <input
                    className="h-full w-full outline-none text-sm text-white pr-2 bg-transparent placeholder-slate-300 font-sans"
                    placeholder="Search articles, topics, or authors..."
                    type="text"
                  />
                  <div className="pr-2">
                    <button className="h-10 px-6 rounded-lg bg-primary-blue hover:bg-primary-green text-white text-sm font-bold transition-colors">
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="text-3xl font-bold border-b border-slate-200 pb-4 text-center">
              Latest Articles
            </h2>
            <div className="max-w-7xl mx-auto px-6 flex flex-col gap-12">
              {articles.map((item) => (
                <Link
                  href={`/blog/${item.id}`}
                  key={item.id}
                  className="h-full block"
                >
                  <article className="flex flex-col h-full group cursor-pointer max-w-4xl mx-auto">
                    <div className="relative w-full aspect-16/10 overflow-hidden rounded-xl mb-4">
                      <div
                        className="w-full h-full bg-center bg-cover transition-transform duration-500 group-hover:scale-105"
                        style={{ backgroundImage: `url(${item.imageUrl})` }}
                      />
                    </div>

                    <div className="flex flex-col gap-2 flex-1">
                      <div className="text-xs text-slate-500 flex gap-2">
                        <span>{item.date}</span>
                      </div>

                      <h3 className="text-xl font-bold group-hover:text-primary">
                        {item.title}
                      </h3>

                      <p className="text-slate-600 line-clamp-2">
                        {item.description}
                      </p>

                      <div className="flex items-center gap-3 mt-auto pt-3 border-t">
                        <Image
                          width={50}
                          height={50}
                          src={item.authorImage}
                          alt={item.author}
                          className="size-8 rounded-full"
                          priority
                        />
                        <span className="text-sm font-medium">
                          {item.author}
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </main>
      </div>
      <div className="relative overflow-hidden z-10">
        <Image
          src="/palkon.png"
          width={500}
          height={500}
          alt="Dashboard Preview"
          className="w-full h-full object-cover"
          priority
        />
      </div>
      <OurClient />
    </div>
  );
}
