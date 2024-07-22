// var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");


var typed = new Typed(".auto-type",{
    strings : ["Web Deeveloper", "Programmer", "Dost"],
    typeSpeed : 50,
    backSpeed : 50,
    loop : true
  })

  document.addEventListener("mousemove", function (dets) {
    blur.style.left = dets.x  + "px";
    blur.style.top = dets.y  + "px";
  });

gsap.from(".heroimage",{
  delay:0.4,
  opacity:0,
  duration:1,
  y:60,
  height:"60%",
  width:"30%",
})

gsap.from(".infosection",{
  delay:0.4,
  opacity:0,
  duration:1,
  y:60
})

gsap.to(".navbar", {
  backgroundColor: "black",
  duration: 0.5,
  height: "12vh",
  scrollTrigger: {
    trigger: ".navbar",
    scroller: "body",
    // markers:true,
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});

gsap.to(".herosection", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: ".herosection",
    scroller: "body",
    // markers: true,
    start: "top -30%",
    end: "top -70%",
    scrub: 2,
  },
});
gsap.to(".cards", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "cards",
    scroller: "body",
    // markers: true,
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});


gsap.from(".card",{
  duration:2,
  x:500,
  delay:0.4,
  stagger:1,
  scrollTrigger: {
   trigger:".card",
   scroller:"body",
   start:"top 70%",
   end:"top 70%",
   scrub:5
  }
})
gsap.from(".card", {
 delay:0.4,
  opacity:0,
  duration:1,
  y:60,
  scrollTrigger: {
    trigger: "card",
    scroller: "body",
    start: "top -25%",
    end: "top -70%",
    scrub: 1,
  },
});

gsap.from(".nav a",{
  opacity:0,
  duration:2,
  delay:0.4,
  x:50,
  // stagger:1,
  scrub:3
})


gsap.from(".images",{
  duration:2,
  x:500,
  delay:0.4,
  stagger:1,
  scrollTrigger: {
   trigger:".images",
   scroller:"body",
   
   start:"top 70%",
   end:"top 70%",
   scrub:5
  }
})

gsap.from(".left",{
  duration:2,
  x:-500,
  delay:0.4,
  stagger:1,
  scrollTrigger: {
   trigger:".left",
   scroller:"body",
   start:"top 70%",
   end:"top 70%",
   scrub:5
  }
})

gsap.from(".primary",{
  duration:1,
  x:-500,
  delay:0.4,
  stagger:1,
  scrollTrigger: {
   trigger:".primary",
   scroller:"body",
   start:"top 70%",
   end:"top 70%",
   scrub:5
  }
})

gsap.from(".heading",{
  duration:1,
  x:-500,
  delay:0.4,
  stagger:1,
  scrollTrigger: {
   trigger:".heading",
   scroller:"body",
   start:"top 80%",
   end:"top 80%",
   scrub:5
  }
})

gsap.from(".higher",{
  duration:1,
  x:500,
  delay:0.2,
  stagger:1,
  scrollTrigger: {
   trigger:".higher",
   scroller:"body",
   start:"top 80%",
   end:"top 80%",
   scrub:5
  }
})

gsap.from(".college",{
  duration:1,
  y:80,
  delay:0.2,
  stagger:1,
  scrollTrigger: {
   trigger:".college",
   scroller:"body",
   start:"top 80%",
   end:"top 80%",
   scrub:5
  }
})

gsap.from(".skill",{
  opacity:0,
  duration:1,
  y:50,
  delay:0.2,
  stagger:1,
  scrollTrigger: {
   trigger:".skill",
   scroller:"body",
   start:"top 80%",
   end:"top 80%",
   scrub:5
  }
})

gsap.from(".navbar h2",{
  opacity:0,
  duration:1,
  delay:0.4,
  y:100,
  
  })

gsap.from(".infosection h2",{
  opacity:0,
  duration:1,
  delay:0.4,
  y:-100,
})

gsap.from(".infosection h1",{
  opacity:0,
  duration:1,
  delay:0.4,
  x:500,
})
gsap.from(".infosection p",{
  opacity:0,
  duration:1,
  delay:0.4,
  y:100,
})
gsap.from("#animatetxt",{
  opacity:0,
  duration:1,
  delay:0.6,
  x:-500,
})
gsap.from(".socialbuttons",{
  opacity:0,
  duration:1,
  delay:0.6,
  x:50,
  y:50,
})

gsap.from(".cvbtn",{
  opacity:0,
  duration:1,
  delay:0.6,
  x:50,
  y:50,
})





gsap.from(".h1",{
  opacity:0,
  duration:1,
  delay:0.4,
  x:50,
  stagger:1,
  scrollTrigger: {
    trigger:".h1",
    scroller:"body",
    start:"top 70%",
    end:"top 70%",
   scrub:5
  }
})
