Template.editOffer.events({
	'submit form': function(e, Template){
		e.preventDefault();
		var form = e.target,
			_this = this;
		if (canUpdateAllOffers()){
			Offers.update(this._id, {$set: {
				title: form.title.value,
				description: form.description.value,
				contactCommerceId: form.contactCommerceId.value,
				contactSourcingId: form.contactSourcingId.value,
				location: form.location.value,
				missionStartingDate: form.missionStartingDate.value,
				missionDuration: form.missionDuration.value,
				forecast: form.forecast.value,
				nbProfiles: form.nbProfiles.value
			}}, function(error){
				if(error){
					alert(error.reason);
				} else {
					console.log('Offer successfully updated');
					Router.go('offer', {_id: _this._id});
				}
			});
		} else{
			noAccess();
		}
	}
});

Template.editOffer.onCreated( function(){
	notLoggedIn();
	if (!canUpdateAllOffers()){
		noAccess();
	}
});

