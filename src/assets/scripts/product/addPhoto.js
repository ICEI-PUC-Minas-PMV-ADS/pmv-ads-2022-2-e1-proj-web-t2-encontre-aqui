function upload_img(){

const CLIENT = '0aabe048fb4dea2'

        const file = document.getElementById("textoFoto")
        var url_img = document.getElementById("url_img")
        file.addEventListener("change", ev => {
            const formData = new FormData()
            formData.append("image", ev.target.files[0])
            fetch("https://api.imgur.com/3/image", {
                method: "POST",
                headers: {
                    Authorization: `Client-ID ${CLIENT}`
                },
                body: formData
            }).then(data => data.json()).then(data => {               
              url_img.value = data.data.link;
            })
        })

}

function addPhoto(event, local){
    
    if(event.target.files.length > 0){
      var src = URL.createObjectURL(event.target.files[0]);
      var preview = document.getElementById(local);
      preview.src = src;
      console.log(src)
      console.log(preview.src)
      preview.style.backgroundImage = `url(${preview.src})` 
      preview.style.backgroundSize = `cover` 
        
      preview.style.backgroundRepeat = `no-repeat` 
       
    }
  }


  