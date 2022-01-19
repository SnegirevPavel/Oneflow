$('.mobile div').on('click', () => {
    $('.mobile div').toggleClass('active');
    $('.mobile nav').toggleClass('open');
    $('.mobile nav ul').toggleClass('show');
});
for (let a = 1; a <= $(".mobile ul li").length; a++){
    $(".mobile ul li:nth-child("+ a +")").css("animation-delay", "."+ (a+1) +"s");   
}

$(document).ready(function(){
    $('.block__title').click(function(event){
        $(this).toggleClass('active').next().slideToggle(300);
    });
});


// Кнопка наверх----------

document.addEventListener('DOMContentLoaded', () => {

    let toTopBtn = document.querySelector('.to-up');

    window.onscroll = function () {
        if (window.pageYOffset > 780) {
            toTopBtn.style.display = 'block'
        } else {
            toTopBtn.style.display = 'none'
        }
    }

    // плавный скролл наверх 
    toTopBtn.addEventListener('click', function () {
        window.scrollBy({
            top: -document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
    });
});