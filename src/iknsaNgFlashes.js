/**
 * Created by iKNSA.
 * Author: Khalid Sookia <khalidsookia@gmail.com>
 * Date: 04/01/17
 * Time: 23:54
 */

var iknsaNgFlashes = angular.module('iknsaNgFlashes', ['ngRoute']);

iknsaNgFlashes.run(["$rootScope", function($rootScope) {
    $rootScope.$on( "$routeChangeStart", function() {

    });
}]);