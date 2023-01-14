/* Une interface peut étendre une classe
Une interface peut hériter d'une classe et l'étendre.
Dans ce cas, l'interface hérite de la classe, à savoir de la forme des propriétés et méthodes
 de la classe mais pas de leur implémentation.*/

 class Player {
    protected record() {}
  }
  
  interface PlayerBasic extends Player {
    play(): void;
  }
  
  class Game extends Player implements PlayerBasic {
    play() {}
    record() {}
  }
 
  //Une classe peut implémenter une interface et une interface peut étendre une classe