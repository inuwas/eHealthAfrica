var formControlModule = angular.module("formControlModule",[]);
formControlModule.controller('UserNameController', function($scope, pouchDB) {
  var db = pouchDB('db');
});
