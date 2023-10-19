import React from "react";
import Link from "next/link";
import type { SanityDocument } from "@sanity/client";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

const ProjectCard = ({
    projects = [],
    page,
}: {
    projects: SanityDocument[];
    page: string;
}) => {
    console.log(projects);
    return (
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {page === "home" ? (
                <>
                    {projects
                        .sort(() => Math.random() - 0.5)
                        .slice(0, 6)
                        .map((project, idx) => {
                            return (
                                <Link
                                    target="_blank"
                                    href={project.link}
                                    key={idx}
                                    className="w-full h-full rounded-lg  border border-primary transition-all duration-300 hover:-translate-y-2 hover:shadow-[4px_4px_#000000]"
                                >
                                    <Image
                                        unoptimized
                                        loading="lazy"
                                        src={urlForImage(project.mainImage)}
                                        className="w-full rounded-t-lg border-b border-black"
                                        width={10}
                                        height={10}
                                        alt={project?.mainImage?.alt}
                                    />
                                    <div className="p-4">
                                        <p className="text-slate-500">
                                            {project.type}
                                        </p>
                                        <h1 className="text-primary font-semibold text-xl">
                                            {project.title}
                                        </h1>
                                    </div>
                                </Link>
                            );
                        })}
                </>
            ) : (
                <>
                    {projects.map((project, idx) => {
                        return (
                            <Link
                                target="_blank"
                                href={project.link}
                                key={idx}
                                className="w-full h-full rounded-lg  border border-primary transition-all duration-300 hover:-translate-y-2 hover:shadow-[4px_4px_#000000]"
                            >
                                <Image
                                    unoptimized
                                    loading="lazy"
                                    src={urlForImage(project.mainImage)}
                                    className="w-full rounded-t-lg border-b border-black"
                                    width={10}
                                    height={10}
                                    alt={project?.mainImage?.alt}
                                />
                                <div className="p-4">
                                    <p className="text-slate-500">
                                        {project.type}
                                    </p>
                                    <h1 className="text-primary font-semibold text-xl">
                                        {project.title}
                                    </h1>
                                </div>
                            </Link>
                        );
                    })}
                </>
            )}
        </div>
    );
};

export default ProjectCard;
