
window.addEventListener('load', ()=>{
var logoutUser = document.getElementById('logout');
if(logoutUser!=null){
    logoutUser.addEventListener('click', ()=>{
        window.sessionStorage.removeItem('user');
        window.location.href = './index.html'
    })
    }
})