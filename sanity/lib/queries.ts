import { groq } from "next-sanity";

export const projectsQuery = groq`*[_type == "projects"]{
    _id, title, type, link, mainImage,
}`;
export const galleryQuery = groq`*[_type == "gallery"]{
    _id, "image": image.asset->url, "alt": image.alt,
}`;

export const testimonialsQuery = groq`*[_type == "testimonial"]{
    _id, name, review, link, "image": image.asset->url, "alt": image.alt, designation,
}`;