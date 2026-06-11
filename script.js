let TD_debounce = false;

$(document).ready(() => {
    const track = new Audio("assets/bgmusic.mp3");
    track.loop = true;

    console.log("WEBSITE LOADED");

    //first click
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

    //music controls
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

    //opens about page
    $("#about").click(() => {
        window.open("about/about.html", "_blank", "noopener,noreferrer");
    });

    //opens contacts page
    $("#contacts").click(() => {
        window.open("contacts/contacts.html", "_blank", "noopener,noreferrer");
    });
});