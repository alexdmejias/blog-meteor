Template.viewModel.events({
	'click .view': function() {
		var collection = window.location.pathname.split('/'),
			newUrl = window.location.origin + '/' + collection[2] + '/' + this.slug,
			win = window.open(newUrl, '_blank');

		win.focus();
	}
});
