Meteor.publish('all-users', function() {
	return Meteor.users.find();
});
Meteor.publish('all-roles', function(){
	return Roles.find();
});
Meteor.publish('all-rights', function(){
	return Rights.find();
});
Meteor.publish('loggedUserRights', function(){
	//Fonction permettant de récupérer un tableau de tous les droits de l'utilisateur courant
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
		return Rights.find({_id: {$in: rights}});

	}

	return this.ready();

});