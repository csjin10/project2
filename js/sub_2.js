// header
$(function () {
    $('.bar').click(function () {
        $('.mainMenu').stop().slideUp();
        $(this).find('.mainMenu').stop().slideToggle().css('display', 'flex');
    });

    function mediaSize() {
        //모바일에서 아이콘, 예약, 인재채용이 메인메뉴 안에 들어가는 기능
        if (window.matchMedia("(max-width: 600px)").matches) {
            $(".mainMenu").append('<li class="addIcon"><ul style="display:flex;justify-content:space-evenly;"></ul></li>')
            $('nav>ul>li').not(":last").appendTo(".addIcon ul")

        } else {
            $(".addIcon ul").children().prependTo('nav>ul')
        }
    };

    mediaSize();
});


// Slider

