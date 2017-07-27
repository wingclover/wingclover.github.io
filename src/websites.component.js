(function(){
	'use strict';

	angular.module('FrontPage')
	.component('websites',{
		templateUrl: 'src/templates/websites.template.html',
		bindings: {
		websites: '<'
		}
	});


})();
