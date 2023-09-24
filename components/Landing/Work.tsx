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
                    <h1 className="text-2xl md:text-4xl lg:text-6xl font-semibold">
                        Discover My Work
                    </h1>
                    <ProjectCard projects={data} />
                </div>
            </div>
        </section>
    );
}