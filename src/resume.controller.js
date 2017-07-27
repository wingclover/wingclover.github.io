(function () {
'use strict';

angular.module('FrontPage')
.controller('ResumeController', ResumeController);


ResumeController.$inject = ['websites', 'homeworks'];
function ResumeController(websites, homeworks) {
  var ctrl = this;
  ctrl.websites = websites;
  ctrl.homeworks = homeworks;
}

})();
