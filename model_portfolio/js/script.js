$(document).ready(function() {

	$(".answer").on("click", function()	{

        var toggleId = $(this).attr('data-toggle');
 		
 		$(this).closest('.question').nextAll('.question, .result').addClass('hidesection');
        
        $('#'+toggleId).removeClass('hidesection');
	});
 });	