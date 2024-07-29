'use strick';
window.addEventListener('DOMContentLoaded', () => {

    const navParent = document.querySelector('.nav'),
          navBars = document.querySelectorAll('.tab-bar'),
          Bars = document.querySelectorAll('.bar')

    function hideBarContent(){
        Bars.forEach((item) => {
            item.style.display = 'none'
        })

        navBars.forEach((item) => {
            item.classList.remove('active')
        })
    }      
    function showBarContent(i = 0){
        Bars[i].style.display = 'block'
        navBars[i].classList.add('active')
    }     
    
    hideBarContent()
    showBarContent()

    navParent.addEventListener('click', (event) => {
        const target = event.target
        if (target && target.classList.contains('tab-bar')) {
            navBars.forEach((item, idx) => {
                if (target == item) {
                    hideBarContent()
                    showBarContent(idx)                }
            })
        }
    })
}) 