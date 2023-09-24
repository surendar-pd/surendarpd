import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
    return (
        <section id="contact" className="bg-white text-primary">
            <div className="w-full flex flex-col md:flex-col lg:max-w-7xl lg:mx-auto gap-4 p-4 md:px-16 py-[40px] md:py-[80px] lg:py-[100px]">
                <h1 className="text-2xl md:text-4xl lg:text-6xl font-semibold mb-4 md:mb-8 lg:mb-12">
                    Let&apos;s Talk
                </h1>
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex flex-col md:w-1/2 gap-4">
                        <div className="grid w-full items-center gap-1.5">
                            <Label htmlFor="name">Name</Label>
                            <Input
                                className="border-slate-500"
                                type="text"
                                id="name"
                                placeholder="Name"
                            />
                        </div>
                        <div className="grid w-full items-center gap-1.5">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                className="border-slate-500"
                                type="email"
                                id="email"
                                placeholder="Email"
                            />
                        </div>
                        <Select>
                            <Label className="mb-0">
                                What are you looking for?
                            </Label>
                            <SelectTrigger className="w-full border-slate-500">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="light">Website</SelectItem>
                                <SelectItem value="dark">
                                    Web Application
                                </SelectItem>
                                <SelectItem value="system">
                                    Website Redesign
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex flex-col items-end md:w-1/2 gap-4">
                        <div className="grid w-full gap-1.5">
                            <Label htmlFor="message">Your message</Label>
                            <Textarea
                                className="h-56 md:max-h-[15.65rem] md:min-h-[15.65rem] border-slate-500"
                                placeholder="What is your project about"
                                id="message"
                            />
                        </div>
                        <div className="w-full md:w-fit">
                            <button className="w-full md:w-fit h-full rounded-lg font-medium text-center border border-primary transition-all bg-secondary px-8 py-4 duration-300 hover:translate-y-1 -translate-y-1 hover:shadow-none shadow-[4px_4px_#000000]">
                                Just Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
