(function () {
'use strict';

angular.module('FrontPage')
.controller('ProjectsController', ProjectsController);


ProjectsController.$inject = ['websites', 'homeworks'];
function ProjectsController(websites, homeworks) {
  var ctrl = this;
  ctrl.websites = websites;
  ctrl.homeworks = homeworks;
}

})();
