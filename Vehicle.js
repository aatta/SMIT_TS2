"use strict";
class Vehicle {
    constructor(make, model, year, rented) {
        this._make = make;
        this._model = model;
        this._year = year;
        this._rented = rented;
    }
    get make() {
        return this._make;
    }
    get model() {
        return this._model;
    }
    get year() {
        return this._year;
    }
    get rented() {
        return this._rented;
    }
    set rented(value) {
        this._rented = value;
    }
    rent() {
        if (this._rented) {
            console.log("Vehicle is already rented.");
        }
        else {
            this._rented = true;
        }
    }
    return() {
        if (!this._rented) {
            console.log("Vehicle is not rented.");
        }
        else {
            this._rented = false;
        }
    }
}
