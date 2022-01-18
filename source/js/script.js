$('.mobile div').on('click', () => {
    $('.mobile div').toggleClass('active');
    $('.mobile nav').toggleClass('open');
    $('.mobile nav ul').toggleClass('show');
});

$(document).ready(function(){
    $('.hide__title').click(function(event){
        $(this).toggleClass('active').next().slideToggle(300);
    });
});