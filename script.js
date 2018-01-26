const list = document.getElementById('list')

// delete books

list.addEventListener('click', (e)=>{
    if(e.target.className == 'del'){
        const li = e.target.parentElement
        list.removeChild(li)
       }
})