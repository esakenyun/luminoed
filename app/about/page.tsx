import OurClient from "@/components/sections/home/OurClient";
import Image from "next/image";

export default function About() {
  return (
    <>
      {/* <section className="relative min-h-screen w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1513711487224-63b774e12f4d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="LuminoEd Background"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10 mx-auto max-w-400 px-6 py-24 text-white">
          <div className="">
            <div className="relative">
              <span className="tracking-[0.3em] text-sm font-semibold uppercase">
                About Us
              </span>

              <h1 className="text-4xl md:text-5xl font-bold mt-2">LuminoEd</h1>
            </div>
            <div className="mt-6 flex items-center gap-5">
              <div className="h-2 w-2 bg-white rounded-full"></div>
              <p className="max-w-xl text-xl leading-relaxed">
                LuminoEd hadir dari keyakinan bahwa pendidikan sejati bukan
                hanya soal pengetahuan, tetapi tentang cahaya yang membimbing
                generasi dengan petunjuk Ilahi.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              <div className="hidden md:block"></div>
              <p className="mt-6 max-w-xl text-xl leading-relaxed flex gap-10 items-center">
                Kami menghadirkan teknologi pintar yang menghubungkan guru,
                siswa, dan manajemen sekolah dalam satu ekosistem digital. Di
                dalamnya terdapat AI untuk mengakselerasi dan efisiensi proses
                pendidikan, otomatisasi adm pembelajaran, pengelolan SDM secara
                digital, hybrid learning, hingga pengelolaan aset dengan data
                real-time semua tersambung dengan lisensi Google for Education
                Premium.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              <p className="mt-6 max-w-xl text-xl leading-relaxed flex gap-10 items-center">
                Dengan semangat integrasi spiritual dan digital, LuminoED bukan
                hanya sistem manajemen sekolah, tapi cahaya yang menuntun masa
                depan pendidikan Indonesia.
              </p>
            </div>
          </div>
        </div>
      </section> */}
      <section className="relative text-white overflow-hidden">
        {/* TOP SECTION */}
        <div className="relative min-h-screen">
          {/* Background Image */}
          <Image
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
            alt="Technology Background"
            fill
            priority
            className="object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/70" />

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-120 flex justify-center items-center h-screen">
            {/* LEFT */}
            <div>
              <p className="text-sm font-semibold tracking-[0.9em] text-white/90 uppercase">
                ABOUT US
              </p>

              <h1 className="text-4xl md:text-5xl font-bold mt-2">LuminoEd</h1>
              {/* <h2 className="text-4xl md:text-5xl font-bold mb-6">LuminEd</h2> */}

              <div className="py-12 text-slate-300 text-sm md:text-xl">
                <div className="grid grid-cols-1 tablet-landscape-min:grid-cols-2 gap-8 tablet-landscape-min:gap-16">
                  <div className="flex gap-5 items-center">
                    <div className="w-3 h-3 shrink-0 rounded-full bg-slate-300"></div>
                    <p>
                      LuminoEd lahir dari keyakinan bahwa pendidikan sejati
                      bukan hanya soal pengetahuan, tetapi tentang cahaya yang
                      membimbing generasi dengan petunjuk ilahi.
                    </p>
                  </div>

                  <div className="flex gap-5 items-center tablet-landscape-min:col-start-2 tablet-landscape-min:row-start-2">
                    <div className="w-3 h-3 shrink-0 rounded-full bg-slate-300"></div>
                    <p>
                      Kami menghadirkan teknologi pintar yang menghubungkan
                      guru, siswa, dan manajemen sekolah dalam satu ekosistem
                      digital. Di dalamnya terdapat AI untuk mengakselerasi dan
                      efisiensi proses pendidikan, otomatisasi adm pembelajaran,
                      pengelolan SDM secara digital, hybrid learning, hingga
                      pengelolaan aset dengan data real-time semua tersambung
                      dengan lisensi Google for Education Premium.
                    </p>
                  </div>

                  <div className="flex gap-5 items-center tablet-landscape-min:row-start-3">
                    <div className="w-3 h-3 shrink-0 rounded-full bg-slate-300"></div>
                    <p>
                      Dengan semangat integrasi spiritual dan digital, LuminoED
                      bukan hanya sistem manajemen sekolah, tapi cahaya yang
                      menuntun masa depan pendidikan Indonesia.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* IMAGE CARD SECTION */}
        <div className="relative z-20 max-w-6xl mx-auto px-6 -mt-20">
          <div className="relative w-full h-140 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/abouts.jpg"
              alt="Workshop"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* BOTTOM TEXT */}
        <div className="max-w-5xl mx-auto px-6 py-20 text-slate-600 text-lg">
          <p className="mb-6">
            LuminoEd adalah perusahaan berbasis teknologi informasi yang
            berfokus pada pengembangan solusi digital di bidang pendidikan dan
            teknologi kreatif. Kami hadir untuk membantu institusi pendidikan,
            organisasi, dan individu dalam menghadapi transformasi digital
            melalui layanan yang inovatif, efektif, dan mudah digunakan. Dengan
            menggabungkan teknologi modern, desain yang berorientasi pada
            pengguna, serta pendekatan edukatif, LuminoEd berkomitmen
            menciptakan solusi yang relevan dan berdampak nyata.
          </p>
          <p>
            Melalui berbagai layanan seperti SmartSchool, IT Training, streaming
            & hybrid learning, serta pengembangan desain dan aplikasi digital,
            LuminoEd menjadi mitra strategis dalam mendukung pertumbuhan dan
            kemajuan di era digital. Kami percaya bahwa teknologi bukan hanya
            alat, tetapi juga sarana untuk meningkatkan kualitas pembelajaran,
            efisiensi kerja, dan kolaborasi yang berkelanjutan.
          </p>
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
      </section>
      <OurClient />
    </>
  );
}
