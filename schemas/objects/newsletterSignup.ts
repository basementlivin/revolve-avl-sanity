import { defineType } from 'sanity'

export default defineType({
    name: 'newsletterSignup',
    title: 'Newsletter Signup',
    type: 'object',
    fields: [
        {
            name: 'headline',
            title: 'Headline',
            type: 'string',
            initialValue: 'Revolve News',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'copy',
            title: 'Copy',
            type: 'text',
            rows: 2,
            initialValue: 'Sign up for our email list and never miss an event again!',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'mailchimpActionUrl',
            title: 'Mailchimp Action URL',
            type: 'url',
            initialValue: 'https://revolveavl.us12.list-manage.com/subscribe/post?u=9656a8d7222f19b474060d83a&amp;id=1d2a995db9&amp;f_id=001c72e0f0',
            description: `The URL where the form data will be sent. Hint: if you don't know how to find this, it's an easy Google search away!`,
            validation: (Rule) => Rule.required(),
        }
    ]
})