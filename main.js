let trainersScroll = document.querySelector(".trainersScroll")
let trainerBox = document.querySelector(".trainerBox")

let trainerRectangelOne = document.querySelector(".trainerOne")
let trainerRectangelTwo = document.querySelector(".trainerTwo")
let trainerRectangelThree = document.querySelector(".trainerThree")
let trainerRectangelFoor = document.querySelector(".trainerFoor")
let trainerScrollLeftValue = trainersScroll.scrollLeft 
trainersScroll.addEventListener("wheel", () => {
    setTimeout(() => {
        // console.log(trainersScroll.scrollWidth)
        // console.log(trainersScroll.scrollLeft)
        // console.log(screen.width)
        // console.log(trainerBox.getBoundingClientRect().width
        trainerRectangelOne.classList.remove("redOne")
        trainerRectangelTwo.classList.remove("redOne")
        trainerRectangelThree.classList.remove("redOne")
        trainerRectangelFoor.classList.remove("redOne")
        if (trainersScroll.scrollLeft < trainerBox.getBoundingClientRect().width) {
            trainerRectangelOne.classList.add("redOne")
        } else if (trainersScroll.scrollLeft < trainerBox.getBoundingClientRect().width*2) {
            trainerRectangelTwo.classList.add("redOne")
        } else if (trainersScroll.scrollLeft < trainerBox.getBoundingClientRect().width*3) {
            trainerRectangelThree.classList.add("redOne")
        } else if (trainersScroll.scrollLeft < trainersScroll.scrollWidth - trainerBox.getBoundingClientRect().width) {
            trainerRectangelFoor.classList.add("redOne")
        }
    }, 400);
})


// Start Testemony Scroll
let testemonyScroll = document.querySelector(".testemony-scroll")
let testemonyLeftBtn = document.querySelector(".testemonyLeftScroll")
let testemonyRightBtn = document.querySelector(".testemonyRightScroll")
let testemonyRectangelOne = document.querySelector(".testemonyOne")
let testemonyRectangelTwo = document.querySelector(".testemonyTwo")
let testemonyRectangelThree = document.querySelector(".testemonyThree")
let testemonyRectangelNum = 1
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
    testemonyScroll.style.scrollBehavior = "smooth"
    testemonyScroll.scrollLeft -= screen.width
    console.log(testemonyScroll.scrollLeft)
    if (testemonyRectangelNum > 1) {
        testemonyRectangelNum -= 1
    }
    rectangleColor(testemonyRectangelNum)
})
testemonyRightBtn.addEventListener("click", () => {
    testemonyScroll.style.scrollBehavior = "smooth"
    testemonyScroll.scrollLeft += screen.width
    console.log(testemonyScroll.scrollLeft)
    if (testemonyRectangelNum < 3) {
        testemonyRectangelNum += 1
    }
    rectangleColor(testemonyRectangelNum)
})
// End Testemony Scroll
