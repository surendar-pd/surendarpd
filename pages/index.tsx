import Image from "next/image";
import { Space_Grotesk } from "next/font/google";
import Header from "@/components/Header";
import Landing from "@/components/Landing";
import About from "@/components/About";
import Work from "@/components/Work";
import WorkExp from "@/components/WorkExp";
import WhatIDo from "@/components/WhatIDo";
import PageLoader from "@/components/PageLoader";
import Contact from "@/components/Contact";

const poppins = Space_Grotesk({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

export default function Home() {
    return (
        <main className={`${poppins.className} bg-primary text-slate-50`}>
            <PageLoader />
            <Header />
            <Landing />
            <About />
            <Work />
            <WorkExp />
            <WhatIDo />
            <Contact/>
        </main>
    );
}
