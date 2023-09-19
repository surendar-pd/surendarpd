import {
    GitHubLogoIcon,
    InstagramLogoIcon,
    LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";

const Footer = () => {
    return (
        <div
            id="contact"
            className="w-full h-full bg-primary text-slate-200 p-4 md:px-16 md:pt-16 lg:"
        >
            <div className="lg:flex w-full justify-between">
                <div className="mb-8 flex flex-col gap-4">
                    <h1 className="font-semibold text-2xl">
                        Surendar<span className="text-secondary"> PD</span>
                    </h1>
                    <div className="flex items-center gap-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4 "
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                            />
                        </svg>
                        <p className=" text-sm">Chennai India (IND)</p>
                    </div>
                    <div className="flex items-center gap-6">
                        <Link
                            target="_blank"
                            href={"https://instagram.com/surendar_pd"}
                        >
                            <InstagramLogoIcon
                                width={20}
                                height={20}
                                className="hover:text-secondary transition-all duration-300"
                            />
                        </Link>
                        <Link
                            target="_blank"
                            href={
                                "https://www.linkedin.com/in/surendar-pd-b725921b1/"
                            }
                        >
                            <LinkedInLogoIcon
                                width={20}
                                height={20}
                                className="hover:text-secondary transition-all duration-300"
                            />
                        </Link>
                        <Link
                            target="_blank"
                            href={"https://github.com/surendar-pd"}
                        >
                            <GitHubLogoIcon
                                width={20}
                                height={20}
                                className="hover:text-secondary transition-all duration-300"
                            />
                        </Link>
                        <Link href={"mailto:surendarpd007@gmail.com"}>
                            <MailOutlinedIcon className="hover:text-secondary transition-all duration-300" />
                        </Link>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-2">
                    <div className="">
                        <h1 className="font-medium mb-2">Information</h1>
                        <div className="flex flex-col">
                            <Link href="/">
                                <Button
                                    variant="link"
                                    className="text-slate-50 p-0 w-fit"
                                >
                                    Home
                                </Button>
                            </Link>
                            <Link href="/#about">
                                <Button
                                    variant="link"
                                    className="text-slate-50 p-0 w-fit"
                                >
                                    About
                                </Button>
                            </Link>
                            <Link href="/#work">
                                <Button
                                    variant="link"
                                    className="text-slate-50 p-0 w-fit"
                                >
                                    Work
                                </Button>
                            </Link>
                            <Link href="/photography">
                                <Button
                                    variant="link"
                                    className="text-slate-50 p-0 w-fit"
                                >
                                    Photography
                                </Button>
                            </Link>
                        </div>
                    </div>
                    {/* <div className="">
                        <h1 className="font-medium mb-2">Employers</h1>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm cursor-pointer  hover:text-slate-800 transition-all duration-300">
                                Employer Login
                            </p>
                            <p className="text-sm cursor-pointer  hover:text-slate-800 transition-all duration-300">
                                Job Posting
                            </p>
                            <p className="text-sm cursor-pointer  hover:text-slate-800 transition-all duration-300">
                                Reseacrh Report
                            </p>
                            <p className="text-sm cursor-pointer  hover:text-slate-800 transition-all duration-300">
                                CV Database
                            </p>
                        </div>
                    </div> */}
                    <div className="">
                        <h1 className="font-medium mb-2">Legal</h1>
                        <div className="flex flex-col">
                            <Link href="/terms-and-conditions">
                                <Button
                                    variant="link"
                                    className="text-slate-50 p-0 w-fit"
                                >
                                    Terms & Conditions
                                </Button>
                            </Link>
                            <Link href="/privacy-policy">
                                <Button
                                    variant="link"
                                    className="text-slate-50 p-0 w-fit"
                                >
                                    Privacy Policy
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-4 flex flex-col md:flex-row md:gap-4 items-center mt-2 border-t border-slate-800">
                <p className="text-xs py-2 lg:mt-[1px]">
                    Copyright  &copy; {new Date().getFullYear()} Surendar PD
                </p>
                <p className="text-xs">
                    Powered by
                    <Link
                        href="https://nextjs.org"
                        target="_blank"
                        className="hover:underline"
                    >
                        <Button
                            variant="link"
                            className="text-slate-50 px-2 w-fit"
                        >
                            Next JS
                        </Button>
                    </Link>
                </p>
                <p className="text-xs">
                    Styled by
                    <Link href="https://tailwindcss.com" target="_blank">
                        <Button
                            variant="link"
                            className="text-slate-50 px-2 w-fit"
                        >
                            Tailwind CSS
                        </Button>
                    </Link>
                    &
                    <Link href="https://ui.shadcn.com" target="_blank">
                        <Button
                            variant="link"
                            className="text-slate-50 px-2 w-fit"
                        >
                            Shadcn UI
                        </Button>
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Footer;
