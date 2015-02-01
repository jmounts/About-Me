$(document).ready(function(){

	console.log("working");

	$(function() {
    $(window).scroll( function(){
    
       
        $('.fadeInBlock').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* Adjust the "200" to either have a delay or that the content starts fading a bit before you reach it  */
            bottom_of_window = bottom_of_window + 50;  
          
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},200);
                    
            }
        }); 
    
    });
});
    /* custom settings */
    $('.venobox_case').venobox({
        border: '0px',             // default: '0'
        bgcolor: '#000',        // default: '#fff'
        titleattr: 'data-title',    // default: 'title'
        numeratio: false,            // default: false
        infinigall: true            // default: false
    });

    /* auto-open #firstlink on page load */
    $("#firstlink").venobox().trigger('click');

    $('.venobox_logo').venobox({
        border: '0px',             // default: '0'
        bgcolor: '#000',        // default: '#fff'
        titleattr: 'data-title',    // default: 'title'
        numeratio: false,            // default: false
        infinigall: true            // default: false
    });

    /* auto-open #firstlink on page load */
    $("#firstlink").venobox().trigger('click');

})
