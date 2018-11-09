window.addEventListener("load", sidenVises);

//En variabel med et tal
let points = 0;
let timeLeft = 60;
let showSettingsEffektSound = true;
let showSettingsMusic = true;


function sidenVises() {
    console.log("siden vises");
    //show start -->
    showStart();
    document.querySelector("#settings").addEventListener("click", showSettingSite);
    document.querySelector("#cancel").addEventListener("click", hideSettingSite);
    document.querySelector("#play").addEventListener("click", startBeskrivelse);

    document.querySelector("#setting_effekt_sound").addEventListener("click", toggleSounds);
    document.querySelector("#setting_music").addEventListener("click", toggleMusic);
    document.querySelector("#setting_notifications").addEventListener("click", toggleNotifications);

    document.querySelector("#cancel_game").addEventListener("click", showStart);

}

function showStart() {
    console.log("show start");

    //Vis startskærm
    document.querySelector("#start").classList.remove("hide");

    // Start animation på startskærm
    document.querySelector("#play").classList.add("pulse");

    document.querySelector("#mand_sprite").classList.add("skyder");


}

function hideStart() {
    console.log("hide start");
    //fjern click og animation på play
    document.querySelector("#play").removeEventListener("click", hideStart);
    document.querySelector("#play").classList.remove("pulse");
    document.querySelector("#start").classList.add("fade_out");
    document.querySelector("#start").addEventListener("animationend", startBeskrivelse);

}

function showSettingSite() {
    console.log("show settingSite");
    document.querySelector("#settings_baggrund").classList.toggle("hide");
    document.querySelector("#gameOver").classList.add("hide");

}

function hideSettingSite() {
    console.log("hideSettingSite");
    document.querySelector("#settings_baggrund").classList.toggle("hide");

}

function startBeskrivelse() {
    console.log("show beskrivelse");
    document.querySelector("#start").classList.add("hide");
    document.querySelector("#settings").classList.add("hide");
    document.querySelector("#beskrivelse").classList.remove("hide");
    document.querySelector("#got_it_beskrivelse").addEventListener("click", startGame);

    //Start musik

    document.querySelector("#musik").play();
    document.querySelector("#musik").volume = 0.2;

}

function startGame() {
    console.log("start game");

    timeLeftFc();
    document.querySelector("#start").removeEventListener("animationend", startGame);
    document.querySelector("#settings").classList.add("hide");
    document.querySelector("#beskrivelse").classList.add("hide");
    document.querySelector("#gameOver").classList.add("hide");

    document.querySelector("#start").classList.remove("fade_out");
    document.querySelector("#start").classList.add("hide");
    document.querySelector("#game").classList.add("show");
    document.querySelector("#game").classList.remove("hide");
    document.querySelector("#cancel").classList.remove("hide");


    document.querySelector("#gruppe1").classList.add("slide_to_left");
    document.querySelector("#gruppe1").addEventListener("animationend", gruppe1Test);
    document.querySelector("#gruppe1").addEventListener("click", gruppe1TestClick);


    document.querySelector("#gruppe2").classList.add("slide_to_left");
    document.querySelector("#gruppe2").addEventListener("animationend", gruppe2Test);
    document.querySelector("#gruppe2").addEventListener("click", gruppe2TestClick);


    document.querySelector("#gruppe3").classList.add("slide_to_right");
    document.querySelector("#gruppe3").addEventListener("animationend", gruppe3Test);
    document.querySelector("#gruppe3").addEventListener("click", gruppe3TestClick);


    document.querySelector("#gruppe4").classList.add("slide_to_right");
    document.querySelector("#gruppe4").addEventListener("animationend", gruppe4Test);
    document.querySelector("#gruppe4").addEventListener("click", gruppe4TestClick);

    document.querySelector("#gruppe5").classList.add("slide_to_right");
    document.querySelector("#gruppe5").addEventListener("animationend", gruppe5Test);
    document.querySelector("#gruppe5").addEventListener("click", gruppe5TestClick);


    document.querySelector("#gruppe6").classList.add("slide_to_left");
    document.querySelector("#gruppe6").addEventListener("animationend", gruppe6Test);
    document.querySelector("#gruppe6").addEventListener("click", gruppe6TestClick);


    document.querySelector("#gruppe7").classList.add("slide_to_left");
    document.querySelector("#gruppe7").addEventListener("animationend", gruppe7Test);
    document.querySelector("#gruppe7").addEventListener("click", gruppe7TestClick);


    document.querySelector("#gruppe8").classList.add("slide_to_left");
    document.querySelector("#gruppe8").addEventListener("animationend", gruppe8Test);
    document.querySelector("#gruppe8").addEventListener("click", gruppe8TestClick);

}

//gruppe 1 forsvinder (PENGESEDDEL)
function gruppe1Test() {
    console.log("gruppe1Test");
    this.classList.remove("hide");

    let elm = this;
    let newone = elm.cloneNode(true);
    elm.parentNode.replaceChild(newone, elm);

    newone.addEventListener("click", gruppe1TestClick);
    newone.addEventListener("animationend", gruppe1Test);
}

