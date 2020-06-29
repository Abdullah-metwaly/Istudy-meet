// $ 
$(document).ready(function () {
    'use strict';
    $('#bn').click(function () {
        console.log('clicked');
        $('.meet-features .row .d-none').fadeIn(3000).removeClass('d-none');
        $(this).addClass('d-none');
    });
    // Parent settings select options
    for (var i = 1960; i <= 2020; i++) {
        $("<option>", { value: i, text: i }).appendTo($("#year"))
    }
    for (var i = 1; i <= 12; i++) {
        $("<option>", { value: i, text: i }).appendTo($("#month"))
    }
    for (var i = 1; i <= 31; i++) {
        $("<option>", { value: i, text: i }).appendTo($("#day"))
    }
    //toggle the chat button
    $(".why-meet .chat .btn").click(function () {
        $(".why-meet .msg-one").fadeToggle(500, function () {
            $(".why-meet .chat .btn i").toggleClass('fa-smile fas fa-times');
        });
        // for hidding blocks
        if ($(".why-meet .msg-two, .why-meet .msg-three").css("display") == 'block') {
            $(".why-meet .msg-one, .why-meet .msg-two, .why-meet .msg-three").fadeOut();
        }
    });
    $("#sms-two").click(function () {
        $(".why-meet .msg-two").fadeIn(500);
    });
    $("#sms-three").click(function () {
        $(".why-meet .msg-three").fadeIn(500);
    });
    $(".why-meet .msg-two input, .why-meet .msg-two textarea").click(function () {
        $(".why-meet .msg-two .btn").removeClass('disabled');
    });
    // for the login navbar button
    $("#dropPlus").click(function(){
        $(this).toggleClass('fa-plus fa-minus');
        $(".login-part .block").fadeToggle(500);
    });
    // for small popup menu 
    $('.gear').click(function(){
        $(this).css(
            'transform' ,  'rotate(45deg)'
        );
        $($(this).data('click')).fadeToggle(600);
    });
    // for the popup page
    $('#startLesson, fa-fliter').click(function(){
        console.log('clicked');
        $('.popup').fadeIn(500);
        $('.close').click(function(){
            $(this).parent().parent().fadeOut(500);
        });
    });
    // for courses taps
    $('.courses-section ul li, .myprofile .list .ul li').click(function(){
        console.log($(this).data('class'));
        $(this).addClass('active').siblings().removeClass('active');
        $($(this).data('class')).removeClass('d-none').fadeIn("slow").siblings().addClass('d-none');
    });
            // pop up for courses
              // for the popup page
                    $('.course').click(function(){
                        console.log('clicked');
                        $('.popup').fadeIn(500);
                        $('.close').click(function(){
                            $(this).parent().parent().fadeOut(500);
                        });
                    });
                    $('#paynow').click(function(){
                        $(this).parent().parent().fadeOut();
                        $('.payment-popup').fadeIn(500);
                    });
                    $('#paybtn').click(function(){
                        $(this).parent().parent().fadeOut();
                        $('.finish-popup').fadeIn(500);
                        $('body').css('overflow', 'hidden');
                    });
                    $('#finish-popping').click(function(){
                        $(this).parent().parent().fadeOut(1000);
                    });
        // for adding group student and single student popups 
        $('.add-selection').click(function(){
            // console.log('clicked');
            console.log($(this).data('pop'));
             $($(this).data('pop')).fadeIn(500);
             $(this).addClass('btn-success');
            $('.close').click(function(){
                $(this).parent().parent().fadeOut(500);
                $('.add-selection').removeClass('btn-success');
            });
        });                    
        // for deleting the students from tables
        $('.fa-minus-circle').click(function(){
            console.log('clicked');
            $(this).parent().parent().parent().fadeOut(500);
            if($('.table .row:first-of-type').siblings().css("display") == 'none' ){
                $('.table .row:first-of-type').css(
                    'border-bottom' , '1px solid #000'
                );
            };
        });
        //for toggling the class active on the list and toggle the pages
        $('.profile-lessons .ul li').click(function(){
            console.log($(this).data('attr'));
            $(this).addClass('active').siblings().removeClass('active');
            $($(this).data('attr')).removeClass('d-none').fadeIn(500).siblings().addClass('d-none');
        });
        // for displaying the the payment in my profile lessons payment box
        $('.profile-lessons .mywallat .chose-pay, .myprofile .col-6 .mywallat .chose-pay').click(function(){
            $(this).parent().fadeOut(200);
            $('.profile-lessons .mywallat .popup-group, .myprofile .col-6 .mywallat .popup-group ').removeClass('d-none').fadeIn(400);
            $('.profile-lessons .mywallat .popup-group .btn, .myprofile .col-6 .mywallat .popup-group .btn').click(function(){
                $(this).parent().fadeOut(200);
                $('.profile-lessons .mywallat .payment-popup, .myprofile .col-6 .mywallat .payment-popup').removeClass('d-none').fadeIn(400); 
            });
        });
        //for the personal edition
        $('.profile-lessons .myset .set .btn').click(function(){
            console.log($(this).data('attr'));
            $($(this).data('attr')).removeClass('d-none').fadeIn(500);
            $('.close').click(function(){
                $(this).parent().parent().fadeOut(500);
            });
        });
        // for showing the popup
        $('.fa-question-circle , .fa-filter').click(function(){
            $('.pop, .fliter').fadeToggle(500);
            $('.close').click(function(){
                $(this).parent().parent().fadeOut();
            });
        });
        // for showing the calculations from the myprofile
        $(' .myprofile .col-6 .classesBalance .block').click(function(){
            console.log($(this).data('class'));
            $(this).parent().parent().fadeOut(500);
            $('.myprofile .col-6 .classesBalance .classes').removeClass('d-none').fadeIn(500);
        });
        $('.myprofile .col-6 .classesBalance .lesson ').click(function(){
            console.log($(this).data('class'));
            $(this).parent().parent().parent().fadeOut(500);
            $('.myprofile .col-6 .classesBalance .class').removeClass('d-none').fadeIn(500);
        });
        // toggler menu in the responsive designs 
        $(".myprofile .toggler").click(function(){
            $(".myprofile .toggler i").toggleClass("fa-bars fa-times");
            $(".myprofile .list").toggleClass("open");
        });
});