'use strict';

/* Services */
var service = angular.module('phonecatApp.service', []);

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
