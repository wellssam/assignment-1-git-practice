$(function(){
    console.log(`the window is ${$(window).width()} pixels wide`)

   if($(window).width() < 769) {

       $('.nav-menu').hide()
       
       $('#hamburger-icon').on('click', function(){
           $('.nav-menu').slideToggle()
           console.log('clicked')
        })
    } else {
        $('#hamburger-icon').hide();
    }
});