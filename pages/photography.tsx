import React from "react";
import Photography from "@/components/Photography";
import PageLoader from "@/components/PageLoader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PhotographyPage = () => {
    return (
        <main className="bg-slate-50 text-white">
            <PageLoader />
            <Header />
            <Photography />
            <Footer />
        </main>
    );
};

export default PhotographyPage;
