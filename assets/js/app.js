// Initi AOS
AOS.init({
  offset: 400,
  duration: 1000
});
$(document).ready(function(){
  $('.modal').modal();
});

// Fixed Button Nav
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.fixed-action-btn');
  var instances = M.FloatingActionButton.init(elems, {
    direction: 'top',
    hoverEnabled: true
  });
});

// Scroll Smooth
$('.navbar a').on('click', function(e) {
  if(this.hash !== '') {
    e.preventDefault();

    const hash = this.hash;
    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 
      800
    );
  }
});
$('.fixed-action-btn a').on('click', function(e) {
  if(this.hash !== '') {
    e.preventDefault();

    const hash = this.hash;
    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 
      800
    );
  }
});







       