const list = document.getElementById('list')

// delete books

list.addEventListener('click', (e)=>{
    if(e.target.className == 'del'){
        const li = e.target.parentElement
        list.removeChild(li)
       }
})

// add books

cont add = document.forms['add_book']
add.addEventListener('submit',(e)=>{
    e.preventDefault();
    const newBook = add.querySelector('input[type = "text"]').value
    const newLi = document.createElement('li')
    const h4 = document.createElement('h4')
    const newDel = document.createComment('button')
    newDel.classList('del')
})