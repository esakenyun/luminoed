"use client";

import Image from "next/image";
import OurClient from "@/components/sections/home/OurClient";

export default function SmartAssetPage() {
    return (
        <>
        <section className="w-full">
            <div className="max-w-7xl mx-auto pt-10 px-6">
                <div className="w-full tablet-landscape-max:w-2/5 flex flex-col md:flex-row justify-center items-center ">
                    <div className="flex flex-col justify-center">
                        <h2 className="font-extrabold text-5xl tablet-landscape-max:text-5xl text-primary-blue">
                        Smart Asset
                        </h2>
                        <p className="mt-10 text-lg font-medium text-slate-600">
                        Dalam smart Asset manajemen sekolah/yayasan dapat secara
                        realtime menginventaris aset sekolah yang ada di setiap
                        ruangan dan secara system dapat dengan segera mengetahui
                        aset mana yang perlu maintenance untuk memberikan pelayanan
                        maksimal kepada peserta didik.
                        </p>
                    </div>
                    <div className="md:h-[300px]"></div>
                </div>
                    <Image
                    className="hidden tablet-landscape-max:block rounded-2xl absolute -right-36 top-[-2%] object-cover"
                    src={"/services/smart-asset/smartasset.png"}
                    width={800}
                    height={800}
                    alt="Smart School"
                    priority
                    />
                <div className="pt-16 tablet-landscape-max:pt-60">
                    <h1 className="font-bold text-3xl tablet-landscape-max:text-4xl text-primary-blue text-center">
                    Smart Asset
                    </h1>
                    <div className="flex flex-col md:flex-row justify-center gap-16 pt-20">
                    <div className="bg-white rounded-xl shadow-2xl max-w-md">
                        <div className="h-2 bg-primary-green rounded-t-xl"></div>
                        <div className="p-8 flex flex-col gap-3">
                        <h1 className="font-bold text-primary-blue">
                            Dashboard asset untuk ruang kelas
                        </h1>
                        <p className="text-slate-500 pt-2">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Ut, minus ab. Voluptatibus officiis dolorum nihil
                            voluptatum soluta odit ullam, placeat porro ipsum!
                            Provident, rem sunt laboriosam incidunt inventore eveniet
                            aperiam, labore corporis exercitationem est illum eligendi
                            aliquam iure hic amet? Dolores necessitatibus expedita,
                            itaque, obcaecati, ad deleniti reprehenderit nobis sed
                            culpa quia ea aut voluptates mollitia animi rem atque.
                            Animi.
                        </p>
                        <hr />
                        </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-2xl max-w-md">
                        <div className=" h-2 bg-primary-green rounded-t-xl"></div>
                        <div className="p-8 flex flex-col gap-3">
                        <h1 className="font-bold text-primary-blue">
                            QR Code untuk setiap asset kelas
                        </h1>
                        <p className="text-slate-500 pt-2">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Enim minima sapiente molestias provident incidunt ipsa
                            quidem voluptas quod alias ratione? Quas rem perspiciatis
                            delectus facere, dolores assumenda eligendi culpa animi
                            corporis obcaecati. Illum expedita praesentium distinctio
                            qui harum optio odio, officiis deserunt libero ullam! Cum
                            neque, ut voluptatem nam expedita reiciendis voluptates ea
                            amet dicta rerum ullam, provident beatae molestiae!
                        </p>
                        <hr />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            {/* FULL WIDTH (wave / image) */}
                <div className="relative overflow-hidden">
                    <Image
                    src="/palkon.png"
                    alt="Wave"
                    width={1920}
                    height={400}
                    className="w-full"
                    />
                </div>

                {/* CLIENT */}
                <div className="max-w-7xl mx-auto px-6">
                    <OurClient />
                </div>
        </section>
        </>
    );
}