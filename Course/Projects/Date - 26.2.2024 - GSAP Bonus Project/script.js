function locoScroll() {
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });

  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}

function letterSplitter() {
  var lines = document.querySelectorAll("#page2 h1");

  lines.forEach((e) => {
    var clutter = "";
    //   console.log(e.textContent);
    var line = e.textContent;
    //   console.log(line);
    var letters = line.split("");
    //   console.log(letters);
    letters.forEach((el) => {
      clutter += `<span>${el}</span>`;
    });

    e.innerHTML = clutter;
  });
}

function gsapAnimation() {
  gsap.to("#page2 h1 span", {
    color: "rgb(244, 255, 176)",
    stagger: 0.1,
    scrollTrigger: {
      trigger: "#page2 h1",
      scroller: "#main",
      markers: true,
      start: "top 60%",
      end: "top 30%",
      scrub: 1,
    },
  });
}

locoScroll();
letterSplitter();
gsapAnimation();
