let trainersScroll = document.querySelector(".trainersScroll")
let trainerBox = document.querySelector(".trainerBox")

let trainerRectangelOne = document.querySelector(".trainerOne")
let trainerRectangelTwo = document.querySelector(".trainerTwo")
let trainerRectangelThree = document.querySelector(".trainerThree")
let trainerRectangelFoor = document.querySelector(".trainerFoor")
let trainerScrollLeftValue = trainersScroll.scrollLeft 
function trainersChangeBoxColor() {
    setTimeout(() => {
        trainerRectangelOne.classList.remove("redOne")
        trainerRectangelTwo.classList.remove("redOne")
        trainerRectangelThree.classList.remove("redOne")
        trainerRectangelFoor.classList.remove("redOne")
        if (trainersScroll.scrollLeft < trainerBox.getBoundingClientRect().width*0.75) {
            trainerRectangelOne.classList.add("redOne")
        } else if (trainersScroll.scrollLeft < trainerBox.getBoundingClientRect().width*1.5) {
            trainerRectangelTwo.classList.add("redOne")
        } else if (trainersScroll.scrollLeft < trainerBox.getBoundingClientRect().width * 2.25) {
            trainerRectangelThree.classList.add("redOne")
        } else if (trainersScroll.scrollLeft > trainerBox.getBoundingClientRect().width * 2.25) {
            trainerRectangelFoor.classList.add("redOne")
        }
    }, 400);
}
trainersScroll.addEventListener("wheel", () => {
    trainersChangeBoxColor()
})
trainersScroll.addEventListener("touchmove", () => {
    trainersChangeBoxColor()
})







// Start Testemony Scroll
let testemonyScroll = document.querySelector(".testemony-scroll")
let testemonyLeftBtn = document.querySelector(".testemonyLeftScroll")
let testemonyRightBtn = document.querySelector(".testemonyRightScroll")
let testemonyRectangelOne = document.querySelector(".testemonyOne")
let testemonyRectangelTwo = document.querySelector(".testemonyTwo")
let testemonyRectangelThree = document.querySelector(".testemonyThree")
let testemonyRectangelNum 
function testemonyChangeBoxColor() {
    setTimeout(() => {
        testemonyRectangelOne.classList.remove("redOne")
        testemonyRectangelTwo.classList.remove("redOne")
        testemonyRectangelThree.classList.remove("redOne")
        if (testemonyScroll.scrollLeft < screen.width*0.5) {
            testemonyRectangelOne.classList.add("redOne")
        } else if (testemonyScroll.scrollLeft < screen.width*1.25) {
            testemonyRectangelTwo.classList.add("redOne")
        } else if (testemonyScroll.scrollLeft > screen.width*1.25) {
            testemonyRectangelThree.classList.add("redOne")
        }
    }, 400);
}



testemonyScroll.addEventListener("wheel", () => {
    testemonyChangeBoxColor()
})
testemonyScroll.addEventListener("touchmove", () => {
    testemonyChangeBoxColor()
})


function rectangleColor(testemonyRectangelNum) {
    testemonyRectangelOne.classList.remove("redOne")
    testemonyRectangelTwo.classList.remove("redOne")
    testemonyRectangelThree.classList.remove("redOne")
    switch (testemonyRectangelNum) {
        case 1:
            testemonyRectangelOne.classList.add("redOne")
            break;
        case 2:
            testemonyRectangelTwo.classList.add("redOne")
            break;
        case 3:
            testemonyRectangelThree.classList.add("redOne")
            break;
    }
}
testemonyLeftBtn.addEventListener("click", () => {
    if (testemonyRectangelOne.classList.contains("redOne")) {
        testemonyRectangelNum = 1
    } else if (testemonyRectangelTwo.classList.contains("redOne")) {
        testemonyRectangelNum = 2
    } else {
        testemonyRectangelNum = 3
    }
    testemonyScroll.style.scrollBehavior = "smooth"
    testemonyScroll.scrollLeft -= screen.width
    if (testemonyRectangelNum > 1) {
        testemonyRectangelNum -= 1
    }
    rectangleColor(testemonyRectangelNum)
})
testemonyRightBtn.addEventListener("click", () => {
    if (testemonyRectangelOne.classList.contains("redOne")) {
        testemonyRectangelNum = 1
    } else if (testemonyRectangelTwo.classList.contains("redOne")) {
        testemonyRectangelNum = 2
    } else {
        testemonyRectangelNum = 3
    }
    testemonyScroll.style.scrollBehavior = "smooth"
    testemonyScroll.scrollLeft += screen.width
    if (testemonyRectangelNum < 3) {
        testemonyRectangelNum += 1
    }
    rectangleColor(testemonyRectangelNum)
})
// End Testemony Scroll
