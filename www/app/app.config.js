(function() {

    'use strict';

    angular
        .module('siguide')
        .config(config);

    config.$inject = ['$urlRouterProvider', '$stateProvider'];

    function config($urlRouterProvider, $stateProvider) {

        // $urlRouterProvider.otherwise('/tab/dash');
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('intro', {
                url: '/',
                templateUrl: 'app/intro/intro.html',
                controller: 'IntroCtrl as vm',
                // controllerAs: 'vm'
            })

            .state('login', {
                url: '/login',
                templateUrl: 'app/login/login.html',
                controller: 'LoginCtrl as vm',
                // controllerAs: 'vm'
            })

            .state('register', {
                url: '/register',
                templateUrl: 'app/register/register.html',
                controller: 'RegisterCtrl as vm'
            })

            .state('tab', {
                url: '/login',
                url: "/tab",
                abstract: true,
                templateUrl: "app/templates/tabs.html"
            })

            .state('tab.dash', {
                url: '/dash',
                views: {
                    'tab-dash': {
                        templateUrl: 'app/templates/tab-dash.html',
                        controller: 'DashCtrl'
                    }
                }
            })

	        .state('tab.chats', {
	            url: '/chats',
	            views: {
	                'tab-chats': {
	                    templateUrl: 'app/templates/tab-chats.html',
	                    controller: 'ChatsCtrl'
	                }
	            }
	        })

            .state('tab.chat-detail', {
                url: '/chats/:chatId',
                views: {
                    'tab-chats': {
                        templateUrl: 'app/templates/chat-detail.html',
                        controller: 'ChatDetailCtrl'
                    }
                }
            })

	        .state('tab.account', {
	            url: '/account',
	            views: {
	                'tab-account': {
	                    templateUrl: 'app/templates/tab-account.html',
	                    controller: 'AccountCtrl'
	                }
	            }
	        });

    }

})();