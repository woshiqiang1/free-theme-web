var content = document.querySelector('content')
window.addEventListener('scroll',function (event) {
    console.log(window.scrollY)
    content.classList.remove('active')
 if(window.scrollY >= 600){
     content.classList.add('active')
 }else{
     content.classList.remove('active')
 }
})