$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    margin: 20,
    nav: true,
    navClass: ["slider__nav--left", "slider__nav--right"],
    responsive: {
      0: {
        items: 1
      },
      580: {
        items: 2
      },
      880: {
        items: 3
      },
      1200: {
        items: 4
      }
    }
  });
});
