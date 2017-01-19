Template.loginfail.onRendered( function(){
	$("#logfail").modal();
});

Template.loginfail.events({
	'click .close': function(){
		setTimeout( function(){
			Router.go('home');
		}, 1000);
	}
});