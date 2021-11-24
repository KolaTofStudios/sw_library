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


//kolichestvo tochki
const numStars = 1500;

// namira random koordinati
function getRandomPosition() {  
  var y = $('body').width();;
  var x = $('body').height();;
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

//smooth scroll function
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

function changeCur(){
  document.body.style.cursor="url(../img/tie.cur), auto";
}

$(document).on('click', function(event){
  changeCur()
  // $('body').css('cursor', 'url(../img/tie.cur), auto');
  console.log("click")
});



