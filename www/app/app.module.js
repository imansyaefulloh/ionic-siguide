(function() {

    'use strict';

    angular
        .module('siguide', [
            'ionic',

            /** shared modules */
            'siguide.core',

            /** feature modules */
            'siguide.login',
            'siguide.register',

            /** dummy tabs chat */
            'siguide.controllers',
            'siguide.services'
        ])
        .run(ionic);

    ionic.$inject = ['$ionicPlatform'];

    function ionic($ionicPlatform) {
        $ionicPlatform.ready(function() {
            
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleLightContent();
            }
        });
    }
    
})();