// $ 
$(document).ready(function(){
    'use strict';
    $('#bn').click(function(){
        console.log('clicked');
        $('.meet-features .row .d-none').fadeIn(3000).removeClass('d-none');
        $(this).addClass('d-none');
    });
});