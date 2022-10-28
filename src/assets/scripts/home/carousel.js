const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;
var scroll;
var height;
/*
var body = document.body,
    html = document.documentElement;

    height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );


  window.onscroll = function(ev) {
    
    if ((window.innerHeight + window.scrollY) >= height/2) {
         
    }else{
      console.log("Passou")
      stopCarousel();
    }
};
*/

controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    items.forEach((item) => item.classList.remove("current-item"));

    items[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: 'nearest'
    });

    items[currentItem].classList.add("current-item");
  });
});

  /*     
  window.setInterval(() => {
   */
    items.forEach((item) => item.classList.remove("current-item"));
    if(currentItem >= maxItems){
      currentItem = 0
    }else{
      currentItem++;
    }
     
      items[currentItem].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: 'nearest'

      });



      items[currentItem].classList.add("current-item");
                 
/*
}, 3000);


function stopCarousel(){
  window.clearInterval();
}
*/