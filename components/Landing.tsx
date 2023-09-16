import Image from "next/image";
import React from "react";

const Landing = () => {
    return (
        <section>
            <div className="w-full flex flex-col md:flex-row lg:max-w-7xl lg:mx-auto gap-8 p-4 md:px-16 py-[40px] md:py-[80px] lg:py-[100px]">
                <div className="flex flex-col lg:w-2/3 justify-center gap-2">
                    <h1 className="text-4xl md:text-6xl lg:text-8xl">
                        <strong>Hello</strong> I&apos;m
                    </h1>
                    <strong className="text-4xl md:text-6xl lg:text-8xl lg:ml-16 text-secondary">Surendar PD</strong>
                    <p className="text-base lg:ml-28 lg:max-w-lg mt-4   ">
                        I&apos;m a self-taught software developer with a focus
                        on Frontend development, User Experience & Photography.
                    </p>
                </div>
                <div className="flex lg:w-1/3 justify-center items-center w-full h-full">
                    <div>
                        <Image priority unoptimized src={"/assests/ff.png"} alt="face" width="10" height="10" className="w-52 md:w-64 lg:w-80 bg-cover"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Landing;
