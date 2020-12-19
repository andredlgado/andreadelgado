const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 20)+"px; left: "+(e.pageX - 20)+"px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})


gsap.to('#scroll', {
    duration:3,
    y: "-20vh",
    ease: "none",
    opacity: 0,
    stagger: 1,
    scrollTrigger:{
        /*scroller: ".containerScroll",*/
        trigger: '#scroll',
        start: '30% center',
        end: '30% center',
        /*markers:true,*/   
        scrub: 1,
        opacity: 0,
        toggleActions: 'restart pause reverse reset'
    }
})


gsap.from('.anim1', {opacity:0, duration:2, y:-70, ease: 'Power2.easeInOut', stagger:0.1,  
scrollTrigger:{
    trigger: '.anim1',
    start: '-50% center',
    end: '5% center',
    /*markers:true,*/       
    scrub: 2,
    toggleActions: 'restart pause reverse reset'
 }
})

gsap.from('.anim2', {opacity:0, duration:2, y:-70, ease: 'Power2.easeInOut', stagger:0.1,  
scrollTrigger:{
    trigger: '.anim2',
    start: '-50% center',
    end: '-5% center',
     /*markers:true,*/      
    scrub: 2,
    toggleActions: 'restart pause reverse reset'
 }
})

gsap.from('.anim3', {opacity:0, duration:2, y:-70, ease: 'Power2.easeInOut', stagger:0.1,  
scrollTrigger:{
    trigger: '.anim3',
    start: '-50% center',
    end: '-5% center',
    /*markers:true,*/     
    scrub: 2,
    toggleActions: 'restart pause reverse reset'
 }
})

gsap.from('.anim4', {opacity:0, duration:2, y:-70, ease: 'Power2.easeInOut', stagger:0.1,  
scrollTrigger:{
    trigger: '.anim4',
    start: '-50% center',
    end: '-5% center',
     /*markers:true,*/       
    scrub: 4,
    toggleActions: 'restart pause reverse reset'
 }
})

gsap.from('.anim6', {opacity:0, duration:2, y:-70, ease: 'Power2.easeInOut', stagger:0.1,  
scrollTrigger:{
    trigger: '.anim6',
    start: '-50% center',
    end: '-5% center',
     /*markers:true,*/       
    scrub: 4,
    toggleActions: 'restart pause reverse reset'
 }
})

gsap.from('.anim7', {opacity:0, duration:2, y:-70, ease: 'Power2.easeInOut', stagger:0.1,  
scrollTrigger:{
    trigger: '.anim7',
    start: '-50% center',
    end: '-5% center',
     /*markers:true,*/       
    scrub: 2,
    toggleActions: 'restart pause reverse reset'
 }
})

gsap.from('.anim8', {opacity:0, duration:2, y:-70, ease: 'Power2.easeInOut', stagger:0.1,  
scrollTrigger:{
    trigger: '.anim8',
    start: '10% center',
    end: '30% center',
     /*markers:true,*/       
    scrub: 2,
    toggleActions: 'restart pause reverse reset'
 }
})

gsap.from('.anim9', {opacity:0, duration:2, y:-70, ease: 'Power2.easeInOut', stagger:0.1,  
scrollTrigger:{
    trigger: '.anim9',
    start: '10% center',
    end: '40% center',
     /*markers:true,*/
    scrub: 2,
    toggleActions: 'restart pause reverse reset'
 }
})

gsap.from('.anim10', {opacity:0, duration:2, y:-70, ease: 'Power2.easeInOut', stagger:0.1,  
scrollTrigger:{
    trigger: '.anim10',
    start: '-10% center',
    end: '10% center',
    /*markers:true,*/       
    scrub: 2,
    toggleActions: 'restart pause reverse reset'
 }
})

gsap.from('.anim11', {opacity:0, duration:2, y:-70, ease: 'Power2.easeInOut', stagger:0.1,  
scrollTrigger:{
    trigger: '.anim11',
    start: '-10% center',
    end: '40% center',
     /*markers:true,*/       
    scrub: 2,
    toggleActions: 'restart pause reverse reset'
 }
})

gsap.from('.anim12', {opacity:0, duration:2, y:-70, ease: 'Power2.easeInOut', stagger:0.1,  
scrollTrigger:{
    trigger: '.anim12',
    start: '10% center',
    end: '90% center',
     /*markers:true,*/       
    scrub: 2,
    toggleActions: 'restart pause reverse reset'
 }
})

gsap.to('.anim13', {opacity:0, duration:2, y:-70, ease: 'Power2.easeInOut', stagger:0.1,  
scrollTrigger:{
    trigger: '.anim13',
    start: '5% center',
    end: '70% center',
     /*markers:true,*/       
    scrub: 2,
    toggleActions: 'restart pause reverse reset'
 }
})

gsap.from('.anim5', {opacity:0, duration:2, y:-70, ease: 'Power2.easeInOut', stagger:0.1,  
scrollTrigger:{
    trigger: '.anim5',
    start: '-50% center',
    end: '-5% center',
     /*markers:true,*/       
    scrub: 4,
    toggleActions: 'restart pause reverse reset'
 }
})


var tl = gsap.timeline({defaults:{duration:.5}})

tl.from(".fill, .fill2", {y:-40, stagger: .2})
  .to(rule, {duration:0.1, cssRule: {scaleY:0}}, "-=1.2")

  
   



