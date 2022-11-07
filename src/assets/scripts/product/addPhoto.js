function addPhoto(event, local){
    
    if(event.target.files.length > 0){
      var src = URL.createObjectURL(event.target.files[0]);
      var preview = document.getElementById(local);
      preview.src = src;
      console.log(src)
      preview.style.backgroundImage = `url(${preview.src})` 
      preview.style.backgroundSize = `cover` 
     
      preview.style.backgroundRepeat = `no-repeat` 
       
    }
  }