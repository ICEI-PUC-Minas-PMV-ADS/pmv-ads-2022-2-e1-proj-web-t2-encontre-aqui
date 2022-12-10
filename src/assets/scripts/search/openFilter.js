
function filterOpen(){
    var checkbox = document.getElementById('switch')
    var closed = document.querySelectorAll('.closed')
    var opened = document.querySelectorAll('.opened')
    var nClose = 0;
    var closes = [];
    var local_card = document.querySelectorAll('.situation')
   
    for(var i = 0; i < local_card.length; i++){
        if(local_card[i].classList.contains('closed')){
           nClose+=140;
        }else{
            closes.push(nClose);
        }

    }
   
    

    closed.forEach(itemClosed =>{
        if(checkbox.checked){
          
            itemClosed.closest('.card').style.transition = "all 1s"
            itemClosed.closest('.card').style.transform = "translateX(250px)"
            itemClosed.closest('.card').style.opacity = '0'
          
        }if(checkbox.checked){              
            opened.forEach((itemOpened, index) =>{     
                if(closes[index] == 0)
               {                     
                itemOpened.closest('.card').style.transform = `translateY('0px')}px)`    
               }else{
                itemOpened.closest('.card').style.transform = `translateY(-${closes[index]}px)`         
               }
               itemOpened.closest('.card').style.transition = "all 1s"
            })
        }
        
        else{ 
            if(!checkbox.checked){
            
            itemClosed.closest('.card').style.transition = "all 1s"
            itemClosed.closest('.card').style.transform = "translateX(0px)"
            itemClosed.closest('.card').style.opacity = '1'

        }

        if(!checkbox.checked){
            opened.forEach(itemOpened =>{               
                itemOpened.closest('.card').style.transform = "translateY(0px)"
                itemOpened.closest('.card').style.transition = "all 1s"
            })
        }
    }
        
    })
    
}
