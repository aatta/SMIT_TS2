class Motorcycle extends Vehicle {
    public rentalRate(): number {
        
        //$10 per hour
        return 5;
    }

    private _isSelfStart: boolean;

    constructor(make: string, model: string, year: number, rented: boolean, isSelfStart: boolean) {
        super(make, model, year, rented);

        this._isSelfStart = isSelfStart;
    }

    get isSelfStart() {
        return this._isSelfStart;
    }
}