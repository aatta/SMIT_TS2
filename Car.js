"use strict";
class Car extends Vehicle {
    rentalRate() {
        //$10 per hour
        return 10;
    }
    constructor(make, model, year, rented, mileage) {
        super(make, model, year, rented);
        this._mileage = mileage;
    }
    get mileage() {
        return this._mileage;
    }
}
