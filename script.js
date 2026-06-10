let TD_debounce = false;

$(document).ready(() => {
    const track = new Audio("assets/bgmusic.mp3");
    track.loop = true;

    console.log("WEBSITE LOADED");

    $("#title-div").click(() => {
        if (TD_debounce) return;
        TD_debounce = true;

        $("#hint").hide();
        $("#title").text("Welcome to the Homepage");
        $("#subtitle").fadeIn(1600);
        $("#play-pause").fadeIn(1600);
        $(".grid-item").css("visibility", "visible").hide().fadeIn(3200);
        track.play();
        
    });

    $("#pause").click(() => {
        track.pause();
        $("#pause").css("visibility", "hidden");
        $("#play").show();
    });

    $("#play").click(() => {
        track.play();
        $("#pause").css("visibility", "visible");
        $("#play").hide();
    });

    $("#about").click(() => {
        window.open("about/about.html", "_blank", "noopener,noreferrer");
    });
});