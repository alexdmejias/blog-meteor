Router.configure({
  layoutTemplate: 'main'
});

Router.route('/blog', {
  name: 'blogList',
  waitOn: function() {return Meteor.subscribe('posts'); },
  data: function() {return {posts: Posts.find()}; },
});

Router.route('/blog/:slug', {
  name: 'blogSingle',
  waitOn: function() {return Meteor.subscribe('postBySlug', this.params.slug) },
  data: function() {return {post: Posts.findOne({slug: this.params.slug})} }
});

Router.route('/projects', {
  name: 'projectList',
  waitOn: function() {return Meteor.subscribe('projects'); },
  data: function() { return {projects: Projects.find({}, {published: true})}; }
});

Router.route('/projects/:slug', {
  name: 'projectSingle',
  waitOn: function() {return Meteor.subscribe('projectBySlug', this.params.slug) },
  data: function() {return {project: Projects.findOne({slug: this.params.slug})} }
});
