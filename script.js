const list = document.getElementById('list')
const input = document.getElementById('newBook')

const inputClear = _=> {    
    input.value = ''
}

// delete books

list.addEventListener('click', (e)=>{
    if(e.target.className == 'del'){
        const li = e.target.parentElement
        list.removeChild(li)
       }
})

// add books

const add = document.forms['add_book']
add.addEventListener('submit',(e)=>{
    e.preventDefault();
    const newBook = add.querySelector('input[type = "text"]').value
    const newLi = document.createElement('li')
    const h4 = document.createElement('h4')
    h4.textContent = newBook
    const newDel = document.createElement('button')
    newDel.textContent = 'Delete'
    newDel.classList.add('del')
    newLi.appendChild(h4)
    newLi.appendChild(newDel)
    list.appendChild(newLi)
    inputClear();
})

// Hide books

const hide = document.getElementById('hide')

hide.addEventListener('change', (e)=>{
    if(hide.checked){
        list.style.display = 'none'
    }
    else{
        list.style.display = 'flex'
    }
})

//searh Books
const search = document.getElementById('search')
search.addEventListener('keyup',(e)=>{
    const term = e.target.value.toLowerCase()
    const books = list.getElementsByTagName('li')
    Array.from(books).forEach((book)=>{
        const title = book.firstElementChild.textContent
        if(title.toLocaleLowerCase().indexOf(term)!=-1){
            book.style.display = 'block'
        }
        else{
            book.style.display = 'none'
        }
    })
})