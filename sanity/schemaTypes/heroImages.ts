export default {
    name: 'heroImage',
    type: 'document',
    title: 'Two Hero Images',
    fields: [
      {
        name: 'image1',
        type: 'image',
        title: 'First Image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'image2',
        type: 'image',
        title: 'Second Image',
        options: {
          hotspot: true,
        },
      },
    ],
  }