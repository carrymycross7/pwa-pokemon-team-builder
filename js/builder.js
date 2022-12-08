(function (window) {
    function pageCtrl ($scope, $http, $document) {
        
        console.log('i am now in angular');
        
    }
    let app = angular.module('pageApp', ['selectize']);
    app.controller("pageCtrl", [
        '$scope' ,
        '$http',
        '$document',
        pageCtrl]);
})(window)