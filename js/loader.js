const loaderTime = 6000

const loader = document.querySelector('.LOADER')
const main = document.querySelector('#main')
const  testImage = document.querySelector('#testImage')

testImage.addEventListener('load', handleLoaded) ;

main.style.display = "none"



function handleLoaded(){
    window.setTimeout(handleTimeOut, loaderTime)
}


function handleTimeOut(){
    loader.style.display = "none"
    main.style.display = "block"
}