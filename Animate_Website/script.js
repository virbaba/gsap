function page1Animation() {
  let tl = gsap.timeline();

  tl.from("nav h1, nav h4, nav button", {
    y: -40,
    duration: 0.5,
    delay: 1,
    opacity: 0,
    stagger: 0.15,
  });

  tl.from(
    ".center-part1 h1",
    {
      x: -200,
      opacity: 0,
      duration: 0.5,
    },
    "-=0.3"
  );

  tl.from(".center-part1 p", {
    x: -100,
    opacity: 0,
    duration: 0.4,
  });

  tl.from(".center-part1 button", {
    opacity: 0,
    duration: 0.4,
  });

  tl.from(
    ".center-part2 img",
    {
      opacity: 0,
      duration: 0.5,
      x: 200,
    },
    "-=0.3"
  );

  tl.from(".section1bottom img", {
    opacity: 0,
    y: 50,
    stagger: 0.15,
    duration: 0.4,
    scrollTrigger: {
      trigger: ".section1bottom img",
      scroller: "body",
      scrub: 0.5,
    },
  });
}

let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".section2",
        scroller: "body",
        start: "top 50%",
        end: "top 0%",
        scrub: 2,
    }
})

tl2.from(".services", {
    y: 30,
    opacity: 0,
    duration: 0.5
})

tl2.from("#first", {
    x : -300,
    opacity: 0,
    duration: 1
},"a") // by passing "a" first and seccond run togetherly

tl2.from("#second", {
    x : 300,
    opacity: 0,
    duration: 1
}, "a")


tl2.from("#third", {
    x : -300,
    opacity: 0,
    duration: 1
},"b") // by passing "b" third and four run togetherly

tl2.from("#four", {
    x : 300,
    opacity: 0,
    duration: 1
}, "b")

let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".section3",
        scroller: "body",
        start: "top 50%",
        end: "top 50%",
        scrub: 2,
    }
})
tl3.from('.section3', {
    x : -200,
    opacity: 0,
    duration: 1
})

tl3.from('.sec3-part1 h2', {
    x : -100,
    opacity: 0,
    duration: 0.5
})

tl3.from('.sec3-part1 p', {
    x : -100,
    opacity: 0,
    duration: 0.5
})

tl3.from('.sec3-part1 button', {
    opacity: 0,
    duration: 0.5
})

tl3.from('.sec3-part2 img', {
    x: 300,
    opacity: 0,
    duration: 0.5
})


let tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".section4",
        scroller: "body",
        start: "top 50%",
        end: "top 50%",
        scrub: 2,
        stagger:1
    }
})

tl4.from('.case-study h1', {
    x: -500,
    opacity: 0,
    duration: 0.5
})

tl4.from('.case-study p', {
    x: 500,
    opacity: 0,
    duration: 0.5
})

tl4.from('.sec4', {
    x: 500,
    opacity: 0,
    duration: 1
})

tl4.from('#sec4-part1', {
    x: -500,
    opacity: 0,
    duration: 1,
    delay: 0.5
})

tl4.from('#sec4-part2', {
    y: 500,
    opacity: 0,
    duration: 2,
    delay: 0.5
})

tl4.from('#sec4-part3', {
    x: 500,
    opacity: 0,
    duration: 1,
    delay: 0.5
})








page1Animation();


