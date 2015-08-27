Meteor.publish('posts', function() {
  return Posts.find();
});

Meteor.publish('postBySlug', function(slug) {
  check(slug, String);
  return Posts.find({slug: slug}, {limit: 1});
});