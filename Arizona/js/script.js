document.addEventListener('DOMContentLoaded', function () {
  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Other existing JavaScript code
  $("#toggler").click(function () {
    $("#toggle-nav").fadeToggle(500);
  });

  $('.menu-toggle').on('click', function () {
    $('.wrapper').toggleClass('menu--is-revealed');
  });

  var alterClass = function () {
    var ww = document.body.clientWidth;
    if (ww < 1199) {
      $('.LeftContent').removeClass('LeftContent');
      $('.RightContent').removeClass('RightContent');
    } else if (ww >= 1200) {
      $('.LeftContent').addClass('LeftContent');
      $('.RightContent').addClass('RightContent');
    }
  };

  $(window).resize(function () {
    alterClass();
  });

  // Trigger the function on page load
  alterClass();
});
