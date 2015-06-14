(function() {

    'use strict';

    angular
    	.module('siguide.login', [])
    	.controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['$state'];

    function LoginCtrl($state)
    {

    	var vm = this;

    	vm.email = "";
    	vm.password = "";

    	vm.doLogin = doLogin;

    	function doLogin()
    	{
    		// TODO
    		// implement service for login

    		// redirect to home
    		$state.go('tab.dash');

    		// get login data
    		console.log(vm.email + " " + vm.password);

    	}
    }

})();