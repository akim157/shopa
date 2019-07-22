$(document).ready(function(){
	$('button').on('click', function(){
		makeReqest();
	});

	function makeReqest() {
		$.ajax({
			type: 'GET',
			url: 'http://ip.jsontest.com',
			crossDomain: true,
			success: function(data, status, xhr) {
				console.log('IP: ', data);
			},
			error: function() {
				console.log('Error', arguments);
			}
		});
	}
});