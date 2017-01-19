Template.menu.helpers({
	
});


Template.menu.events({

	//Fonction qui permet à l'utilisateur de se logout par le bouton logout.
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