function gruppe1TestClick() {
    console.log("gruppe1TestClick");

    this.classList.add("hide");

    points += 125000000;
    console.log(points);
    document.querySelector("#points").innerHTML = points;

    //lydeffekt

    document.querySelector("#tching").play();
    document.querySelector("#tching").currentTime = 0;


}

//gruppe 2 forsvinder (SKAT)
function gruppe2Test() {
    console.log("gruppe2Test");
    this.classList.remove("hide");

    let elm = this;
    let newone = elm.cloneNode(true);
    elm.parentNode.replaceChild(newone, elm);

    newone.addEventListener("click", gruppe2TestClick);
    newone.addEventListener("animationend", gruppe2Test);

}

function gruppe2TestClick() {
    console.log("gruppe2TestClick");

    this.classList.add("hide");

    console.log("timeleft - før " + timeLeft);
    timeLeft = timeLeft - 10;
    console.log("timeleft - efter " + timeLeft);

    //lydeffekt

    document.querySelector("#bab").play();
    document.querySelector("#bab").currentTime = 0;
}

//gruppe 3 forsvinder (PENGESEDDEL)
function gruppe3Test() {
    console.log("gruppe3Test");
    this.classList.remove("hide");

    let elm = this;
    let newone = elm.cloneNode(true);
    elm.parentNode.replaceChild(newone, elm);

    newone.addEventListener("click", gruppe3TestClick);
    newone.addEventListener("animationend", gruppe3Test);

}

function gruppe3TestClick() {
    console.log("gruppe3TestClick");

    this.classList.add("hide");

    points += 125000000;
    console.log(points);
    document.querySelector("#points").innerHTML = points;

    //lydeffekt

    document.querySelector("#tching").play();
    document.querySelector("#tching").currentTime = 0;


}

//gruppe 4 forsvinder (SKAT)
function gruppe4Test() {
    console.log("gruppe4Test");
    this.classList.remove("hide");

    let elm = this;
    let newone = elm.cloneNode(true);
    elm.parentNode.replaceChild(newone, elm);

    newone.addEventListener("click", gruppe4TestClick);
    newone.addEventListener("animationend", gruppe4Test);
}

function gruppe4TestClick() {
    console.log("gruppe4TestClick");

    this.classList.add("hide");


    console.log("timeleft - før " + timeLeft);
    timeLeft = timeLeft - 10;
    console.log("timeleft - efter " + timeLeft);

    //lydeffekt

    document.querySelector("#bab").play();
    document.querySelector("#bab").currentTime = 0;

}

//gruppe 5 forsvinder (SOK)
function gruppe5Test() {
    console.log("gruppe5Test");
    this.classList.remove("hide");

    let elm = this;
    let newone = elm.cloneNode(true);
    elm.parentNode.replaceChild(newone, elm);

    newone.addEventListener("click", gruppe5TestClick);
    newone.addEventListener("animationend", gruppe5Test);
}

function gruppe5TestClick() {
    console.log("gruppe5TestClick");

    this.classList.add("hide");

    points -= 125000000;
    console.log(points);
    document.querySelector("#points").innerHTML = points;

    //lydeffekt

    document.querySelector("#bab").play();
    document.querySelector("#bab").currentTime = 0;

}

//gruppe 6 forsvinder (PENGESEDDEL)
function gruppe6Test() {
    console.log("gruppe6Test");
    this.classList.remove("hide");

    let elm = this;
    let newone = elm.cloneNode(true);
    elm.parentNode.replaceChild(newone, elm);

    newone.addEventListener("click", gruppe6TestClick);
    newone.addEventListener("animationend", gruppe6Test);
}

function gruppe6TestClick() {
    console.log("gruppe6TestClick");

    this.classList.add("hide");

    points += 125000000;
    console.log(points);
    document.querySelector("#points").innerHTML = points;

    //lydeffekt

    document.querySelector("#tching").play();
    document.querySelector("#tching").currentTime = 0;

}

//gruppe 7 forsvinder (SOK)
function gruppe7Test() {
    console.log("gruppe7Test");
    this.classList.remove("hide");

    let elm = this;
    let newone = elm.cloneNode(true);
    elm.parentNode.replaceChild(newone, elm);

    newone.addEventListener("click", gruppe7TestClick);
    newone.addEventListener("animationend", gruppe7Test);
}

function gruppe7TestClick() {
    console.log("gruppe7TestClick");

    this.classList.add("hide");

    points -= 125000000;
    console.log(points);
    document.querySelector("#points").innerHTML = points;

    //lydeffekt

    document.querySelector("#bab").play();
    document.querySelector("#bab").currentTime = 0;
}

