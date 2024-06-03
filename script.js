const dropArrow = document.querySelector(".droapArrow")

dropArrow.addEventListener("click", (e) => {
  gsap.to(window, {duration: 6, scrollTo:{y:"#viknApp", offsetY: 40}});
})

gsap.set(".img1", { top: 205, right: 33 });
gsap.set(".img2", { top: 478, left: 489 });
gsap.set(".img3", { top: 186, left: 9 });

const tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".empty1",
    start: "top bottom",
    end: "center center",
    scrub: 1,
    ease: "linear",
  },
});

tl1.to(".img1", { y: -70, x: -170, rotate: 90 }, "imgs")
tl1.to(".img2", { y: -100, x: -10, rotate: 180 }, "imgs")
tl1.to(".img3", { y: -5, x: 100, rotate: 270 }, "imgs")
tl1.to(".firstTextOpacty", { opacity: 0 }, "imgs")
tl1.to(".secondTextOpacity", { opacity: 1 }, "imgs")
tl1.to(".droapArrow", { opacity: 0 });

const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".empty2",
    start: "top bottom",
    end: "center center",
    scrub: 1,
    ease: "linear",
  },
});

tl2.to(".sideUl", { transform: 'translateX(-22%)', duration: 0.5 }, "opc")
tl2.to(".firstLi", { color: "#b2b2b2", duration: 0.5 }, "opc")
tl2.to(".secondLi", { color: "#04294A", duration: 0.5 }, "opc")
tl2.to(".firsrimg", { opacity: 0, duration: 0.5 }, "opc")
tl2.to(".secondImg img", { opacity: 1, duration: 0.5 }, "opc")
tl2.from(".sub1, .sub2, .mainImg", { stagger: 0.2, x: 50, duration: 0.5 }, "opc")

const tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".thirdAnime",
    start: "top bottom",
    end: "center center",
    scrub: 1,
    ease: "linear",
    markers: true,
  },
});

tl3.to(".sub5",{ transform: 'translate(106%, 279%)', },"slide")
tl3.to(".sub3",{ transform: 'translate(95%, 350%)', },"slide")
tl3.to(".sub4",{ transform: 'translate(-237%, 300%)', },"slide")