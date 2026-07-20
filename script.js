/* ==========================================
   PROBAGS LLP
   script.js
   PART 1
==========================================*/

gsap.registerPlugin(ScrollTrigger);

/* ===========================
   Loader
=========================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    gsap.to(loader, {
        opacity: 0,
        duration: 0.8,
        delay: 0.8,
        onComplete: () => {
            loader.style.display = "none";
        }
    });

});

/* ===========================
   Progress Bar
=========================== */

const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", () => {

    const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop;

    const docHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress =
        (scrollTop / docHeight) * 100;

    progressBar.style.width =
        progress + "%";

});

/* ===========================
   Header Animation
=========================== */

const header =
document.querySelector("header");

ScrollTrigger.create({

    start: 50,

    onUpdate: self => {

        if(self.scroll() > 50){

            gsap.to(header,{
                background:"rgba(255,255,255,.92)",
                backdropFilter:"blur(22px)",
                height:60,
                duration:.3
            });

        }

        else{

            gsap.to(header,{
                background:"rgba(255,255,255,.65)",
                backdropFilter:"blur(18px)",
                height:72,
                duration:.3
            });

        }

    }

});

/* ===========================
   Hero Animation
=========================== */

gsap.from(".hero h1",{

    y:100,

    opacity:0,

    duration:1.2,

    ease:"power3.out"

});

gsap.from(".hero .subtitle",{

    y:60,

    opacity:0,

    delay:.3,

    duration:1

});

gsap.from(".hero .button",{

    y:50,

    opacity:0,

    delay:.6,

    duration:1

});

/* ===========================
   Hero Image
=========================== */

gsap.from(".hero img",{

    scale:1.3,

    opacity:0,

    duration:2,

    ease:"power2.out"

});

/* ===========================
   Hero Parallax
=========================== */

gsap.to(".hero img",{

    yPercent:20,

    ease:"none",

    scrollTrigger:{

        trigger:".hero",

        start:"top top",

        end:"bottom top",

        scrub:true

    }

});

/* ===========================
   Fade Sections
=========================== */

gsap.utils.toArray(".screen").forEach(section=>{

    gsap.from(section.querySelector(".content"),{

        y:120,

        opacity:0,

        duration:1,

        ease:"power3.out",

        scrollTrigger:{

            trigger:section,

            start:"top 75%"

        }

    });

});

/* ===========================
   Image Zoom
=========================== */

gsap.utils.toArray(".background img").forEach(image=>{

    gsap.to(image,{

        scale:1,

        ease:"none",

        scrollTrigger:{

            trigger:image,

            start:"top bottom",

            end:"bottom top",

            scrub:true

        }

    });

});

/* ===========================
   Active Navigation
=========================== */

const sections =
document.querySelectorAll(".screen");

const navLinks =
document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top =
        section.offsetTop-150;

        if(scrollY>=top){

            current=section.id;

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});

