$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    center: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 3,
        loop: false,
        nav: true,
        autoplay: false,
        center: false,
      },
      1300: {
        items: 3,
        loop: false,
        nav: true,
        autoplay: false,
        center: false,
      },
    },
  });
});
