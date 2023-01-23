// tableaux
const arr: string[] = ["pomme", "fraise", "tomate"];
const fruit = arr[0];

// les promesses
const promise: Promise<string | number> = new Promise((resolve, reject) => {
  resolve("fraise");
});
promise.then((res) => {});

//LesFonctions

interface Fruit {
   name: string;
   price: number 
}
interface Car {
   speed: number; 
}
const newCar: Car = {
    speed:50,
}

const newFruit: Fruit = {
    name: 'banane',
    price: 1,
}

function addItemCollection<T>(item: T, collection:T[]): T[] {
    return [...collection, item];
}
const myFruits = addItemCollection(newFruit, []);
const myCars = addItemCollection(newCar, []);

console.log(myFruits[0].price);
console.log(myCars[0].speed);


// les classes

class Stack<T> {
    items: T[]=[];
    push(item: T): void {
        this.items.push(item);
    }

    pop(): T | undefined {
       return this.items.pop(); 
    }

    display(): void {
        console.log(this.items);
    }
}

const newStackNumber = new Stack<number>();
newStackNumber.push(1);
newStackNumber.display();
newStackNumber.push(2);
newStackNumber.display();
const mynumber = newStackNumber.pop();

const newStacstring = new Stack<string>();
newStacstring.push("hello");
newStacstring.push("world");
newStacstring.display();
newStacstring.display();
const mystring = newStacstring.pop();

// Les contraintes génériques
interface Name {
    name: string;
}
function displayName<T extends Name>(object: T) {
    console.log(object.name);
}

function displayProp<T, U extends keyof T>(object: T, prop: U) {
    console.log(object[prop]);
}

displayProp({price: 50}, 'price')

//Collections et types génériques

interface User {
    username: string;
    age: number;
    address: {
        city: string;
    }
}

type LightUser = Pick<User, "username" | "age"> // on rajoute les propriétés qui nous intéresse
type LightUser2 = Omit<User, "address"> // on retire les propriètés qui nous intéresse pas


