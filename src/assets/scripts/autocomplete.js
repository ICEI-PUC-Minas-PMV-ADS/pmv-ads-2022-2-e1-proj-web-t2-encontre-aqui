window.addEventListener('load', () => {
    
let names = ["Juiz de Fora",
             "Belo Horizonte",
             "Contagem",
             "Ouro Preto"];


let sortedNames = names.sort();
 
let auto_place = document.getElementById("place");

auto_place.addEventListener("keyup", (e)=>{
    removeElements();
    for(let i of sortedNames){
        
       if(i.toLowerCase().startsWith(auto_place.value.
        toLowerCase()) && auto_place.value !== ""){
            let listItem = document.createElement("li");
            listItem.classList.add("list-items");
            listItem.style.cursor = "pointer";
            listItem.setAttribute("onclick", "displayNames('" + i + "')");
            
            let word = "<b>" + i.substr(0, auto_place.value.length)
            + "</b>";

            word += i.substr(auto_place.value.length);
            
            listItem.innerHTML = word;
            document.querySelector(".list").appendChild(listItem);

        }
    }
})

function displayNames(value){
    auto_place.value = value;
    removeElements();
}

function removeElements(){
    let items = document.querySelectorAll(".list-items");
    items.forEach((item)=>{
        item.remove()
    })
}


})
