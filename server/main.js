import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {

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
		},
		{
			_id: 'updateResumes',
			name: 'updateResumes'
		},
		{
			_id: 'viewAllResumes',
			name: 'viewAllResumes'
		},
		{
			_id: 'updateOffers',
			name: 'updateOffers'
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
			rights_id: ['view-all-offers', 'updateOffers', 'updateResumes', 'viewAllResumes']
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
				roles: ['admin', 'sourcing']
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
	// Création des CV de test
	if(Resumes.find().count() === 0 ){
		var basicResumes = [
		{
			_id: 'dev',
			name: 'développeur full stack',
			postingDate: '1483353450',
			companyId: 'devService',
			companyContactId: '0',
			comment: 'un commentaire',
			trigramme: 'PLY',
			availability: true,
			price: null
		},
		{
			_id: 'exp',
			name: 'Expert sécurité',
			postingDate: '1483544970',
			companyId: 'expService',
			companyContactId: '0',
			comment: 'un commentaire',
			trigramme: 'DDI',
			availability: false,
			price: 900
		}		
		];
		_.each(basicResumes, function (resume){
			Resumes.insert(resume);
		});
		console.log('Basic Resumes created');
	}

	Offers.remove({});
	// Création des offres test
	if(Offers.find().count() === 0 ){
		var basicOffers = [
		{
			_id: 'chercheDev',
			title: 'Recherche développeur full stack',
			description: 'Blabla bla description',
			contactCommerceId: 'commercial',
			contactSourcingId: 'sourcing',
			contactCustomerId: 'axa',
			postingDate: '28/11/2016',
			expiryDate: '25/12/2016',
			location: 'Paris la villette',
			missionStartingDate: '01/01/2017',
			missionDuration:'60',
			forecast: '40',
			nbProfiles: '1',
			customer: 'axa'
		},
		{
			_id: 'chercheExp',
			title: 'Recherche Expert en sécurité digitale',
			description: 'Blabla bla description',
			contactCommerceId: 'commercial',
			contactSourcingId: 'sourcing',
			contactCustomerId: 'axa',
			postingDate: '25/11/2016',
			expiryDate: '30/12/2016',
			location: 'Orsay',
			missionStartingDate: '01/01/2017',
			missionDuration:'60',
			forecast: '40',
			nbProfiles: '1',
			customer: 'axa assurances'
		}		
		];
		_.each(basicOffers, function (offer){
			Offers.insert(offer);
		});
		console.log('Basic Offers created');
	}

	Status.remove({});
	// Création des statuts test
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
			name: 'proposé',
		},
		{
			_id: '4',
			name: 'présenté',
		},
		{
			_id: '5',
			name: 'validé',
		},	
		{
			_id: '6',
			name: 'accepté',
		}				
		];
		_.each(basicStatus, function (status){
			Status.insert(status);
		});
		console.log('Basic Status created');
	}

	Companies.remove({});
	// Création des compagnies test
	if(Companies.find().count() === 0 ){
		var basicCompanies = [
		{
			_id: 'devService',
			name: 'Developpement Services',
			adress: '1 avenue des champs élysées, 75008 Paris',
			email : 'company1@bla.fr',
			telephoneNumber: "0102030405",
			SIRET: "00000000",
			group: null,
			list: 1
		},
		{
			_id: 'expService',
			name: 'Experts en sécurité Services',
			adress: '9 avenue des champs élysées, 75008 Paris',
			email : 'company1@bla.fr',
			telephoneNumber: "0504030201",
			SIRET: "11111111",
			group: null,
			list: 2
		}			
		];
		_.each(basicCompanies, function (company){
			Companies.insert(company);
		});
		console.log('Basic Companies created');
	}

	OfferStatus.remove({});
	//Création des statuts des offres test
		if(OfferStatus.find().count() === 0 ){
		var basicOfferStatus = [
		{
			_id: '1',
			idOffer: 'chercheDev',
			idStatusName: '1',
			validated : true
		},
		{
			_id: '2',
			idOffer: 'chercheDev',
			idStatusName: '2',
			validated : true
		},
		{
			_id: '3',
			idOffer: 'chercheDev',
			idStatusName: '3',
			validated : false
		},
		{
			_id: '4',
			idOffer: 'chercheExp',
			idStatusName: '1',
			validated : true
		},	
		{
			_id: '5',
			idOffer: 'chercheExp',
			idStatusName: '2',
			validated : true
		}				
		];
		_.each(basicOfferStatus, function (offerstatus){
			OfferStatus.insert(offerstatus);
		});
		console.log('Basic OfferStatus created');
	}
	/*

	*/
});
