/* WYŚWIETLANIE KSIĄŻEK NA STORONIE */

//Przygotuj referencję do szablonu oraz listy .books-list.

const template = Handlebars.compile(document.querySelector('#template-book').innerHTML); 
console.log(template);

const booksList = document.querySelector('.books-list'); 
console.log(booksList);

//Dodaj funckję render, wewnątrz niej przejdź po każdym elemencie z dataSource.books
function render() { //funkcja renderująca książki na stronie

  for (let book of dataSource.books) { //przechodzimy po każdej książce z tablicy dataSource.books i wyświetlamy je na stronie 
    const generatedHTML = template(book); //generujemy kod HTML dla każdej książki z tablicy dataSource.books
    booksList.innerHTML += generatedHTML; //dodajemy kod HTML do listy .books-list 

    console.log(generatedHTML);
  }  
}
render();

/* DODOWANIE KSIĄŻEJ DO ULUBIONYCH I USUWANIE */

//tablica z ulubionymi książkami

const favoriteBooks = [];

//zmień fukcnje initActions tak by używała event.target zamiast this

function initActions() {

  const booksImage = document.querySelectorAll('.book__image');
  
  for (let image of booksImage) {
  
    image.addEventListener('dblclick', function(event) {
    event.preventDefault(); 

      event.target.classList.toggle('favorite');
  
      const bookId = event.target.getAttribute('data-id');
  
      if(!favoriteBooks.includes(bookId)){ //sprawdzamy czy w tablicy nie ma już takiego id
        favoriteBooks.push(bookId); //jeśli nie ma to dodajemy
        image.classList.add('favorite'); //dodajemy klasę favorite do obrazka
      } else {
        favoriteBooks.splice(favoriteBooks.indexOf(bookId), 1); //jeśli jest to usuwamy z tablicy
        image.classList.remove('favorite'); //usuwamy klasę favorite z obrazka
      } 
  
    });
  }
}
  
initActions();
                                                                                                    
     
  














