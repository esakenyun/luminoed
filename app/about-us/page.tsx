import {
  IoCheckmarkCircle,
  IoLocation,
  IoMail,
  IoPeople,
  IoPerson,
  IoRocket,
  IoSchoolSharp,
  IoSunny,
} from "react-icons/io5";
import { BsFillFileCodeFill } from "react-icons/bs";

import { GiBrain } from "react-icons/gi";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { MdCloudSync, MdOutlineSecurity, MdPhone } from "react-icons/md";

export default function AboutUs() {
  return (
    <div className="bg-white text-slate-800 antialiased selection:bg-primary-green selection:text-primary-blue">
      <header className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Team working together"
            className="w-full h-full object-cover transform scale-105"
            src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div className="absolute inset-0 bg-primary-blue/90 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary-blue via-transparent to-primary-blue/50"></div>
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center mt-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-primary-green text-sm font-semibold mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-primary-green"></span>
            Reimagining Education Technology
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight max-w-5xl mx-auto">
            Igniting the
            <span className="text-primary-green relative inline-block mx-2">
              Light
              <svg
                className="absolute w-full h-3 -bottom-1 left-0 text-primary-green opacity-40"
                fill="none"
                viewBox="0 0 200 9"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.00025 6.99997C25.7501 2.99994 132.317 -2.00002 199.792 2.67389"
                  stroke="currentColor"
                  strokeWidth="3"
                ></path>
              </svg>
            </span>
            of Knowledge
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            We bridge the gap between divine guidance and digital innovation,
            empowering schools to nurture the next generation of leaders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              className="px-8 py-4 bg-primary-green text-primary-blue font-bold rounded-lg hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(195,232,57,0.3)]"
              href="#mission"
            >
              Explore Our Vision
            </a>
            <a
              className="px-8 py-4 bg-transparent border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-300"
              href="#contact"
            >
              Contact Us
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-linear-to-t from-white to-transparent z-10"></div>
      </header>
      <section className="py-24 bg-white relative overflow-hidden" id="mission">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img
                  alt="Discussion meeting"
                  className="w-full h-[500px] object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCv5J8MfvsDK7191WIlvrO7qwT_tKhFDt8tbAWDGu1kguU74fYZTh60_KCKfyUlA-R4_nsOXuwApZJHDRxWr-0WBcL4n6CurnSOdf_M_QygxkvVQ7RFMOkiMNWAoefvnYmC7y4L67nOR5Y2hU85OTPlpHbyKnrnrxx3vPTL9d3GRMpcNdOpW-37MTVIJYpuFGKb8FD28V1_Ui3lcWGzU2JwPHvSxuhQMK9JvWRrCKeS7SSDw0JIgRlojVrqXfbPNC1bnOjORMueLG-i"
                />
                <div className="absolute inset-0 bg-primary-blue/10 hover:bg-transparent transition-colors duration-300"></div>
              </div>
              <div className="absolute -bottom-10 -left-10 bg-primary-blue p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary-green flex items-center justify-center text-primary-blue font-bold">
                    <IoSchoolSharp className="text-2xl" />
                  </div>
                  <div className="text-white font-semibold">
                    Education First
                  </div>
                </div>
                <p className="text-slate-400 text-sm">
                  Committed to enhancing the learning experience through
                  technology.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-primary-green font-bold tracking-widest uppercase mb-2 block text-sm">
                Our Mission
              </span>
              <h2 className="text-4xl font-bold text-primary-blue mb-6 leading-tight">
                Guiding the Future with <br />
                Purpose &amp; Technology
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                LuminoEd was born from a profound belief: education is not
                merely about data transmission, but about illuminating the path
                for future generations. We exist to harmonize spiritual values
                with digital efficiency.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Our mission is to create a seamless ecosystem where teachers can
                focus on mentoring, students can thrive in learning, and schools
                can manage resources with clarity and precision.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <IoCheckmarkCircle className="text-primary-green text-2xl" />
                  Accelerating educational processes with AI
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <IoCheckmarkCircle className="text-primary-green text-2xl" />
                  Digital HR and Asset Management
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <IoCheckmarkCircle className="text-primary-green text-2xl" />
                  Google for Education Premium Integration
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-primary-blue text-white relative">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(#c3e839 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        ></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary-green font-bold tracking-widest uppercase mb-2 block text-sm">
              Core Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Drives Us Forward
            </h2>
            <p className="text-slate-400">
              At LuminoEd, our culture is built on pillars that ensure we
              deliver the best for our educational partners.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-primary-green/50 transition-colors duration-300 group">
              <div className="w-14 h-14 bg-slate-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-green transition-colors duration-300">
                <IoSunny className="text-3xl text-primary-green group-hover:text-primary-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">
                Illumination
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Bringing clarity and insight to school management through
                transparent data.
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-primary-green/50 transition-colors duration-300 group">
              <div className="w-14 h-14 bg-slate-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-green transition-colors duration-300">
                <BsFillFileCodeFill className="text-3xl text-primary-green group-hover:text-primary-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Integration</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Seamlessly connecting all stakeholders—teachers, students, and
                parents.
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-primary-green/50 transition-colors duration-300 group">
              <div className="w-14 h-14 bg-slate-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-green transition-colors duration-300">
                <GiBrain className="text-3xl text-primary-green group-hover:text-primary-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Innovation</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Leveraging AI and modern tools to solve traditional educational
                challenges.
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-primary-green/50 transition-colors duration-300 group">
              <div className="w-14 h-14 bg-slate-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-green transition-colors duration-300">
                <IoPeople className="text-3xl text-primary-green group-hover:text-primary-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Community</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Building a supportive ecosystem that grows together with our
                partner schools.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 flex flex-col justify-center">
              <span className="text-primary-green font-bold tracking-widest uppercase mb-2 block text-sm">
                Our Approach
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-6">
                A Holistic Ecosystem for Modern Schools
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                We dont just sell software; we partner with schools to transform
                their operations. Our approach combines robust cloud
                infrastructure with user-friendly interfaces designed for
                educators, not just technicians.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm text-primary-green font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-primary-blue">
                      Analyze &amp; Consult
                    </h4>
                    <p className="text-slate-500 text-sm">
                      We understand your schools unique challenges.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm text-primary-green font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-primary-blue">
                      Integrate &amp; Train
                    </h4>
                    <p className="text-slate-500 text-sm">
                      Seamless deployment and comprehensive staff training.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm text-primary-green font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-primary-blue">
                      Support &amp; Grow
                    </h4>
                    <p className="text-slate-500 text-sm">
                      Continuous updates and dedicated support for growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 mt-8">
                  <div className="bg-white p-6 rounded-2xl shadow-md border-b-4 border-primary-green">
                    <LuChartNoAxesCombined className="text-3xl text-primary-blue mb-2" />
                    <h4 className="font-bold text-primary-blue">
                      Real-time Data
                    </h4>
                    <p className="text-xs text-slate-500 mt-2">
                      Instant insights into student performance.
                    </p>
                  </div>
                  <div className="bg-primary-blue p-6 rounded-2xl shadow-md text-white">
                    <MdCloudSync className="text-3xl text-primary-green mb-2" />
                    <h4 className="font-bold">Cloud Sync</h4>
                    <p className="text-xs text-slate-400 mt-2">
                      Access from anywhere, anytime safely.
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-primary-green p-6 rounded-2xl shadow-md text-primary-blue h-48 flex flex-col justify-between">
                    <IoRocket className="text-4xl" />
                    <div>
                      <h4 className="font-bold text-xl">AI Powered</h4>
                      <p className="text-xs text-primary-blue/70 mt-1">
                        Smart automation.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-md border-b-4 border-slate-200">
                    <MdOutlineSecurity className="text-3xl text-primary-blue mb-2" />
                    <h4 className="font-bold text-primary-blue">Secure</h4>
                    <p className="text-xs text-slate-500 mt-2">
                      Enterprise-grade protection.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <span className="text-primary-green font-bold tracking-widest uppercase mb-2 block text-sm">
            Our Community
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-12">
            Trusted by Educational Leaders
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-90">
            <div className="flex items-center gap-3 group hover:scale-105 transition-transform duration-300 cursor-default">
              <div className="w-12 h-12 bg-blue-600 rounded-tr-xl rounded-bl-xl shadow-lg group-hover:shadow-blue-200"></div>
              <div className="flex flex-col leading-none text-left">
                <span className="text-slate-800 font-bold text-lg">
                  Cendekia
                </span>
                <span className="text-slate-800 font-bold text-lg">Muda</span>
                <span className="text-[0.6rem] text-slate-500 uppercase tracking-wider">
                  A Universal Islamic School
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3 group hover:scale-105 transition-transform duration-300 cursor-default">
              <div className="w-12 h-12 border-4 border-yellow-500 rotate-45 flex items-center justify-center shadow-sm">
                <div className="w-5 h-5 bg-black rotate-45"></div>
              </div>
              <div className="flex flex-col text-left ml-2">
                <span className="text-[0.6rem] text-slate-500 uppercase">
                  YAYASAN PEMBINA MASJID
                </span>
                <span className="text-slate-900 font-black text-xl tracking-tight">
                  AL FITRAH
                </span>
                <span className="text-[0.65rem] text-slate-600 uppercase tracking-widest">
                  MARGAHAYU RAYA
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3 group hover:scale-105 transition-transform duration-300 cursor-default">
              <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center text-white font-serif italic text-xs shadow-lg shadow-green-100">
                ItQan
              </div>
              <div className="flex flex-col leading-none text-left">
                <span className="text-green-700 font-bold text-lg">
                  SEKOLAH
                </span>
                <span className="text-yellow-600 font-bold text-xl">ITQAN</span>
                <span className="text-[0.6rem] bg-green-700 text-white px-1 mt-0.5 rounded-sm w-max">
                  PG-TK-SD-SMP
                </span>
              </div>
            </div>
          </div>
          <div className="mt-24 border-t border-slate-100 pt-16">
            <h3 className="text-2xl font-bold text-primary-blue mb-10">
              Meet the Team
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="w-32 h-32 mx-auto bg-slate-100 rounded-full mb-4 overflow-hidden relative group-hover:ring-4 ring-primary-green/30 transition-all">
                  <IoPerson className="text-6xl text-slate-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </div>
                <h4 className="font-bold text-lg text-primary-blue">
                  Sarah Connor
                </h4>
                <p className="text-primary-green text-sm font-medium">
                  CEO &amp; Founder
                </p>
              </div>
              <div className="text-center group">
                <div className="w-32 h-32 mx-auto bg-slate-100 rounded-full mb-4 overflow-hidden relative group-hover:ring-4 ring-primary-green/30 transition-all">
                  <IoPerson className="text-6xl text-slate-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </div>
                <h4 className="font-bold text-lg text-primary-blue">
                  David Chen
                </h4>
                <p className="text-primary-green text-sm font-medium">
                  Head of Technology
                </p>
              </div>
              <div className="text-center group">
                <div className="w-32 h-32 mx-auto bg-slate-100 rounded-full mb-4 overflow-hidden relative group-hover:ring-4 ring-primary-green/30 transition-all">
                  <IoPerson className="text-6xl text-slate-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </div>
                <h4 className="font-bold text-lg text-primary-blue">
                  Aisha Rahman
                </h4>
                <p className="text-primary-green text-sm font-medium">
                  Education Specialist
                </p>
              </div>
              <div className="text-center group">
                <div className="w-32 h-32 mx-auto bg-slate-100 rounded-full mb-4 overflow-hidden relative group-hover:ring-4 ring-primary-green/30 transition-all">
                  <IoPerson className="text-6xl text-slate-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </div>
                <h4 className="font-bold text-lg text-primary-blue">
                  James Wilson
                </h4>
                <p className="text-primary-green text-sm font-medium">
                  Operations Director
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-primary-green text-primary-blue">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Institution?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-80 font-medium">
            Join the growing network of schools powered by LuminoEd.
          </p>
          <a
            className="inline-block bg-primary-blue text-white px-8 py-4 rounded-lg font-bold hover:bg-slate-800 transition shadow-lg"
            href="#"
          >
            Schedule a Demo
          </a>
        </div>
      </section>
      <footer
        className="bg-primary-blue text-slate-300 pt-16 pb-8 border-t border-slate-800 mb-10"
        id="contact"
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-4 flex flex-col space-y-4">
              <a
                className="text-2xl font-bold text-white flex items-center gap-1 mb-2"
                href="#"
              >
                <span className="text-slate-200">Lumin</span>
                <span className="text-primary-green">oED</span>
              </a>
              <p className="text-sm text-slate-400 leading-relaxed pr-6">
                Empowering education through technology. We provide the tools
                for schools to illuminate the minds of tomorrow.
              </p>
              <div className="flex gap-4 pt-2">
                <a
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-green hover:text-primary-blue transition-all"
                  href="#"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </a>
                <a
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-green hover:text-primary-blue transition-all"
                  href="#"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="lg:col-span-2 flex flex-col space-y-3">
              <span className="text-white font-semibold mb-2">Company</span>
              <a
                className="hover:text-primary-green transition-colors text-sm"
                href="#"
              >
                About Us
              </a>
              <a
                className="hover:text-primary-green transition-colors text-sm"
                href="#"
              >
                Careers
              </a>
              <a
                className="hover:text-primary-green transition-colors text-sm"
                href="#"
              >
                Partners
              </a>
              <a
                className="hover:text-primary-green transition-colors text-sm"
                href="#"
              >
                News
              </a>
            </div>
            <div className="lg:col-span-2 flex flex-col space-y-3">
              <span className="text-white font-semibold mb-2">Support</span>
              <a
                className="hover:text-primary-green transition-colors text-sm"
                href="#"
              >
                Help Center
              </a>
              <a
                className="hover:text-primary-green transition-colors text-sm"
                href="#"
              >
                Terms of Service
              </a>
              <a
                className="hover:text-primary-green transition-colors text-sm"
                href="#"
              >
                Privacy Policy
              </a>
              <a
                className="hover:text-primary-green transition-colors text-sm"
                href="#"
              >
                Contact
              </a>
            </div>
            <div className="lg:col-span-4 flex flex-col space-y-4">
              <span className="text-white font-semibold mb-2">Contact Us</span>
              <div className="flex items-start gap-3 text-sm">
                <IoLocation className="text-primary-green text-lg" />

                <span>Bandung, Indonesia</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <IoMail className="text-primary-green text-lg" />
                <a
                  className="hover:text-white"
                  href="mailto:hello@luminoed.com"
                >
                  hello@luminoed.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MdPhone className="text-primary-green text-lg" />
                <span>+62 812 3456 7890</span>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-green pt-5 text-xs text-center font-bold text-white">
            <p> Copyright © {new Date().getFullYear()} LuminoED</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
