import Image from "next/image";
import React from "react";

const WhatIDo = () => {
    const whatido = [
        {
            title: "HTML 5",
            img: "/assests/icons/html.svg",
        },
        {
            title: "CSS 3",
            img: "/assests/icons/css.svg",
        },
        {
            title: "Tailwind CSS",
            img: "/assests/icons/tw.svg",
        },
        {
            title: "Javascript",
            img: "/assests/icons/js.svg",
        },
        {
            title: "Typescript",
            img: "/assests/icons/ts.svg",
        },
        {
            title: "React JS",
            img: "/assests/icons/rjs.svg",
        },
        {
            title: "Next JS",
            img: "/assests/icons/njs.svg",
        },
        {
            title: "Firebase",
            img: "/assests/icons/fb.svg",
        },
        {
            title: "MUI",
            img: "/assests/icons/mui.svg",
        },
        {
            title: "Figma",
            img: "/assests/icons/fg.svg",
        },
    ];
    return (
        <section className="bg-white text-primary">
            <div className="w-full lg:max-w-7xl lg:mx-auto gap-4 p-4 md:px-16 py-[40px] md:py-[80px] lg:py-[100px]">
                <h1 className="text-2xl md:text-4xl lg:text-6xl font-semibold mb-4 md:mb-8 lg:mb-12">
                    What I Do
                </h1>
                <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                    {whatido.map((item, idx) => {
                        return (
                            <div
                                key={idx}
                                className="w-full h-full rounded-lg text-center border border-primary transition-all duration-300 hover:-translate-y-2 hover:shadow-[4px_4px_#000000]"
                            >
                                <div className="border-b border-black flex flex-col p-4 items-center w-full">
                                    <Image
                                        src={item.img}
                                        alt={item.title}
                                        width={10}
                                        height={10}
                                        className="w-24"
                                    />
                                </div>
                                <p className="p-4 font-semibold">
                                    {item.title}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhatIDo;
