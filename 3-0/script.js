$(document).ready(function() {
	$('.list-group-item').click(function() {
		var span = $(this).find('span');
			var num = Number(span.html());
			num--;
			if (num <= 0) {
				num = '';
			}
			span.html(num);	
		})
	});
;