
const Ksiazka = function(tytul, autor, przeczytana) {
  this.tytul = tytul;
  this.autor = autor;
  this.przeczytana = przeczytana;
  this.opiszKsiazke = function() {
    console.log(`Książka ma tytuł ${this.tytul}, autorem jest ${this.autor} i została ${this.przeczytana}`)
  };
};  
ksiazka1 = new Ksiazka('Wiedźmin', 'Andrzej Sapkowski', true);

  
  


/* Napisz klasę "Ksiazka", która ma właściwości "tytul", "autor", "przeczytana" (przeczytana jest typu Boolean) oraz jedną metodę "opiszKsiazke", która zwraca stringa opisującego tą książkę wg. wzoru "Książka ma tytuł Wiedźmin, autorem jest Andrzej Sapkowski i została przeczytana.".

Stwórz 3 instancje obiektu tej klasy z czego jedna z książek ma być już przeczytana, a następnie stwórz nową tablicę globalną i dodaj do niej te 3 książki.

Następnie napisz funkcję "iloscPrzeczytanych", która jako parametr przyjmuje tablicę obiektów (naszych książek, ktore stworzyliśmy), a zwraca nam ilość książek, ktore zostały przeczytane. Podczas iteracji po tablicy (wewnątrz tej funkcji) i sprawdzania, czy książka jest przeczytana, wywołuj także na obiekcie metodę opiszKsiazke(), a wynik jej działania wyświetlaj w konsoli.

Na samym końcu wyświetl w konsoli ilość przeczytanych książek

Zadanie domowe robimy z wykorzystaniem serwisu https://repl.it */
