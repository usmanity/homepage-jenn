$(document).ready(function() {
  console.log($('.element'));
  new Typed('.element', {
    strings: ["Jenn Jiang is an creative graphic designer and interaction designer based in SF ☺︎"],
    typeSpeed: 50,
    cursorChar: '|'
  });
  $('.about').click(function() {
    $('.about-details').removeClass('hidden');
  });
  $('.works').click(function() {
    $('.works-details').removeClass('hidden');
  });
  $('.close').click(function(event) {
    $(this.dataset.parent).addClass('hidden');
  });
});
