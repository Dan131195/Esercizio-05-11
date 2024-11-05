/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let a = 5;
let b = 7;

if (a > b) {
  console.log('Il numero maggiore è a');
} else {
  console.log('Il numero maggiore è b')
};

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

let number1 = 11;

console.log(number1 != 5);

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

let number2 = 10;

if (number2 % 5 == 0) {
  console.log('Divisibile per 5');
} else {
  console.log('Non divisibile per 5')
};

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let number3 = 15;
let number4 = 8;

console.log(number3 == 8 || number4 == 8 || number3 + number4 == 8 || number3 - number4 == 8);

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 30;
let spedition = 10;
let checkout;

if (totalShoppingCart < 50) {
  console.log(checkout = totalShoppingCart + spedition);
} else {
  console.log(checkout = totalShoppingCart)
};

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

let totalShoppingCart2 = 70;
let spedition2 = 10;
let sale = totalShoppingCart * 20 / 100
let checkout2;

if (totalShoppingCart2 - sale < 50) {
  console.log(checkout2 = totalShoppingCart2 - sale + spedition2);
} else {
  console.log(checkout2 = totalShoppingCart2 - sale)
};

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let x = 1;
let y = 3;
let z = 2;

if (x > y && y > z) {
  console.log(x, y, z);
} else if (x > y && x > z && z > y) {
  console.log(x, z, y)
} else if (z > y && y > x) {
  console.log(z, y, x)
} else if (z > y && z > x && x > y) {
  console.log(z, x, y)
} else if (y > x && y > z && z > x) {
  console.log(y, z, x)
} else {
  console.log(y, x, z)
};


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let number5 = 20;

console.log(typeof number5);

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let number6 = 11;

if (number6 % 2 == 0) {
  console.log('Numero pari')
} else {
  console.log('Numero dispari')
};

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 7
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = 'Toronto';

console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;

console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

delete me.skills[2];

console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let array1 = [];
array1 = [1,2,3,4,5,6,7,8,9,10];
console.log(array1);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

array1[9] = 100;
console.log(array1)
