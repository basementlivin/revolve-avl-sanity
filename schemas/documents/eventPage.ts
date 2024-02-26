import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'eventPage',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: () => true,
      },
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
      options: {
        dateFormat: 'MM-DD-YYYY',
      },
    }),
    defineField({
      name: 'program',
      title: 'Program',
      type: 'string',
      options: {
        list: [
          {title: 'Exhibition', value: 'exhibitions'},
          {title: 'Performance', value: 'performance'},
          {title: 'Revolve Sound', value: 'revolveSound'},
          {title: 'Film Screening', value: 'filmScreening'},
          {title: 'Queer Artist Meetup', value: 'queerArtistMeetup'},
          {title: 'Skillshare', value: 'skillshare'},
        ],
      },
      description: 'Which core programming is this event associated with?',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      description: 'Accepted file types: .png, .jpeg, .jpg, .webp, .avif',
      options: {
        hotspot: true,
        accept: 'image/png, image/jpeg, image/jpg, image/webp, image/avif',
      },
      fields: [
        defineField({
          name: 'altText',
          title: 'Alt Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
          description: 'This is important for accessibility & SEO. Be descriptive, but concise.'
        }),
        defineField({
          name: 'credits',
          title: 'Credits',
          type: 'string',
          description: 'Credit the artist and/or photographer, where applicable.',
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'eventDescription',
      title: 'Event Description',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
