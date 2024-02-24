// import gsap from "gsap";

// gsap.to("#box", {
//   x: 1000,
//   delay: 1,
//   duration: 5,
//   backgroundColor: "pink",
// });

var tl = gsap.timeline();

tl.to("#box1", {
  x: 1200,
  rotate: 360,
  scale: 0.5,
  duration: 3,
  delay: 1,
});
tl.to("#box2", {
  x: 1200,
  rotate: 360,
  scale: 0.5,
  duration: 2,
});
tl.to("#box3", {
  x: 1200,
  rotate: 360,
  scale: 0.5,
  duration: 1,
});
