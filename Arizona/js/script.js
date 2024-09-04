// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Toggle navigation visibility on small screens
$(document).ready(function () {
  $("#toggler").click(function () {
    $("#toggle-nav").fadeToggle(200);  // Use 'fadeToggle' for smooth fade-in and fade-out
  });

  // Ensure the menu closes when clicking outside or on a menu item (for mobile view)
  $(document).click(function (e) {
    var target = e.target;
    if (!$(target).closest('#toggler, #toggle-nav').length) {
      $("#toggle-nav").fadeOut(200);  // Use 'fadeOut' for smooth fade-out
    }
  });

  // Control LeftContent and RightContent classes based on window width
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
