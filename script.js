let css = document.querySelector('h3')

const color1 = document.querySelector('.color1')
const color2 = document.querySelector(".color2");
const body = document.querySelector('body')

body.style.background = 'red'
color1.addEventListener('input',function(){
    console.log(color1.value)
})