'use strict';

/* Controllers */

var phonecatApp = angular.module('phonecatApp', ['phonecatApp.service']);


phonecatApp.controller('PhoneListCtrl', ['$scope','MyService',  function($scope,MyService) {

    console.log("##############CASO DE EXITO###################");
    var promise = MyService.execute({"field1":"aaaaa","field2":"1"});
    console.log("despues de invocar el servicio caso de exito");

    promise.then(function(resultado) {
        console.log(resultado);
    }, function(error) {
        console.log(error);
    });

    console.log("##############CASO DE ERROR###################")

    var promise2 = MyService.execute({"field1":"aaaaa","field2":"2"});
    console.log("despues de invocar el servicio caso de error");

    promise2.then(function(resultado) {
        console.log(resultado);
    }, function(error) {
        console.log(error);
    });


}]);
