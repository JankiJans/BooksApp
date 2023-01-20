
const template = Handlebars.compile(document.querySelector('#template-book').innerHTML); 
const booksList = document.querySelector('.books-list');

class BooksList {
    
    constructor(id){
      const thisBookList = this;

      thisBook.id = id;

      thisBookList.render();
      thisBookList.getElements();
      thisBookList.initActions();
      thisBook.determineRatingBgc();
    }

    /* WYŚWIETLANIE KSIĄŻEK NA STORONIE */  

    render() { //funkcja renderująca książki na stronie
      const thisBookList = this;
      
      for (let book of dataSource.books) { //przechodzimy po każdej książce z tablicy dataSource.books i wyświetlamy je na stronie 
        
        const ratingBgc = determineRatingBgc(book.rating); //przypisujemy do zmiennej ratingBgc klasę zależną od oceny książki
        book.ratingWidth = book.rating * 10; //przypisujemy do zmiennej ratingWidth szerokość paska zależną od oceny książki
        book.ratingBgc = ratingBgc; //przypisujemy do zmiennej ratingBgc klasę zależną od oceny książki
    
        const generatedHTML = template(book); //generujemy kod HTML dla każdej książki z tablicy dataSource.books
        thisBookList.booksList.innerHTML += generatedHTML; //dodajemy kod HTML do listy .books-list 
  
      }  
    }

    getElements(){
        const thisBookList = this;

        thisBookList.bookList = document.querySelector('.books-list');
        thisBookList.filters = document.querySelector('.filters');
        thisBookList.booksImage = document.querySelectorAll('.book__image');
    }

    initActions(){
      const thisBookList = this;
  
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
      
        /* FILTROWANIE KSIĄŻEK */
      
        const filters = [];
      
        const filterList = document.querySelector('.filters');
      
        filterList.addEventListener('click', function(event) {
      
          const checkbox = event.target; //przypisujemy kliknięty element do zmiennej checkbox
        
          if(checkbox.tagName == 'INPUT' && checkbox.type == 'checkbox' && checkbox.name == 'filter') { //sprawdzamy, czy kliknięty element, faktycznie jest naszym checkboxem
      
            if(checkbox.checked) { //sprawdzamy czy checkbox jest zaznaczony 
              filters.push(checkbox.value); //jeśli tak to dodajemy jego wartość do tablicy
      
            } else { //jeśli nie to usuwamy jego wartość z tablicy
              filters.splice(filters.indexOf(checkbox.value), 1);
              
            }

            thisBookList.filterBooks(filters);
          }
      
          console.log(checkbox.value); 
          console.log(checkbox.checked);
      
        });

    }

    /* KLASA hidden dla zaznaczonych książek */

    filterBooks(filters) { //funkcja filtrująca książki po zaznaczonych checkboxach

      for (const book of dataSource.books) { //przechodzimy po każdej książce z tablicy dataSource.books 
      
        const bookImage = document.querySelector('.book__image[data-id="' + book.id + '"]'); //przypisujemy do zmiennej bookImage obrazek z danym id  
      
        let shouldBeHidden = false;
      
        for (const filter of filters) { //przechodzimy po każdym elemencie z tablicy filters
      
        if(!book.details[filter]) { //sprawdzamy czy danej książce nie odpowiada dany checkbox 
      
          shouldBeHidden = true; 
          break;
              
          } else { 
            shouldBeHidden = false;
          }
        }
      
        if(shouldBeHidden) { 
          bookImage.classList.add('hidden'); 
        } else {    
          bookImage.classList.remove('hidden'); 
        }
      
          
      }
    }

    /* Kolory dla ratingów */

    determineRatingBgc(rating) {
      let background = '';
  
      if(rating < 6) {
        background = 'linear-gradient(to bottom,  #fefcea 0%, #f1da36 100%)'; 
      } else if(rating > 6 && rating <= 8) {
        background = 'linear-gradient(to bottom, #b4df5b 0%,#b4df5b 100%)';
      } else if(rating > 8 && rating <= 9) {
        background = 'linear-gradient(to bottom, #299a0b 0%, #299a0b 100%)';
      } else if(rating > 9) {
        background = 'linear-gradient(to bottom, #ff0084 0%,#ff0084 100%)';
      }  
  
      return background;
    }
}
const app = new BooksList();


