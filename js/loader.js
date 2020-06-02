 var imageLoaded = 0
 const loaderTime = 3000
 var t = Date.now()

 const loader = document.querySelector('.loader')
 const main = document.querySelector('#main')
 const  testImage = document.querySelector('#testImage')
 const aboutMeImage = document.querySelector('.about_me_image > img')

 aboutMeImage.addEventListener('load',handleAboutMeOnLoad)
 testImage.addEventListener('load', handleTestImageOnLoad) 
 main.style.display ="none"

var setIntervalId = setInterval(handler, 1)

  
 function handler(){
    if(imageLoaded == 2){
        loader.style.display = "none"
        main.style.display = "block"
         clearInterval(setIntervalId)
    }
   
 }

 function handleAboutMeOnLoad(){
    imageLoaded++ ;
}

function handleTestImageOnLoad(){
    imageLoaded++;
}



//  main.style.display = "none"



//  function handleLoaded(){
//      window.setTimeout(handleTimeOut, loaderTime)
//  }


//  function handleTimeOut(){
//      loader.style.display = "none"
//      main.style.display = "block"
// }