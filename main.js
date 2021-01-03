"use stric";

// Make navbar transparent when it si on the top
const navbar = document.querySelector(".navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  // console.log(window.scrollY);
  // console.log(`navbarHeight: ${navbarHeight}`);
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

//Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector(".navbar__munu");
navbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  // console.log(event.target.dataset.link);
  scrollIntoView(link);
});

//handle click on "contact me" button on home
const toContact = document.querySelector(".home__contact");
toContact.addEventListener("click", () => {
  scrollIntoView("#contact");
});

//Make home slowly fade to transparent as the window scrolls down.
const home = document.querySelector(".home_container");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  // console.log(1 - homeHeight / window.scrollY);
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

//Handle click on the "arrow up" button
const toTop = document.querySelector(".scrollToTop");
toTop.addEventListener("click", (event) => {
  scrollIntoView("#home");
});

//show "arrow up" button when scrolling down
document.addEventListener("scroll", () => {
  if (homeHeight < window.scrollY / 2) {
    toTop.classList.add("visibleToTop");
  } else {
    toTop.classList.remove("visibleToTop");
  }
});

function scrollIntoView(selector) {
  const contactLink = document.querySelector(selector);
  contactLink.scrollIntoView({ behavior: "smooth" });
}
