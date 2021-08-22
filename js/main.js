$("#myButton").click(function () {
  $.scrollTo($("#myDiv"), 1000);
});

window.addEventListener("scroll", (event) => {});

$(".allContents").scroll(function () {
  var sc = $(".allContents").scrollTop();
  console.log(sc);

  if (sc >= 10 && sc <= 179) {
    $(".scrollDown").hide();
    $(".newscrollDown").hide();
  } else if (sc >= 180 && sc <= 900) {
    $(".cards").show(200);
    $("h1.fs-120").show(400);
    $(".counterr h1.fs-165").hide(200);
    $(".img-fluid.leftCircle").hide();
    $(".img-fluid.rightCircle").hide();
    $(".newscrollDown").show();
    $(".scrollDown").hide();
    // $('html, body').animate({
    //     scrollTop: $(".section2").offset().top
    // });
    // $('.section1').hide(100)
    // $('.section2').show(100)
  }
  // else if(sc>=600){
  //     // $('html, body').animate({
  //     //     scrollTop: $(".section3").offset().top
  //     // });
  // }
  else if (sc >= 900) {
    $(".img-fluid.leftCircle").show();
    $(".img-fluid.rightCircle").show();
    $(".counterr h1.fs-165").show();
    $(".newscrollDown").show();
    $(".scrollDown").hide();
  } else {
    $(".cards").hide(200);
    $("h1.fs-120").hide(200);
    $(".counterr h1.fs-165").hide(200);
    $(".img-fluid.leftCircle").hide();
    $(".img-fluid.rightCircle").hide();
    $(".scrollDown").show();
    $(".newscrollDown").hide();
  }
});
const vw = Math.max(
  document.documentElement.clientWidth || 0,
  window.innerWidth || 0
);
const vh = Math.max(
  document.documentElement.clientHeight || 0,
  window.innerHeight || 0
);
$(window).scroll(function () {
  $("video").each(function () {
    if ($(this).visible(true)) {
      $(this)[0].play();
    } else {
      $(this)[0].pause();
    }
  });
});
var video = document.getElementById("video"),
  fraction = 0.8;
if (vh > vw) {
  video.setAttribute("src", "video/Mobile View.mp4");
} else {
  video.setAttribute("src", "video/Desktop View.mp4");
}
// function checkScroll() {
//   var x = video.offsetLeft,
//     y = video.offsetTop,
//     w = video.offsetWidth,
//     h = video.offsetHeight,
//     r = x + w, //right
//     b = y + h, //bottom
//     visibleX,
//     visibleY,
//     visible;

//   visibleX = Math.max(
//     0,
//     Math.min(
//       w,
//       window.pageXOffset + window.innerWidth - x,
//       r - window.pageXOffset
//     )
//   );
//   visibleY = Math.max(
//     0,
//     Math.min(
//       h,
//       window.pageYOffset + window.innerHeight - y,
//       b - window.pageYOffset
//     )
//   );

//   visible = (visibleX * visibleY) / (w * h);

//   if (visible > fraction) {
//     video.play();
//   } else {
//     video.pause();
//   }
// }

// checkScroll();
// window.addEventListener("scroll", checkScroll, false);
// window.addEventListener("resize", checkScroll, false);
