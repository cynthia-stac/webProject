import './style.css'
//dark mode
let dark = document.getElementById('dark');
let phoneDark = document.getElementById('darkmode')
function changeMode(){
    const element = document.querySelector('html').classList
    element.toggle('dark')
}
dark.addEventListener('click',changeMode)
phoneDark.addEventListener('click',changeMode)


