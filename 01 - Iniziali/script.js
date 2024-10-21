/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.

const initials = (names) => {
  const initialsArray = [];
  names.forEach((name) => {
    initialsArray.push(name[0]);
  });
  return initialsArray;
};

// Invoca la funzione qui e stampa il risultato in console
console.log(initials(names));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
