"use strict";
class Motorcycle extends Vehicle {
    rentalRate() {
        //$10 per hour
        return 5;
    }
    constructor(make, model, year, rented, isSelfStart) {
        super(make, model, year, rented);
        this._isSelfStart = isSelfStart;
    }
    get isSelfStart() {
        return this._isSelfStart;
    }
}
