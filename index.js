// Mobile Menu Expand/Collapse
// function openMenu() {
//     document.querySelector(".mobileMenu").classList.add("open");
//     document.querySelector(".menuList").classList.add("appear");
//     document.querySelector(".menuList").classList.remove("disappear");
//     document.querySelector("body").classList.add("noScroll");
// }

// function closeMenu() {
//     document.querySelector(".mobileMenu").classList.remove("open");
//     document.querySelector(".menuList").classList.remove("appear");
//     document.querySelector(".menuList").classList.add("disappear");
//     document.querySelector("body").classList.remove("noScroll");
// }

// function removeClass() {
//     document.querySelector(".mobileMenu").classList.remove("close");
//     document.querySelector(".menuList").classList.add("disappear");
//     document.querySelector("body").classList.remove("noScroll");
// }

// Make Menu disappear scrolling down/ appear scroll up
var navPos = 70; //Should match value for .main-nav height in style.css

window.addEventListener('DOMContentLoaded', function() {
    const caseStudiesEl = document.querySelector('#case-studies-content');

    window.addEventListener('scroll', function() {
        //animate header
        let caseStudiesPos = caseStudiesEl.getBoundingClientRect().top;
        if (caseStudiesPos <= navPos) {
            document.querySelector(".main-nav").classList.add("inverse-nav");
        } else if (document.querySelector(".main-nav").classList.contains("inverse-nav")) {
            document.querySelector(".main-nav").classList.remove("inverse-nav");
        }

        //animate footer

    });

})
