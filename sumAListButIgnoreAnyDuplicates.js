// Please write a function that sums a list, but ignores any duplicated items in the list.

// For instance, for the list [3, 4, 3, 6] the function should return 10,
// and for the list [1, 10, 3, 10, 10] the function should return 4.

function sumNoDuplicates(numList) {
  if (numList.length == 0) {
    return 0;
  } else {
    const result = [
      ...numList.reduce(
        (map, value) => map.set(value, map.has(value)),
        new Map()
      ),
    ]
      .filter(([_, isDuplicate]) => !isDuplicate)
      .map(([uniqueValue]) => uniqueValue);
    if (result.length == 0) {
      return 0;
    } else {
      return result.reduce((accumulator, current) => accumulator + current);
    }
  }
}

// Étape 1: Utilisation de reduce avec Map
// numList.reduce((map, value) => { ... }, new Map()) :

// reduce est une méthode qui itère sur chaque élément value du tableau numList.
// new Map() initialise une nouvelle Map, une structure de données permettant de stocker des paires clé-valeur.
// Dans la fonction de réduction (map, value) => { ... }, map est l'accumulateur qui est une Map, et value est l'élément actuel de numList.
// Dans la fonction de réduction :

// map.set(value, map.has(value)) : Pour chaque value dans numList, cela ajoute une entrée dans la Map.

// La clé est value.
// La valeur est map.has(value), qui vérifie si value est déjà présent dans la Map.
// Cela signifie que si value est déjà dans la Map, sa valeur sera true, sinon false.
// À la fin de cette opération, la Map contiendra chaque valeur unique de numList avec un booléen indiquant si elle est un doublon.

// Étape 2: Utilisation de spread operator et filter
// [...numList.reduce(...)] :

// Le spread operator (...) est utilisé pour convertir le résultat de reduce (une Map) en un tableau d'entrées de Map.
// Cela transforme la Map en un tableau où chaque élément est une paire [value, isDuplicate], indiquant chaque valeur unique et si elle est un doublon.
// Étape 3: Filtrage des doublons avec filter
// .filter(([_, isDuplicate]) => !isDuplicate) :

// filter est utilisé pour filtrer le tableau résultant.
// ([_, isDuplicate]) => !isDuplicate : Pour chaque paire [value, isDuplicate], cela vérifie si isDuplicate est faux (!isDuplicate).
// Cela signifie que seules les paires où value est unique (non un doublon) seront conservées dans le tableau final.
// Étape 4: Extraction des valeurs uniques avec map
// .map(([uniqueValue]) => uniqueValue) :

// map est utilisé pour transformer le tableau filtré en un tableau qui contient uniquement les valeurs uniques (uniqueValue).
// ([uniqueValue]) => uniqueValue : Pour chaque paire [uniqueValue], cela extrait uniqueValue et le place dans le tableau final.
// Conclusion
// Le résultat final dans result est un tableau qui contient toutes les valeurs uniques de numList, obtenues en utilisant une combinaison de reduce avec une Map, spread operator, filter et map. Cette approche est efficace pour identifier et récupérer les valeurs uniques d'un tableau tout en gérant les doublons de manière élégante en JavaScript.

//Best practices
function sumNoDuplicates(arr) {
  let uniqueArr = [];
  let sum = 0;
  arr.forEach((num) => {
    if (arr.indexOf(num) === arr.lastIndexOf(num)) {
      uniqueArr.push(num);
      sum += num;
    }
  });
  return sum;
}

// Explication Étape par Étape :
// Initialisation des Variables :

// uniqueArr est un tableau vide destiné à stocker les éléments uniques de arr.
// sum est une variable initialisée à 0 qui servira à calculer la somme des éléments uniques.
// Boucle forEach :

// arr.forEach((num) => { ... }) itère sur chaque élément num du tableau arr.
// Condition if :

// if (arr.indexOf(num) === arr.lastIndexOf(num)) vérifie si l'index de la première occurrence de num (arr.indexOf(num)) est égal à l'index de sa dernière occurrence (arr.lastIndexOf(num)).
// Cela signifie que num apparaît une seule fois dans le tableau arr.
// Ajout à uniqueArr et Calcul de sum :

// Si la condition if est vraie (c'est-à-dire que num est unique), num est ajouté à uniqueArr avec uniqueArr.push(num) et sa valeur est ajoutée à sum avec sum += num.
// Retour de la Somme :

// À la fin de la boucle forEach, la fonction retourne sum, qui contient la somme des éléments uniques de arr.

// Tableau d'origine : [3, 1, 2, 3, 4, 1, 5]

// Indices:    0  1  2  3  4  5  6
// Éléments:   3  1  2  3  4  1  5

// Explication de la condition :
// arr.indexOf(num) : Cette fonction renvoie l'index de la première occurrence de num dans le tableau arr.
// arr.lastIndexOf(num) : Cette fonction renvoie l'index de la dernière occurrence de num dans le tableau arr.
// Illustration :
// Pour num = 3 :

// arr.indexOf(3) retourne 0.
// arr.lastIndexOf(3) retourne 3.
// Donc, 0 === 3 est faux, car 3 apparaît plus d'une fois dans le tableau.
// Pour num = 1 :

// arr.indexOf(1) retourne 1.
// arr.lastIndexOf(1) retourne 5.
// Donc, 1 === 5 est faux, car 1 apparaît plus d'une fois dans le tableau.
// Pour num = 2 :

// arr.indexOf(2) retourne 2.
// arr.lastIndexOf(2) retourne 2.
// Donc, 2 === 2 est vrai, car 2 apparaît exactement une fois dans le tableau.
// Conclusion :
// La condition if (arr.indexOf(num) === arr.lastIndexOf(num)) est utilisée pour vérifier si un élément num dans le tableau arr est unique, c'est-à-dire s'il n'apparaît qu'une seule fois à la fois au début et à la fin du tableau.
