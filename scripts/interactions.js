gsap.fromTo(".preload-modal > *", 
            {opacity: 0, y:100, rotate:"8deg", ease: "back.inOut(1.7)", duration: 1, stagger: 0.1}, 
            {opacity: 1, y:0, rotate:0, ease: "back.inOut(1.7)", duration: 1, stagger: 0.1});

let backgroundSound = new Audio("./sounds/Lofi-Shanghai.mp3");
    backgroundSound.volume = 0.3;
    backgroundSound.loop = true;


let muteButton = document.querySelector(".mute-button");
let bgSoundState = muteButton.dataset.bgsoundState;

let menuContainer = document.querySelector(".menu-container");
let menuButton = document.querySelector(".menu-button");
let closeMenuButton = document.querySelector(".menu-button--close");

let menuLinkDetails = document.querySelector(".menu-link--details");
let menuLinkToggleSound = document.querySelector(".menu-link--toggleSound");
let menuLinkToggleSoundIcon = document.querySelector(".menu-link-icon--toggleSound");

menuLinkToggleSound.addEventListener("click", (e) => {
    e.preventDefault();
    if(bgSoundState == "unmuted"){
        muteButton.innerHTML =                 `<svg width="16" height="25" viewBox="0 0 16 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5.89474 6.66667L10.9474 3.09549V21.9049L5.89474 18.3333H2.52632C1.13088 18.3333 0 17.2142 0 15.8333V9.16667C0 7.78576 1.13088 6.66667 2.52632 6.66667H5.89474ZM14.7368 0H13.0526C12.355 0 11.7895 0.559618 11.7895 1.25V23.75C11.7895 24.4404 12.355 25 13.0526 25H14.7368C15.4345 25 16 24.4404 16 23.75V1.25C16 0.559618 15.4345 0 14.7368 0Z" fill="white"/>
                                                </svg>`;
        menuLinkToggleSoundIcon.innerHTML =   `<svg width="16" height="25" viewBox="0 0 16 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5.89474 6.66667L10.9474 3.09549V21.9049L5.89474 18.3333H2.52632C1.13088 18.3333 0 17.2142 0 15.8333V9.16667C0 7.78576 1.13088 6.66667 2.52632 6.66667H5.89474ZM14.7368 0H13.0526C12.355 0 11.7895 0.559618 11.7895 1.25V23.75C11.7895 24.4404 12.355 25 13.0526 25H14.7368C15.4345 25 16 24.4404 16 23.75V1.25C16 0.559618 15.4345 0 14.7368 0Z" fill="white"/>
                                                </svg>`;
        bgSoundState = "muted";
        backgroundSound.volume = 0;

    } else{
        muteButton.innerHTML =                `<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M26.753 1.44023L1.44024 26.7529C1.11037 27.0824 0.577107 27.0824 0.247092 26.7529C-0.082364 26.4235 -0.082364 25.8894 0.247092 25.5598L6.40055 19.4063H6.32804C4.92986 19.4063 3.79677 18.2732 3.79677 16.8751V10.125C3.79677 8.72684 4.92986 7.59374 6.32804 7.59374H9.70308L14.7656 3.9779V11.0412L15.6094 10.1974V2.10933C15.6094 1.41031 16.176 0.843697 16.875 0.843697H18.5625C19.2616 0.843697 19.8282 1.41031 19.8282 2.10933V5.97866L25.5598 0.247091C25.8892 -0.0823638 26.4233 -0.0823638 26.7529 0.247091C27.0824 0.576546 27.0824 1.11075 26.7529 1.44023H26.753ZM14.7656 23.0218V15.5369L10.3992 19.9034L14.7656 23.0218ZM15.6094 24.8907C15.6094 25.5897 16.176 26.1563 16.875 26.1563H18.5626C19.2616 26.1563 19.8282 25.5897 19.8282 24.8907V10.4744L15.6094 14.6932V24.8907Z" fill="white"/>
                                                </svg>`;
        menuLinkToggleSoundIcon.innerHTML =   `<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M26.753 1.44023L1.44024 26.7529C1.11037 27.0824 0.577107 27.0824 0.247092 26.7529C-0.082364 26.4235 -0.082364 25.8894 0.247092 25.5598L6.40055 19.4063H6.32804C4.92986 19.4063 3.79677 18.2732 3.79677 16.8751V10.125C3.79677 8.72684 4.92986 7.59374 6.32804 7.59374H9.70308L14.7656 3.9779V11.0412L15.6094 10.1974V2.10933C15.6094 1.41031 16.176 0.843697 16.875 0.843697H18.5625C19.2616 0.843697 19.8282 1.41031 19.8282 2.10933V5.97866L25.5598 0.247091C25.8892 -0.0823638 26.4233 -0.0823638 26.7529 0.247091C27.0824 0.576546 27.0824 1.11075 26.7529 1.44023H26.753ZM14.7656 23.0218V15.5369L10.3992 19.9034L14.7656 23.0218ZM15.6094 24.8907C15.6094 25.5897 16.176 26.1563 16.875 26.1563H18.5626C19.2616 26.1563 19.8282 25.5897 19.8282 24.8907V10.4744L15.6094 14.6932V24.8907Z" fill="white"/>
                                                </svg>`;
        bgSoundState = "unmuted";
        backgroundSound.volume = 0.3;
    }
});

