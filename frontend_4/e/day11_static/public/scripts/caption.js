$(".item").on("mouseover", function () {
  $(this).find(".mask").css({ transition: "1s", top: "160px" });
});
$(".item").on("mouseout", function () {
  $(this).find(".mask").css("top", "260px");
});
