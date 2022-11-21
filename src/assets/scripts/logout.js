/*window.addEventListener('load', ()=>{
    if(user){
        user_name.innerHTML = `Olá, ${user.full_name}`;
   }else{
       url_img.value ='./assets/images/site/userprofile/avatar.png'
   }
   
})
*/

document.getElementById('logout').addEventListener('click', ()=>{
    //window.localStorage.removeItem('user');
    window.location.href = './index.html'
})