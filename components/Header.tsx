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
            link: "",
        },
        {
            title: "About",
            link: "",
        },
        {
            title: "Work",
            link: "",
        },
        {
            title: "Photography",
            link: "",
        },
        {
            title: "Contact",
            link: "",
        },
    ];

    return (
        <section className="sticky top-0 z-40 mix-blend-exclusion backdrop-blur">
        {/* <section className="sticky top-0 z-50 bg-primary"> */}
            <header className="w-full p-4 md:px-16 py-8 flex items-center justify-between">
                <div>
                    <h1 className="text-xl font-semibold">Surendar PD</h1>
                </div>
                <div className="gap-4 hidden lg:flex">
                    {headerData.map((item, idx) => {
                        return (
                            <Link
                                key={idx}
                                href="#"
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
                                                href="#"
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
