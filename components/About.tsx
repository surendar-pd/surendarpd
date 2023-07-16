import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

const About = () => {
    return (
        <section id="about" className="bg-white text-primary">
            <div className="w-full flex flex-col md:flex-col lg:max-w-7xl lg:mx-auto gap-4 p-4 md:px-16 py-[40px] md:py-[80px] lg:py-[100px]">
                <div className="flex flex-col gap-4 justify-center">
                    <h1 className="text-2xl md:text-4xl lg:text-6xl font-semibold">About Me</h1>
                    <p className="text-slate-700">
                        I&apos;m a self-taught software designer with a heavy
                        focus on user interface & user experience. My preferred
                        stack is app design, digital products & UI/UX.
                    </p>
                </div>
                <div className="flex flex-col gap-4 text-slate-700">
                    <p>
                        I currently live in <strong>Hawaii</strong> 🌴, US State. I enjoy reading
                        books 📗 and listening to podcasts🎙️. I love creating
                        creative content, and you can find most of my works
                        here.
                    </p>
                    <p>
                        Apart from this I love to travel, mentor designers,
                        review design portfolios & read books on everything
                        related to design. I have also given design talks in
                        various educational institutions.
                    </p>
                    <div className="flex items-center gap-6">
                        <Link target="_blank" href={"https://instagram.com/surendar_pd"}>
                            <InstagramLogoIcon width={24} height={24} className="text-slate-700 hover:text-secondary transition-all duration-300"/>
                        </Link>
                        <Link target="_blank" href={"https://www.linkedin.com/in/surendar-pd-b725921b1/"}>
                            <LinkedInLogoIcon  width={24} height={24} className="text-slate-700 hover:text-secondary transition-all duration-300"/>
                        </Link>
                        <Link target="_blank" href={"https://github.com/surendar-pd"}>
                            <GitHubLogoIcon  width={24} height={24} className="text-slate-700 hover:text-secondary transition-all duration-300"/>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
