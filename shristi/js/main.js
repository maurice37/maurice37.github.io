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


document.addEventListener('keydown',function(event){
	if(event.keyCode == 37){
		$('#previous_page').children()[0].click();
	}
	else if(event.keyCode == 39){
		$('#next_page').children()[0].click();	
	}
});
