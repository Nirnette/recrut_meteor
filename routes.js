Router.configure({
	layoutTemplate: 'layout',
	notFoundTemplate: 'notFound'
});

Router.map(function(){

	this.route('home', {
		path: '/',
		template: 'home'
	});
	this.route('loginsuccess',{
		path:'/loginsuccess',
		template: 'loginsuccess',
		subscriptions: function(){
			return Meteor.subscribe('loggedUserRights');
		}
	});
	this.route('loginfail', {
		path:'/incorrectAuthentification',
		template: 'loginfail'
	});


});
