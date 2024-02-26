import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'homePage',
    title: 'Page: Home',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'events',
            title: 'Events',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [{ type: 'eventPage' }],
                },
            ],
            description: 'Select & re-order upcoming events to feature on the home page. Remember to come back and remove them after the event has passed!',
        }),
        defineField({
            name: 'about',
            title: 'About REVOLVE',
            type: 'blockContent',
        }),
    ],
})