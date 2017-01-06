/**
 * Created by iKNSA.
 * Author: Khalid Sookia <khalidsookia@gmail.com>
 * Date: 05/01/17
 * Time: 01:17
 */

iknsaNgFlashes.service('IknsaNgFlashFactory', ['$rootScope', function ($rootScope) {

    this.displayedFlashes = {};

    this.getUniqueId = function () {
        return '-' + new Date().getTime() + Math.floor((Math.random() * 100) + 1);
    };

    this.add = function (type, message, id) {
        var flashes = this.get();

        var flashId = id || type.replace(' ', '_') + this.getUniqueId();

        flashes[flashId] = {};
        flashes[flashId]['normedIndex'] = flashId;
        flashes[flashId]['index'] = type + this.getUniqueId();
        flashes[flashId]['type'] = type;
        flashes[flashId]['message'] = message;
        flashes[flashId]['displayed'] = false;

        $rootScope["flashes"] = flashes;
    };

    this.get = function () {
        return $rootScope.flashes || {};
    };

    this.set = function (flashes) {
        $rootScope["flashes"] = flashes;
    };

    this.clearAll = function () {
        $rootScope.flashes = {};
    };

    this.updateFlashes = function () {
        var newFlashes = this.displayedFlashes;

        angular.forEach(newFlashes, function (flash, index) {
            if (flash.displayed) delete $rootScope.flashes[index];
        });
    };

    /**
     * @param flashes object of flash objects
     */
    this.setDisplayed = function (flashes) {
        var newFlashes = {};

        angular.forEach(flashes, function (flash, index) {
            flash.displayed = true;

            newFlashes[index] = flash;
        });

        this.displayedFlashes = newFlashes;
    };

    return this;
}]);
