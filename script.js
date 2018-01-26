
var books = document.querySelectorAll('#list li h4')

Array.from(books).forEach(function(book){
    book.textContent += ' (book title)';
})

const bookList = document.getElementById("bookList")
