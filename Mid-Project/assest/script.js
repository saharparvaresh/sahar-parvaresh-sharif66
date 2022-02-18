//  let inputone = document.querySelector("#dp123");


// function inputFocusOne(e) {
//     inputone.addEventListener("focusin", () => {
//         inputone.type = "date";
//     })
// }
// inputFocusOne()


// (function inputBlurOne(e) {
//     inputone.addEventListener("blur", () => {
//         inputone.type = "text";
//     })
// }())



// let inputtwo = document.querySelector("#dp124");

// function inputFocusTwo(e) {
//     inputtwo.addEventListener("focusin", () => {
//         inputtwo.type = "date";
//     })
// }
// inputFocusTwo()



// (function inputBlurTwo(e) {
//     inputtwo.addEventListener("blur", () => {
//         inputtwo.type = "text";
//     })
// }())





let totalRoomSlider = document.querySelectorAll(".rooms-slider");
let dotsTotalRoomSlider = document.querySelectorAll(".dots-room-slider");
let transformRoomSlider = 0;
// let numActive = 0;

totalRoomSlider.forEach((value, index) => {
    dotsTotalRoomSlider[index].addEventListener("click", () => {
        transformRoomSlider = index * -100;
        document.querySelector(".responsive-slider-room").setAttribute("style", `transform: translateX(${transformRoomSlider}%)`)
    })
})




let totalTestimonialSlider = document.querySelectorAll(".testimonials-slider");
let dotsTotalTestimonialSlider = document.querySelectorAll(".dots-testimonials-slider");
let transformTestimonialSlider = 0;

totalTestimonialSlider.forEach((value, index) => {
    dotsTotalTestimonialSlider[index].addEventListener("click", () => {
        transformTestimonialSlider = index * -100;
        document.querySelector(".responsive-slider-testimonials").setAttribute("style", `transform: translateX(${transformTestimonialSlider}%)`)
    })
})