"use strict";
class Truck extends Vehicle {
    rentalRate() {
        //$10 per hour
        return 100;
    }
    constructor(make, model, year, rented, axleCapacity) {
        super(make, model, year, rented);
        this._axleCapacity = axleCapacity;
    }
    get axleCapacity() {
        return this._axleCapacity;
    }
}
