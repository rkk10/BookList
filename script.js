var btns = document.getElementsByClassName('del')

Array.from(btns).forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const li = e.target.parentElement;
        li.parentNode.removeChild(li)
    })
})