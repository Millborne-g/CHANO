const header = document.querySelector(".header");
const menu = document.querySelector(".menu_toggle");
const navigation = document.querySelector(".navigation");
var slideshow_counter = 1;

window.addEventListener('scroll', function(){
    const scroll = window.pageYOffset > 0;

    if (scroll == true){
        header.classList.toggle("active", true);
    }
    else{
        header.classList.toggle("active", false);

    }


});

setInterval(function(){
    document.getElementById("r"+slideshow_counter).checked =true;
    slideshow_counter++;
    if (slideshow_counter > 4){
        slideshow_counter = 1;
    }
},4000)

menu.addEventListener('click', function (){
    menu.classList.toggle("menu-active");
    navigation.classList.toggle("navigation-active");
}); 
