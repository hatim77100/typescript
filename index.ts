const foo: string = "string";
const bar: number = 4;
const boolean: boolean = true; // true // 1 === 1;

const obj: object = new Map(); //[] //{name: 'jean'}
const anything: any = {}; // on peut assigner ce qu'on veut au type any
const myconst: 5 = 5; // la seule valeur accépté c'est 5

const arr: number[] = [1, 5, 9];
const arr2: Array<string> = ["un", "deux", "trois"];
const tuple: [number, number, string] = [1, 2, "un"];

const foo2: null = null;
const foo3: undefined = undefined;
const foo4: void = null; // void => absence de valeur
const foo5: void = undefined;

function add(nbr1: number, nbr2: number): void {
  // void => c-à-d que cette fonction ne va rien retourné
  console.log(nbr1 + nbr2);
}

function loop(error: any): never {
  // while(true);
  throw new Error(error);
}

// Enum

enum XhrReadyState {
  UNSENT, // ou UNSENT = 1 comme ça on commence par 1
  OPENED,
  HEADERS_RECEIVED,
  LOADING,
  DONE,
}

enum Role {
  ADMIN,
  READ_ONLY,
  READ_WRITE,
}
// if (user.role === Role.ADMIN) {
//   // …
// }

// const readyState = 0;
// if (readyState === XhrReadyState.UNSENT) {
//   // requête configurée
// }
// if (readyState === XhrReadyState.OPENED) {
//   // Entête de la réponse reçues
// }
// if (readyState === XhrReadyState.HEADERS_RECEIVED) {
//   // chargement en cours
// }
// if (readyState === XhrReadyState.LOADING) {
//   // Terminé
// }
// if (readyState === XhrReadyState.DONE) {
//   // Terminé
// }

// # inférence => elle permet de déduire le type de vos assignations.
let myvar = "Hello";
//  myvar = 'World';

//#assertion =>  c'est de désigner un type et d'obligez typescript à le respecter, c'est ce qu'on appelle l'assertion (as type)
let username: any;
username = "Jean";
const nbr: number = (username as string).length;

//les fonctions nomé
function ad(nbr1: number, nbr2: number) {
  return nbr1 + nbr2;
}

//1/2 Typer une fonction avant sa déclaration
let func: (nbr1: number, nbr2: number) => number;

func = (a: number, b: number) => {
  return a + b;
};
/*2/2 Parfois si vous ne savez pas la valeur de retour ou le type des arguments
car ils sont dynamiques, vous pourrez utiliser le type plus générique Function. */
let maFonction: Function;

// les pramètres optionnel => Les paramètres optionnels doivent toujours être ajoutés après les paramètres obligatoires.
func = (a: number, b?: number) => {
  return a + b;
};

// Paramètres par défaut et rest
func = (a: number, b = 0) => {
  return a + b;
};

let func1 = (...numbers: number[]) => {
  return numbers.reduce((acc,i) => {
    acc+=i;
    return acc;
  },0)
};

//La surcharge de fonction
function maFonction(param: string): string;
function maFonction(param: number): number;
function maFonction(param: boolean): boolean;
function maFonction(param: any): any {
  return param;
}

maFonction('test').toLocaleLowerCase();
maFonction(42).toFixed();