Router.configure({
	layoutTemplate: 'layout',
	notFoundTemplate: 'notFound'
});


Router.map(function(){

	this.route('home', {
		//name: 'Home',
		path: '/',
		template: 'home'
	});
	this.route('loginsuccess', {
		//name: 'Loginsuccessful',
		path:'/loginsuccess',
		template: 'loginsuccess',
		// Si l'utilisateur arrive jusqu'à cette page il load ses droits
		subscriptions: function(){
			// loggedUserRights fait un second check pour vérifier qu'il y a bien un user courant.
			return Meteor.subscribe('loggedUserRights');
		}
	});
	this.route('loginfail', {
		//name:'LoginFailure',
		path:'/incorrectAuthentification',
		template: 'loginfail'
	});

	// Offers
	this.route('alloffers', {
		//name: 'AllOffers',
		path:'/alloffers',
		template: 'alloffers'
	});
	this.route('offer',{
		path: '/offers/:_id',
		template: 'selectedOffer',
		waitOn: function(){
			return Meteor.subscribe('single-offer', this.params._id);
		},
		data: function(){
			return Offers.findOne({_id: this.params._id});
		}
	});
	this.route('editoffer',{
		path: '/offers/edit/:_id',
		template: 'editOffer',
		waitOn: function(){
			return Meteor.subscribe('single-offer', this.params._id);
		},
		data: function(){
			return Offers.findOne({_id: this.params._id});
		}
	});
	this.route('createoffer',{
		path: '/create/offer',
		template: 'createOffer'
	});	

	// Resumes
	this.route('allresumes', {
		//name: 'AllOffers',
		path:'/allresumes',
		template: 'allresumes'
	});
	this.route('resume',{
		path: '/resumes/:_id',
		template: 'selectedResume',
		waitOn: function(){
			return Meteor.subscribe('single-resume', this.params._id);
		},
		data: function(){
			return Resumes.findOne({_id: this.params._id});
		}
	});
	this.route('editresume',{
		path: '/resumes/edit/:_id',
		template: 'editResume',
		waitOn: function(){
			return Meteor.subscribe('single-resume', this.params._id);
		},
		data: function(){
			return Resumes.findOne({_id: this.params._id});
		}
	});
	this.route('createresume',{
		path: '/create/resume',
		template: 'createResume'
	});	
	this.route('forbiddenaccess', {
		path:'/forbiddenaccess',
		template: 'forbiddenaccess'
	});

});

