  $(function () {
      $(this).find('table').each(function () {
          var trAcc = $(this).find('tr'),
              thHead = [];

          $(this).find('tr:first-child td, tr:first-child th').each(function () {
              headLines = $(this).text();
              thHead.push(headLines);
          });

          trAcc.each(function () {
              for (i = 0, l = thHead.length; i < l; i++) {
                  $(this).find('td').eq(i + 1).prepend('<h3>' + thHead[i + 1] + '</h3>');
              }
          });

          trAcc.append('<i class="icon-accordion">+</i>');
          trAcc.click(function () {
              if ($(this).hasClass('accordion-opened')) {
                  $(this).animate({
                      maxHeight: '60px'
                  }, 200).removeClass('accordion-opened').find('.icon-accordion').text('+');

              } else {
                  $(this).animate({
                      maxHeight: '1000px'
                  }, 400).addClass('accordion-opened').find('.icon-accordion').text('-');
              }
          });
      });
  });
// Init
  $(function () {
      $('.js-responsive-table').responsiveTable();
  });

  //.not('tr:nth-child(1), tr:nth-child(2), tr:nth-child(3), tr:nth-child(4)')