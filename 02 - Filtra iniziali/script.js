/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.
const filteredInitials = (names, filterChar) => {
  const filteredInitialsArray = [];
  names.forEach((name) => {
    name[0] === filterChar ? filteredInitialsArray.push(name) : null;
  });
  return filteredInitialsArray;
};

// Invoca la funzione qui e stampa il risultato in console
console.log(filteredInitials(names, "A"));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
