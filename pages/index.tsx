import Image from "next/image";
import { Space_Grotesk } from "next/font/google";
import Hero from "@/components/Landing/Hero";
import About from "@/components/Landing/About";
import Work from "@/components/Landing/Work";
import WorkExp from "@/components/Landing/WorkExp";
import WhatIDo from "@/components/Landing/WhatIDo";
import PageLoader from "@/components/PageLoader";
import Contact from "@/components/Landing/Contact";
import LandingPageLayout from "@/layouts/LandingPageLayout";
import type { SanityDocument } from "@sanity/client";
import { client } from "../sanity/lib/client";
import { projectsQuery } from "@/sanity/lib/queries";

const poppins = Space_Grotesk({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

export default function Home({ data }: { data: SanityDocument[] }) {
    return (
        <main className={`${poppins.className} bg-primary text-slate-50`}>
            <PageLoader />
            <LandingPageLayout>
                <Hero />
                <About />
                <Work data={data} />
                <WorkExp />
                <WhatIDo />
                <Contact />
            </LandingPageLayout>
        </main>
    );
}

export const getStaticProps = async () => {
    const data = await client.fetch(projectsQuery);
    return { props: { data } };
};
