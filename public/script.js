// ===========================show menu=====================
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const newClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
if (newClose) {
  newClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

//=============remove menu mobile===========
const navLink = document.querySelectorAll(".nav__link");
const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));


// ============Add blur to header================
const blurHeader = () => {
    const header = document.getElementById("header");
    window.scrollY >= 50
      ? header.classList.add("blur-header")
      : header.classList.remove("blur-header");
  };

// ==========show scroll up===========
const scrollUp = () => {
    const scrollUpButton = document.getElementById("scroll-up");
    if (window.scrollY >= 350) {
      scrollUpButton.classList.add("show-scroll");
    } else {
      scrollUpButton.classList.remove("show-scroll");
    }
  };

  // ========scroll sections active link============
const sections = document.querySelectorAll("section[id]");
const scrollActive = () => {
  const scrollY = window.pageYOffset;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};




window.addEventListener("scroll", () => {
    scrollUp();
    blurHeader();
    scrollActive();
  });
  
