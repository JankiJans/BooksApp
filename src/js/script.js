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
















