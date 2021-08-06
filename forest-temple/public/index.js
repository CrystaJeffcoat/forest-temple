var textWrapper = document.querySelector('.ml9 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
var headerLetters = document.querySelector('.header-letters');
headerLetters.innerHTML = headerLetters.textContent.replace(/\S/g, "<span class='header-letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml9 .letter',
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 40 * (i+1),
  }).add({
    targets: '.ml9 .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 40 * i,
    complete: function() {
      anime.timeline({loop: false})
        .add({
          targets: '.header-letter',
          translateX: [40,0],
          translateZ: 0,
          opacity: [0,1],
          easing: "easeOutExpo",
          duration: 1200,
          begin: function(){
            headerLetters.style.display = 'block'
          },
          delay: (el, i) => 500 + 30 * i
        });
    }
  });