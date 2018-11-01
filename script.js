window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises");
    //Hvad der skal ske
    showStart();
}

function showStart() {
    console.log("show start");

    document.querySelector("#start").classList.remove("hide");
    document.querySelector("#play").classList.add("pulse");
    document.querySelector("#play").addEventListener("click", hideStart);

}

function hideStart() {
    console.log("hide start");
    document.querySelector("#play").removeEventListener("click", hideStart);
    document.querySelector("#play").classList.remove("pulse");
    document.querySelector("#start").classList.add("fade_out");
    document.querySelector("#start").addEventListener("animationend", startGame);

}

function startGame() {
    console.log("start game");
    document.querySelector("#start").removeEventListener("animationend", startGame);
    document.querySelector("#start").classList.remove("fade_out");
    document.querySelector("#start").classList.add("hide");
    document.querySelector("#game").classList.add("show");
    document.querySelector("#game").classList.remove("hide");
}

//SLIDE EFFEKT
//var gruppe1 = document.querySelector("#gruppe1");
//var gruppe2 = document.querySelector("#gruppe2");
//var gruppe3 = document.querySelector("#gruppe3");
//var gruppe4 = document.querySelector("#gruppe4");
//var gruppe5 = document.querySelector("#gruppe5");
//var gruppe6 = document.querySelector("#gruppe6");
//var gruppe7 = document.querySelector("#gruppe7");
//var gruppe8 = document.querySelector("#gruppe8");
//
//
//var gruppe1pos = 0;
//var slideRight = function () {
//    if (gruppe1pos === 50) {
//        // Reset position.
//        box1pos = 0
//    } else {
//        gruppe1pos = box1pos + 1;
//        gruppe1.style.left = box1pos + 'vw';
//    }
//}
//
//
//var box2pos = 0;
//var slideRight2 = function () {
//    if (box2pos === -50) {
//        // Reset position.
//        box2pos = 0
//    } else {
//        box2pos = box2pos - 1;
//        boxElement2.style.left = box2pos + 'vw';
//    }
//}
