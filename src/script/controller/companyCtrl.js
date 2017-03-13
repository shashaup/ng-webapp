'use strict';
angular.module('app').controller('companyCtrl',['$http','$state','$scope',function($http,$state,$scope){
  $http.get('/data/company.json?='+$state.params.id).then(function(resp){
    $scope.company = resp.data;
    // 广播/冒泡的坑.$broadcast向下广播
    $scope.$broadcast('abc',{id:1});
/*  $scope.$on('cba',function(event,data){
      console.log(event,data);
    }) */
  });
//  $scope.$broadcast('abc',{id:1});

    $scope.$on('cba',function(event,data){
      console.log(event,data);
    });
}]);
