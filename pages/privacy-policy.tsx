import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageLoader from "@/components/PageLoader";
import React from "react";

const PrivacyPolicy = () => {
    const tac = [
        {
            title: "Introduction",
            desc: "his privacy policy explains how personal information is collected, used, and shared when visitors visit or make use of this website.",
        },
        {
            title: "Information Collection and Use",
            desc: "This website collects personal information such as visitors' names, email addresses, and any other information they provide when they contact us or sign up for updates. This website uses this information to respond to inquiries, send updates, and improve the website.",
        },
        {
            title: "Information Sharing",
            desc: "This website may share visitors' personal information with third parties only for the purpose of providing the services requested. For example, the website may share an email address with a third-party email service to send updates.",
        },
        {
            title: "Data Security",
            desc: "Appropriate measures are taken to protect visitors' personal information from unauthorized access, alteration, disclosure, or destruction.",
        },
        {
            title: "Changes to this Policy",
            desc: "his privacy policy may be updated from time to time to reflect changes in our practices or to comply with legal requirements. Visitors will be notified of any changes by posting the updated policy on the website.",
        },
        {
            title: "Contact Us",
            desc: "If you have any questions or concerns about our services or these privacy policies, please don't hesitate to contact us at surendarpd007@gmail.com.",
        },
    ];
    return (
        <div className="text-white">
            <PageLoader title={"Privacy Policy"} />
            <Header />
            <div className="p-4 md:px-16 lg:max-w-6xl lg:mx-auto pb-16">
                <h1 className="text-primary text-xl md:text-2xl lg:text-3xl font-semibold mb-8">
                    Privacy Policy
                </h1>
                <div className="flex flex-col gap-8">
                    {tac.map((tac, index) => (
                        <div key={index} className="">
                            <h2 className="text-lg text-primary md:text-xl font-semibold">
                                • {tac.title}
                            </h2>
                            <p className="text-base md:text-lg text-slate-500">
                                {tac.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
