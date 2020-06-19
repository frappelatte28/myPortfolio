
    const  root = document.documentElement
    var height = window.innerHeight
    var width = window.innerWidth

    var ratio =  width / height

    

    root.style.setProperty('--ratio',ratio )
    window.addEventListener('resize', handleResize)

    function handleResize(){
        // window.location.reload() 
    }


    

    const leftButton = document.querySelector('.showcase_nav_buttons > .left')
    const rightButton = document.querySelector('.showcase_nav_buttons > .right')

    const showCase = document.querySelector('.showcase')

    leftButton.addEventListener("click" , handleLeftButtonClick)
    rightButton.addEventListener("click" , handleRightButtonClick)

    var currenPos = 0 
    function handleLeftButtonClick(){

        currenPos-=90
      
        showCase.style.transform = `rotateY(${currenPos}deg)` ;

    }
    function handleRightButtonClick(){
        currenPos+=90
       
        showCase.style.transform = `rotateY(${currenPos}deg)` ;
        
    }
