import { groq } from "next-sanity";

export const projectsQuery = groq`*[_type == "projects"]{
    _id, title, type, link, mainImage,
}`;