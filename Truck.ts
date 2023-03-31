class Truck extends Vehicle {
    public rentalRate(): number {
        
        //$10 per hour
        return 100;
    }

    private _axleCapacity: number;

    constructor(make: string, model: string, year: number, rented: boolean, axleCapacity: number) {
        super(make, model, year, rented);

        this._axleCapacity = axleCapacity;
    }

    get axleCapacity() {
        return this._axleCapacity;
    }
}