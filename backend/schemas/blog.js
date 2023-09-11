export default {
    name: 'blog',
    type: 'document',
    title: 'blog',
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
    //   {
    //     name: 'views',
    //     type: 'string',
    //     title: 'views'
    //   },
    //   {
    //     name: 'comments',
    //     type: 'string',
    //     title: 'comments'
    //   },
    //   {
    //     name: 'image',
    //     type: 'image',
    //     title: 'image',
    //     Option: {
    //       hotspot: true,
    //     }
    //   },
    {
        title: 'Slug',
        name: 'slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 200, // will be ignored if slugify is set
          slugify: input => input
                               .toLowerCase()
                               .replace(/\s+/g, '-')
                               .slice(0, 200)
        }
      },
      {
        title: 'Blog Description',
        name: 'blog_description',
        type: 'array',
        of: [{type: 'block'}]
      }
    ]
  }