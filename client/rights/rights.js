/*
Fichier permettant de gérer les droits d'accès dans toute l'API meteor

Chaque fonction s'associe à un droit de la base de droits (Rights) de l'utilisateur (côté client)

exemple : 

Template.registerHelper('nomDeLaFonction', function(){
	if (Rights.findOne({name: 'nomDuDroitEnBdd'})){
		return true;
	}
});
*/

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
Template.registerHelper('updateAllOffers', function(){
	if (Rights.findOne({name: 'updateOffers'})){
		return true;
	}
});

Template.registerHelper('viewAllResumes', function(){
	if (Rights.findOne({name: 'viewAllResumes'})){
		return true;
	}
});
Template.registerHelper('updateAllResumes', function(){
	if (Rights.findOne({name: 'updateResumes'})){
		return true;
	}
});

// Fonctions confirmant les accès côté JS
canViewAllOffers = function(){
	if (Rights.findOne({name: 'view-all-offers'})){
		return true;
	}
}

canUpdateAllOffers = function(){
	if (Rights.findOne({name: 'updateOffers'})){
		return true;
	}
}

canViewAllResumes = function(){
	if (Rights.findOne({name: 'viewAllResumes'})){
		return true;
	}
}

canUpdateAllResumes = function(){
	if (Rights.findOne({name: 'updateResumes'})){
		return true;
	}
}


// Fonctions bloquants les accès aux pages protégées

notLoggedIn = function (){
	if (!Meteor.user()){
		return noAccess();
	}
}

noRightViewAllOffers = function(){
	if (!Rights.findOne({name: 'view-all-offers'})){
		return noAccess();
	}
}

noRightViewAllResumes = function(){
	if (!Rights.findOne({name: 'viewAllResumes'})){
		return noAccess();
	}
}

// Fonctions de redirections

noAccess = function(){
	return Router.go('/forbiddenaccess');
}