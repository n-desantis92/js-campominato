// Consegna
// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50

//funzioni

// genera un numero random fra un intervallo

function generaNumeroRandom(min, max) {
  var numero = Math.floor(Math.random() * 100) + 1;
  return numero;
}


// funzione cerco nell' array un'elemento
function inArray(array, elemento) {
  var i = 0;
  while (i < array.length ) {
    if (array[i] == elemento) {
      return true;
    }
    i++;
  }
  return false;
}

// fine funzioni
// inizio Campominato

// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
do {
  var sceltaDifficolta = parseInt(prompt("inserisci la difficoltà tra 0,1,2"));

} while (sceltaDifficolta != 0 && sceltaDifficolta != 1 && sceltaDifficolta != 2);


// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50
var numMaxBombe;

switch (sceltaDifficolta) {
  case 0:
    numMaxBombe = 100;
  break;

  case 1:
    numMaxBombe = 80;
  break;

  case 2:
    numMaxBombe = 50;
  break;

}


var bombe = [];

while (bombe.length < 16) {
  // vado a creare una var per pushare i numeri generati
  var numeroRandom = generaNumeroRandom(1, numMaxBombe);

  // controllo che i numeri inseriti non siano uguali
  if (inArray(bombe,numeroRandom) == false) {
    // vado ad inserire il numero generato
    bombe.push(numeroRandom);
  }
}
console.log(bombe);

var bombaEsplosa = false;
var numeriValidi = [];

while (bombaEsplosa == true) {
  // chiedo all'utente un numero finchè non perde
  var utente = parseInt(prompt("inserisci un numero da 1 a " + numMaxBombe));
  // se non è un numero  ed è inferiore a 1 o maggiore di 100
  if (isNaN(utente) < 1 || utente > numMaxBombe) {
    alert("inserisci un numero valido");
  }
  // se il numero digitato è incluso nelle bombe hai perso
  else if (bombe.includes(utente) == true) {
    bombaEsplosa = true;
    alert("hai perso");
  }
  // se il numero digitato è gia stato inserito
  else if (numeriValidi.includes(utente) == true) {
    alert("non puoi inserire lo stesso numero!!")
  }
  // se tutto è stato validato allora possiamo inserirlo nei numeri validi
   else {
    numeriValidi.push(utente);
  }

}
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
if (bombaEsplosa == true) {
  console.log("le bombe generate sono: " + bombe);
  console.log("il tuo punteggio è: " + numeriValidi.length);
} else {
  console.log("complimenti hai vinto!!!");
}







//funzioni

// genera un numero random fra un intervallo

// function generaNumeroRandom(min, max) {
//   var numero = Math.floor(Math.random() * 100) + 1;
//   return numero;
// }
//
// // funzione cerco nell' array un'elemento
// function inArray(array, elemento) {
//   var i = 0;
//   while (i < array.length ) {
//     if (array[i] == elemento) {
//       return true;
//     }
//     i++;
//   }
//   return false;
// }

// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50
// do {
//   var sceltaUtente = parseInt(prompt("inserisci il livello: 0,1,2"));
// } while (sceltaUtente != 0 && sceltaUtente != 1 && sceltaUtente != 2);
//
// var numMaxBombe;
// if (sceltaUtente == 0) {
//   numMaxBombe = 100;
// }else if (sceltaUtente == 1) {
//     numMaxBombe = 80;
// }else (sceltaUtente == 2) {
//     numMaxBombe = 50;
// }
// // Il computer deve generare 16 numeri casuali tra 1 e 100.
// var bombe = [];
//
// while (bombe.length <16) {
//   var numeroRandom = generaNumeroRandom(1, numMaxBombe);
//   if (inarray(bombe, numeroRandom) == false) {
//     bombe.push(numeroRandom);
//   }
// }
// console.log(bombe);
// // // In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// // L’utente non può inserire più volte lo stesso numero.
// // // Se il numero è presente nella lista delle bombe, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// var numeriValidi = [];
// var bombaEsplosa = false;
// var possibilita = numMaxBombe - 16;
//
// while (numeriValidi.length < possibilita && bombaEsplosa == false) {
//
//   var numero = parseInt(prompt("inserisci un numero"));
//
//   if (isNaN(numero) < 1 || numero > numMaxBombe ) {
//     alert("attenzione al numero inserito")
//   }else if (inarray(bombe, numero)  == true) {
//     bombaEsplosa = true;
//     alert("hai perso")
//   }else if (inarray(numeriValidi, numero)  == false) {
//     alert("non fare il furbetto");
//   }else {
//     numeriValidi.push(numero);
//   }
// }
//
// console.log("numeri validi inseriti" + numeriValidi.length);
// // La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// // Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
//
// if (bombaEsplosa == true) {
//   console.log("hai preso la bomba, hai inserito " + numeriValidi.length + " numeri validi");
//   console.log(bombaEsplosa);
// }else {
//   console.log("bravo hai vinto!!!");
// }
//


// oppure con switch
// // funzioni
// //
// // genera un numero random fra un intervallo
//
// function generaNumeroRandom(min, max) {
//   var numero = Math.floor(Math.random() * 100) + 1;
//   return numero;
// }
//
// // funzione cerco nell' array un'elemento
// function inArray(array, elemento) {
//   var i = 0;
//   while (i < array.length ) {
//     if (array[i] == elemento) {
//       return true;
//     }
//     i++;
//   }
//   return false;
// }
//
// // con difficoltà 0 => tra 1 e 100
// // con difficoltà 1 => tra 1 e 80
// // con difficoltà 2 => tra 1 e 50
// do {
//   var sceltaUtente = parseInt(prompt("inserisci il livello: 0,1,2"));
// } while (sceltaUtente != 0 && sceltaUtente != 1 && sceltaUtente != 2);
//
// switch (sceltaUtente) {
//   case 0:
//     numMaxBombe = 100;
//   break;
//
//   case 1:
//     numMaxBombe = 80;
//   break;
//
//   case 2:
//     numMaxBombe = 50;
//   break;
//
// }
// // Il computer deve generare 16 numeri casuali tra 1 e 100.
// var bombe = [];
//
// while (bombe.length <16) {
//   var numeroRandom = generaNumeroRandom(1, numMaxBombe);
//   if (inarray(bombe, numeroRandom) == false) {
//     bombe.push(numeroRandom);
//   }
// }
// console.log(bombe);
// // // In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// // L’utente non può inserire più volte lo stesso numero.
// // // Se il numero è presente nella lista delle bombe, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// var numeriValidi = [];
// var bombaEsplosa = false;
// var possibilita = numMaxBombe - 16;
//
// while (numeriValidi.length < possibilita && bombaEsplosa == false) {
//
//   var numero = parseInt(prompt("inserisci un numero"));
//
//   if (isNaN(numero) < 1 || numero > numMaxBombe ) {
//     alert("attenzione al numero inserito")
//   }else if (inarray(bombe, numero)  == true) {
//     bombaEsplosa = true;
//     alert("hai perso")
//   }else if (inarray(numeriValidi, numero)  == false) {
//     alert("non fare il furbetto");
//   }else {
//     numeriValidi.push(numero);
//   }
// }
//
// console.log("numeri validi inseriti" + numeriValidi.length);
// // La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// // Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
//
// if (bombaEsplosa == true) {
//   console.log("hai preso la bomba, hai inserito " + numeriValidi.length + " numeri validi");
//   console.log(bombaEsplosa);
// }else {
//   console.log("bravo hai vinto!!!");
// }
