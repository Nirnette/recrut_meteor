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
/*
Template.allresumes.onCreated( function(){
	notLoggedIn();
	noRightViewAllResumes();
});
*/
Template.allresumes.helpers({
	resumeList : function(){
		return Resumes.find();
	}
});

Template.allresumes.onCreated( function(){
	if (canViewAllResumes()){
		return Meteor.subscribe('allResumes');
	}
	notLoggedIn();
});
