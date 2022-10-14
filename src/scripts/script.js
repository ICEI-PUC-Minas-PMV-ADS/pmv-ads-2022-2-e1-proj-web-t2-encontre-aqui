var btn_burguer = document.querySelector(".btn-burguer")
var left_menu = document.querySelector(".left-menu")
var left_menu_opened = false

btn_burguer.addEventListener('click', (event)=>{
  if(left_menu_opened){  

    left_menu.classList.replace("left-menu-open","left-menu")
   
    left_menu_opened = false;

  }else{
   
    left_menu.classList.replace("left-menu","left-menu-open")
 
    left_menu_opened = true;
  }
})