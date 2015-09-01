Meteor.publish('posts', function() {
  return Posts.find({}, {
    fields: {
      title: true,
      slug: true,
      content: true,
      published: true
    }
  });
});

Meteor.publish('postBySlug', function(slug) {
  check(slug, String);
  return Posts.find({slug: slug}, {limit: 1});
});

Meteor.publish('projects', function() {
  return Projects.find({}, {
    fields: {
      title: true,
      slug: true,
      published: true
    }
  })
})

Meteor.publish('projectBySlug', function(slug) {
  check(slug, String);
  return Projects.find({slug: slug}, {limit: 1});
});