/* ===========================
   Smooth Anchor Scroll
=========================== */

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target =
        document.querySelector(
        this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

console.log("ProBags LLP V2 Loaded");
/* ==========================================
   PART 2
   Premium Scroll Effects
==========================================*/

/* ===========================
   Horizontal Gallery
=========================== */

const gallery = document.querySelector(".gallery");

if(gallery){

gsap.to(gallery,{

xPercent:-25,

ease:"none",

scrollTrigger:{

trigger:gallery,

start:"top bottom",

end:"bottom top",

scrub:true

}

});

}

/* ===========================
   Floating CTA
=========================== */

const cta = document.querySelector(".floating-cta");

gsap.from(cta,{

y:120,

opacity:0,

duration:1,

delay:1.5,

ease:"power3.out"

});

ScrollTrigger.create({

start:200,

onUpdate:(self)=>{

if(self.direction===1){

gsap.to(cta,{

y:0,

opacity:1,

duration:.35

});

}else{

gsap.to(cta,{

y:0,

opacity:1,

duration:.35

});

}

}

});

/* ===========================
   Individual Panels
=========================== */

gsap.utils.toArray(".screen").forEach((panel)=>{

gsap.from(panel,{

opacity:0,

y:80,

duration:1,

ease:"power2.out",

scrollTrigger:{

trigger:panel,

start:"top 75%"

}

});

});

/* ===========================
   Subtitle Animation
=========================== */

gsap.utils.toArray(".subtitle").forEach((subtitle)=>{

gsap.from(subtitle,{

letterSpacing:"18px",

opacity:0,

duration:1,

scrollTrigger:{

trigger:subtitle,

start:"top 85%"

}

});

});

/* ===========================
   Heading Animation
=========================== */

gsap.utils.toArray("h2").forEach((heading)=>{

gsap.from(heading,{

y:100,

opacity:0,

duration:1,

ease:"power4.out",

scrollTrigger:{

trigger:heading,

start:"top 80%"

}

});

});

/* ===========================
   Paragraph Animation
=========================== */

gsap.utils.toArray("p").forEach((text)=>{

gsap.from(text,{

y:60,

opacity:0,

duration:.9,

scrollTrigger:{

trigger:text,

start:"top 85%"

}

});

});

/* ===========================
   List Animation
=========================== */

gsap.utils.toArray("li").forEach((item,index)=>{

gsap.from(item,{

x:-50,

opacity:0,

delay:index*.08,

duration:.7,

scrollTrigger:{

trigger:item,

start:"top 90%"

}

});

});

/* ===========================
   Button Animation
=========================== */

gsap.utils.toArray(".button").forEach((button)=>{

button.addEventListener("mouseenter",()=>{

gsap.to(button,{

scale:1.05,

duration:.25

});

});

button.addEventListener("mouseleave",()=>{

gsap.to(button,{

scale:1,

duration:.25

});

});

});

/* ===========================
   Hero Mouse Movement
=========================== */

const heroImage=document.querySelector(".hero img");

document.addEventListener("mousemove",(e)=>{

if(window.innerWidth>768){

const x=(window.innerWidth/2-e.clientX)/40;

const y=(window.innerHeight/2-e.clientY)/40;

gsap.to(heroImage,{

x:x,

y:y,

duration:1.5,

ease:"power2.out"

});

}

});

/* ===========================
   Footer Fade
=========================== */

gsap.from("footer",{

opacity:0,

y:120,

duration:1,

scrollTrigger:{

trigger:"footer",

start:"top 90%"

}

});

console.log("ProBags V2 Part 2 Loaded");

/* ==========================================
   PART 3
   Final Polish
==========================================*/

/* ===========================
   Scroll Reveal
=========================== */

gsap.utils.toArray(".background img").forEach((img)=>{

    gsap.fromTo(img,

    {
        scale:1.15,
        filter:"brightness(.75)"
    },

    {
        scale:1,
        filter:"brightness(1)",

        ease:"none",

        scrollTrigger:{

            trigger:img,

            start:"top bottom",

            end:"bottom top",

            scrub:true

        }

    });

});

/* ===========================
   Content Fade
=========================== */

gsap.utils.toArray(".content").forEach((content)=>{

    gsap.fromTo(content,

    {
        opacity:0,
        y:80
    },

    {
        opacity:1,
        y:0,

        duration:1,

        ease:"power3.out",

        scrollTrigger:{

            trigger:content,

            start:"top 75%"

        }

    });

});

/* ===========================
   Logo Animation
=========================== */

const logo=document.querySelector(".logo");

if(logo){

logo.addEventListener("mouseenter",()=>{

gsap.to(logo,{

letterSpacing:2,

duration:.3

});

});

logo.addEventListener("mouseleave",()=>{

gsap.to(logo,{

letterSpacing:0,

duration:.3

});

});

}

/* ===========================
   Floating Button Pulse
=========================== */

gsap.to(".floating-cta",{

scale:1.05,

repeat:-1,

yoyo:true,

duration:1.4,

ease:"power1.inOut"

});

/* ===========================
   Scroll Indicator
=========================== */

gsap.to(".scroll",{

y:12,

repeat:-1,

yoyo:true,

duration:1

});

/* ===========================
   Smooth Image Fade
=========================== */

gsap.utils.toArray(".screen").forEach((screen)=>{

const image=screen.querySelector("img");

if(image){

ScrollTrigger.create({

trigger:screen,

start:"top center",

end:"bottom center",

onEnter:()=>{

gsap.to(image,{

opacity:1,

duration:.8

});

},

onLeave:()=>{

gsap.to(image,{

opacity:.9,

duration:.8

});

},

onEnterBack:()=>{

gsap.to(image,{

opacity:1,

duration:.8

});

}

});

}

});

/* ===========================
   Refresh ScrollTrigger
=========================== */

window.addEventListener("resize",()=>{

ScrollTrigger.refresh();

});

/* ===========================
   Performance
=========================== */

gsap.config({

nullTargetWarn:false

});

/* ===========================
   Console
=========================== */

console.log("%cProBags LLP","font-size:20px;font-weight:bold;color:#111;");
console.log("%cV2 Complete","font-size:14px;color:#555;");
