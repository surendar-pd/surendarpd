import React from "react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const Header = () => {
    const headerData = [
        {
            title: "Home",
            link: "/",
        },
        {
            title: "About",
            link: "/#about",
        },
        {
            title: "Work",
            link: "/#work",
        },
        {
            title: "Photography",
            link: "/photography",
        },
        {
            title: "Contact",
            link: "/#contact",
        },
    ];

    return (
        <section id="" className="sticky top-0 z-40 mix-blend-exclusion backdrop-blur">
        {/* <section className="sticky top-0 z-50 bg-primary"> */}
            <header className="w-full p-4 md:px-16 py-8 lg:max-w-7xl lg:mx-auto flex items-center justify-between">
                <div>
                    <Link href="/" className="text-xl font-semibold">Surendar PD</Link>
                </div>
                <div className="gap-4 hidden lg:flex">
                    {headerData.map((item, idx) => {
                        return (
                            <Link
                                key={idx}
                                href={item.link}
                                className="hover:text-secondary transition-all duration-300"
                            >
                                {item.title}
                            </Link>
                        );
                    })}
                </div>
                <div className="lg:hidden">
                    <Sheet>
                        <SheetTrigger>
                            <HamburgerMenuIcon fontSize={24} />
                        </SheetTrigger>
                        <SheetContent side={"top"} className="bg-primary text-slate-200" >
                            <SheetHeader>
                                <SheetTitle className="text-slate-200">Surendar PD</SheetTitle>
                                <SheetDescription className="flex flex-col gap-4">
                                    {headerData.map((item, idx) => {
                                        return (
                                            <Link
                                                key={idx}
                                                href={item.link}
                                                className="hover:text-secondary transition-all duration-300 text-lg"
                                            >
                                                {item.title}
                                            </Link>
                                        );
                                    })}
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </header>
        </section>
    );
};

export default Header;
