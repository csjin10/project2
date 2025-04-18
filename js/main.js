// header
$(function(){
    $('.bar').click(function(){
        $('.mainMenu').stop().slideUp();
        $(this).find('.mainMenu').stop().slideToggle().css('display', 'flex');
    });
});


// section2
$(document).ready(function(){
    $('.prev').click(function(){
        $('#sec2 li:last').prependTo('#sec2 ul');
        $('#sec2 ul').css('margin-left',"-100%");
        $('#sec2 ul').stop().animate({marginLeft:0},800)
    });
    $('.next').click(function(){
        $('#sec2 ul').stop().animate({marginLeft:"-100%"},800,function(){
            $('#sec2 li:first').appendTo('#sec2 ul');
            $('#sec2 ul').css({marginLeft:0});
        });
    });
});
