let carouselItems = document.querySelectorAll('.carousel-item');
let arrowRight = document.querySelector('#arrow-right');
let arrowLeft = document.querySelector('#arrow-left');
let rightArrowImg = document.querySelector('.rightArrowImg');
let leftArrowImg = document.querySelector('.leftArrowImg');
let mql = window.matchMedia('(max-width: 700px)');
let isSmall;
let current = 0;

// Reset the Slider to Default value
function reset() {
    for (i = 0; i < carouselItems.length; i++) {
        carouselItems[i].style.display = 'none';
    }
}

// Set Event Listener to Check the Width of the Screen on Page Load
window.addEventListener("load", screenTest);

// Set Event Listener to Check the Width of the Screen on Changing the media Query
function screenTest(e) {
    reset()
  if (e.matches) {
    startSlideForSmallScreen();
    isSmall = true;
  } else {
    startSlideForWideScreen();
    isSmall = false;
  }
}
mql.addListener(screenTest);


// Slider for Wide Screen Mode
function startSlideForWideScreen() {
    reset();
    carouselItems[0].style.display = 'block';
    carouselItems[1].style.display = 'block';
    carouselItems[2].style.display = 'block';
}

// Slider for Small Screen Mode
function startSlideForSmallScreen() {
    reset();
    carouselItems[0].style.display = 'block';
}

// Right Slide for Wide Screen
function slideRightForWideScreen() {
    reset();
    carouselItems[current + 1].style.display = "block";
    carouselItems[current + 2].style.display = "block";
    carouselItems[current + 3].style.display = "block";
    current++;
}

// Right Slide for Small Screen
function slideRightForSmallScreen() {
    reset();
    console.log(current,2);
    carouselItems[current + 1].style.display = "block";
    current++;
}

// Right Slide Event Listener
arrowRight.addEventListener('click', () => {
    leftArrowImg.style.transform = 'rotate(180deg)';
    leftArrowImg.src = '../img/Group 88.png';

    // If the Screen is Wide
    if (!isSmall) {

        if (current === carouselItems.length - 4) {
            rightArrowImg.style.transform = 'rotate(180deg)';
            rightArrowImg.src = '../img/Group 92.png';
        }
        if (current === carouselItems.length - 3) {
            return
        }
        slideRightForWideScreen();

    // If the Screen is Small    
    } else if (isSmall) {

        console.log(carouselItems.length);

        if (current === carouselItems.length - 2) {
            rightArrowImg.style.transform = 'rotate(180deg)';
            rightArrowImg.src = '../img/Group 92.png';
        }
        if (current === carouselItems.length - 1) {
            return
        }
        slideRightForSmallScreen();

    }


    
}) 

// Left Slide for Wide Screen
function slideLeftForWideScreen() {
    reset();    
    carouselItems[current + 1].style.display = "block";
    carouselItems[current].style.display = "block";
    carouselItems[current - 1].style.display = "block";
    current--;
}

// Left Slide for Small Screen
function slideLeftForSmallScreen() {
    reset();    
    carouselItems[current - 1].style.display = "block";
    current--;
}

// Left Slide for Event Listener
arrowLeft.addEventListener('click', () => {
    rightArrowImg.style.transform = 'rotate(0deg)';
    rightArrowImg.src = '../img/Group 88.png';

    // If Screen is Wide
    if (!isSmall) {

        if (current === 1) {
            leftArrowImg.style.transform = 'rotate(0deg)';
            leftArrowImg.src = '../img/Group 92.png';
        }
        if (current === 0) {
            return
        }
        slideLeftForWideScreen();

    // If Screen is Small
    } else if (isSmall) {

        if (current === 1) {
            leftArrowImg.style.transform = 'rotate(0deg)';
            leftArrowImg.src = '../img/Group 92.png';
        }
        if (current === 0) {
            return
        }
        slideLeftForSmallScreen();

    }
}) 