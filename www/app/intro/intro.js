(function() {

	'use strict';

	angular
		.module('siguide.intro', [])
		.controller('IntroCtrl', IntroCtrl);

	IntroCtrl.$inject = ['$state', '$ionicSlideBoxDelegate'];

	function IntroCtrl($state, $ionicSlideBoxDelegate)
	{
		var vm = this;

		vm.startApp = startApp;
		vm.next = next;
		vm.previous = previous;
		vm.slideChanged = slideChanged;

		function startApp()
		{
			$state.go('tab.dash');
		}

		function next()
		{
			$ionicSlideBoxDelegate.next();
		}

		function previous()
		{
			$ionicSlideBoxDelegate.previous();
		}

		// Called each time the slide changes
		function slideChanged(index)
		{
			vm.slideIndex = index;
		}
	}


})();