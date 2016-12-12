Template.menu.helpers({
	/*
	updateUsers: function(){
		if (Rights.findOne({name: 'updateRoles'})){
			return true;
		}

	},

	viewAllOffers: function(){
		if (Rights.findOne({name: 'view-all-offers'})){
			return true;
		}
	}
	*/

	
});


Template.menu.events({
  'click .logout': function(event){
     event.preventDefault();
		
     Meteor.logout(function(error) {
        if(error) {
           console.log("ERROR: " + error.reason);
        }else {
        	Router.go('home');
        }
     });
  }
});
