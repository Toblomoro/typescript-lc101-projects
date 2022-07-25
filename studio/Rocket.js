"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        for (var i = 0; i < this.cargoItems.length; i++) {
            var weight = 0;
            var itemsSum = (weight += i);
            return itemsSum;
        }
        return;
    };
    return Rocket;
}());
exports.Rocket = Rocket;
