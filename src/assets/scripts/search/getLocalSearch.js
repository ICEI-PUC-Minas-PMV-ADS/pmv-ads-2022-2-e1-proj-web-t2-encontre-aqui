window.addEventListener('load', () =>{
    var cityStored =  localStorage.getItem('cityStored');   
    if(cityStored!=null && cityStored !== undefined){
        var place = document.getElementById('place')
        place.value= cityStored
    }
})