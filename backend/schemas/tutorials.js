export default {
    name: 'tutorials',
    type: 'document',
    title: 'tutorials',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'title'
      },
      {
        name: 'description',
        type: 'string',
        title: 'description'
      },
      {
        name: 'views',
        type: 'string',
        title: 'views'
      },
      {
        name: 'comments',
        type: 'string',
        title: 'comments'
      },
      {
        name: 'image',
        type: 'image',
        title: 'image',
        Option: {
          hotspot: true,
        }
      },
    ]
  }