gsap.to('.scroll', {
    duration:3,
    y: "-20vh",
    ease: "none",
    opacity: 0,
    stagger: 1,
    scrollTrigger:{
        /*scroller: ".containerScroll",*/
        trigger: '.wrapper',
        start: '30% center',
        end: '30% center',
        markers:true,    
        scrub: 1,
        opacity: 0,
        toggleActions: 'restart pause reverse reset'
    }
})