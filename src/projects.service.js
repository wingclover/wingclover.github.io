(function(){
	'use strict';

	angular.module('FrontPage')
	.service('ProjectsService', ProjectsService);

	ProjectsService.inject = ['$http'];
	function ProjectsService ($http){
		var service = this;

		service.getAllProjects = function(){
			return $http({
				method: "GET",
				url: "https://api.myjson.com/bins/pz5xx"
			}).then(function(result){
				return result.data})
		};

		service.getProjectsForCategory = function(category){
			var categoryUrl = "https://api.myjson.com/bins/pz5xx?type=" + category;
			return $http({
				method: "GET",
				url: categoryUrl
			}).then(function(result){
				return result.data.projects})
		};
	};
})();
