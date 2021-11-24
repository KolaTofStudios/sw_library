//OTVARQNE NA SNIMKI PRI KLIK

$(document).ready(function(){
  $("img").click(function(){
  var t = $(this).attr("src");
  $(".modal-body").html("<img src='"+t+"' class='modal-img'>");
  $("#myModal").modal();
});
});


//NAV BARA 
(function($) { 
  $(function() { 

    //  OTVARQNE ZATVARQNE
    $('#navbar-toggle').click(function() {
      $('nav ul').slideToggle();
    });


    // HAMBURGER MENU
    $('#navbar-toggle').on('click', function() {
      this.classList.toggle('active');
    });

  }); 
})(jQuery); 