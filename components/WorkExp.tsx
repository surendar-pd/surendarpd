import React from "react";
import { Separator } from "@/components/ui/separator";

const WorkExp = () => {
    const workExp = [
        {
            title: "Co Founder",
            company: "Codelance Devs",
            duration: "2022 - Present",
            status: "active",
        },
        {
            title: "Web Designer & Developer",
            company: "Flookup Advisors",
            duration: "2022 - Present",
            status: "active",
        },
        {
            title: "Frontend Developer",
            company: "Zapessy",
            duration: "2021 - 2022",
            status: "done",
        },
    ];
    return (
        <section>
            <div className="w-full lg:max-w-7xl lg:mx-auto gap-4 p-4 md:px-16 py-[40px] md:py-[80px] lg:py-[100px]">
                <h1 className="text-2xl md:text-4xl lg:text-6xl font-semibold mb-4 md:mb-8 lg:mb-12">
                    Work Experience
                </h1>
                <div>
                    {workExp.map((work, idx) => {
                        return (
                            <>
                                <div
                                    key={idx}
                                    className={`flex items-center justify-between ${workExp.length - 1 === idx ? "mt-8" : "my-8"}`}
                                >
                                    <div>
                                        <h1 className="text-lg md:text-xl lg:text-2xl font-medium">
                                            {work.company}
                                        </h1>
                                        <p className="text-sm md:text-base">
                                            {work.title}
                                        </p>
                                    </div>
                                    <div className={`flex items-center gap-2`}>
                                        <div className={`w-2 h-2 bg-lime-500 rounded-full ${work.status === 'active' ? 'block' : "hidden"}`}></div>
                                        <p>{work.duration}</p>
                                    </div>
                                </div>
                                <Separator className={`${workExp.length-1 === idx ? "hidden" : "border-slate-800 border"}`} />
                            </>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WorkExp;
