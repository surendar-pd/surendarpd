import Image from "next/image";
import Link from "next/link";
import React from "react";

const Work = () => {
    const work = [
        {
            title: "Streamline Recruite Website",
            type: "Website",
            img: "/assests/work1.png",
            link:"https://streamline-recruit.vercel.app/",
        },
        {
            title: "Edule UI",
            type: "Web App",
            img: "/assests/work2.png",
            link:"https://edule-ui.vercel.app/",
        },
        {
            title: "EaseForms App UI",
            type: "Web App",
            img: "/assests/work3.png",
            link:"https://ease-forms.vercel.app/",
        },
        {
            title: "EaseForms Website",
            type: "Website",
            img: "/assests/work5.png",
            link:"https://easeforms-client.vercel.app/",
        },
        {
            title: "MNGCA Website",
            type: "Website",
            img: "/assests/work4.png",
            link:"https://mngca.vercel.app/",
        },
    ];

    return (
        <section id="work" className="bg-white text-primary">
            <div className="w-full lg:max-w-7xl lg:mx-auto gap-4 p-4 md:px-16 py-[40px] md:py-[80px] lg:py-[100px]">
                <div className="flex flex-col gap-4 md:gap-8 lg:gap-12">
                    <h1 className="text-2xl md:text-4xl lg:text-6xl font-semibold">
                        Discover My Work
                    </h1>
                    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {
                            work.map((workItem, idx) => {
                                return(
                                    <Link target="_blank" href={workItem.link} key={idx} className="w-full h-full rounded-lg  border border-primary transition-all duration-300 hover:-translate-y-2 hover:shadow-[4px_4px_#000000]">
                                        <Image priority unoptimized src={workItem.img} alt={workItem.title} className="w-full rounded-t-lg border-b border-black" width={10} height={10}/>
                                        <div className="p-4">
                                            <p className="text-slate-500">{workItem.type}</p>
                                            <h1 className="text-primary font-semibold text-xl">{workItem.title}</h1>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Work;
