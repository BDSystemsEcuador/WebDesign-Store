const testimonials = document.querySelector("#testimonials");
let testimonialsSection = document.querySelectorAll(".testimonials__section");
let testimonialsSectionLast = testimonialsSection[testimonialsSection.length-1];
const TestimonialsbtnLeft = document.querySelector("#testimonials-btn-left");
const TestimonialsbtnRight = document.querySelector("#testimonials-btn-right");
testimonials.insertAdjacentElement("afterbegin",testimonialsSectionLast);

function NextTestimonials(){
    let testimonialsSectionFirst = document.querySelectorAll(".testimonials__section")[0];
    testimonials.style.marginLeft ="-200%";
    testimonials.style.transition ="all 0.5s";
    setTimeout(function(){
        testimonials.style.transition="none";
        testimonials.insertAdjacentElement("beforeend",testimonialsSectionFirst);
        testimonials.style.marginLeft="-100%";
    },500);
}
TestimonialsbtnRight.addEventListener("click",function(){
    NextTestimonials();
});
function PrevTestimonials(){
    let testimonialsSection = document.querySelectorAll(".testimonials__section");
    let testimonialsSectionLast = testimonialsSection[testimonialsSection.length-1];
    testimonials.style.marginLeft ="0";
    testimonials.style.transition ="all 0.5s";
    setTimeout(function(){
        testimonials.style.transition="none";
        testimonials.insertAdjacentElement("afterbegin",testimonialsSectionLast);
        testimonials.style.marginLeft="-100%";
    },500);
}
TestimonialsbtnLeft.addEventListener("click",function(){
    PrevTestimonials();
});
setInterval(function(){
    NextTestimonials();
},4000);