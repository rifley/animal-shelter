$(document).ready(function() {
  $("button#dark").click(function() {
    alert("Hiiii");
    $("#intro").removeClass();
    $("#intro").addClass("dark-background");
  });
});
