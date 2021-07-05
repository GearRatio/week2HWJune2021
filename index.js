// define the position variable, initial at 0 for first image
let position = 0;

//define array of slides
let slideList = document.querySelectorAll('img');

// define a prevImage function
const prevImage = function() {

    //create variable to select imageSlider ID Element
    const imageSlider = document.getElementById('imageSlide');
    //increment the position by 475 px
    position += 475;
    //prevent overscolling and return last image
    if (position > 0) {
        position = -950
    }
    //use style on imageslider to transform: translateX(moves to right)  by the position
    // use template literal to inject position into string
    imageSlide.style.transform = `translateX(${position}px)`;

}


//copy of same function for previous but decrement to next image.
const nextImage = function() {

    const imageSlide = document.getElementById('imageSlide');
    position -= 475;

    if (position < -950) {
        position = 0
    }
    imageSlide.style.transform = `translateX(${position}px)`;
}