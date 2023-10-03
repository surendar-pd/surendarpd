import React from "react";
import type { SanityDocument } from "@sanity/client";
import Image from "next/image";
import Link from "next/link";

const Testimonials = ({ testimonials = [] }: { testimonials: SanityDocument[] }) => {

    return (
        <section className="bg-white text-primary">
            <div className="w-full lg:max-w-7xl lg:mx-auto gap-4 p-4 md:px-16 py-[40px] md:py-[80px] lg:py-[100px]">
                <h1 className="text-2xl md:text-4xl lg:text-6xl font-semibold mb-4 md:mb-8 lg:mb-12">
                    Testimonials
                    <p className="text-base md:text-lg mt-2 text-slate-500">
                        Hear what people have to say about me
                    </p>
                </h1>
                <div className="grid grid-cols-1 gap-4 md:gap-8">
                    {testimonials.map((item, idx) => {
                        return (
                            <div
                                key={idx}
                                className="w-full h-full flex flex-col lg:flex-row rounded-lg text-center border border-primary transition-all duration-300 hover:-translate-y-2 hover:shadow-[4px_4px_#000000]"
                            >
                                <div className="border-b lg:border-b-0 lg:border-r w-full lg:w-1/4 border-black flex flex-col p-4 items-center">
                                    <Image
                                        unoptimized
                                        loading="lazy"
                                        src={item?.image ?? ""}
                                        className="rounded-full w-24 h-24 "
                                        width={10}
                                        height={10}
                                        alt={item?.image?.alt}
                                    />
                                    <h1 className="text-xl font-semibold">
                                        {item.name}
                                    </h1>
                                    <p className="text-sm">
                                        {item.designation}
                                    </p>
                                </div>
                                <div className="p-4 w-full lg:w-3/4 flex flex-col items-center justify-between gap-2">
                                    <p className="text-slate-500 text-sm md:text-base text-justify">
                                        {`"${item.review}"`}
                                    </p>
                                    <Link
                                        href={item.link}
                                        target="_blank"
                                        className="text-primary w-fit font-semibold hover:underline"
                                    >
                                        View
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
