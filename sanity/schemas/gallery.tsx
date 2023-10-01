import { defineField, defineType } from "sanity";

export default defineType({
    name: "gallery",
    title: "Gallery",
    type: "document",
    fields: [
        defineField({
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: "alt",
                    type: "string",
                    title: "Alternative Text",
                    description:
                        "A descriptive alternative text for the image.",
                },
            ],
            description: "The image to be displayed in the gallery.",
        }),
    ],
});
