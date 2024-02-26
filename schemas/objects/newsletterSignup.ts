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
            initialValue: 'Sign up for our email list and never miss an event again!',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'mailchimpActionUrl',
            title: 'Mailchimp Action URL',
            type: 'url',
            description: 'The URL where the form data will be sent. You can find this in your MailChimp account.',
            validation: (Rule) => Rule.required(),
        }
    ]
})