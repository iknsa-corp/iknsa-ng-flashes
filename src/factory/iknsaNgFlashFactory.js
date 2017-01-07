/**
 * Created by iKNSA.
 * Author: Khalid Sookia <khalidsookia@gmail.com>
 * Date: 05/01/17
 * Time: 01:17
 */

iknsaNgFlashes.factory('IknsaNgFlashFactory', ['$rootScope', function ($rootScope) {

    var IknsaNgFlashFactory = {
        flashBag: {}
    };

    IknsaNgFlashFactory.getUniqueId = function () {
        return '-' + new Date().getTime() + Math.floor((Math.random() * 100) + 1);
    };

    IknsaNgFlashFactory.add = function (type, message, status, id) {
        var flashId = id || type.replace(' ', '_') + IknsaNgFlashFactory.getUniqueId();

        IknsaNgFlashFactory.flashBag[flashId] = {};
        IknsaNgFlashFactory.flashBag[flashId]['status'] = status || 0;
        IknsaNgFlashFactory.flashBag[flashId]['normedIndex'] = flashId;
        IknsaNgFlashFactory.flashBag[flashId]['index'] = type + IknsaNgFlashFactory.getUniqueId();
        IknsaNgFlashFactory.flashBag[flashId]['type'] = type;
        IknsaNgFlashFactory.flashBag[flashId]['message'] = message;
        IknsaNgFlashFactory.flashBag[flashId]['displayed'] = false;

        if (status === 1) IknsaNgFlashFactory.get();

        return IknsaNgFlashFactory;
    };

    IknsaNgFlashFactory.get = function () {
        var flashes = {};

        angular.forEach(IknsaNgFlashFactory.flashBag, function (flash, index) {
            if (flash.status === 1 && !flash.displayed) {
                flashes[index] = flash;
            }
        });

        return $rootScope.flashes = flashes;
    };

    IknsaNgFlashFactory.set = function (flashes) {
        $rootScope["flashes"] = flashes;
    };

    IknsaNgFlashFactory.clearAll = function () {
        $rootScope.flashes = {};
    };

    IknsaNgFlashFactory.updateFlashes = function () {
        var flashes = {};
        angular.forEach(IknsaNgFlashFactory.flashBag, function (flash, index) {
            flash.status += 1;
            if (flash.status > 3) delete $rootScope.flashes[index];
            flashes[index] = flash;
        });

        IknsaNgFlashFactory.flashBag = flashes;
    };

    /**
     * @param flashes object of flash objects
     */
    IknsaNgFlashFactory.setDisplayed = function (flashes) {
        var newFlashes = {};

        angular.forEach(flashes, function (flash, index) {
            flash.displayed = true;

            newFlashes[index] = flash;
        });
    };

    return IknsaNgFlashFactory;
}]);
