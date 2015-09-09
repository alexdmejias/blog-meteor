Projects.attachSchema(new SimpleSchema({
  title: {
    type: String
  },
  slug: {
    type: String,
    label: 'this will be the url of the project post'
  },
  published: {
    type: Boolean
  },
  link: {
    type: String
  },
  description: {
    type: String
  },
  content: orion.attribute('summernote', {
      label: 'Body'
    }
  ),
  images: {
    type: [Object],
    optional: true
  },
  // "images.$.image": {
  //   type: orion.attribute('image'),
  // },
  "images.$.caption": {
    type: String,
  },
  updatedAt: orion.attribute('updatedAt')
}));
