gsap.fromTo(
  ".preload-modal > *",
  {
    opacity: 0,
    y: 100,
    rotate: "8deg",
    ease: "back.inOut(1.7)",
    duration: 1,
    stagger: 0.1,
  },
  {
    opacity: 1,
    y: 0,
    rotate: 0,
    ease: "back.inOut(1.7)",
    duration: 1,
    stagger: 0.1,
  }
);

let menuContainer = document.querySelector(".menu-container");
let menuButton = document.querySelector(".menu-button");
let closeMenuButton = document.querySelector(".menu-button--close");

let menuLinkDetails = document.querySelector(".menu-link--details");
let menuLinkToggleSound = document.querySelector(".menu-link--toggleSound");
let menuLinkToggleSoundIcon = document.querySelector(
  ".menu-link-icon--toggleSound"
);

let infoButton = document.querySelector(".info-button");

document
  .querySelector(".preload-enter-button")
  .addEventListener("click", (e) => {
    e.preventDefault();

    gsap.to(".preload-modal", {
      opacity: 0,
      rotate: "-15deg",
      y: "-200vh",
      ease: "back.inOut(1.7)",
      duration: 1,
      stagger: 0.1,
    });
  });

let openMenu = function (e) {
  e.preventDefault();

  gsap.to(menuContainer, {
    scale: 1,
    y: 0,
    opacity: 1,
    ease: "back.inOut(1.7)",
    duration: 0.5,
  });
  gsap.to(".menu-container > *", {
    y: 0,
    opacity: 1,
    ease: "back.inOut(1.7)",
    duration: 1,
    stagger: 0.1,
  });
  gsap.to(menuButton, { y: 200, ease: "back.out(1.7)", duration: 0.8 });
  gsap.to(closeMenuButton, { y: 0, ease: "back.out(1.7)", duration: 0.8 });
};

let closeMenu = function (e) {
  e.preventDefault();

  gsap.to(".menu-container > *", {
    y: "100%",
    opacity: 0,
    ease: "back.inOut(1.7)",
    duration: 0.5,
    stagger: 0.1,
  });
  gsap.to(menuContainer, {
    scale: 0,
    y: "100vh",
    opacity: 0,
    ease: "back.inOut(1.7)",
    duration: 1,
  });
  gsap.to(menuButton, { y: 0, ease: "back.out(1.7)", duration: 0.8 });
  gsap.to(closeMenuButton, { y: 200, ease: "back.out(1.7)", duration: 0.8 });
};

let showPreload = function (e) {
  e.preventDefault();
  gsap.to(".preload-modal", {
    opacity: 1,
    y: 0,
    rotate: 0,
    ease: "back.inOut(1.7)",
    duration: 1,
    stagger: 0.1,
  });
};

infoButton.addEventListener("click", showPreload);
menuLinkDetails.addEventListener("click", showPreload);
menuButton.addEventListener("click", openMenu);
closeMenuButton.addEventListener("click", closeMenu);
