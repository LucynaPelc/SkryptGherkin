// Feature: Wyszukiwanie i zakup produktu w sklepie internetowym x-kom.pl

//   Scenario: Wyszukiwanie produktu i dodanie go do koszyka
//     Given użytkownik jest na stronie głównej sklepu internetowego
//     When użytkownik wpisuje "smartphone" w pole wyszukiwania
//     And użytkownik wybiera pierwszy produkt z wyników wyszukiwania
//     And użytkownik klika "Dodaj do koszyka"
//     Then produkt "smartphone" zostaje dodany do koszyka

//   Scenario: Przejście do koszyka i złożenie zamówienia
//     Given użytkownik ma produkt "smartphone" w koszyku
//     When użytkownik przechodzi do strony koszyka
//     And użytkownik kliknie "Przejdź do dostawy"
//     Then użytkownik widzi opcje dostawy do wyboru i opcje płatności
//     And cena całkowita jest poprawna

//   Scenario: Walidacja zakupu
//     Given użytkownik jest zalogowany na swoje konto
//     When użytkownik wprowadza dane dostawy i wybiera metodę płatności
//     And użytkownik klika "Złóż zamówienie"
//     Then użytkownik otrzymuje potwierdzenie zakupu
//     And zamówienie jest zapisane w historii zakupów użytkownika
//     And użytkownik otrzymuje wiadomość e-mail z potwierdzeniem zamówienia
