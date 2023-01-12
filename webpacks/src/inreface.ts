/* interface=> Une interface est un contrat qui définit la forme que doit prendre un objet JavaScript
 C'est-à-dire qu'il doit avoir exactement les propriétés définies, ni plus ni moins.*/
interface User {
readonly username: string;
age: number;
isDrinking: boolean;
isHealthy?: boolean;
isSmoking?: boolean;
[propName: string]: any;
}

const user: User = {
  username: "Jean",
  age: 20,
  isDrinking: true,
  isSmoking: true,
  isHealthy: false
};

const newUser: User = {
    username: 'Paul',
    age:50,
    isOnline: true
};

function greet(user: { username: string }): void {
  console.log(`hello ${user.username}`);
}

greet(user);

function death(user: User){}

function goodShape(user: User) {}
