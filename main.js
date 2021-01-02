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
const contact = document.querySelector(".home__contact");
contact.addEventListener("click", (event) => {
  scrollIntoView("#contact");
});

function scrollIntoView(selector) {
  const contactLink = document.querySelector(selector);
  contactLink.scrollIntoView({ behavior: "smooth" });
}
