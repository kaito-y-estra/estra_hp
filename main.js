(function($) {
  $(function () {
    $('.humberger').on('click', function() {
      $('body').toggleClass('slide');
    });
  });
})(jQuery);

$(window).scroll(function() {
  let window = $(document).scrollTop();
  var w = $(document).width();
  if(w >= 1020){
    if(window > 850){
      $(".logo").stop().addClass("hide");
      $(".catchcopy").stop().addClass("hide");
      $(".nav__box").stop().addClass("hide");
    }else{
      $(".logo").stop().removeClass("hide");
      $(".catchcopy").stop().removeClass("hide");
      $(".nav__box").stop().removeClass("hide");
    };
  }else if(w >= 768){
    if(window > 800){
      $(".logo").stop().addClass("hide");
      $(".catchcopy").stop().addClass("hide");
      $(".nav__box").stop().addClass("hide");
    }else{
      $(".logo").stop().removeClass("hide");
      $(".catchcopy").stop().removeClass("hide");
      $(".nav__box").stop().removeClass("hide");
    };
  }else{
    if(window > 800){
      $(".logo").stop().addClass("hide");
      $(".catchcopy").stop().addClass("hide");
      $(".nav__box").stop().addClass("hide");
    }else{
      $(".logo").stop().removeClass("hide");
      $(".catchcopy").stop().removeClass("hide");
      $(".nav__box").stop().removeClass("hide");
    };
  }
  
});

$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 0;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body').toggleClass('open');
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});