var btn_burguer = document.querySelector(".btn-burguer")
var left_menu = document.querySelector(".left-menu")
var right_menu = document.querySelector(".right-menu")

var left_menu_opened = false

var w = window.innerWidth;
var h = window.innerHeight;


 window.addEventListener('resize', ()=>{
    w  =  window.innerWidth;
    if(w > 1000){
      console.log("Passou " + w)
      right_menu.classList.replace("right-menu-reduced", "right-menu")
    }
 })

btn_burguer.addEventListener('click', (event)=>{
  if(left_menu_opened){  

    left_menu.classList.replace("left-menu-open","left-menu")
    right_menu.classList.replace("right-menu-reduced", "right-menu")
    left_menu_opened = false;
       
  }else{
   
    left_menu.classList.replace("left-menu","left-menu-open")
    right_menu.classList.replace( "right-menu","right-menu-reduced")

    left_menu_opened = true;
  }
})

