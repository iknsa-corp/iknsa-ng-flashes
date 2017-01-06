/**
 * Created by iKNSA.
 * Author: Khalid Sookia <khalidsookia@gmail.com>
 * Date: 05/01/17
 * Time: 01:17
 */

iknsaNgFlashes.factory('IknsaNgFlashFactory', ['$rootScope', function ($rootScope) {
    var IknsaNgFlashFactory = {};

    IknsaNgFlashFactory.getUniqueId = function () {
        return 'uniqid-' + new Date().getTime() + Math.floor((Math.random() * 100) + 1);
    };

    IknsaNgFlashFactory.add = function (type, message) {
        var flashes = IknsaNgFlashFactory.getAll();

        flashes.push({
            index: IknsaNgFlashFactory.getUniqueId(),
            type: type,
            message: message,
            displayed: false
        });

        $rootScope["flashes"] = flashes;
    };

    IknsaNgFlashFactory.getAll = function () {
        return $rootScope.flashes || [];
    };

    IknsaNgFlashFactory.get = function (type) {
        return IknsaNgFlashFactory.getAll()[type] || [];
    };

    IknsaNgFlashFactory.update = function (flash) {
        angular.forEach(IknsaNgFlashFactory.getAll(), function (initialFlash) {
            console.log(initialFlash);
        })
    };

    IknsaNgFlashFactory.clearAll = function () {
        $rootScope.flashes = [];
    };

    /**
     * @todo work out the method
     * @param flash object
     */
    IknsaNgFlashFactory.clear = function (flash) {
        var originalFlashes = IknsaNgFlashFactory.getAll();
        var newFlashes = [];

        angular.forEach(originalFlashes, function (originalFlash) {
            if (flash.index != originalFlash.index) {
                newFlashes.push(flash);
            }
        });

        console.log(newFlashes);

        // $rootScope["flashes"] = newFlashes;
    };

    return IknsaNgFlashFactory;
}]);
