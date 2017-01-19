Template.createResume.events({
	'submit form': function(e, Template){
		e.preventDefault();
		/*
			_id: 'dev',
			name: 'développeur full stack',
			postingDate: '25/11/2016',
			companyId: 'devService',
			companyContactId: '0',
			comment: 'un commentaire',
			trigramme: 'PLY',
			availibility: true,
			price: null
			*/
		var form = e.target,
			_this = this;
		if (canUpdateAllResumes()){
			var singleAvailability = false;
			if (form.availability.value == "true"){
				singleAvailability = true;
			}
			Resumes.insert({
				name: form.name.value,
				postingDate: moment().unix(),				
				companyId: form.companyId.value,
				companyContactId: form.companyContactId.value,
				comment: form.comment.value,
				trigramme: form.trigramme.value,
				availability: singleAvailability,
				price: form.price.value,
			}, function(error){
				if(error){
					alert(error.reason);
				} else {
					console.log('Resume successfully updated');
					Router.go('allresumes');
				}
			});
		} else{
			noAccess();
		}
	}
});

Template.createResume.onCreated( function(){
	notLoggedIn();
	if (!canUpdateAllResumes()){
		noAccess();
	}
});