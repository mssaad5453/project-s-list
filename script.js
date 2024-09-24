

function locomotiveanim(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}


function page4animation(){

let page4center = document.querySelector("#logo i")
let enter=document.querySelector("#logo h5")
let video =document.querySelector("#page4 video")

page4center.addEventListener("click",function(){
  video.play()
  gsap.to(video,{
    transform:"scaleX(1) scaleY(1)",
    opacity:1,
    borderRadius:0
  }) 
})

enter.addEventListener("click",function(){
  video.play()
  gsap.to(video,{
    transform:"scaleX(1) scaleY(1)",
    opacity:1,
    borderRadius:0
  }) 
})

video.addEventListener("click",function(){
    video.pause()
    gsap.to(video,{
        transform:"scaleX(1) scaleY(0)",
        opacity:0,
        borderRadius:"35px"
      })
})
}




function nododiv(){
  let nodovid=document.querySelectorAll(".page5-video  ")

nodovid.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
    elem.childNodes[3].style.opacity = 1
    elem.childNodes[3].play()
  })


  elem.addEventListener("mouseleave",function(){
    elem.childNodes[3].style.opacity = 0
    elem.childNodes[3].load()
  })
 
})
}


function pikadiv(){
  let pikavid=document.querySelectorAll(".section video ")
  
  pikavid.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
      elem.childNodes[3].style.opacity = 1
      elem.childNodes[3].play()
    })
  
  
    elem.addEventListener("mouseleave",function(){
      elem.childNodes[3].style.opacity = 0
      elem.childNodes[3].load()
    })
  
  })
  
  }
  
 function page9animation(){
 gsap.from(".pg9-bottom h4",{
    x:0,
    duration:1,
    scrollTrigger:{
      trigger:".pg9-bottom",
      scroller:"#main",
      // markers:true,
      start:"top 80%",
      end:"top 10%",
      scrub:true
  }
 })

}

function loadinganim(){
var t1=gsap.timeline()
t1.from("#page1",{
  opacity:0,
  duration:0.2,
  delay:0.1
})

t1.from("#page1",{
  transform:"scaleX(0.6) scaleY(0.2) ",
  borderRadius:"150px",
  duration:2,
  ease:"expo.out"
})
t1.from("nav",{
  opacity:0,
  
 
})
t1.from("#page1 h1,#page1 p,#page1 div",{
  opacity:0,
  duration:0.5,
   stagger:0.2
})

}

locomotiveanim() 
  page4animation()
  
  pikadiv()
  
  nododiv()
page9animation()
loadinganim()