Template.loginsuccess.onCreated( function(){
	if (canViewAllOffers()){
		return Meteor.subscribe('allOffers');
	}
	notLoggedIn();
});