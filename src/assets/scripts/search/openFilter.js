
function filterOpen(){
var closed = document.querySelectorAll('.closed');
    closed.forEach(item =>{
        item.closest('.card').style.transition = "all 2s";
        item.closest('.card').style.display = 'none'
       
        console.log( item.closest('.card'))
    })
    
}
