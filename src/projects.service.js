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
			return $http({
				method: "GET",
				url: "https://raw.githubusercontent.com/wingclover/wingclover.github.io/master/src/projects.json"
			}).then(function(result){
				return result.data.filter(function(pr){return pr.type==category});
			})
		};
	};
})();
