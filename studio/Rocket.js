"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        var weight = 0;
        items.forEach(function (element) {
            weight += element.massKg;
        });
        return weight;
    };
    ;
    /*sumMass( items: Payload[] ): number {
        let total: number = 0
        items.forEach(item => {
            total += item.massKg
        })
        return total
    }*/
    Rocket.prototype.currentMassKg = function () {
        var mass = this.sumMass(this.cargoItems) + this.sumMass(this.astronauts);
        return mass;
    };
    ;
    Rocket.prototype.canAdd = function (item) {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        }
        else
            return false;
    };
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo) === true) {
            this.cargoItems.push(cargo);
            return true;
        }
        else
            return false;
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut) === true) {
            return true;
        }
        else
            return false;
    };
    return Rocket;
}());
exports.Rocket = Rocket;
