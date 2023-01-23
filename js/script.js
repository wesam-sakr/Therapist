var bodyDir = $('body').css('direction')
console.log(bodyDir)
var dirAr
if(bodyDir == "rtl"){
  dirAr= true
}
else{
  dirAr = false
}

$(document).ready(function () {
  // loading

  $("#loading").fadeOut(800);
  var btn_top = $("#scroll-top");
  btn_top.addClass("show");
 
});

$('.gallery .owl-carousel').owlCarousel({
  items:2,
  rtl:dirAr,
  loop:false,
  margin:20,
  responsive:{
    0:{
      items: 1.5
    },
    768:{
      items: 3.5
    },
    992:{
        items:2.5
    }
  }
});
$('.news .owl-carousel').owlCarousel({
  items:2,
  rtl:dirAr,
  loop:false,
  margin:20,
  nav: true,
  responsive:{
    0:{
      items: 1
    },
    992:{
      items:2
    }
  }
});
$(function () {
  $(".user-rate").rateYo({
    rating: $(".user-rate").attr("rateYo"),
    starWidth: "15px",
    ratedFill: "#FFC107",
    readOnly: true,
    normalFill: "#eee",
    rtl:dirAr
  });
  $("#your-rate").rateYo({
    starWidth: "15px",
    ratedFill: "#FFC107",
    rating: 0,
    fullStar: true,
    rtl:dirAr
  });
});

$( ".work p" ).click(function() {
  $( this ).toggleClass("cut-text");
});

//  aos animation
AOS.init();
