/**
 * Created by iKNSA.
 * Author: Khalid Sookia <khalidsookia@gmail.com>
 * Date: 05/01/17
 * Time: 01:17
 */

iknsaNgFlashes.factory('IknsaNgFlashFactory', ['$rootScope', function ($rootScope) {
    var IknsaNgFlashFactory = {};

    IknsaNgFlashFactory.add = function (type, message) {
        var flashes = IknsaNgFlashFactory.getAll();

        flashes.push({
            type: type,
            message: message
        });

        $rootScope["flash"] = flashes;
    };

    IknsaNgFlashFactory.getAll = function () {
        return $rootScope.flash || [];
    };

    IknsaNgFlashFactory.get = function (type) {
        return IknsaNgFlashFactory.getAll()[type] || [];
    };

    IknsaNgFlashFactory.clearAll = function () {
        $rootScope.flash = [];
    };

    IknsaNgFlashFactory.clear = function (type) {
        $rootScope.flash[type] = [];
    };

    return IknsaNgFlashFactory;
}]);
