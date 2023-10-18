import React from "react";
import Photography from "@/components/Landing/Photography";
import PageLoader from "@/components/PageLoader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { galleryQuery } from "@/sanity/lib/queries";
import { client } from "../sanity/lib/client";
import type { SanityDocument } from "@sanity/client";

const PhotographyPage = ({ data }: { data: SanityDocument[] }) => {
    return (
        <main className="bg-slate-50 text-white">
            <PageLoader title={"Photography"} />
            <Header />
            <Photography data={data} />
            <Footer />
        </main>
    );
};

export default PhotographyPage;

export const getStaticProps = async () => {
    const data = await client.fetch(galleryQuery);
    return { props: { data }, revalidate: 300 };
};
