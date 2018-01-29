const list = document.getElementById('list')

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
    const list = document.getElementById('list')
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
    
})