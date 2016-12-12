import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
/*  
	if(Meteor.users.find().count() != ){

		console.log('Example users created');

		Accounts.createUser({
			firstName: 'Chasles',
			lastName:  'Kate',
			title: 'Mme',
			email: 'kchasles@inops.fr',
			password: 'admin',
			createdAt: '22/11/2016',
			updatedAt: '22/11/2016',
			enabled: true,
			telephoneNumber: '0101010101',
			mobileNumber: '0101010101',
			adress: '93 rue Ampère, 75017 Paris',
			legalResponsible: 'false',
			roles:[
				{
					name: 'admin',
					access: [ 'admin-users']
				},
				{
					name: 'enabledUser',
					access: [ 'login', 'editAccount']
				}
			] 

			}
			company:  {
				name: 'Inop\s',
				adress: '93 rue Ampère, 75017 Paris',
				telephoneNumber: '+33 1 75 77 13 77',
				siret: '00000',
				list: '0'
			},		
		});
	}
	*/

	Rights.remove({});
	// On créer des droits test
	if(Rights.find().count() === 0){
		var basicRights = [
		{
			_id: 'view-all-offers',
			name: 'view-all-offers'
		},
		{
			_id: 'updateRoles',
			name: 'updateRoles'
		}
		];
		_.each(basicRights, function (right){
			Rights.insert(right);
		});
		console.log('Basic Rights created');
	}

	Roles.remove({});
	// Création des rôles test
	if(Roles.find().count() === 0 ){
		var basicRoles = [
		{
			_id: 'admin',
			name: 'admin',
			rights_id: ['updateRoles']
		},
		{
			_id: 'sourcing',
			name: 'sourcing',
			rights_id: ['view-all-offers']
		},
		{
			_id: 'partner',
			name: 'partner',
			rights_id: ['manage-partner']
		},
		{
			_id: 'commercial',
			name: 'commercial',
			rights_id: ['update-sales-status']
		},	
		{
			_id: 'axa',
			name: 'axa',
			rights_id: ['']
		}				
		];
		_.each(basicRoles, function (role){
			Roles.insert(role);
		});
		console.log('Basic Roles created');
	}

	Meteor.users.remove({});
	//Création des users test
	
	if (Meteor.users.find().count() === 0 ){
		
		Accounts.createUser({
			username: 'kate',
			email: 'kchasles@inops.fr',
			password: 'kate',
			profile: {
				firstName: 'kate',
				lastName: 'Chasles',
				roles: ['admin']
			}
			
		});
		Accounts.createUser({
			username: 'pouet',
			email: 'pouet@pouet.com',
			password: 'pouet',
			profile: {
				firstName: 'kate',
				lastName: 'Chasles',
				roles: ['sourcing']
			}
			
		});

		console.log('Test users created');
	}

	Resumes.remove({});

	if(Resumes.find().count() === 0 ){
		var basicResumes = [
		{
			_id: 'dev',
			name: 'développeur full stack',
			postingDate: '25/11/2016',
			companyId: 'devService',
			companyContactId: '0',
			comment: 'un commentaire',
			trigramme: 'PLY',
			availibility: true,
			price: null
		},
		{
			_id: 'exp',
			name: 'Expert sécurité',
			postingDate: '25/11/2016',
			companyId: 'expService',
			companyContactId: '0',
			comment: 'un commentaire',
			trigramme: 'DDI',
			availibility: true,
			price: 900
		}		
		];
		_.each(basicResumes, function (resume){
			Resumes.insert(resume);
		});
		console.log('Basic Resumes created');
	}

	Offers.remove({});

	if(Offers.find().count() === 0 ){
		var basicOffers = [
		{
			_id: 'chercheDev',
			title: 'Recherche développeur full stack',
			description: 'Blabla bla description',
			contactCommerceId: 'commercial',
			contactSourcingId: 'sourcing',
			contactCustomerId: 'axa',
			postingDate: '25/11/2016',
			expiryDate: '25/12/2016',
			location: 'Paris la villette',
			missionStartingDate: '01/01/2017',
			missionDuration:'60',
			forecast: '40',
			nbProfiles: '1'
		},
		{
			_id: 'chercheExp',
			title: 'Recherche Expert en sécurité digitale',
			description: 'Blabla bla description',
			contactCommerceId: 'commercial',
			contactSourcingId: 'sourcing',
			contactCustomerId: 'axa',
			postingDate: '25/11/2016',
			expiryDate: '25/12/2016',
			location: 'Orsay',
			missionStartingDate: '01/01/2017',
			missionDuration:'60',
			forecast: '40',
			nbProfiles: '1'
		}		
		];
		_.each(basicOffers, function (offer){
			Offers.insert(offer);
		});
		console.log('Basic Offers created');
	}

	Status.remove({});
	// Création des rôles test
	if(Status.find().count() === 0 ){
		var basicStatus = [
		{
			_id: '1',
			name: 'attaché',
		},
		{
			_id: '2',
			name: 'qualifié',
		},
		{
			_id: '3',
			name: 'présenté',
		},
		{
			_id: '4',
			name: 'validé',
		},	
		{
			_id: '5',
			name: 'vendu',
		}				
		];
		_.each(basicStatus, function (status){
			Status.insert(status);
		});
		console.log('Basic Status created');
	}
	/*

	*/
});
