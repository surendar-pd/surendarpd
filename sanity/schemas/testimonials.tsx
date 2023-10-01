import { defineField, defineType } from "sanity";

export default defineType({
    name: "testimonial",
    title: "Testimonials",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Name",
            type: "string",
            description: "The name of the person providing the testimonial.",
        }),
        defineField({
            name: "designation",
            title: "Designation",
            type: "string",
            description:
                "The designation of the person providing the testimonial.",
        }),
        defineField({
            name: "image",
            title: "Profile",
            type: "image",
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: "alt",
                    type: "string",
                    title: "Alternative Text",
                },
            ],
        }),
        defineField({
            name: "review",
            title: "Review",
            type: "text",
            description: "The text of the testimonial or review.",
        }),
        defineField({
            name: "link",
            title: "Link",
            description: "A link to the review source (e.g., Google Review).",
            type: "string",
        }),
    ],
});
