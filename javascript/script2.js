window.addEventListener('scroll', function() {
    var header = document.getElementById('stickyHeader');
    var winScroll = document.documentElement.scrollTop || window.pageYOffset;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (winScroll > height) {
      header.style.position = 'static';
    } else {
      header.style.position = 'fixed';
    }
  });