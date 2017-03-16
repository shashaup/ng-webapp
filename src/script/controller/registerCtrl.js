'use strict';
angular.module('app')
.controller('registerCtrl',['$interval','$http','$scope','$state',function($interval,$http,$scope,$state){
  $scope.submit = function() {
    $http.get('data/regist.json',$scope.user).then(function(resp){
      console.log(resp.data);
      $state.go('login');
    });
  };
  var count = 60;
  $scope.send = function() {
    $http.get('data/code.json').then(function(resp){
      if(1===resp.data.state) {
        count = 60;
        $scope.time = '60s';
        var interval = $interval(function() {
          if(count<=0) {
            $interval.cancel(interval);
            $scope.time = '';
          }else {
            count--;
            $scope.time = count + 's';
          }
        },1000);
      }
    });
  }
}]);
