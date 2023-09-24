import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'projects',
    title: 'Projects',
    type: 'document',
    fields: [
        defineField({
        name: 'title',
        title: 'Project Title',
        type: 'string',
        }),
        defineField({
        name: 'type',
        title: 'Type',
        type: 'string',
        }),
        defineField({
        name: 'mainImage',
        title: 'Main image',
        type: 'image',
        options: {
            hotspot: true,
        },
        fields: [
            {
            name: 'alt',
            type: 'string',
            title: 'Alternative Text',
            }
        ]
        }),
        defineField({
            name: 'link',
            title: 'link',
            type: 'string',
        }),
    ],
})
