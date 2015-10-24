
$(document).ready(function() {

    $('#mapForm').change(function() {

        var selectedState = $('#mapForm option:selected').val();

        if(selectedState == 'ALL'){
            $('a.dot').show(1000);
        }else{
            $('a.dot[state*="'+selectedState+'"]').show(1000);
            $('a.dot[state!="'+selectedState+'"]').hide(1000);
        }
    });

    $('a.dot').click(function(){
       //alert($(this).attr('city') );

        $('a.dot').removeClass('selected');
        $(this).addClass('selected');

        var city = '.city_detail#'+$(this).attr('city');
        var htmlCode = $(city).html();

        $('.detail_container').fadeOut(500, function() {
           $('.detail_container .city_detail').html(htmlCode);
            $('.detail_container').fadeIn(500);
        });


    });


});