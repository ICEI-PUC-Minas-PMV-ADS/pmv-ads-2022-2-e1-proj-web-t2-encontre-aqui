
function filterOpen(){
    var checkbox = document.getElementById('switch')
    var closed = document.querySelectorAll('.closed')
    var opened = document.querySelectorAll('.opened')

    closed.forEach(itemClosed =>{
        if(checkbox.checked){
            itemClosed.closest('.card').style.transition = "all 1s"
            itemClosed.closest('.card').style.transform = "translateX(250px)"
            itemClosed.closest('.card').style.opacity = '0'
            
            opened.forEach(itemOpened =>{               
                itemOpened.closest('.card').style.transform = "translateY(-120px)"
                itemOpened.closest('.card').style.transition = "all 1s"
            })
        }else if(!checkbox.checked){
            itemClosed.closest('.card').style.transition = "all 1s"
            itemClosed.closest('.card').style.transform = "translateX(0px)"
            itemClosed.closest('.card').style.opacity = '1'

            opened.forEach(itemOpened =>{               
                itemOpened.closest('.card').style.transform = "translateY(0px)"
                itemOpened.closest('.card').style.transition = "all 1s"
            })
        }
        
    })
    
}
