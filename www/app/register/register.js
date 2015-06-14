(function() {

    'use strict';

    angular
        .module('siguide.register', [])
        .controller('RegisterCtrl', RegisterCtrl);

    RegisterCtrl.$inject = ['$state'];

    function RegisterCtrl($state)
    {

        var vm = this;

        vm.doRegister = doRegister;

        function doRegister() 
        {
            // TODO 
            // implement service for register
            
            // redirect
            $state.go('tab.dash');
        }
    }

})();