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

Shery.makeMagnet("#page2 #AllPhotos .photo img" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
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

tl3.to("#page2 #AllPhotos", {
  opacity: 1,
  stagger: 0.05,
});

tl4.to("#page2 #AllPhotos", {
  transform: "translateX(-86%)",
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
