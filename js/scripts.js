$(document).ready(function() {
  $(".clickable").click(function() {
    $(this).next().slideToggle(1000);
    $(this).slideToggle(900);
    $(this).parent().addClass("green-bg").removeClass("box");
  });
  $(".disappear").click(function() {
    $(this).prev().slideToggle(1000);
    $(this).slideToggle(900);
    $(this).parent().removeClass("green-bg").addClass("box");
  });
});
