import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";

const articles = [
  {
    id: 1,
    category: "Education Technology",
    title: "Empowering Schools Through IT Training",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDG8lJnP15oVTlQty9RGEBxOwJrN7Gi-qahVHarsoTXRCMWN1BT9_ACynADrj_GHRlVqCrGIYcuSVHDPdif-A9ZPyfSjPGZBEVGDr2TuvFdzZ7yV0Jv01u9L8F2vOkiyfpHl2TEWnKdROVjZXNxTnhTyPPE7m8WKz4kHswb6cJt1bJ8QfJXKZ6_94yaYkNpRk5X6v6SpO_qhuMVCFKmEW0gOPzK6ZoXguEd19OfC8F1_aclWO_MbIs63-LVhLxlu3-2KH4U_B9zTZzT",
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
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAq74GIqwwF-0JFdorxC0CjomkwM5kzzXrgMmMgH200v-8QcF5Q70Fr73ihbQL-j_2ehgdpryoGUP6PDAXyygXZeRqlHMp35_dPYnFxHKCj9WW0ni3yazsYEBMG8yJetFbPbem4RmzDJCEFoatPeDSADATE3yymbE6aLiENqEX_gj1-FNJeQKYx0LKczfi4x5hZZELnX2yaiLQjv-D4BFT2xSc81rZQH62hqgDXNmOmK3ULkk6tvw3Avpvq3pusCSyH7fnDwnckA2GP",
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
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD_2dZkPdQp4slbzhErqNnRbFWNLCwktBrd5iet9XaxoHK-_tNZLSy4ZXJlTj-WtNlJhGu6zuHtjczVwNjjc_6q5yiEZXlPsxypKT6jQSqhY2o_w2M9lzsro54wib1JDXudYSbfrDCTi5O8EOQSKF7WtDHBfNCxivlMTbaSfh8-QdA9C9cAtqKuuapnzNUxN_UoriXts-hYB0ELEG5NS0qjRBEpEriRqJVOzekMtC978D8G7JPqtrHiS-XZyJIDQrfRof7D-LcDrZRx",
    description:
      "Exploring how AI technology supports smarter decision-making, automation, and personalized learning in schools.",
    author: "Muhammad Khosy",
    authorImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCULVWAstR6EmPJ2g11IRpHBYPqieqXiwX0y0NUrKQ5EwqO_V-g7aOi6ZhoBvzrzU6z7wtHwVT0WcrLzZZgNPzNQyNWgh8tlUdlQcdvNlgp9BgwXF-QAD7LWp-5b2HgtpyH0rOe7twSiRTB9ZrMo2rjGyt-rzh0upK3THyzNrU_1TIsicVl7Hx68U01F4Fjlkbipi96dFbs7XjxpZTU8zffo5nnG8yscAE89bW6QeeoekY1co6G_mUhg9dC5nbplFMnDaxMx5Gv-fIt",
    date: "Nov 5, 2024",
    readTime: "4 min read",
  },
  {
    id: 4,
    category: "Design & Marketing",
    title: "Building School Trust Through Design & Marketing",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAw2CzXq6Y3garnMd_ORpI-o8q7R7_Pp7SJKgT5_zQN3tsRrKx86-amZrkTVDRRbvoz7dZBOx3_W_krLnLa1Gzzx8aP2sIN3JsbKnd0HUE02YwSz41uWRSYs8qvrTRshxJ8214ct95zLjxFzanPwhB8AYw--xrZhiP79n_P0i3ggOexfz2bBPdb7yVF_VlOql8O7hPjp5Ah2xT3ABL_J3GlJiOy74FNGEB-LJ46ILfwLoMYpmjemAyoIt-jBvTtrSHZfeZ7lqeKpmSV",
    description:
      "Why strong visual identity and digital marketing matter for schools and educational foundations.",
    author: "Ardelia Putri",
    authorImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC3svm5Krp_TnsVURwgJ0whtQ6VfEt6xQw3h8kpdOXFMUUQAHSSh9v4eTgCOlO6-T5HidYgY9aKppIIw_ttiCVj6OZS2u98TZAMa6ONmIYzkeIfOloiF93dIzLOxkc53GqaIBLqqVxEfh6L5rtja148dttfPJ1FM8ZfajHzN4PnH7twmVqd90sxWhbkrCVRR28Xz_DGspd96S7Gl8FgpmeoW1vDoCQBZasGi2qlLALOB-4p2G7vKV6bxTlpn7afocl0sV3ixQfGtaNO",
    date: "Nov 2, 2024",
    readTime: "6 min read",
  },
  {
    id: 5,
    category: "Hybrid Learning",
    title: "Creating Effective Hybrid Learning Environments",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDqz0tL_41PMc3DAHRMh_LQLr3Bu7LKwiFzD9cjuSgOBszK0o1BqDyd2dnauJtqb9XC0yJu56cmwfEu9i6p_3Mh3Op65d12O0UEbkEvZnvxcvu5RA7MEC3SY2LjwoGETf12j7TUoHm5Q6PQ428ozLNPlI2Ab91NgRCpLr358bh2Di5ME3ek7XYPW-M80BltockvP37xr4Vs86B-ZsubqwTPExTvNustCQe9aaaa9NBMxNukvfzLqfu7_Qo8qgiXq9iRvJc4WFl3BCk_",
    description:
      "Combining on-site and online learning with the right technology to support modern education needs.",
    author: "Muhammad Khosy",
    authorImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAJcC2NqKxeODFAoeeZRc5AP5jb8hH2px2Ch5TiRqkMAlIf8gImgn8O8AwcTwZVbYvEYgDQqH4Br01LNSsqfVb_l9ojS4e_n5WQNPqmyDpiJWtyt9Fg8ddo4hiNlYFyuZxeXnTRgOBtMk_KWsYc21pn7-kCT_F8nOQg8ifDXJWGZ2U1ksk_12SCU8AABHd1sGCcdIzeCWhc5Ag85QC38pBK1ZRgQ_3846DLwJtiEfgLlT1AVWi50E_hLZgAEstbt0G2VQ4QfFaf3Ir1",
    date: "Oct 30, 2024",
    readTime: "12 min read",
  },
  {
    id: 6,
    category: "Smart School",
    title: "Smart School Management for Modern Institutions",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCiaEGFftR7pRBlB08Wd8iIrn6nNVXIEFbaUeocXuCIq5hUpmrCWpdfZHnk6Gg4org6_Wx0gqG8-bCD6wXXDOC6UMc7mdNYAi7caFL-rROjGb0YFbRzpcT_Zs8NBJGIodLywf141MM9L7UJUnItDvs_284eoJPyKv00qnRGZ4PyLRie_NuwxBKuI8nT9TMRPTpDgLX_Gq-v7uVD-fZAezoXCIrrDp6YQ33QThSp3SLX0_vkZgqKlVqGpCNRMbQP4uogLeuBqmKPveBF",
    description:
      "How integrated smart management systems help schools manage classes, assets, and academic data efficiently.",
    author: "Ardelia Putri",
    authorImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDfNvW9Zm-6A0yGrYw-GWphMvE1Hscz4HRI4-LMBs2DrbweOZl9ZvIec5s4YR53ulaKPSLoTafyOfqHWuBox4LQAjbUjsjO2rQJwuNQzC4f05gn7yRM2PllYybF53dQvgZSa1zRI_nL8nRrHNOTwvFMvDY6-cK2pxTZok8qstF8ElX73SL7NnSFWPhsZQlMMXmewRF_DGGFvXPMGwTGhmkH2uBdWj7p8gWOoKqnS3m9u2FLy-8zLVdZ_gjdTJFxWTHqvlsX7LQhxqij",
    date: "Oct 28, 2024",
    readTime: "7 min read",
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
            <h2 className="text-3xl font-bold border-b border-slate-200 pb-4">
              Latest Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {articles.map((item) => (
                <Link
                  href={`/blog/${item.id}`}
                  key={item.id}
                  className="h-full block"
                >
                  <article className="flex flex-col h-full group cursor-pointer">
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

            <div className="flex justify-center mt-8 pb-10">
              <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-slate-300 hover:bg-slate-100 font-bold transition-all">
                Load more articles
                <ChevronDown />
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
