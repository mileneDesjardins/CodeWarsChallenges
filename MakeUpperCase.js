// Write a function which converts the input string to uppercase.

function makeUpperCase(str) {
    // Code here
    return str.toUpperCase()
}

//Best practices
const makeUpperCase = str => str.toUpperCase();

// Syntaxe de base
La syntaxe d'une fonction fléchée est la suivante :


const nomDeLaFonction = (paramètres) => {
  // Corps de la fonction
};
Si la fonction prend un seul paramètre, les parenthèses autour du paramètre peuvent être omises :


const nomDeLaFonction = paramètre => {
  // Corps de la fonction
};
// Si la fonction ne prend pas de paramètres, vous devez utiliser des parenthèses vides :

const nomDeLaFonction = () => {
  // Corps de la fonction
};


// Retour implicite
const add = (a, b) => a + b;
Cela est équivalent à :


const add = (a, b) => {
  return a + b;
};