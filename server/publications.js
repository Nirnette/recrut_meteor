
// Renvoie la liste de tous les users de l'API
Meteor.publish('all-users', function() {
	//Fonction mongoDB renvoyant l'intégralité d'une collection
	return Meteor.users.find();
});

// Renvoie la liste de tous les rôles de la Bdd
Meteor.publish('all-roles', function(){
	return Roles.find();
});

// Renvoie la liste de tous les droits de la bdd
Meteor.publish('all-rights', function(){
	return Rights.find();
});


//Fonction permettant de récupérer un tableau de tous les droits de l'utilisateur courant puis de l'envoyer côté client avec ses droits uniquement
Meteor.publish('loggedUserRights', function(){
	// On vérifie qu'il y a un utilisateur connecté
	if (this.userId){
		var rights = [];
		var user = Meteor.users.findOne(this.userId);
		var roles = user.profile.roles;
		var currentRole;
		var currentRight;
		for (var i=0; i < roles.length; i++){
			currentRole = Roles.find({name: roles[i]}).fetch();
			for (var j=0; j < currentRole[0].rights_id.length; j++){
				currentRight = currentRole[0].rights_id[j];
				if (rights.indexOf(currentRight) == -1){
					rights.push(currentRight);
				}
			}
			
		}
		// Fonction mongoDb qui renvoit un tableau avec les objets correspondants aux id des droits de l'utilisateur
		return Rights.find({_id: {$in: rights}});

	}

	return this.ready();

});

// Renvoie toutes les offres
Meteor.publish('allOffers', function(){
	return Offers.find();
});
// Renvoie l'offre sélectionnée
Meteor.publish('single-offer', function(id){
	return Offers.find({_id: id});
});

// Renvoie toutes les cv
Meteor.publish('allResumes', function(){
	return Resumes.find();
});
// Renvoie le cv sélectionné
Meteor.publish('single-resume', function(id){
	return Resumes.find({_id: id});
});