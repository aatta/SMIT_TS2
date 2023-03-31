"use strict";
const car1 = new Car('Suzuki', 'Mehran', 2013, false, 65000);
const car2 = new Car('Suzuki', 'Cultus', 2015, false, 47000);
const truck = new Car('Hino', 'HINO 700', 2022, true, 198000);
const motorcycle = new Car('Suzuki', 'GR 150', 2022, false, 6500);
//take car1 on rent
car1.rent();
//return car2
car2.return();
//take truck on rent
truck.rent();
//return truck
truck.return();
//return motorcycle
motorcycle.return();
//take motorcycle on rent
motorcycle.rent();
const consolidatedData = {
    car1,
    car2,
    truck,
    motorcycle
};
console.table(consolidatedData);
