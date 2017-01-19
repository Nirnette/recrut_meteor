Template.alloffers.onCreated( function(){
	notLoggedIn();
	noRightViewAllOffers();
});

Template.alloffers.helpers({
	offersList : function(){
		return Offers.find({}, {sort: {expiryDate: 1}});
	}
});

Template.alloffers.onCreated( function(){
	if (canViewAllOffers()){
		return Meteor.subscribe('allOffers');
	}
	notLoggedIn();
});