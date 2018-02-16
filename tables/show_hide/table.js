   $.each($('.table tbody tr'), function(index, val) {
         if(index >= 5) {
            $(this).addClass('hidden');
         }
    });
    $('.accordion-btn').on('click', function(e) {
        e.preventDefault();
        if($('.table tbody tr').hasClass('hidden')) {
            $('.table tbody tr.hidden').toggleClass('hidden show');
            $(this).text('hide');
        } else if ($('.table tbody tr').hasClass('show')) {
            $('.table tbody tr.show').toggleClass('hidden show');
            $(this).text('show');
        }
    });