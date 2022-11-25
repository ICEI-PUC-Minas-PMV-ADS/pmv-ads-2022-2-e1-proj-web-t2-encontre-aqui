
window.addEventListener('load', ()=>{
  const controls = document.querySelectorAll(".control");
  let currentItem = 0;
  const items = document.querySelectorAll(".item");
  const maxItems = items.length;
  var scroll;
  var height;
  
  
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
                 

})
