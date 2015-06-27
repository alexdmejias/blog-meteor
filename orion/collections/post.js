Posts.attachSchema(new SimpleSchema({
	title: {
		type: String
	}
	, slug: {
		type: String
		, label: 'this will be the url of the blog post'
	}
	, content: orion.attribute('summernote', {
	    label: 'Body'
	  }
	)
	, createdAt: orion.attribute('createdAt')
	, updatedAt: orion.attribute('updatedAt')
}));
