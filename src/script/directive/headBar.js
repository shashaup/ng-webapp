'use strict';

angular.module('app').directive('appHeadBar',[function(){
	return {
		restrict: 'A',
		replace: true,
		templateUrl: 'view/template/headBar.html',
		scope: {
			text: '@'
		},
		link: function($scope){
			$scope.back = function(){
				window.history.back();
			};
/*			// 下面还没有初始化完成，广播已经结束了
			$scope.$on('abc',function(event,data){
				console.log(event,data)
			});
			$scope.$emit('cba',{name:2});    */

			//$scope.$digest();
		}
	};
}]);
