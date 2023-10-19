import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageLoader from "@/components/PageLoader";
import React from "react";

const TermsConditions = () => {
    const tac = [
        {
            title: "Acceptance of Terms",
            desc: "By using this website, visitors agree to be bound by these terms of use. If they do not agree to these terms, they should not use the website.",
        },
        {
            title: "Services",
            desc: "We primarily provide web development services. We reserve the right to decline any project that we feel is not a good fit for our team.",
        },
        {
            title: "Pricing",
            desc: "Our pricing for web development services is based on the scope of the project and will be discussed and agreed upon with the client before any work begins.",
        },
        {
            title: "Payment",
            desc: "We require a 50% deposit before we begin work on a project. The remaining 50% is due upon completion of the project, before the website is launched.",
        },
        {
            title: "Refunds",
            desc: "We strive to provide high-quality services to our clients. If for any reason a client is not satisfied with our work, they can request a refund within 7 days of project completion. Refunds will be issued on a prorated basis, based on the work completed.",
        },
        {
            title: "Project Completion",
            desc: "We will provide an estimated completion date for each project. We will do our best to complete projects by the estimated date, but we cannot guarantee a specific completion date.",
        },
        {
            title: "Confidentiality",
            desc: "We will not share any confidential information provided by clients with any third party.",
        },
        {
            title: "Intellectual Property",
            desc: "We will not use any intellectual property provided by clients for any purpose other than completing the project.",
        },
        {
            title: "Third-Party Services",
            desc: "We may use third-party services to complete projects. We are not responsible for any changes made by third-party services.",
        },
        {
            title: "Use of Content",
            desc: "We may use content from completed projects in our portfolio and marketing materials.",
        },
        {
            title: "Disclaimer",
            desc: "the information on this website is provided on an 'as is' basis. No representations or warranties of any kind, express or implied, are made as to the operation of the website or the information, content, materials, or products included on the website.",
        },
        {
            title: "Limitation of Liability",
            desc: "We reserve the right to revise these terms and conditions from time to time. The most current version will be posted on our website. By using our website or engaging our services, visitors agree to be bound by the then-current version of these terms and conditions. This website will not be liable for any damages of any kind arising from the use of the website or the use of any content by visitors, including but not limited to direct, indirect, incidental, punitive, and consequential damages.",
        },
        {
            title: "Changes to Terms and Conditions",
            desc: "We reserve the right to revise these terms and conditions from time to time. The most current version will be posted on our website. By using our website or engaging our services, visitors agree to be bound by the then-current version of these terms and conditions.",
        },
        {
            title: "Contact Us",
            desc: "If you have any questions about these terms and conditions, please contact us at 'surendarpd007@gmail.com",
        },
    ];
    return (
        <div className="text-white">
            <PageLoader title="Terms and Conditions" />
            <Header />
            <div className="p-4 md:px-16 lg:max-w-6xl lg:mx-auto pb-16">
                <h1 className="text-primary text-xl md:text-2xl lg:text-3xl font-semibold mb-8">
                    Terms and Conditions
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

export default TermsConditions;
