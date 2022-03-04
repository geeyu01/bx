

$(function () {

    /* scroll event section*/
    myHorizontalScrollbar.addListener((status) => {

        let v = status.offset.x
        $('.posNum').html(v);
        console.log();



        if( v >= 0 && v <= 2000){

            $('#section01 .move_box .box01').css('transform',`translateX(-${v * 0.4}px)`)


        }

        if( v >= 0 && v <= 500){

            $('#section01 .move_box .box02').css('transform',`translateX(${v * 0.4}px)`)


        }


        if( v >= 0 && v <= 2000){

            $('#section01 .move_box .box03').css('transform',`translateX(-${v * 0.4}px)`)


        }


        if(v >= 1200){
            $('#section02').addClass('on');
        }



        if(v >= 2500){
            $('#section03').addClass('on');
        }



        if( v >= 6500 && v <= 9500){
            $('.fix_section .main_big').css({
                width: `${ (-2802) +  v * 0.5}px`,
                height: `${ (-738) + v  * 0.2}px`,
            });
        }


        if( v >= 7500 && v <= 9500){
            $('.fix_section .overlay').css('opacity',`${ (-2.25) + v * 0.0003}`);
        }



        if( v >= 9000) {

            $('.center_txt').addClass('on');
        }else{
            $('.center_txt').removeClass('on');
        }





        if( v <= 10111) $('.fix_section').css('transform',`translateY(0px)`);

        if( v >= 10111){
            $('.fix_section').css('transform',`translateY(-${ (-10111) + v }px)`);
        }

        if( v >= 11090) $('.fix_section').css('transform',`translateY(-${innerHeight}px)`);


        if(v >= 14500){
            $('#section07').addClass('on');
        }



        if( v >= 16200 && v <= 18600){

            $('#section08 .circle .fw_bg').css('transform',`translateX(-${ (-4860) +v * 0.3}px)`)


        }

        if( v >= 16300 && v <= 18900){

            $('#section08 .circle .ss_bg').css('transform',`translateX(-${ (-3260) +v * 0.2}px)`)


        }

        if( v >= 16700 && v <= 19500){

            $('#section08 .circle .new_bg').css('transform',`translateX(-${ (-6680) + v * 0.4}px)`)


        }

        if( v >= 17200 && v <= 20700){

            $('#section08 .circle .fast_bg').css('transform',`translateX(-${ (-5160) + v * 0.3}px)`)


        }




        if( v >= 22000){
            $('#section09 .story_font .bar').css('transform',`translateX(-${(-11000) +  v * 0.5 }px)`);
            $('#section09 .story_font .circle').css('transform',`translateX(-${(-6600) +  v * 0.3 }px)rotate(-${(-660) + v * 0.03}deg)`);
            $('#section09 .story_font .circle_story').css('transform',`translateX(-${(-2200) +  v * 0.1 }px)`);
            // $('#section09 .story_font .up').css('transform',`translate(${(-23000) + v}px,-${(-23000) + v}px)rotate(${(-69) +v * 0.003}deg)`);
        }





        if( v >= 20000){
            $('#section10 .up').css('transform',`translate(${(-23000) + v}px,-${(-23000) + v}px)rotate(${(-69) +v * 0.003}deg)`);
        }

        if(v >= 23000){
            $('#section10 .up').addClass('on');
        }

        if( v >= 24200){
            $('#section10 .up2').css('transform',`translate(${(-24200) + v}px,-${(-24200) + v}px)rotate(${(-72.6) +v * 0.003}deg)`);
        }

        if(v >= 24200){
            $('#section10 .up2').addClass('on');
        }



        if( v >= 22100 && v <= 25000){

            $('#section10 .in1973').css('transform',`translateX(-${ (-6630) + v * 0.3}px)`)


        }

        if( v >= 24400 && v <= 27500){

            $('#section10 .text_01').css('transform',`translateX(-${ (-7320) + v * 0.3}px)rotate(-${(-732) + v * 0.03}deg)`)


        }

        if( v >= 24500 && v <= 28500){

            $('#section11 .return').css('transform',`translateX(-${ (-7350) + v * 0.3}px)`)


        }

        if( v >= 24500 && v <= 29500){

            $('#section12 .return_2').css('transform',`translateX(-${ (-7350) + v * 0.3}px)`)


        }

        if( v >= 26000){
            $('#section12 .text04 .bar2').css('transform',`translateX(-${(-7800) +  v * 0.3 }px)`);
            $('#section12 .text04 .text_4').css('transform',`translateX(-${(-7800) +  v * 0.3 }px)`);
            $('#section12 .text04 .back').css('transform',`translateX(-${(-5200) +  v * 0.2 }px)rotate(-${(-780) + v * 0.03}deg)`);
            // $('#section09 .story_font .up').css('transform',`translate(${(-23000) + v}px,-${(-23000) + v}px)rotate(${(-69) +v * 0.003}deg)`);
        }


        if( v >= 25500 && v <= 28500){

            $('#section12 .sander').css('transform',`translateX(-${ (-7650) + v * 0.3}px)`)

        }

        if(v >= 25800){
            $('#section11').addClass('on');
        }


        if( v <= 31980) $('.sc14_fix').css('transform',`translateY(0px)`);

        if( v >= 31980){
            // $('.sc14_fix').css('transform',`translateY(${ (-20787) + v * 0.65}px)`);
        }

        // if( v >= 11090) $('.fix_section').css('transform',`translateY(-${innerHeight}px)`);

        if(v >= 32130){
            $('#section016').addClass('on');
        }

        if(v >= 32600){
            $('#section16').addClass('on');
        }

        if(v >= 35300){
            $('#section18').addClass('on');
        }


        if(v >= 37000){
            $('#section19').addClass('on');
        }


        if(v >= 39500){
            $('#section20').addClass('on');
        }



    });

    $('#section01').addClass('on');




    $('#header .ham').click(function () {

        $('#menu').addClass('on');

    });

    $('#menu .hambuger').click(function () {

        $('#menu').removeClass('on');

    });








    const totalH = $('#section04').height() + $('#section05').height() +$('#section06').height() +$('#section07').height() +$('#section08').height();
    console.log(totalH);

    gsap.to('#vertical_page', {
        // y: -totalH,
        y: -(totalH),
        scrollTrigger: {
            trigger: "#vertical_container",
            start: "left left",
            // end: () => "+=" + 300,
            end: 'right right',
            pin: true,
            horizontal: true,
            // pinSpace:false,
            pinSpacing: false,
            scrub: true,
            markers: true
        }
    });

    gsap.to('#section13', {
        // y: -totalH,
        y: -innerHeight,
        scrollTrigger: {
            trigger: "#vertical_container02",
            start: "left left",
            end: () => "+=" + innerHeight * 2,
            // end: 'right right',
            // pin: true,
            horizontal: true,
            // pinSpace:false,
            // pinSpacing: false,
            scrub: true,
            markers: true
        }
    });



    gsap.to('#vertical_page02', {
        // y: -totalH,
        y: -(innerHeight * 11 + (400)),
        scrollTrigger: {
            trigger: "#vertical_container02",
            start: "left left",
            // end: () => "+=" + 300,
            end: 'right right',
            pin: true,
            horizontal: true,
            // pinSpace:false,
            pinSpacing: false,
            scrub: true,
            markers: true
        }
    });

/*

    gsap.to('#section14', {
        y: -innerHeight,
        scrollTrigger: {
            trigger: "#vertical_container02",
            start: "left left",
            end: () => "+=" + innerHeight * 2,
            horizontal: true,
            scrub: true,
        }
    });

*/

/*
    gsap.to('.sc14_fix', {
        // y: -totalH,
        y: innerHeight,
        scrollTrigger: {
            trigger: "#section18",
            start: "top top",
            // end: () => "+=" + 300,
            end: 'bottom bottom',
            scrub: true,
        }
    });

*/





/*


    gsap.to('.fix_section', {
        y:-innerHeight *2,
        scrollTrigger: {
            trigger: "#vertical_container",
            // start: () => "+=" + 1000,
            start: "left left",
            // start: 'top top',
            // end: () => "+=" + 2000,
            end: 'right right',
            // end: 'bottom bottom',
            // pin: true,
            horizontal: true,
            // pinSpace:false,
            pinSpacing: false,
            scrub: true,
            markers: true
        }
    });
*/



/*


    gsap.to('.fix_section', {
        y:-innerHeight,
        scrollTrigger: {
            trigger: "#section08",
            // start: () => "+=" + 1000,
            start: "30% top",
            // start: 'top top',
            end: () => "+=" + innerHeight *2,
            // end: 'bottom bottom',
            // end: 'bottom bottom',
            // pin: true,
            // horizontal: true,
            // pinSpace:false,
            // pinSpacing: false,
            scrub: true,
            markers: true,

        }
    });





*/



    let sc02 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc02,
        trigger: "#section10",
        start: "left left",
        end: () => "+=" + innerWidth *2,
        // end: 'right right',
        horizontal:true,
        scrub: true,
    });

    sc02.to("#section10 .in1973",{x:-200},0);
    sc02.to("#section10 .text_01",{x:-100},0);


    /* slide, click event section */


    $("#menu .menu_img").slick({
        dots: false, //navigation
        arrows: true, //arrow
        prevArrow: $('.hambuger'), //prev
        nextArrow: $('.hambuger'), //next
        autoplay:true, // autoplay mode
        autoplaySpeed: 2300, // auto speed
        pauseOnHover:false, // pause on mouse hover
        fade: false, //fade mode only one slider
        speed: 1300, // speed
        infinite: true, // infinite mode
        // asNavFor: '.slider2', // another slider
        centerMode: false, // center move
        centerPadding: '0%', // center move padding
        slidesToShow: 1, // show slider number
        slidesToScroll: 1, // next slider number
        swipe: true, // swiper
        focusOnSelect: true, // click to slider
        draggable:true,
        vertical: false, // vertical slider
        verticalSwiping: false, // vertical swiper
        initialSlide:0,// slider number
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition∑
        variableWidth: false,

    });



    $("#section05 .right_container .flim_img").slick({
        dots: false, //navigation
        arrows: true, //arrow
        prevArrow: $('.button_left'), //prev
        nextArrow: $('.button_right'), //next
        autoplay:true, // autoplay mode
        autoplaySpeed: 2000, // auto speed
        pauseOnHover:false, // pause on mouse hover
        fade: false, //fade mode only one slider
        speed: 900, // speed
        infinite: true, // infinite mode
        // asNavFor: '.slider2', // another slider
        centerMode: false, // center move
        centerPadding: '0%', // center move padding
        slidesToShow: 1, // show slider number
        slidesToScroll: 1, // next slider number
        swipe: true, // swiper
        focusOnSelect: true, // click to slider
        draggable:true,
        vertical: false, // vertical slider
        verticalSwiping: false, // vertical swiper
        initialSlide:0,// slider number
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition∑
        variableWidth: false,

    });



    $("#section06 .left_font").slick({
        dots: false, //navigation
        arrows: true, //arrow
        prevArrow: $('.explore'), //prev
        nextArrow: $('.explore'), //next
        autoplay:true, // autoplay mode
        autoplaySpeed: 2000, // auto speed
        pauseOnHover:false, // pause on mouse hover
        fade: false, //fade mode only one slider
        speed: 900, // speed
        infinite: true, // infinite mode
        // asNavFor: '.slider2', // another slider
        centerMode: false, // center move
        centerPadding: '0%', // center move padding
        slidesToShow: 1, // show slider number
        slidesToScroll: 1, // next slider number
        swipe: true, // swiper
        focusOnSelect: true, // click to slider
        draggable:true,
        vertical: false, // vertical slider
        verticalSwiping: false, // vertical swiper
        initialSlide:0,// slider number
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition∑
        variableWidth: false,

    });

    $("#section06 .c_one").slick({
        dots: false, //navigation
        arrows: false, //arrow
        prevArrow: $('.explore'), //prev
        nextArrow: $('.explore'), //next
        autoplay:false, // autoplay mode
        autoplaySpeed: 2000, // auto speed
        pauseOnHover:false, // pause on mouse hover
        fade: false, //fade mode only one slider
        speed: 900, // speed
        infinite: true, // infinite mode
        // asNavFor: '.slider2', // another slider
        centerMode: false, // center move
        centerPadding: '0%', // center move padding
        slidesToShow: 1, // show slider number
        slidesToScroll: 1, // next slider number
        swipe: true, // swiper
        focusOnSelect: true, // click to slider
        draggable:true,
        vertical: false, // vertical slider
        verticalSwiping: false, // vertical swiper
        initialSlide:0,// slider number
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition∑
        variableWidth: false,

    });

    $("#section06 .c_two").slick({
        dots: false, //navigation
        arrows: false, //arrow
        prevArrow: $('.explore'), //prev
        nextArrow: $('.explore'), //next
        autoplay:false, // autoplay mode
        autoplaySpeed: 2000, // auto speed
        pauseOnHover:false, // pause on mouse hover
        fade: false, //fade mode only one slider
        speed: 900, // speed
        infinite: true, // infinite mode
        // asNavFor: '.slider2', // another slider
        centerMode: false, // center move
        centerPadding: '0%', // center move padding
        slidesToShow: 1, // show slider number
        slidesToScroll: 1, // next slider number
        swipe: true, // swiper
        focusOnSelect: true, // click to slider
        draggable:true,
        vertical: false, // vertical slider
        verticalSwiping: false, // vertical swiper
        initialSlide:0,// slider number
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition∑
        variableWidth: false,

    });

    $("#section06 .c_three").slick({
        dots: false, //navigation
        arrows: false, //arrow
        prevArrow: $('.explore'), //prev
        nextArrow: $('.explore'), //next
        autoplay:false, // autoplay mode
        autoplaySpeed: 2000, // auto speed
        pauseOnHover:false, // pause on mouse hover
        fade: false, //fade mode only one slider
        speed: 900, // speed
        infinite: true, // infinite mode
        // asNavFor: '.slider2', // another slider
        centerMode: false, // center move
        centerPadding: '0%', // center move padding
        slidesToShow: 1, // show slider number
        slidesToScroll: 1, // next slider number
        swipe: true, // swiper
        focusOnSelect: true, // click to slider
        draggable:true,
        vertical: false, // vertical slider
        verticalSwiping: false, // vertical swiper
        initialSlide:0,// slider number
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition∑
        variableWidth: false,

    });





    $('#section06 .explore').click(function () {

        $('.c_one,.c_three,.c_two').slick('slickNext');
        // $('.c_one,.c_three,.c_two').slick('slickPrev');


    });




    $("#section17 .mini_left").slick({
        dots: false, //navigation
        arrows: true, //arrow
        prevArrow: $(''), //prev
        nextArrow: $(''), //next
        autoplay:true, // autoplay mode
        autoplaySpeed: 2000, // auto speed
        pauseOnHover:false, // pause on mouse hover
        fade: false, //fade mode only one slider
        speed: 900, // speed
        infinite: true, // infinite mode
        // asNavFor: '.slider2', // another slider
        centerMode: false, // center move
        centerPadding: '0%', // center move padding
        slidesToShow: 1, // show slider number
        slidesToScroll: 1, // next slider number
        swipe: true, // swiper
        focusOnSelect: true, // click to slider
        draggable:true,
        vertical: false, // vertical slider
        verticalSwiping: false, // vertical swiper
        initialSlide:0,// slider number
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition∑
        variableWidth: false,

    });

    $("#section17 .mini_right").slick({
        dots: false, //navigation
        arrows: true, //arrow
        prevArrow: $(''), //prev
        nextArrow: $(''), //next
        autoplay:true, // autoplay mode
        autoplaySpeed: 2000, // auto speed
        pauseOnHover:false, // pause on mouse hover
        fade: false, //fade mode only one slider
        speed: 900, // speed
        infinite: true, // infinite mode
        // asNavFor: '.slider2', // another slider
        centerMode: false, // center move
        centerPadding: '0%', // center move padding
        slidesToShow: 1, // show slider number
        slidesToScroll: 1, // next slider number
        swipe: true, // swiper
        focusOnSelect: true, // click to slider
        draggable:true,
        vertical: false, // vertical slider
        verticalSwiping: false, // vertical swiper
        initialSlide:0,// slider number
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition∑
        variableWidth: false,

    });



    $('#footer .turn_text').click(function () {

        myHorizontalScrollbar.scrollTo(0, 0, 600, {
            callback: () => console.log('done!'),
            easing: easing.easeInOutCirc,
        });


    });



    let scrollValue = 0;

    $('#menu > ul > li').click(function () {

        let idx = $('#menu > ul > li').index(this);

        $('#menu').removeClass('on');

        switch (idx){
            case 0 :
                scrollValue = 0;
                break;

            case 1 :
                scrollValue = 30958;
                break;
            case 2 :
                scrollValue = 22900;
                break;
            case 3 :
                scrollValue = 6455;
                break;
        }

        myHorizontalScrollbar.scrollTo(scrollValue, 0, 600, {
            callback: () => console.log('done!'),
            easing: easing.easeInOutCirc,
        });


    });


















})