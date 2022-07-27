// $(".button").blur(function() {
//   alert("lost");
// });
$("input[type='email']").blur(function() {
	if ($(this).val() !== '') {
		$(this).addClass('hasValue');
        alert("Thank you for signing up for our newsletter!");
        email.value = " ";
	} else {
		$(this).removeClass('hasValue');
	}
});