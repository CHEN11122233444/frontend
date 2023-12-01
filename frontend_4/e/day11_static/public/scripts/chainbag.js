$(".topnav ul .totalmenu a").on("click", function () {
  $("#showmenu").fadeToggle();
  // $('#showmenu').toggle();
});

$("#showmenu img").on("click", function () {
  // $('#showmenu').hide();
  // $('#showmenu').fadeOut();
  $("#showmenu").fadeToggle();
});
