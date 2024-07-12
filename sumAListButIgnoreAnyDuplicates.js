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
