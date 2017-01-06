/**
 * Created by iKNSA.
 * Author: Khalid Sookia <khalidsookia@gmail.com>
 * Date: 05/01/17
 * Time: 01:00
 */

iknsaNgFlashes.directive('iknsaNgFlash', ['$rootScope', 'IknsaNgFlashFactory', "VALUE_PARAMETERS",
    function ($rootScope, IknsaNgFlashFactory) {
    return {
        restrict: 'AE',
        replace: false,
        templateUrl: $rootScope.flashTemplate !== 'undefined' && $rootScope.flashTemplate !== '' ? $rootScope.flashTemplate :
            'web/vendor/iknsa-ng-flashes/templates/flash.html',
        $scope: {},
        link: function (scope, element, attributes) {
            scope.$on("$routeChangeSuccess", function () {
                if ($rootScope.flash === 'undefined') return;

                element.addClass('active');

                var types = false;

                var flashes = {};
                angular.forEach(IknsaNgFlashFactory.get(), function (flash, index) {

                    if (attributes.iknsaNgFlash !== "") {
                        types = attributes.iknsaNgFlash.split(' ');

                        angular.forEach(types, function (type) {
                            if (type === flash.type) {
                                flashes[index] = flash;
                            }
                        });
                    } else {
                        flashes[index] = flash;
                    }
                });

                IknsaNgFlashFactory.setDisplayed(flashes);

                return flashes;
            });
        }
    }
}]);
