// $(".button").blur(function() {
//   alert("lost");
// });
$("input[type='email']").blur(function() {
	if ($(this).val() !== '') {
		$(this).addClass('hasValue');
	} else {
		$(this).removeClass('hasValue');
	}
});