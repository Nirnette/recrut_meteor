Template.forbiddenaccess.events({
	'click .close': function(){
		setTimeout( function(){
			Router.go('home');
		}, 1000);
	}
});
Template.forbiddenaccess.onRendered( function(){
	$("#forbiddenaccess").modal();
});