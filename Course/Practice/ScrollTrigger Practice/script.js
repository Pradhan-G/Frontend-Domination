// const { default: Shery } = require("sheryjs");

const lenis = new Lenis();

lenis.on("scroll", (e) => {});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// import Shery from "sheryjs";

Shery.mouseFollower();

// Shery.imageMasker(
//   "#page2 #AllPhotos .photo:nth-child(2n)" /* Element to target.*/,
//   {
//     //Parameters are optional.
//     mouseFollower: true,
//     text: "Before Render",
//     ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//     duration: 1,
//   }
// );

Shery.hoverWithMediaCircle(
  "#page1 h2, #page1 h2 #downAnim" /* Element to target.*/,
  {
    images: ["/Malay Photos webp/2.webp", "/Malay Photos webp/3.webp"] /*OR*/,
    //videos: ["video1.mp4", "video2.mp4"],
  }
);

Shery.makeMagnet("#page1 h1" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

// Shery.makeMagnet("#page2 #AllPhotos .photo #sm" /* Element to target.*/, {
//   //Parameters are optional.
//   ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//   duration: 1,
// });

Shery.imageEffect(".photo", {
  style: 2,
  // debug: true,
  gooey: true,
  config: {
    a: { value: 2, range: [0, 30] },
    b: { value: -0.95, range: [-1, 1] },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 0.7272643924436347 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0.08, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: true },
    infiniteGooey: { value: false },
    growSize: { value: 4.1, range: [1, 15] },
    durationOut: { value: 0.92, range: [0.1, 5] },
    durationIn: { value: 0.1, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: false },
    maskVal: { value: 1, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 0.92, range: [0, 10] },
    metaball: { value: 0.34, range: [0, 2] },
    discard_threshold: { value: 0.59, range: [0, 1] },
    antialias_threshold: { value: 0.03, range: [0, 0.1] },
    noise_height: { value: 0.31, range: [0, 2] },
    noise_scale: { value: 21.37, range: [0, 100] },
  },
});

var tl = gsap.timeline();
var tl2 = gsap.timeline();
var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".anim2",
    scroller: "body",
    start: "top 60%",
    end: "top 30%",
    scrub: 2,
  },
});
var tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    start: "top 0",
    end: "top -500%",
    scrub: 2,
    pin: true,
    markers: true,
  },
});

tl.from("#page1 h1:nth-child(1)", {
  x: -400,
  opacity: 0,
  duration: 0.3,
  delay: 0.3,
});

tl.from("#page1 h1:nth-child(2)", {
  x: 400,
  opacity: 0,
  duration: 0.3,
});

tl.from("#page1 h1:nth-child(3)", {
  x: -400,
  opacity: 0,
  duration: 0.3,
});

tl.from(".anim", {
  y: -100,
  opacity: 0,
  stagger: 0.07,
});
// tl.from(".anim", {
//   y: -100,
//   opacity: 0,
//   stagger: 0.07,
//   yoyo: true,
// });
tl2.to(".anim", {
  color: "#D4EAFC",
  stagger: 0.07,
  yoyo: true,
});
tl.to("#page1 h1", {
  filter: "blur(20px)",
  opacity: 0,
  delay: 1,
  duration: 1,
});

tl.to("#page1 h2", {
  display: "block",
  duration: 0.5,
  y: -200,
  opacity: 1,
});
tl.to("#downAnim", {
  y: 50,
  duration: 0.6,
  yoyo: true,
  repeat: -1,
});

tl3.from(".anim2", {
  opacity: 0,
  scale: 0.5,
  y: -50,
  stagger: 0.05,
});

tl2.from(".anim2", {
  color: "black",
  stagger: 0.05,
  yoyo: true,
  repeat: -1,
});

tl3.to("#page2 #AllPhotos", {
  opacity: 1,
  stagger: 0.05,
  transform: "translateX(0%)",
});

tl4.to("#page2 #AllPhotos", {
  transform: "translateX(-72%)",
});

tl4.to("#scroll-next", {
  width: "100vh",
  scale: 2,
  y: -140,
  // position: "absolute",
  x: -550,
});

// tl.to("#page2 #AllPhotos", {
//   opacity: 1,
//   transform: "translateX(-86%)",
//   duration: 2,
//   scrollTrigger: {
//     trigger: "#page2",
//     scroller: "body",
//   },
// });
