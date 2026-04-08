import Image from "next/image";
export default function AboutMission() {
    return (
        <section className="w-full py-16 bg-white text-black">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

                <div>
                    <h2 className="text-3xl font-semibold mb-4">
                        Our Mission
                    </h2>
                    <p className="text-gray-600">
                        Our goal is to simplify development workflows and empower
                        developers to build high-quality applications faster.
                    </p>
                </div>

                <div className="cursor-pointer relative w-full h-[250px] md:h-[300px] rounded-lg overflow-hidden">

                    <Image
                        src="/images/aboutus.jpg"
                        alt="Our mission"
                        fill
                        className="object-cover"
                    />

                </div>
            </div>
        </section>
    );
}