var headerHeight = document.querySelector('header').offsetHeight;
var headerMargin = 1; // Jarak margin-top yang diinginkan

document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    var targetId = this.getAttribute('href').substring(1);
    var targetElement = document.getElementById(targetId);

    if (targetElement) {
      var targetPosition = targetElement.offsetTop - headerHeight - (headerMargin * 16); // Konversi rem menjadi px

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

