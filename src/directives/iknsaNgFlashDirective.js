/**
 * Created by iKNSA.
 * Author: Khalid Sookia <khalidsookia@gmail.com>
 * Date: 05/01/17
 * Time: 01:00
 */

iknsaNgFlashes.directive('iknsaNgFlash', ['$rootScope', 'IknsaNgFlashFactory', function ($rootScope, IknsaNgFlashFactory) {
    return {
        restrict: 'AE',
        replace: false,
        link: function (scope, element, attributes) {
            scope.$on("$routeChangeSuccess", function () {
                if ($rootScope.flash === 'undefined' || !$rootScope.flash.length > 0) return;

                element.addClass('active');

                console.log(attributes);
                angular.forEach($rootScope.flash, function (flash) {
                    console.log(flash);
                })
            });
        }
    }
}]);
