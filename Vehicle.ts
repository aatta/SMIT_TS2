abstract class Vehicle {
    private _make: string;
    private _model: string;
    private _year: number;
    private _rented: boolean;

    constructor(make: string, model: string, year: number, rented: boolean) {
        this._make = make;
        this._model = model;
        this._year = year;
        this._rented = rented;
    }

    get make () {
        return this._make;
    }

    get model () {
        return this._model;
    }

    get year () {
        return this._year;
    }

    get rented () {
        return this._rented;
    }

    set rented(value: boolean) {
        this._rented = value;
    }

    public abstract rentalRate(): number;

    public rent() {
        if (this._rented) {
            console.log("Vehicle is already rented.");
        } else {
            this._rented = true;
        }
    }

    public return() {
        if (!this._rented) {
            console.log("Vehicle is not rented.");
        } else {
            this._rented = false;
        }
    }
}