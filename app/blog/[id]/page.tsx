import Image from "next/image";
import { IoThumbsUp } from "react-icons/io5";

export default function ArticleById() {
  return (
    <div className="bg-[#FFFFFF] font-display text-[#111318] min-h-screen flex flex-col overflow-x-hidden">
      <main className="flex-1 flex justify-center pt-24 pb-20">
        <div className="max-w-7xl w-full flex flex-col px-6">
          <div className="flex gap-3 mb-6">
            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors pl-4 pr-4 border border-gray-200">
              <span className="text-secondary-green-700 text-xs font-bold uppercase tracking-wider">
                Article
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4 mb-8">
            <h1 className="text-black text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-[-0.02em]">
              The Future of Quantum Computing: Beyond the Binary
            </h1>
            <p className="text-gray-500 text-xl md:text-2xl font-light leading-normal">
              Exploring the next frontier of processing power and what it means
              for the digital age, cybersecurity, and AI.
            </p>
          </div>

          <div className="flex items-center justify-between border-b border-gray-200 pb-8 mb-8">
            <div className="flex items-center gap-4">
              <div
                className="bg-center bg-no-repeat bg-cover rounded-full h-12 w-12 border border-gray-200"
                data-alt="Close up portrait of the author Jane Doe"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBT2u4PJpyAZ6be9iwaDriqFWguIO3VaTDbk7BlXWh027aCU9aKepYAl-Ou61vFvbIuDRE5wh4VlSLUMjvyr5AxXAn08__y6YF8j8F_YDknv4t-hM-CGCQd3WD0SSHi12cOsGNMVJWTCeZ96C_Q7Z4ct2J7O617OlYjYQnrv28-wnJqujnQZ7p3VuU4mHMlGgFis0hNIgClrZkWUakzNDXhOoatqZj-8TFBZm9_2le9vFkCs_m212WsPCAW5E6V8f-x3Om912Gvqf1d")',
                }}
              ></div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-2">
                  <p className="text-black text-base font-bold leading-tight">
                    Jane Doe
                  </p>
                  <span className="text-secondary-green-700 text-sm font-medium hover:underline cursor-pointer">
                    Follow
                  </span>
                </div>
                <p className="text-gray-500 text-sm font-normal">
                  Oct 24, 2023
                </p>
              </div>
            </div>
          </div>

          <div className="w-full mb-10 rounded-xl overflow-hidden shadow-2xl shadow-gray-200/50">
            <div
              className="w-full aspect-video bg-center bg-no-repeat bg-cover"
              data-alt="Abstract visualization of quantum computing with glowing blue nodes and connections"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDrycwz22n1S9AjGE7VvLcm_IviHhyZla_jJTcZvn4T80XkGzlrHobgixhMFCu34yH6MhQF9W9aCOvXMPZHpi01mUuwSrfb2y1pun9rGQSrSDqnPj5ZwzepjDQsF3I1PcyVKUByocH6f2gwVg_Q4sgW1osTkoiChE3ptkUSi7NYsLfGLKAGLvsQrZjUqlwzjfKFan3FGf8ov50iaz5-N4oFL0v2RLNU_qv8uDpg9LUW5Cmw_nYFMDjit7_-qcSUzRpvPSpAn2OVy40J")',
              }}
            ></div>
            <div className="bg-gray-50 p-3 text-center border-t border-gray-100">
              <p className="text-gray-400 text-sm italic">
                Image credit: Unsplash / DeepMind Visualization
              </p>
            </div>
          </div>

          <div className="relative flex gap-10">
            <article className="prose max-w-none flex-1 font-display">
              <p className="first-letter:text-6xl first-letter:font-bold first-letter:text-black first-letter:float-left first-letter:mr-3 first-letter:mt-[-6px] mb-6 leading-[1.8] text-[1.125rem] text-gray-700">
                Quantum computing is not just a faster version of the computers
                we use today; it is a fundamentally different way of processing
                information. While classNameical computers operate on bits that
                are either 0 or 1, quantum computers utilize quantum bits, or
                qubits, which can exist in a state of superposition.
              </p>
              <p className="mb-6 leading-[1.8] text-[1.125rem] text-gray-700">
                This allows them to perform complex calculations at speeds that
                are currently unimaginable. Imagine trying to find a specific
                grain of sand on a beach. A classNameical computer would check
                each grain one by one. A quantum computer, theoretically, could
                check them all at once.
              </p>
              <blockquote className="border-l-4 border-secondary-green-700 pl-4 py-2 my-8 italic text-xl text-gray-800 bg-gray-50 rounded-r-lg">
                We are entering an era where the impossible becomes merely
                difficult, and the difficult becomes routine
              </blockquote>
              <h2 className="mt-10 mb-4 text-3xl font-bold text-black">
                The Race for Supremacy
              </h2>
              <p className="mb-6 leading-[1.8] text-[1.125rem] text-gray-700">
                Major tech giants and startups alike are in a heated race to
                achieve quantum supremacy—the point at which a quantum computer
                can perform a calculation that is practically impossible for a
                classNameical supercomputer. Google, IBM, and others have made
                significant strides, but we are still in the early, noisy era of
                quantum technology.
              </p>
              <p className="mb-6 leading-[1.8] text-[1.125rem] text-gray-700">
                The implications for cryptography are profound. Current
                encryption standards, which protect everything from bank
                accounts to national secrets, rely on math problems that are
                hard for classNameical computers to solve. A sufficiently
                powerful quantum computer could crack these codes in seconds.
              </p>
              <div className="my-8">
                <div className="w-full flex justify-center">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAV_JGJzUq0Luq5MJ-1NddodjUgwbMWHJv3bUw0EkcNv5xQ6_dQZl5N47mI9q9zdU6ly-v_Q8wH23jR30cS_MsjUmyVjO4U22lfYKnTKTnpnmwbPn5eoEP0cCiivWh33NdmExeHnGoLXzxjfmf99rZ8XrsIT52P8ZvuGCo20WoObZ_QSEsndf65Mm5CQ7kUDNzsjGNAkfSSxMcfeuvrYVEyqZxkzisnUKLd7uw43gG7rwChs-1u6Sok6b1o7edX4tHIUcOey2ZYe0Oq"
                    alt="Close up of a computer chip circuit board glowing blue"
                    className="w-full h-[400px] object-cover rounded-xl shadow-lg"
                    width={500}
                    height={500}
                    priority
                  />
                </div>
                <p className="text-center text-sm text-gray-500 mt-2 mb-6 leading-[1.8]">
                  The architecture of modern processors is reaching physical
                  limits.
                </p>
              </div>
              <h2 className="mt-10 mb-4 text-3xl font-bold text-black">
                What This Means for You
              </h2>
              <p className="mb-6 leading-[1.8] text-[1.125rem] text-gray-700">
                Beyond security, quantum computing promises breakthroughs in
                drug discovery, materials science, and climate modeling. We
                could simulate molecular interactions with perfect accuracy,
                leading to new medicines for incurable diseases or more
                efficient batteries for renewable energy storage.
              </p>
              <p className="mb-6 leading-[1.8] text-[1.125rem] text-gray-700">
                However, the road ahead is long. Stability remains a massive
                challenge. Qubits are notoriously fragile, collapsing at the
                slightest interference from the outside world. Solving the error
                correction problem is the next great hurdle.
              </p>
              <div className="flex items-center gap-2 mt-8 p-4 bg-gray-50 rounded-lg border border-gray-100">
                <span className="material-symbols-outlined text-secondary-green-700">
                  info
                </span>
                <p className="m-0! text-sm text-gray-600! leading-normal">
                  This article is part of our Future Tech series. Subscribe to
                  get notified about the next installment.
                </p>
              </div>
            </article>
          </div>

          <div className="mt-12 flex flex-wrap gap-2 items-center">
            <span className="text-gray-500 mr-2 py-1">Tags:</span>
            <a
              className="text-secondary-green-700 hover:text-black hover:underline transition-colors"
              href="#"
            >
              #QuantumComputing
            </a>
            <a
              className="text-secondary-green-700 hover:text-black hover:underline transition-colors"
              href="#"
            >
              #Technology
            </a>
            <a
              className="text-secondary-green-700 hover:text-black hover:underline transition-colors"
              href="#"
            >
              #Future
            </a>
            <a
              className="text-secondary-green-700 hover:text-black hover:underline transition-colors"
              href="#"
            >
              #Science
            </a>
          </div>

          <section
            className="mt-16 border-t border-gray-200 pt-10"
            id="comments"
          >
            <h3 className="text-black text-2xl font-bold mb-8 flex items-center gap-2">
              Discussion{" "}
              <span className="text-gray-400 text-lg font-normal">(48)</span>
            </h3>

            <div className="flex gap-4 mb-10">
              <div
                className="bg-center bg-no-repeat bg-cover rounded-full size-10 shrink-0"
                data-alt="Current user avatar"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAXJrYxNKV5-RiMpK_z8Eoh597SDTrsj2dMkrpiTTUyeDR8lBbotM_pb43ywajS39C50NuuaFPuNxNh3s13XPd2gv8K4hyckaJQGUG5xaSPVtdhFuxI__5aBgZKvyJgSmQi54HNte6vSOP4oI_o9OU7Jan88yGrPtbJMfVwwbbKVkSmqDKECWQSJ6BfkdESlZAG-nz2YzSLl9Mw8WZsNy8npodXm3byDbYa7Lxj7IJi09W3066Y_KQb_PahQkdFAARnZ2LE2DBsFZBr")',
                }}
              ></div>
              <div className="flex-1">
                <div className="relative">
                  <textarea
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-black placeholder:text-gray-400 focus:ring-1 focus:ring-primary focus:border-primary transition-all resize-y min-h-[120px]"
                    placeholder="What are your thoughts on quantum supremacy?"
                  ></textarea>
                  <div className="absolute bottom-3 right-3 flex gap-2">
                    <button className="px-4 py-1.5 rounded-lg text-sm font-medium text-gray-500 hover:bg-gray-200 transition-colors">
                      Cancel
                    </button>
                    <button className="px-4 py-1.5 rounded-lg text-sm font-bold bg-primary-blue text-white hover:bg-primary-blue/90 transition-colors shadow-lg shadow-primary/20">
                      Post
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div className="flex gap-4 group">
                <div
                  className="bg-center bg-no-repeat bg-cover rounded-full size-10 shrink-0"
                  data-alt="Avatar of user Michael Scott"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDmEf6IXXwrfr0wxQkN_SdPvQfU1zYdbComlNGJyorby-1RYuoPxZWV5exm8Gie3GZEq0EZE4LTjWfnh1AcuAEoiP3k2WXebesi5x7IA6teWb3vtfKEVVLy2bE8n7mPObLLSI_Qgbr-FxhPM1RqdHmU7-rvV-19RU-nuiScKDyf9D9pNXkjqwn8alk9fRL5IfS6F-QWcLsdgKDdYqCtxkFuIK3P8YJu_1jlte8DQMhmPdWV68DY7kBRfiC5EQB68gtC-7t8g2HI-TFK")',
                  }}
                ></div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-black font-bold text-sm">
                      Michael Scott
                    </span>
                    <span className="text-gray-400 text-xs">• 2 hours ago</span>
                  </div>
                  <p className="text-gray-600 text-base leading-relaxed mb-2">
                    The analogy about finding a grain of sand is perfect. It
                    really helps visualize the difference in processing power.
                    Do you think well see consumer quantum computers in our
                    lifetime?
                  </p>
                  <div className="flex items-center gap-4 text-gray-400 text-sm">
                    <button className="flex items-center gap-1 hover:text-black group-hover:visible transition-colors">
                      <IoThumbsUp className="text-lg mb-0.5" />
                      12
                    </button>
                    <button className="hover:text-black font-medium">
                      Reply
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div
                  className="bg-center bg-no-repeat bg-cover rounded-full size-10 shrink-0"
                  data-alt="Avatar of user Sarah Connor"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD-zLgnVM4LjXTh8WV5jbdqkyHmqI2Jeg9vVuL7hCtk51QtD4lMrXP0CzNJyAJJX32Tl4-KQ4MyVbQc3FZQg5D3wsMHAMEWcGxCliXclTM_qbSvT69QOkON5gZBEUebfzrMCPHvQvhzmR-_9XvMoI96eJX_jVZLaG0T2-pGKBg3DarR2cduz4EnXF28ih3b75_ZL5RM4wwUxVMHZO2ipfp_jiz3OShuyX4_KTmbNm03QlJz5V-vbZqzsFR4jTSn3JvnRtPh5_wbB_3K")',
                  }}
                ></div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-black font-bold text-sm">
                      Sarah Connor
                    </span>
                    <span className="text-gray-400 text-xs">• 5 hours ago</span>
                  </div>
                  <p className="text-gray-600 text-base leading-relaxed mb-2">
                    Security is definitely the biggest concern here. If RSA
                    encryption breaks, the entire financial system is
                    vulnerable. We need post-quantum cryptography standards NOW.
                  </p>
                  <div className="flex items-center gap-4 text-gray-400 text-sm">
                    <button className="flex items-center gap-1 hover:text-black group-hover:visible transition-colors">
                      <IoThumbsUp className="text-lg mb-0.5" />
                      45
                    </button>
                    <button className="hover:text-black font-medium">
                      Reply
                    </button>
                  </div>

                  <div className="flex gap-4 mt-4 pl-4 border-l-2 border-gray-200">
                    <div
                      className="bg-center bg-no-repeat bg-cover rounded-full size-8 shrink-0"
                      data-alt="Avatar of author Jane Doe"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA6FaGYlOF0fyiMPJOHNn8IkyD3TmRAeo6dfI5Vcqpa8kC-76nBI_iPBuFh5v3j5P4MCPbICpoXxXXdjH99PBPEH9fE_Zu3g47o_z2BnB4Dg9wDf1bLVImPYHPBdfN2_A0lh6aNhIpCQMx15CJKoG7PCnZmj9I27M8TEbTO2huhED6aEPe5ZmVXjG69ULKGjpFbRt-XO7up9t9ND-5AfOyXYPa2qls-xMKVBPXJLHiphUVHfNnM8nRxG9G-gVMaPh5HmabezL26cQFN")',
                      }}
                    ></div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-black font-bold text-sm">
                          Jane Doe
                        </span>
                        <span className="bg-gray-100 text-gray-500 text-[10px] px-1.5 py-0.5 rounded uppercase font-bold tracking-wider">
                          Author
                        </span>
                        <span className="text-gray-400 text-xs">
                          • 4 hours ago
                        </span>
                      </div>
                      <p className="text-gray-600 text-base leading-relaxed mb-2">
                        Agreed, Sarah. NIST is actually working on this right
                        now. Im planning a follow-up article specifically on PQC
                        (Post-Quantum Cryptography).
                      </p>
                      <div className="flex items-center gap-4 text-gray-400 text-sm">
                        <button className="flex items-center gap-1 hover:text-black transition-colors">
                          <IoThumbsUp className="text-lg mb-0.5" />8
                        </button>
                        <button className="hover:text-black font-medium">
                          Reply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="w-full mt-8 py-3 rounded-lg border border-gray-200 text-gray-500 font-medium hover:text-black hover:bg-gray-50 transition-colors">
              Load more comments
            </button>
          </section>
        </div>
      </main>

      <div className="w-full bg-gray-50 border-t border-gray-200 py-16 mt-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-black text-2xl font-bold mb-8">Read next</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a className="group flex flex-col gap-4 cursor-pointer" href="#">
              <div
                className="w-full aspect-4/3 bg-center bg-no-repeat bg-cover rounded-lg overflow-hidden relative"
                data-alt="Abstract colorful fluid art"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAZPO65vkY5r2sIX2oPOaqH_9JsfAei9UpA-50MViFFy2F4-pJg8DWJwuSt1YM9gwXMUJF73bJYhdu5s3cj1depPMt4-mLbNBFx-D1BwyR2Tqo3EyZps3-r93DPap-KRi1H-q1yqafSy5TVkt4jA0DwMI8iH0mQRdZXRNPX9-9uxpxRiN_9_WrJ4EcJqWg0wr6uG9JizZyorG0IYmvM69ZtNpMtC94Pw2xLwC8m9rTMfhXmOM-OzPmJoZRFSDqgESi5TwnMUCIt44ge")',
                }}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-xs font-medium text-gray-400">
                  <span className="text-secondary-green-700 uppercase tracking-wider">
                    11 Nov, 2025
                  </span>
                </div>
                <h4 className="text-black text-xl font-bold leading-tight group-hover:text-secondary-green-700 transition-colors">
                  The Psychology of Color in Digital Design
                </h4>
              </div>
            </a>

            <a className="group flex flex-col gap-4 cursor-pointer" href="#">
              <div
                className="w-full aspect-4/3 bg-center bg-no-repeat bg-cover rounded-lg overflow-hidden relative"
                data-alt="Futuristic city skyline at night"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDqz0tL_41PMc3DAHRMh_LQLr3Bu7LKwiFzD9cjuSgOBszK0o1BqDyd2dnauJtqb9XC0yJu56cmwfEu9i6p_3Mh3Op65d12O0UEbkEvZnvxcvu5RA7MEC3SY2LjwoGETf12j7TUoHm5Q6PQ428ozLNPlI2Ab91NgRCpLr358bh2Di5ME3ek7XYPW-M80BltockvP37xr4Vs86B-ZsubqwTPExTvNustCQe9aaaa9NBMxNukvfzLqfu7_Qo8qgiXq9iRvJc4WFl3BCk_")',
                }}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-xs font-medium text-gray-400">
                  <span className="text-secondary-green-700 uppercase tracking-wider">
                    11 Nov, 2025
                  </span>
                </div>
                <h4 className="text-black text-xl font-bold leading-tight group-hover:text-secondary-green-700 transition-colors">
                  Smart Cities: How IoT is Changing Urban Living
                </h4>
              </div>
            </a>

            <a className="group flex flex-col gap-4 cursor-pointer" href="#">
              <div
                className="w-full aspect-4/3 bg-center bg-no-repeat bg-cover rounded-lg overflow-hidden relative"
                data-alt="Minimalist desk setup with laptop and plant"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBT015t71RZlTxLGUedZvSWkWyBglt8S80HedvD_qT9V3uTUTgqAnY3P6z4gkvV9GIOO-X6dg0yshXc3JOvgpy7wLXvxAqUaZ8OkNdELc8qe-P1Y4AOxKejxsUBIrjCLiB7GC2KQVRnRRGTwzLe5uRoqpC4FyWtgoSrt0A1tKDqtf-dOZy0wTrLn3k7Mh-CXb2d2u6Wn4pHrtHU598D9tFLMKPm171l5oNjIfw8xMZ7v-AKW6Guh0RBgrY15tJeB8OLKdcQr1NEwD0B")',
                }}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-xs font-medium text-gray-400">
                  <span className="text-secondary-green-700 uppercase tracking-wider">
                    11 Nov, 2025
                  </span>
                </div>
                <h4 className="text-black text-xl font-bold leading-tight group-hover:text-secondary-green-700 transition-colors">
                  Deep Work: Mastering Focus in a Distracted World
                </h4>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
