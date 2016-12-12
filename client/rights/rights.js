Template.registerHelper('updateUsers', function(){
	if (Rights.findOne({name: 'updateRoles'})){
		return true;
	}
});
Template.registerHelper('viewAllOffers', function(){
	if (Rights.findOne({name: 'view-all-offers'})){
		return true;
	}
});