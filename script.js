// gsap.registerPlugin(ScrollTrigger, ScrollSmoother)


// /*------------------------------
// Init ScrollSmoother
// ------------------------------*/
// const scrollerSmoother = ScrollSmoother.create({
//   content: '#content',
//   wrapper: '#wrapper',
//   smooth: true,
//   effects: false,
//   normalizeScroll: true
// })

gsap.set(".img3", {
    top: 186,
    left: 9
})

gsap.set(".img1", {
    right: 33,
    top: 205
})

gsap.set(".img2", {
    top: 478,
    left: 489
})


const tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.empty1',
        // pin: true,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
        ease: 'linear',
        markers: true,
      }
  })
  
//   tl.to('.accordion .text', {
//     height: 0,
//     paddingBottom: 0,
//     opacity: 0,
//     stagger: .5,
//   })
//   tl.to('.accordion', {
//     marginBottom: -15,
//     stagger: .5,
//   }, '<')

tl.to(".img1", {
    y: -70,
    x: -170,
    rotate: 90,
    // duration: 0.5
},"imgs")

tl.to(".img2", {
    y: -100,
    x: -10,
    rotate: 180,
    // duration: 0.5
},"imgs")

tl.to(".img3", {
    y: -5,
    x: 100,
    rotate: 270,
    // duration: 0.5
},"imgs")

tl.to(".firstTextOpacty", {
    opacity: 0,
    // duration: 0.5
},"imgs")

tl.to(".secondTextOpacity", {
    opacity: 1,
    // duration: 0.5
},"imgs")