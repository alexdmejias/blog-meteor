Router.configure({
  layoutTemplate: 'main'
});

Router.route('/blog', {
	name: 'blogList',
	template: 'blogList',
	data: function() {
		return { posts: Posts.find().fetch() }
	}
});

Router.route('/blog/:slug', {
	name: 'blogSingle',
	data: function() {
		return Posts.findOne({slug: this.params.slug})
	}
});
