let nav=document.querySelector('nav')
let menulist=document.querySelector('.menulist')
let menuicon=document.querySelector('.menuicon')

menuicon.addEventListener('click',()=>{
    nav.classList.toggle('active')
})