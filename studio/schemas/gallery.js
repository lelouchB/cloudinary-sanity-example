import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'cloudinary.asset'}],
    }),

    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',

      initialValue: () => new Date().toISOString(),
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'galleryImages.0',
    },
  },
})
