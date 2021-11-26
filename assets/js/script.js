//OTVARQNE NA SNIMKI PRI KLIK

$(document).ready(function(){
  $("img").click(function(){
  var t = $(this).attr("src");
  $(".modal-body").html("<img src='"+t+"' class='modal-img'>");
  $("#myModal").modal();
  console.log("otvori")
});
});



$(".info").click(function(){
  $(".backgrnd").css("visibility", "visible");
  $(".zaglavie").css("visibility", "hidden");
  $(".backgrnd").fadeIn(700);
  $('html, body').css({
    overflow: 'hidden',
    height: '100%'
});
});

$(".close").click(function(){
  $(".backgrnd").fadeOut(500);
  $(".zaglavie").css("visibility", "visible");
  $('html, body').css({
    overflow: 'auto',
    height: 'auto'
});
});

$("#answer1").click(function(){
  swal("Terrible job!", "You failed miserably!", "error", {button: "Retry",});
});

$("#answer").click(function(){
  swal("Terrible job!", "You failed miserably!", "error", {button: "Retry",});
});

$("#answer2").click(function(){
  swal("Terrible job!", "You failed miserably!", "error", {button: "Retry",});
});

$("#answer3").click(function(){
  swal("Good job!", "You answered correctly!", "success", {button: "Next Question",});
});



//kolichestvo tochki
const numStars = 3500;

// namira random koordinati
function getRandomPosition() {  
  var y = $('html').width();
  var x = $('body').height();

  if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
    var x = $('body').height()*1.7;
    console.log("firefox")
  }else{
    console.log("chromium")
  }

    var randomX = Math.floor(Math.random()*x);
    var randomY = Math.floor(Math.random()*y);
    return [randomX,randomY];
}

//slaga tochkite
for (let i = 0; i < numStars; i++) {
  let star = document.createElement("div");  
  star.className = "star";
  var xy = getRandomPosition();
    star.style.top = xy[0] + 'px';
    star.style.left = xy[1] + 'px';
  document.body.append(star);
}

//smooth scroll funkciq
$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
        window.location.hash = hash;
      });
    } 
  });
});

$(window).scroll(function() {
  if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
      $('#return-to-top').fadeIn(900);    // Fade in the arrow
  } else {
      $('#return-to-top').fadeOut(900);   // Else fade out the arrow
  }
});

$('#return-to-top').click(function() {      
  $('body,html').animate({
      scrollTop : 0                      
  }, 900);
});

$('.info').click(function() {      
  $('body,html').animate({
      scrollTop : 0                     
  }, 900);
});


$(function(){
  function show_body(){
    $(".fall").css("display", "none");
    $("#loader").fadeOut(900); 
    $("#body").css("visibility", "visible");
  };
  window.setTimeout( show_body, 3000 ); 
});


