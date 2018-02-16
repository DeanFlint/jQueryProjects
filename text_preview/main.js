$(document).ready(() => {
  /* KEY UP - for preview text */
  $('#text').keyup(function(event){
    $('.preview').html($(event.currentTarget).val());
   });
  
  $('#font').change(function(){
    const font = $('#font').val();
    $('.preview').css({
      fontFamily: font
    })
  });
 
  $('#weight').change(function(){
    const weight = $('#weight').val();
    $('.preview').css({
      fontWeight: weight
    })
  });
  
  $('#size').keyup(function(event){
    const fontSize = $('#size').val() + 'px'
    $('.preview').css({
      fontSize: fontSize
    })
  });
  
})