import Image from "next/image";
export default function Banner() {
    return (
        <section className="w-full bg-gray-100">
            <div className="mx-auto grid min-h-[500px] max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2">

                <div>
                    <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-500">
                        Welcome to The App
                    </p>

                    <h2 className="mb-6 text-4xl font-bold leading-tight text-black md:text-5xl">
                        Navigate Our Next.js Project with Ease
                    </h2>

                    <p className="mb-8 max-w-xl text-gray-600">
                        Clean UI, reusable components, scalable structure.
                    </p>

                    <div className="flex gap-4">
                        <button className="rounded-lg bg-black px-6 py-3 text-white hover:opacity-90">
                            Get Started
                        </button>

                        <button className="rounded-lg border border-black px-6 py-3 text-black hover:bg-black hover:text-white">
                            Learn More
                        </button>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="relative h-[320px] w-full max-w-[500px] overflow-hidden rounded-2xl shadow-lg ">
                        <Image
                            src="/images/banner-image.jpg"
                            alt="Banner image"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}