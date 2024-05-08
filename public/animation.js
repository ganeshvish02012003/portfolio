// ===========typing-animation===========
const typingAnimationElement = document.getElementById("typing-animation");
const typingTexts = [
  "Front-end Developer",
  "Back-end Developer",
  "MERN Stack Developer",
];
function playTypingAnimation(text) {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      typingAnimationElement.textContent += text[i];
    }, i * 300);
  }
  setTimeout(() => {
    typingAnimationElement.textContent = "";
    playTypingAnimation(
      typingTexts[(typingTexts.indexOf(text) + 1) % typingTexts.length]
    );
  }, text.length * 300);
}
playTypingAnimation(typingTexts[0]);


// ============text-animation==========
const textAnimation = function () {
    var textWrapper = document.querySelector(".about__description .letters");
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );
  
    anime
      .timeline({ loop: false })
      .add({
        targets: ".about__description .line",
        scaleX: [0, 1],
        opacity: [0.5, 1],
        opacity: 0,
        easing: "easeInOutExpo",
        duration: 900,
      })
      .add({
        targets: ".about__description .letter",
        opacity: [0, 1],
        translateX: [40, 0],
        translateZ: 0,
        scaleX: [0.3, 1],
        easing: "easeOutExpo",
        duration: 800,
        offset: "-=600",
        delay: (el, i) => 150 + 25 * i,
      })
      .add({
        targets: ".about__description",
        opacity: 1,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000,
      });
  };

// ===========circle animation==========
const circleAnimation = function () {
  const circles = document.querySelectorAll(".circle");
  circles.forEach((elem) => {
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor((dots * marked) / 100);
    var points = "";
    var rotate = 360 / dots;

    setTimeout(() => {
      for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i: ${i}; --rot:${rotate}deg"></div>`;
      }
      elem.innerHTML = points;
      const pointsMarked = elem.querySelectorAll(".points");
      for (let i = 0; i < percent; i++) {
        pointsMarked[i].classList.add("marked");
      }
    }, 1000);
  });
};


/*==================scroll reverl animation============= */
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 200,
  reset: true, //Animations repeat
});
sr.reveal(`.home__data , .home__social, .contact__container, .main-text`);
sr.reveal(`.home__image, .footer__container, .skills__content`, {
  origin: "bottom",
});
sr.reveal(`.about__data, .skills__data, .skill-left`, { origin: "left" });
sr.reveal(`.about__image,  .skill-right  `, { origin: "right" });
sr.reveal(`.services__card`, {
  opacity: 0,
  rotate: { x: 0, y: 0, z: 25 },
  interval: 100,
});
sr.reveal(`.projects__card`, { interval: 100 });


  


  window.addEventListener("scroll", () => {
    if (window.scrollY >= 718 && window.scrollY <= 720) {
      textAnimation();
    }
    if (window.scrollY >= 1390 && window.scrollY <= 1395) {
      circleAnimation();
    }
  });