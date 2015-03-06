'use strict';

/* Controllers */

var phonecatApp = angular.module('phonecatApp', []);


phonecatApp.controller('PhoneListCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("1111");
    $http.get('phones/phones.json').success(function(data) {
        console.log("2222");
        $scope.phones = data;
    });
    console.log("3333");
    /*
    console.log("Parametros: data, status, headers, config");
    $http.get('phones/phones.json').success(function(data, status, headers, config) {
        console.log(data);
        console.log(status);
        console.log(headers);
        console.log(config);
    });

    console.log("con Promise");
    var promisePhones = $http.get('phones/phones.json');

    promisePhones.success(function(data, status, headers, config) {
        console.log(data);
        console.log(status);
        console.log(headers);
        console.log(config);
    });

    console.log("con Promise then ");
    var promisePhones = $http.get('phones/phones.json');

    promisePhones.then (
        function(data) {
            console.log("exito");
            console.log(data);
        },
        function(data) {
            console.log("error");
            console.log(data);
        },
        function(data) {
            console.log("notificacion");
            console.log(data);
        }
    );


    console.log("con error");
    $http.get('phones/phones.jsondddd').success(function(data) {
        console.log(data);
    }).error(function(data, status, headers, config) {
        console.log(data);
        console.log(status);
        console.log(headers);
        console.log(config);
    });



    console.log("[ERROR] con Promise then ");
    var promisePhones = $http.get('phones/phones.jsonssss');

    promisePhones.then (
        function(data) {
            console.log("exito");
            console.log(data);
        },
        function(data) {
            console.log("error");
            console.log(data);
        },
        function(data) {
            console.log("notificacion");
            console.log(data);
        }
    );
     */
  $scope.orderProp = 'age';
}]);
