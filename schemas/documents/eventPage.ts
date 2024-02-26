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
      description: 'The format should be "events/your-event-title". The "Generate" button should do the trick here, but feel free to edit for simplicity and clarity.',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        slugify: (input) =>
          `events/${input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/(?!^)\/+/g, '')
            .replace(/[^\w\-/]+/g, '')
            .replace(/\-\-+/g, '-')
            .slice(0, 96)}`,
        isUnique: () => true,
      },
    }),        
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      options: {
        dateFormat: 'MM-DD-YYYY',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'time',
      title: 'Time',
      type: 'string',
      initialValue: '6 - 7:30pm',
      description: 'Please use this format: "6pm", "6:30pm", "5 – 7pm", "11am - 2pm", etc.',
    }),
    defineField({
      name: 'program',
      title: 'Program',
      type: 'string',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: 'Exhibition', value: 'exhibitions' },
          { title: 'Performance', value: 'performance' },
          { title: 'Revolve Sound', value: 'revolveSound' },
          { title: 'Film Screening', value: 'filmScreening' },
          { title: 'Queer Artist Meetup', value: 'queerArtistMeetup' },
          { title: 'Skillshare', value: 'skillshare' },
        ],
        layout: 'dropdown',
      },
      description: 'Which core programming is this event associated with?',
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
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'program',
      date: 'date',
      media: 'featuredImage',
    },
    prepare(selection) {
      const {title, subtitle, date, media} = selection
      const programTitle = subtitle.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())
      const dateObject = new Date(date)
      const formattedDate = `${dateObject.getMonth() + 1}.${dateObject.getDate()}.${dateObject.getFullYear()}`
      return {
        title: title,
        subtitle: `${programTitle} | ${formattedDate}`,
        media: media,
      }
    },
  },
})
