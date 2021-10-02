$(document).on('click', '.accordion .d-block', function(){
    $(this).toggleClass('active');
    $(this).next('.content').slideToggle(400);
});
