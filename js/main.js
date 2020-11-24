// main code

let pro = document.getElementById("projects");
let toRight = document.getElementsByClassName("toRight");
let toLeft = document.getElementsByClassName("toLeft");

var isOnScreen = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (bounding.top + 100 <= (window.innerHeight || document.documentElement.clientHeight));
};

window.addEventListener('scroll', function (event) {
    if (isOnScreen(pro)) {
        console.log("Is on screen");

        for (let i = 0; i < toLeft.length; i++){
            toLeft[i].classList.add("animate__fadeInLeft");
            toLeft[i].classList.remove("invisible");
        }

        for (let j = 0; j < toRight.length; j++){
            toRight[j].classList.add("animate__fadeInRight");
            toRight[j].classList.remove("invisible");
        }
    } else{
        for (let i = 0; i < toLeft.length; i++){
            toLeft[i].classList.remove("animate__fadeInLeft");
            toLeft[i].classList.add("invisible");
        }

        for (let j = 0; j < toRight.length; j++){
            toRight[j].classList.remove("animate__fadeInRight");
            toRight[j].classList.add("invisible");
        }
    }
}, false);