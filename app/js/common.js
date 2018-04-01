var clickDelay      = 500,
    clickDelayTimer = null;

$('.burger-click-region').on('click', function () {
  
  if(clickDelayTimer === null) {
  
    var $burger = $(this);
    $burger.toggleClass('active');
    $burger.parent().toggleClass('is-open');

    if(!$burger.hasClass('active')) {
      $burger.addClass('closing');
    }

    clickDelayTimer = setTimeout(function () {
      $burger.removeClass('closing');
      clearTimeout(clickDelayTimer);
      clickDelayTimer = null;
    }, clickDelay);
  }
});

$('.main-menu_btn').click(function(e){
    e.preventDefault();
    $('.main-menu-list').slideToggle();
    $(this).toggleClass('__active');
  });

  //Loader
  $(window).load(function() {

    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");
  
    $(".top_header").animated("fadeInDown", "fadeOut");
    $(".tabs_header .wrapper").animated("flipInY", "fadeOut");
    $(".profi_item").animated("fadeInRight", "fadeOut");
    $(".s_pofi form").animated("zoomInRight", "fadeOut");
    $(".s_back h3").animated("fadeInUp", "fadeOut");
    $("section h2, footer h2, .contacts_top .tabs").animated("fadeInUp", "fadeOut");
  });
