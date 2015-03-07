'use strict';

/* Controllers */

var phonecatApp = angular.module('phonecatApp', ['phonecatApp.service']);

phonecatApp.config(function($httpProvider){
    $httpProvider.defaults.headers.common.Authorization = 'Basic JOSEMARTINEZ'
});


phonecatApp.controller('PhoneListCtrl', ['$scope','MyService',  function($scope,MyService) {

    console.log("##############CASO DE EXITO###################");
    var promise = MyService.execute({"field1":"aaaaa","field2":"1"});
    console.log("despues de invocar el servicio caso de exito");

    promise.then(function(resultado) {
        console.log(resultado);
    }, function(error) {
        console.log(error);
    });

    console.log("##############CASO DE ERROR###################");

    var promise2 = MyService.execute({"field1":"aaaaa","field2":"2"});
    console.log("despues de invocar el servicio caso de error");

    promise2.then(function(resultado) {
        console.log(resultado);
    }, function(error) {
        console.log(error);
    });


}]);

phonecatApp.controller('ExampleHttpCtrl', ['$scope', '$http', function($scope,$http) {

    //$http.defaults.headers.common.Authorization = 'Basic YmVlcDpib29w';


    $scope.metodo1 = function() {
        console.log("1111");
        $http.get('phones/phones.json').success(function(data) {
            console.log("2222");
            console.log(data);
            $scope.phones = data;
        });
        console.log("3333");
    };

    $scope.metodo2 = function() {

        console.log("Parametros: data, status, headers, config");
        $http.get('phones/phones.json').success(function(data, status, headers, config) {
            console.log(data);
            console.log(status);
            console.log(headers);
            console.log(config);
        });

    };

    $scope.metodo3 = function() {
        console.log("con Promise");
        var promisePhones = $http.get('phones/phones.json');

        promisePhones.success(function(data, status, headers, config) {
            console.log(data);
            console.log(status);
            console.log(headers);
            console.log(config);
        });

    };
    $scope.metodo4 = function() {

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

    };
    $scope.metodo5 = function() {

        console.log("http con error");
        $http.get('phones/phones.jsondddd').success(function(data) {
            console.log(data);
        }).error(function(data, status, headers, config) {
            console.log(data);
            console.log(status);
            console.log(headers);
            console.log(config);
        });
    };
    $scope.metodo6 = function() {

        console.log("ERROR con Promise then ");
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
    };
    $scope.metodo7 = function() {


        console.log("Modificación HEADERS en el Request");
        var req = {
            method: 'POST',
            url: 'processpost',
            //headers:{'Content-Type': undefined},
            data:{"field1":"aaaaa","field2":"1"}
        };

        $http(req)
            .success(function(response) {
                console.log("succes");
                console.log(response);
            })
            .error(function(response) {
                console.log("error");
                console.log(response);
            });

    };


}]);



phonecatApp.controller('ExampleRestCtrlList', ['$scope', '$http', 'DocumentServiceRest', function($scope,$http,DocumentServiceRest) {

    $scope.metodo1 = function() {
        var promisePhones = DocumentServiceRest.search();

        promisePhones.then (
            function(data) {
                console.log("exito");
                console.log(data);

                $scope.documents= data;
            },
            function(data) {
                console.log("error");
                console.log(data);
            }
        );
    };

}]);


phonecatApp.controller('ExampleRestCtrlGet', ['$scope', '$http', 'DocumentServiceRest', function($scope,$http,DocumentServiceRest) {

    $scope.metodo2 = function() {
        console.log($scope.documentId);
        var promisePhones = DocumentServiceRest.get($scope.documentId);

        promisePhones.then (
            function(data) {
                console.log("exito");
                console.log(data);
                $scope.documentObject= data;
            },
            function(data) {
                console.log("error");
                console.log(data);
            }
        );
    };

}]);


phonecatApp.controller('ExampleRestCtrlNew', ['$scope', '$http', 'Document', function($scope,$http,Document) {
    $scope.documentObject = new Document();

    $scope.metodo3 = function() {
        console.log($scope.documentObject );





        $scope.documentObject.$save(function(documentObject) {
            console.log("exito");
            console.log(documentObject);
            $scope.documentObject= new Document();
        });

    };

}]);