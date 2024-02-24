// const { default: gsap } = require("gsap");

var tl = gsap.timeline();
var tl2 = gsap.timeline();
var tl3 = gsap.timeline();

tl.from("#nav-part-1", {
  y: -50,
  opacity: 0,
  duration: 0.3,
  delay: 0.5,
});

tl.from("#nav-part-2", {
  y: -50,
  opacity: 0,
  duration: 0.3,
});

tl.from("#nav-part-3", {
  y: -50,
  opacity: 0,
  duration: 0.3,
});

tl2.from(".main-text", {
  x: -500,
  opacity: 0,
  duration: 1,
  delay: 0.5,
});

tl2.to(".main-text", {
  zIndex: 5,
  duration: 0,
  size: 1.2,
});

tl2.from("img", {
  opacity: 0,
  rotate: 0,
  duration: 0.5,
  stagger: 0.3,
});

tl2.to("#img1", {
  rotate: 0,
  x: -750,
  opacity: 100,
  duration: 0.4,
});
tl2.to("#img4", {
  rotate: 0,
  x: 750,
  opacity: 100,
  duration: 0.4,
});

tl2.to("#img2", {
  rotate: 0,
  x: -250,
  opacity: 100,
  duration: 0.4,
});
tl2.to("#img3", {
  rotate: 0,
  x: 250,
  opacity: 100,
  duration: 0.4,
});

tl2.to("img", {
  filter: "blur(10px)",
  ease: "power1.out",
  duration: 0.3,
  stagger: 0.1,
});

// tl.to("#img1", {
//   filter: "blur(10px)",
//   ease: "power1.out",
//   duration: 0.3,
// });
// tl.to("#img2", {
//   filter: "blur(10px)",
//   ease: "power1.out",
//   duration: 0.3,
// });
// tl.to("#img3", {
//   filter: "blur(10px)",
//   ease: "power1.out",
//   duration: 0.3,
// });
// tl.to("#img4", {
//   filter: "blur(10px)",
//   ease: "power1.out",
//   duration: 0.3,
// });

tl2.from("span", {
  color: "rgb(215, 215, 215)",
  duration: 0.2,
  stagger: 0.05,
  yoyo: true,
  repeat: -1,
});

tl3.from("#footer", {
  y: 100,
  opacity: 0,
  duration: 0.5,
  delay: 0.5,
});