let infoButton = document.querySelector(".info-button");

muteButton.addEventListener("click", (e) => {
    e.preventDefault();
    if(bgSoundState == "unmuted"){
        muteButton.innerHTML =  `<svg width="16" height="25" viewBox="0 0 16 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.89474 6.66667L10.9474 3.09549V21.9049L5.89474 18.3333H2.52632C1.13088 18.3333 0 17.2142 0 15.8333V9.16667C0 7.78576 1.13088 6.66667 2.52632 6.66667H5.89474ZM14.7368 0H13.0526C12.355 0 11.7895 0.559618 11.7895 1.25V23.75C11.7895 24.4404 12.355 25 13.0526 25H14.7368C15.4345 25 16 24.4404 16 23.75V1.25C16 0.559618 15.4345 0 14.7368 0Z" fill="white"/>
                                 </svg>`;
        bgSoundState = "muted";
        backgroundSound.volume = 0;

    } else{
        muteButton.innerHTML =  `<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M26.753 1.44023L1.44024 26.7529C1.11037 27.0824 0.577107 27.0824 0.247092 26.7529C-0.082364 26.4235 -0.082364 25.8894 0.247092 25.5598L6.40055 19.4063H6.32804C4.92986 19.4063 3.79677 18.2732 3.79677 16.8751V10.125C3.79677 8.72684 4.92986 7.59374 6.32804 7.59374H9.70308L14.7656 3.9779V11.0412L15.6094 10.1974V2.10933C15.6094 1.41031 16.176 0.843697 16.875 0.843697H18.5625C19.2616 0.843697 19.8282 1.41031 19.8282 2.10933V5.97866L25.5598 0.247091C25.8892 -0.0823638 26.4233 -0.0823638 26.7529 0.247091C27.0824 0.576546 27.0824 1.11075 26.7529 1.44023H26.753ZM14.7656 23.0218V15.5369L10.3992 19.9034L14.7656 23.0218ZM15.6094 24.8907C15.6094 25.5897 16.176 26.1563 16.875 26.1563H18.5626C19.2616 26.1563 19.8282 25.5897 19.8282 24.8907V10.4744L15.6094 14.6932V24.8907Z" fill="white"/>
                                 </svg>`;
        bgSoundState = "unmuted";
        backgroundSound.volume = 0.3;
    }
});

let openMenuSound =  new Audio("./sounds/menu-enter.mp3");
openMenuSound.volume = 0.3;

let closeMenuSound = new Audio("./sounds/menu-exit.mp3");
closeMenuSound.volume = 0.3;

document.querySelector(".preload-enter-button").addEventListener("click", (e) => {
    e.preventDefault();
    backgroundSound.play();
    gsap.to(".preload-modal", {opacity:0, rotate: "-15deg", y:"-200vh", ease: "back.inOut(1.7)", duration: 1, stagger: 0.1});
});


let openMenu = function(e){
    e.preventDefault();
    muteButton.style.display = "none";
    if(backgroundSound.volume>0) backgroundSound.volume = 0.1;
    openMenuSound.play();
    setTimeout(()=>{
        if(backgroundSound.volume>0) backgroundSound.volume = 0.3;
    }, 2000);
    gsap.to(menuContainer, { scale: 1, y: 0, opacity: 1, ease: "back.inOut(1.7)", duration: 0.5});
    gsap.to(".menu-container > *", { y: 0, opacity: 1, ease: "back.inOut(1.7)", duration: 1, stagger: 0.1});
    gsap.to(menuButton, {y: 200, ease: "back.out(1.7)", duration: 0.8})
    gsap.to(closeMenuButton, {y: 0, ease: "back.out(1.7)", duration: 0.8});

}

let closeMenu = function(e){
    e.preventDefault();
    muteButton.style.display = "flex";
    if(backgroundSound.volume>0) backgroundSound.volume = 0.1;
    closeMenuSound.play();
    setTimeout(()=>{
        if(backgroundSound.volume>0) backgroundSound.volume = 0.3;
    }, 2000);
    gsap.to(".menu-container > *", { y: "100%", opacity: 0, ease: "back.inOut(1.7)", duration: 0.5, stagger: 0.1});
    gsap.to(menuContainer, { scale: 0, y: "100vh", opacity: 0, ease: "back.inOut(1.7)", duration: 1});
    gsap.to(menuButton, {y: 0, ease: "back.out(1.7)", duration: 0.8})
    gsap.to(closeMenuButton, {y: 200, ease: "back.out(1.7)", duration: 0.8});

}


let showPreload = function(e){
    e.preventDefault();
    gsap.to(".preload-modal", 
            {opacity: 1, y:0, rotate:0, ease: "back.inOut(1.7)", duration: 1, stagger: 0.1}
            );
}


infoButton.addEventListener("click", showPreload);
menuLinkDetails.addEventListener("click", showPreload);
menuButton.addEventListener("click", openMenu);
closeMenuButton.addEventListener("click", closeMenu);