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
        link: function (scope, element, attributes) {
            scope.$on("$routeChangeSuccess", function () {
                if ($rootScope.flash === 'undefined') return;

                element.addClass('active');

                var types = false;

                var flashes = [];
                angular.forEach(IknsaNgFlashFactory.getAll(), function (flash) {

                    if (attributes.iknsaNgFlash !== "") {
                        types = attributes.iknsaNgFlash.split(' ');

                        angular.forEach(types, function (type) {
                            if (type === flash.type) {
                                flashes.push(flash);
                                IknsaNgFlashFactory.clear(flash);
                            }
                        });
                    } else {
                        flashes.push(flash);
                        IknsaNgFlashFactory.clear(flash);
                    }
                });

                return flashes;
            });
        }
    }
}]);
