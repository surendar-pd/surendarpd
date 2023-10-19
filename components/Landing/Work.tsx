import Image from "next/image";
import Link from "next/link";
import React from "react";
import type { SanityDocument } from "@sanity/client";
import ProjectCard from "../Cards/ProjectCard";

export default function Work({ data }: { data: SanityDocument[] }) {
    return (
        <section id="work" className="bg-white text-primary">
            <div className="w-full lg:max-w-7xl lg:mx-auto gap-4 p-4 md:px-16 py-[40px] md:py-[80px] lg:py-[100px]">
                <div className="flex flex-col gap-4 md:gap-8 lg:gap-12">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl md:text-4xl lg:text-6xl font-semibold">
                            Discover My Work
                            <span className="text-base block md:text-lg mt-2 text-slate-500">
                                Here are some of my projects that I&apos;ve
                                worked on.
                            </span>
                        </h1>
                        <Link href={"/work"} className="w-full md:w-fit">
                            <button
                                className={`w-full md:w-fit h-full rounded-lg font-medium text-center border hover:shadow-none hover:translate-y-1 shadow-[4px_4px_#000000] border-primary transition-all bg-secondary px-8 py-4 duration-300 -translate-y-1`}
                                type="submit"
                            >
                                View All
                            </button>
                        </Link>
                    </div>
                    <ProjectCard page={"home"} projects={data} />
                </div>
            </div>
        </section>
    );
}
