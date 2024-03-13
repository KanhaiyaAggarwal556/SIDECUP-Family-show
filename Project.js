var  cr= document.querySelector("#crsr");
var  crbr= document.querySelector("#crsr-blr");
document.addEventListener("mousemove",function(dets){
    cr.style.left = dets.x+"px";
    cr.style.top = dets.y+"px";
    crbr.style.left = dets.x-100+"px";
    crbr.style.top = dets.y-100+"px";
});
gsap.to("#navbar",{
    backgroundColor: "black",
    height:"105px",
    duration: 1,
    scrollTrigger: {
        trigger: "#navbar",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 2.5,
    }
});
gsap.to("#main",{
    backgroundColor: "black",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -30%",
        end: "top -80%",
        scrub: 2.5,
    }
});
var currentImageIndex = 0;
var images = ['https://images.squarespace-cdn.com/content/v1/5f083237655f896f7006165b/1594392725886-3K0GCRPSCC39D3WLR5FE/199-DS7_2902.jpg?format=2500w', 'https://static.toiimg.com/thumb/msid-68049806,imgsize-223084,width-400,resizemode-4/68049806.jpg', 'https://cdn.shopify.com/s/files/1/0022/8445/3977/files/coffee-cup_1024x1024.jpg?v=1673473132']; // Add more image URLs as needed
var currentImage = document.getElementById('currentImage');

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateImage();
}
function updateImage() {
    currentImage.style.animation = 'none';
    void currentImage.offsetWidth; // Trigger reflow to restart the animation
    currentImage.style.animation = null;
    currentImage.src = images[currentImageIndex];
}
var h4all = document.querySelectorAll('#navbar h4');
h4all.forEach(function(elem){
    elem.addEventListener('mouseenter',function(){
        cr.style.scale = 3;
        cr.style.border = "0.1px solid #7fd42bbd";
        cr.style.backgroundColor = "transparent"; 
    });
    elem.addEventListener('mouseleave',function(){
        cr.style.scale = 1;
        cr.style.border = "0px solid #7fd42bbd";
        cr.style.backgroundColor = "#7fd42bbd"; 
    });
});
gsap.from("#About img,#AboutUs",{
    y:90,
    opacity: 0,
    duration:2,
    stagger: 0.4,
    scrollTrigger:{
        trigger: "#About",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end:"top 65%",
        scrub:2
    }
});
gsap.from(".card",{
    opacity: 0,
    duration:3,
    scrollTrigger:{
        trigger: ".card",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end:"top 65%",
        scrub:5,
        
    }
});
gsap.from("#food-drink #imgFood",{
    x:90,
    duration:3,
    stagger: 2,
    scrollTrigger:{
        trigger: "#food-drink #imgFood",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end:"top 65%",
        scrub:3,
        
    }
});
gsap.from("#food-drink #FoodDrink",{
    x:90,
    duration:3,
    stagger: 2,
    scrollTrigger:{
        trigger: "#food-drink #FoodDrink",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end:"top 65%",
        scrub:3,
    }
});
gsap.from("#colon1",{
    y: -70,
    x:-70,
    scrollTrigger:{
        trigger: "#colon1",
        scroller: "body",
        // markers: true,
        start: "top 55%",
        end : "top 45%",
        scrub: 4
    }
});
gsap.from("#colon2",{
    y: 70,
    x: 70,
    scrollTrigger:{
        trigger: "#colon1",
        scroller: "body",
        // markers: true,
        start: "top 55%",
        end : "top 45%",
        scrub: 4
    }
});
gsap.from("#page4 p",{
    y: 20,
    x: 20,
    scrollTrigger:{
        trigger: "#colon1",
        scroller: "body",
        // markers: true,
        start: "top 55%",
        end : "top 45%",
        scrub: 4
    }
});
gsap.from("#page5 h1",{
    y: 50,
    scrollTrigger:{
        trigger: "#page5 h1",
        scroller: "body",
        // markers: true,
        start: "top 65%",
        end : "top 60%",
        scrub: 3
    }

});
