'use strict';

/* Services */
var service = angular.module('phonecatApp.service', ['ngResource']);

service.factory('MyService', function($http , $q){
    return {

        execute : function(data) {
            console.log("[MyService]inicio");
            var deferred = $q.defer();

            $http.post('/execute', { 'message' : data })
                .success(function(response) {
                    console.log("[MyService]succes");
                    deferred.resolve(response);
                })
                .error(function(response) {
                    console.log("[MyService]error");
                    deferred.reject(response);
                });
            console.log("[MyService]fin");
            return deferred.promise;
        }
    }
});



service.factory('Document', ['$resource',
    function($resource) {
        return $resource('http://localhost:8080/collections/test20/:id', {id: '@_id'});
    }]);


service.factory('DocumentServiceRest', function($http , $q , Document){
    return {

        search : function() {
            var deferred = $q.defer();

            Document.query(function(documents) {
                deferred.resolve(documents);
            }, function() {
                deferred.reject('Unable to fetch documents');
            });

            return deferred.promise;
        },
        get : function(id) {
            var deferred = $q.defer();

            Document.get({id: id}, function(document) {
                deferred.resolve(document);
            }, function() {
                deferred.reject('Unable to fetch document with id:'+ id);
            });

            return deferred.promise;
        }
    }
});
