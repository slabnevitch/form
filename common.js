(function(){
	$(document).ready(function(){
		$('ul.sf-menu').superfish({
			delay: 200,
			speed: 'fast',
			cssArrows: false
		});
	});

	// var butt = document.querySelector('button'),
	// url = 'https://www.weblancer.net/projects/veb-programmirovanie-31/knopka-html-s-formoj-835163/';
	// butt.onclick = function(e){
	// 	document.location.href = url;
	// }
	$('.call').magnificPopup();
	var form = document.querySelector('.call');
	// form.onsubmit = function(e) {
	// 	alert('submit');
	// 	return false;
	// 	document.location.href = 'https://www.weblancer.net/projects/veb-programmirovanie-31/knopka-html-s-formoj-835163/';
	// };
	$('.my-form').on('submit', function(e){
		 this.submit();
    setTimeout(function() {
        document.location.href = 'https://www.weblancer.net/projects/veb-programmirovanie-31/knopka-html-s-formoj-835163/';
    }, 100);
		
		
	});
})();