
let userStatus:  'online' | 'offline' | 'busy'= 'online';

let value: number | string;

value = 1;
value = 'hello';

interface Car {
    seat: number
};

interface Truck {
    seat: number;
    load: (amount: number) => void;
}

const myVehicule: Car | Truck = {
    seat: 4
}

