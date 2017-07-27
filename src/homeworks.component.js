(function(){
	'use strict';

	angular.module('FrontPage')
	.component('homeworks',{
		templateUrl: 'src/templates/homeworks.template.html',
		bindings: {
		homeworks: '<'
		}
	});


})();
