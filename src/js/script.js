/* WYŚWIETLANIE KSIĄŻEK NA STORONIE */

//Przygotuj referencję do szablonu oraz listy .books-list.

const template = Handlebars.compile(document.querySelector('#template-book').innerHTML);
console.log(template);

const booksList = document.querySelector('.books-list');
console.log(booksList);

//Dodaj funckję render, wewnątrz niej przejdź po każdym elemencie z dataSource.books
function render() {

  for (let book of dataSource.books) {
    const generatedHTML = template(book);
    booksList.innerHTML += generatedHTML;     

    console.log(generatedHTML);
  }  
}
render();

/* DODOWANIE KSIĄŻEJ DO ULUBIONYCH */

//tablica z ulubionymi książkami

const favoriteBooks = [];

function initActions () {

  const booksImage = document.querySelectorAll('.book__image');

  for(let book of booksImage){

    book.addEventListener('dbclick', function(event){ 
    event.preventDefault();

      book.classList.toggle('favorite');

      const bookId = book.getAttribute('data-id'); 

        if (book.classList.contains('favorite')) { //sprawdzamy czy klasa favorite jest dodana do elementu
          favoriteBooks.push(bookId);  //dodajemy do tablicy id książki     
        } else { //jeśli nie ma klasy favorite to usuwamy z tablicy
          favoriteBooks.splice(favoriteBooks.indexOf(bookId), 1); //usuwanie z tablicy
        }

        console.log(favoriteBooks);

    });

  } 
}

initActions();














