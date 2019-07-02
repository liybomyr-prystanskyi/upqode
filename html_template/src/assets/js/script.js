
$(function () {
  $("ul li:has(ul)").addClass("has-submenu");
  $("ul li ul").addClass("sub-menu");
  $("ul.dropdown li").hover(function () {
    $(this).addClass("hover")
  }, function () {
    $(this).removeClass("hover")
  });
  var $menu = $("#menu"), $menulink = $("#spinner-form"), $search = $("#search"), $search_box = $(".search_box"),
    $menuTrigger = $(".has-submenu > a");
  $menulink.click(function (e) {
    $menulink.toggleClass("active");
    $menu.toggleClass("active");
    if ($search.hasClass("active")) {
      $(".menu.active").css("padding-top", "50px")
    }
  });
  $search.click(function (e) {
    e.preventDefault();
    $search_box.toggleClass("active")
  });
  $menuTrigger.click(function (e) {
    e.preventDefault();
    var t = $(this);
    t.toggleClass("active").next("ul").toggleClass("active")
  });
  $("ul li:has(ul)");
  $(function () {
    var e = $(document).scrollTop();
    var t = $(".nav_wrapper").outerHeight();
    $(window).scroll(function () {
      var n = $(document).scrollTop();
      if ($(document).scrollTop() >= 50) {
        $(".nav_wrapper").css("position", "fixed")
      } else {
        $(".nav_wrapper").css("position", "fixed")
      }
      if (n > t) {
        $(".nav_wrapper").addClass("scroll")
      } else {
        $(".nav_wrapper").removeClass("scroll")
      }
      if (n > e) {
        $(".nav_wrapper").removeClass("no-scroll")
      } else {
        $(".nav_wrapper").addClass("no-scroll")
      }
      e = $(document).scrollTop()
    })
  })


  $('.header-banner__content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: false
        }
      }
    ]
  });
  $('.header-banner__arrows__left').click(function () {
    $('.header-banner__content').slick('slickPrev');
  });
  $('.header-banner__arrows__right').click(function () {
    $('.header-banner__content').slick('slickNext');
  });


  $('.products__main__content__slider').slick({
    rows: 2,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  var delay = 800;
  $(".progress-bar").each(function (i) {
    $(this).delay(delay * i).animate({ width: $(this).attr('aria-valuenow') + '%' }, delay);
  });



});

// Init AOS
AOS.init();

