// NAVBAR

const navToggle  = document.querySelector('.nav-toggle'); 
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle ('nav-open');  
});
navLinks.forEach(link => {
    link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
    })
})


// BACK TO HOME ARROW ICON

const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function(){
    const scrollHeight = window.pageYOffset;
    if( scrollHeight > 500){
        topLink.classList.add("show-link");   
    }else{
        topLink.classList.remove("show-link");
    }
});