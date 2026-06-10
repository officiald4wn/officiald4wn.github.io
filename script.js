$(document).ready(() => {
    const track = new Audio("assets/bgmusic.mp3");
    track.loop = true;

    console.log("WEBSITE LOADED");

    $("#title").click(() => {
        $("#hint").hide();
        $("#title").text("Welcome to the Homepage");
        $("#subtitle").fadeIn(1600);
        $("#music-controls").fadeIn(1600);

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
});