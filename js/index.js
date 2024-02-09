function fade() {
  $(".preloader").fadeOut("slow");
  }
  setTimeout(fade, 3000);

$("a").hover(function(){
    $(this).css("color", "white");
    }, function(){
    $(this).css("color", "black");
  });
  $("button").hover(function(){
    $(this).css("background-color", "#592C1D");
  }, function () {
    $(this).css("background-color", "#c36f4e");
  });
  

