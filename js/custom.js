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
    $('#startLesson').click(function(){
        console.log('clicked');
        $('.popup').fadeIn(500);
        $('.close').click(function(){
            $(this).parent().parent().fadeOut(500);
        });
    });
});