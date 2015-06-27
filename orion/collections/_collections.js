Posts = new orion.collection('posts', {
	singularName: 'Post',
	pluralName: 'Posts',
	link: {
		title: 'Blog Posts'
	},
	tabular: {
		columns: [
			{data: 'title', title: 'Title'}
			, {data: 'slug', title: 'Slug'}
			, {data: 'createdAt', title: 'Created'}
			, {data: 'updatedAt', title: 'Updated'}
		]
	}
})
