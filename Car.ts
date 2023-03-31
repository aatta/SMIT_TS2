class Car extends Vehicle {
    public rentalRate(): number {
        
        //$10 per hour
        return 10;
    }

    private _mileage: number;

    constructor(make: string, model: string, year: number, rented: boolean, mileage: number) {
        super(make, model, year, rented);

        this._mileage = mileage;
    }

    get mileage() {
        return this._mileage;
    }
}