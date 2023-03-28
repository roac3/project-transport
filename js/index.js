$(document).ready(()=>{


    // SCROLL ANIMATIONS

    $(".btn-home").click(()=>{
        $('.menu').toggleClass('active-menu');
        $("html,body").animate({ scrollTop: $('.intro').offset().top}, 800);
    });

    $(".btn-aboutus").click(()=>{
        $('.menu').toggleClass('active-menu');
        $("html,body").animate({ scrollTop: $('.about-us').offset().top }, 800);
    });

    $(".btn-services").click(()=>{
        $('.menu').toggleClass('active-menu');
        $("html,body").animate({ scrollTop: $('.services').offset().top - 100 }, 800);
    });

    $(".btn-contactmenu").click(()=>{
        $('.menu').toggleClass('active-menu');
        $("html,body").animate({ scrollTop: $('.contact').offset().top }, 800);
    });

    // Info side menu

    $('.btn-info').click((e)=>{
        if(e.target.classList.contains('right-arrow')){
            $('.right-arrow').css('display', 'none');
            $('.left-arrow').css('display', 'block');
        }else if(e.target.classList.contains('left-arrow')){
            $('.left-arrow').css('display', 'none');
            $('.right-arrow').css('display', 'block');
        }

        $('.attached-info').toggleClass('active-attached-info');
    });


    // FORM Prevent Reload

    $('#submit-form').click((e)=>{
        e.preventDefault();
    });

    // MENU Responsive

    $('.btn-menu').click(()=>{
        $('.menu').toggleClass('active-menu');
    });

})