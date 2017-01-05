/**
 * Created by iKNSA.
 * Author: Khalid Sookia <khalidsookia@gmail.com>
 * Date: 05/01/17
 * Time: 01:00
 */

iknsaNgFlashes.directive('iknsaNgFlash', ['$rootScope', function ($rootScope) {
    return {
        restrict: 'AE',
        replace: false,
        link: function (scope, element) {
            scope.$on("$routeChangeSuccess", function () {
                if ($rootScope.flash === 'undefined' || !$rootScope.flash.length > 0) return;

                element.addClass('active');

                angular.forEach($rootScope.flash, function (flash, index) {
                    console.log(flash);
                    console.log(index);
                })
            });
        }
    }
}]);
