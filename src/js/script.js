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
  

  for(let image of booksImage){

    image.addEventListener('dbclick', function(event){ 
      event.preventDefault();

        const bookId = image.getAttribute('data-id');

        if(!favoriteBooks.includes(bookId)){
          favoriteBooks.push(bookId);
          bookId.classList.add('favorite');
        } else {
          favoriteBooks.splice(favoriteBooks.indexOf(bookId), 1);
          bookId.classList.remove('favorite');
        } 
    });

    console.log(image);

  } 
}

initActions();














