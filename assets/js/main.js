$(document).ready(function () {
  $('.back-flag').owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    arrows: false,
    autoplay: true,
    slideTransition: 'linear',
    autoplayTimeout: 2000,
    autoplaySpeed: 2000,
    responsive: {
      0: { items: 5 },
      400: { items: 6 },
      600: { items: 6 },
      800: { items: 9 },
      1000: { items: 10 },
      1200: {
        items: 13,
      },
    },
  });
});
