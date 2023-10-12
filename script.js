
// const Ksiazka = function(tytul, autor, przeczytana = false) {
class Ksiazka {
  constructor(tytul, autor, przeczytana = false) {
    this.tytul = tytul;
    this.autor = autor;
    this.przeczytana = przeczytana;
  };
  opiszKsiazke() {
    console.log(`Książka ma tytuł ${this.tytul}, autorem jest ${this.autor}`)
    if (this.przeczytana === true) {
      console.log(`i została przeczytana`);
    } else {
      console.log(`i nie została przeczytana`);
    };
  };
};

function iloscPrzeczytanych(tablica) {
  let iloscPrzeczytanych = 0;
  for (let i = 0; i < tablica.length; i++) {
    tablica[i].opiszKsiazke();
    if (tablica[i].przeczytana === true) {
      iloscPrzeczytanych += 1;
    }
  }
  return iloscPrzeczytanych;
}
//modyfikacja dla branch mainReplit

let ksiazka1 = new Ksiazka('Wiedźmin', 'Andrzej Sapkowski', true);
ksiazka1.opiszKsiazke

let ksiazka2 = new Ksiazka('Ania z Zielonego Wzgórza', 'Agatha Christie', false);
ksiazka2.opiszKsiazke();
let ksiazka3 = new Ksiazka('Leksykon z życia', 'Franz Kafka', false);
ksiazka3.opiszKsiazke();


let biblioteka = [ksiazka1, ksiazka2, ksiazka3];

// console.log(biblioteka);
console.log(biblioteka.length);

for (i = 0; i < biblioteka.length; i++) {

  console.log(biblioteka[i]);
  biblioteka[i].opiszKsiazke();

}

iloscPrzeczytanych(biblioteka);
console.log(iloscPrzeczytanych(biblioteka));

// console.log(biblioteka[0]);

// biblioteka.forEach(function(element, index) {
  // console.log(element.opiszKsiazke());
// }


/* Napisz klasę "Ksiazka", która ma właściwości "tytul", "autor", "przeczytana" (przeczytana jest typu Boolean) oraz jedną metodę "opiszKsiazke", która zwraca stringa opisującego tą książkę wg. wzoru "Książka ma tytuł Wiedźmin, autorem jest Andrzej Sapkowski i została przeczytana.".

Stwórz 3 instancje obiektu tej klasy z czego jedna z książek ma być już przeczytana, a następnie stwórz nową tablicę globalną i dodaj do niej te 3 książki.

Następnie napisz funkcję "iloscPrzeczytanych", która jako parametr przyjmuje tablicę obiektów (naszych książek, ktore stworzyliśmy), a zwraca nam ilość książek, ktore zostały przeczytane. Podczas iteracji po tablicy (wewnątrz tej funkcji) i sprawdzania, czy książka jest przeczytana, wywołuj także na obiekcie metodę opiszKsiazke(), a wynik jej działania wyświetlaj w konsoli.

Na samym końcu wyświetl w konsoli ilość przeczytanych książek

Zadanie domowe robimy z wykorzystaniem serwisu https://repl.it */
