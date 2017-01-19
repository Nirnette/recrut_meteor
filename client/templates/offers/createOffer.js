Template.createOffer.events({
	'submit form': function(e, Template){
		e.preventDefault();
		var form = e.target,
			_this = this;
		if (canUpdateAllOffers()){
			Offers.insert({
				title: form.title.value,
				description: form.description.value,
				contactCommerceId: form.contactCommerceId.value,
				contactSourcingId: form.contactSourcingId.value,
				contactCustomerId: form.contactCustomerId.value,
				postingDate: moment().unix(),
				expiryDate: form.expiryDate.value,
				location: form.location.value,
				missionStartingDate: form.missionStartingDate.value,
				missionDuration: form.missionDuration.value,
				forecast: form.forecast.value,
				nbProfiles: form.nbProfiles.value
			}, function(error){
				if(error){
					alert(error.reason);
				} else {
					Router.go('alloffers');
				}
			});
			console.log('Offer successfully created');
		} else{
			noAccess();
		}
	}
});
/*
Template.createOffer.onCreated( function(){
	notLoggedIn();
	if (!canUpdateAllOffers()){
		noAccess();
	}
});
*/