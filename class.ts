class Vehicule {
    wheel = 4;
}

class Voiture extends Vehicule{
    public speed: number;
    private maxSpeed: number = 100;
    readonly airbag: boolean;
    move() {

    }
    constructor() {
        super();
        this.speed = 30;
    }
}

// Propriétés statiques et notation raccourcie
/*Notation raccourcie */
class Personne {
    constructor(public nom: string) {}
  }

/* Propriétés et méthodes statiques */
class Personnes {
    constructor(public prenom: string, public nom: string) {}
  
    static decrire () {
      console.log('Personnes est une classe pour créer des personnes.');
    }
  }
  
  const dylan = new Personne('Bob', 'Dylan');
  
  Personnes.decrire(); //  Personne est une classe pour créer des personnes.
  dylan.decrire(); // Error : dylan.decrire is a static member of type 'Personne'


/* Les classes abstraites => Les classes abstraites sont des classes 
qui servent de base à d'autres classes grâce à l'héritage. Elles ne sont pas instanciables.
Elles servent à définir la structure de classes sans les implémenter. */  

abstract class Personnee {
    constructor(public genre: string) {}
  }
  
  const personne = new Personnee(); // Cannot create an instance of an abstract class
  
  class Homme extends Personne {
    constructor() {
      super('homme');
    }
  }
  
  const homme = new Homme();

  /* Les méthodes abstraites
Au sein d'une classe abstraite, il est possible de définir des méthodes abstraites, ces méthodes
 servent à définir comment elles doivent être créées dans les méthodes des classes héritées : */

 abstract class Personne2 {
    constructor(public genre: string) {}
  
    abstract direBonjour(): void
  
    direAuRevoir() {
      console.log('Au revoir !')
    }
  }
  
  
  class Femme extends Personne2 {
    constructor() {
      super('homme');
    }
  
    direBonjour() {
      console.log('Bonjour !')
    }
  }
  
  const femme = new Femme();
  femme.direAuRevoir();
  femme.direBonjour();