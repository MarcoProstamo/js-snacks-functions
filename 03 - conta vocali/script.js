/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "javascript";

// Dichiara la funzione qui.
const vocalsCounter = (string) => {
  let vocalsCounter = 0;
  string = string.toLowerCase();
  string = string.split("");
  string.forEach((char) => {
    char === "a" || char === "e" || char === "i" || char === "o" || char === "u"
      ? vocalsCounter++
      : null;
  });
  return vocalsCounter;
};

// Invoca la funzione qui e stampa il risultato in console
console.log(vocalsCounter(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
