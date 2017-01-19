Template.editResume.events({
	'submit form': function(e, Template){
		e.preventDefault();
		var form = e.target,
			_this = this;
		if (canUpdateAllResumes()){
			var singleAvailability = false;
			if (form.availability.value == "true"){
				singleAvailability = true;
			}
			Resumes.update(this._id, {$set: {
				name: form.name.value,
				comment: form.comment.value,
				companyId: form.companyId.value,
				companyContactId: form.companyContactId.value,
				trigramme: form.trigramme.value,
				availability: singleAvailability,
				price: form.price.value,
			}}, function(error){
				if(error){
					alert(error.reason);
				} else {
					console.log('Resume successfully updated');
					Router.go('resume', {_id: _this._id});
				}
			});
		} else{
			noAccess();
		}
	}
});

Template.editResume.onCreated( function(){
	notLoggedIn();
	if (!canUpdateAllResumes()){
		noAccess();
	}

});