//gruppe 8 forsvinder (PENGESEDDEL)
function gruppe8Test() {
    console.log("gruppe8Test");
    this.classList.remove("hide");

    let elm = this;
    let newone = elm.cloneNode(true);
    elm.parentNode.replaceChild(newone, elm);

    newone.addEventListener("click", gruppe8TestClick);
    newone.addEventListener("animationend", gruppe8Test);
}

function gruppe8TestClick() {
    console.log("gruppe8TestClick");

    this.classList.add("hide");

    points += 125000000;
    console.log(points);
    document.querySelector("#points").innerHTML = points;

    //lydeffekt

    document.querySelector("#tching").play();
    document.querySelector("#tching").currentTime = 0;

}

function timeLeftFc() {
    console.log("timeLeft" + timeLeft);
    document.querySelector("#time").innerHTML = timeLeft;



    if (timeLeft > 0) {

        timeLeft--;

        setTimeout(timeLeftFc, 1000);
    } else {

        console.log("Nu er timeLeft = 0");
        gameSatus();
    }
}

function gameSatus() {
    console.log("gameStatus");
    if (points < 1000000000) {
        document.querySelector("#gameOver").classList.remove("hide");

        showGameOver();

    } else if (points > 999999999) {

        document.querySelector("#levelComplete").classList.remove("hide");

        showLevelComplete();
    }
}

function showLevelComplete() {
    console.log("levelcomplete");
    document.querySelector("#replay_orange").addEventListener("click", replayFc);

}

function showGameOver() {
    console.log("gameover");
    document.querySelector("#replay_sort").addEventListener("click", replayFc);

}

function replayFc() {
    console.log("replay");
    document.location.href = "";
}

function toggleSounds() {
    console.log("toggleSounds");
    //    showSettingsEffektSound = !showSettingsEffektSound;

    if (showSettingsEffektSound == false) {
        //her klikker vi lyden på
        showSettingsEffektSound = true;
        document.querySelector("#sfx_sprite").classList.add("off_on");
        document.querySelector("#sfx_sprite").classList.remove("off");
        document.querySelector("#sfx_sprite").addEventListener("animationend", soundsOn);
        //        soundsOff();
    } else {
        //her kikker vi lyden af - slukker den
        showSettingsEffektSound = false;
        document.querySelector("#sfx_sprite").classList.add("on_off");
        document.querySelector("#sfx_sprite").classList.remove("on");
        document.querySelector("#sfx_sprite").addEventListener("animationend", soundsOff);
        //        soundsOn();
    }

}

function soundsOff() {
    console.log("soundsOff function værdi er " + showSettingsEffektSound);
    document.querySelector("#sfx_sprite").removeEventListener("animationend", soundsOff);
    document.querySelector("#sfx_sprite").classList.remove("on_off");
    document.querySelector("#sfx_sprite").classList.add("off");
    //    her slukkes for efx
    document.querySelector("#bab").muted = true;
    document.querySelector("#tching").muted = true;

}

function soundsOn() {
    console.log("soundsOn function værdi er " + showSettingsEffektSound);
    document.querySelector("#sfx_sprite").removeEventListener("animationend", soundsOn);
    document.querySelector("#sfx_sprite").classList.remove("off_on");
    document.querySelector("#sfx_sprite").classList.add("on");
    //    her tændes for efx
    document.querySelector("#bab").muted = false;
    document.querySelector("#tching").muted = false;
}

function toggleMusic() {
    console.log("showSettingsMusic function " + showSettingsMusic);



    if (showSettingsMusic == false) {
        showSettingsMusic = true;

        console.log("sat til true = tændt");
        //       Her tænder vi musikken
        document.querySelector("#music_sprite").classList.add("off_on");
        document.querySelector("#music_sprite").classList.remove("off");
        document.querySelector("#music_sprite").addEventListener("animationend", musicOn);

    } else {
        console.log("sat til false = slukket");
        //her skukker vi musikken
        showSettingsMusic = false;

        document.querySelector("#music_sprite").classList.add("on_off");
        document.querySelector("#music_sprite").classList.remove("on");
        document.querySelector("#music_sprite").addEventListener("animationend", musicOff);

        //        musicOff();
    }
}

function musicOff() {
    console.log("musicOff function værdi er " + showSettingsMusic);

    //    her slukkes for musikken

    document.querySelector("#music_sprite").removeEventListener("animationend", musicOff);
    document.querySelector("#music_sprite").classList.remove("on_off");
    document.querySelector("#music_sprite").classList.add("off");

    document.querySelector("#musik").pause();
}

function musicOn() {
    console.log("musicOn function værdi er " + showSettingsMusic);

    document.querySelector("#music_sprite").removeEventListener("animationend", musicOn);
    document.querySelector("#music_sprite").classList.remove("off_on");
    document.querySelector("#music_sprite").classList.add("on");
    //    her tændes for musikken

    document.querySelector("#musik").play();
}

function toggleNotifications() {

}

function notificationsOff() {

}

function notificationsOn() {

}
