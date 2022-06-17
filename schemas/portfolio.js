export default {
    name: 'portfolio',
    title: 'Portfolio',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Website Name',
        type: 'string',
      },
      {
        name: 'mainImage',
        title: 'Main image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'prevImage',
        title: 'Thumbnail',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'caption',
        title: 'Caption',
        type: 'string',
      },
      {
        name: 'publishedAt',
        title: 'Published at',
        type: 'date',
      },
    ],
  }
  