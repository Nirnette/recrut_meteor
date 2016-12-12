Template.login.events({

	'submit form': function(event, template){
		event.preventDefault();

		var username = template.find('#login-username').value,
            password = template.find('#login-password').value;

        Meteor.loginWithPassword(username, password, function(error) {

            if (Meteor.user()) {
            	console.log('Login successful');
                Router.go('loginsuccess');
            } else {
              Router.go('loginfail');
            }
            return;
        });

        return false;
    }


});

