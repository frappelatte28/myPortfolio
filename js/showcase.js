
    let root = document.documentElement
    let height = window.innerHeight
    let width = window.innerWidth

    ratio =  width / height

    

    root.style.setProperty('--ratio',ratio )
    window.addEventListener('resize', handleResize)

    function handleResize(){
        window.location.reload()
    }
      