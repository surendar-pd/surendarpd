import Image from "next/image";
import React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import type { SanityDocument } from "@sanity/client";
import { urlForImage } from "@/sanity/lib/image";

const Photography = ({ data = [] }: { data: SanityDocument[] }) => {

    console.log(data);
    return (
        <section className="">
            <div className="w-full lg:max-w-7xl lg:mx-auto gap-4 p-4 md:px-16 py-[40px] md:py-[80px] lg:py-[100px]">
                <Box sx={{ width: "100%", height: "100%" }}>
                    <ImageList variant="masonry" cols={3} gap={8}>
                        {data.map((item, idx) => (
                            <ImageListItem key={idx}>
                                <Image
                                    unoptimized
                                    loading="lazy"
                                    src={item?.image ?? ""}
                                    className="w-full rounded-lg border-b border-black"
                                    width={10}
                                    height={10}
                                    alt={item?.alt}
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Box>
            </div>
        </section>
    );
};

export default Photography;

const itemData = [
    {
        img: "/assests/photos/1.jpg",
        title: "1",
    },
    {
        img: "/assests/photos/2.jpg",
        title: "2",
    },
    {
        img: "/assests/photos/3.jpg",
        title: "3",
    },
    {
        img: "/assests/photos/4.jpg",
        title: "4",
    },
    {
        img: "/assests/photos/5.jpg",
        title: "5",
    },
    {
        img: "/assests/photos/6.jpg",
        title: "6",
    },
    {
        img: "/assests/photos/7.jpg",
        title: "7",
    },
    {
        img: "/assests/photos/8.jpg",
        title: "8",
    },
    {
        img: "/assests/photos/9.jpg",
        title: "9",
    },
    {
        img: "/assests/photos/10.jpg",
        title: "10",
    },
    {
        img: "/assests/photos/11.jpg",
        title: "11",
    },
    {
        img: "/assests/photos/12.jpg",
        title: "12",
    },
    {
        img: "/assests/photos/13.jpg",
        title: "13",
    },
    {
        img: "/assests/photos/14.jpg",
        title: "14",
    },
    {
        img: "/assests/photos/15.jpg",
        title: "15",
    },
    {
        img: "/assests/photos/16.jpg",
        title: "16",
    },
    {
        img: "/assests/photos/17.jpg",
        title: "17",
    },
    {
        img: "/assests/photos/18.jpg",
        title: "18",
    },
    {
        img: "/assests/photos/19.jpg",
        title: "19",
    },
    {
        img: "/assests/photos/20.jpg",
        title: "20",
    },
    {
        img: "/assests/photos/21.png",
        title: "21",
    },
];
