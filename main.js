// $(".button").blur(function() {
//   alert("lost");
// });
$('#toggle').click(function() {
    if ($(this).is(":checked")) {
      $(".sub").css("opacity", 0);
      $(".thanks").css("opacity", 1);
    }
    else if ($(this).is(":not(:checked)")) {
       $(".sub").css("opacity", 1);
       $(".thanks").css("opacity", 0);
    }
  });

  $(function() {
    var btn = $(".subscribebutton");
    btn.on("click", function() {
      $(this).addClass('btn-progress');
      setTimeout(function() {
        btn.addClass('btn-fill')
      }, 500);
      setTimeout(function() {
        btn.removeClass('btn-fill')
      }, 4100);
      setTimeout(function() {
        btn.addClass('btn-complete')
      }, 4100);
    });
  })