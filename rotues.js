Router.configure({
  layoutTemplate: 'main'
});

Router.route('/posts', {
	name: 'blogList',
	template: 'blogList',
	data: function() {
		return { posts: Posts.find().fetch() }
	}
});

Router.route('/posts/:slug', {
	name: 'blogSingle',
	data: function() {
		return Posts.findOne({slug: this.params.slug})
	}
});
