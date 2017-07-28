(function () {
'use strict';

angular.module('FrontPage')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/templates/home.template.html'
  })

  .state('resume', {
    url: '/resume',
    templateUrl: 'src/templates/resume.template.html',
    controller: 'ResumeController as ResCtrl',
    resolve: {
      websites: ['ProjectsService', function (ProjectsService) {
        return ProjectsService.getProjectsForCategory("website");
      }],
      homeworks: ['ProjectsService', function (ProjectsService) {
        return ProjectsService.getProjectsForCategory("homework");
      }]
    }
  })

  .state('projects', {
    url: '/projects',
    templateUrl: 'src/templates/projects.template.html',
    controller: 'ProjectsController as proCtrl',
    resolve: {
      websites: ['ProjectsService', function (ProjectsService) {
        ProjectsService.getProjectsForCategory("website").then(
          function(response){
            console.log("4:22pm, on projects page, websites data:")
            console.log(response);
            return response
          }
        );
      }],
      homeworks: ['ProjectsService', function (ProjectsService) {
        var dummy2 = ProjectsService.getAllProjects().then(function(r){return r.data});
        console.log("On projects page, array of all 9 projects:");
        console.log(dummy2);
        return dummy2;
      }]
    }
  })

  .state('gallery', {
    url: '/gallery',
    templateUrl: 'src/templates/gallery.template.html'
  });
  // Premade list page
  // .state('categories', {
  //   url: '/categories',
  //   templateUrl: 'src/templates/main-categories.template.html',
  //   controller: 'CategoriesController as catCtrl',
  //   resolve: {
  //     categories: ['MenuDataService', function (MenuDataService) {
  //       return MenuDataService.getAllCategories();
  //     }]
  //   }
  // })
  //
  // .state('categories.items', {
  //   url: '/items/{shortName}',
  //   templateUrl: 'src/templates/main-items.template.html',
  //   controller: 'ItemsController as itemCtrl',
  //   resolve: {
  //     items: ['$stateParams', 'MenuDataService',
  //           function ($stateParams, MenuDataService) {
  //             return MenuDataService.getItemsForCategory($stateParams.shortName);
  //           }],
  //   }
  // });
}

})();
