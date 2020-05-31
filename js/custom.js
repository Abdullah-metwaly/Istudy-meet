// $ 
$(document).ready(function(){
    'use strict';
    $('#bn').click(function(){
        console.log('clicked');
        $('.meet-features .row .d-none').fadeIn(3000).removeClass('d-none');
        $(this).addClass('d-none');
    });
    // Parent settings select options
for( var i = 1960 ; i <= 2020 ; i++)
{
	$("<option>" , {value: i, text: i}).appendTo($("#year"))
}	
for( var i = 1 ; i <= 12 ; i++)
{
	$("<option>" , {value: i, text: i}).appendTo($("#month"))
}	
for( var i = 1 ; i <= 31 ; i++)
{
	$("<option>" , {value: i, text: i}).appendTo($("#day"))
}
});