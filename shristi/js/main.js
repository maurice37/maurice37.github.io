$( document ).ready(function() {
	$(".btn.open").on("click", function() {
		$(".navbar").animate({"left" : "0px"},400);
	});

	$(".btn.close").on("click",function(){
		$(".navbar").animate({"left" : "-320px"}, 400);
	});

	$("nav[data-type='toc'] li[data-type='part']").on("click",function(e) {
		$(this).find('> ol').slideToggle();
		$(this).toggleClass('open');
	});

});



