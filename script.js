let TD_debounce = false;
let PP_debounce = false;

$(document).ready(() => {
    const track = new Audio("_assets/bgmusic.mp3");
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
        $(".nav-item").css("visibility", "visible").hide().fadeIn(3200);
        track.play();
    });

    //music controls
    $("#play-pause").click(() => {
        if (PP_debounce == false){
            PP_debounce = true

            track.pause();
            $("#pause").css("visibility", "hidden");
            $("#play").show();

        } else {
            PP_debounce = false 

            track.play();
            $("#pause").css("visibility", "visible");
            $("#play").hide();
        }
    });

    //links
    $("#grid-div").on("click", "div", function() {
        const page = this.id; 
        window.open(`_mainpages/${page}/${page}.html`, "_blank", "noopener,noreferrer");
    });

    $(".navbar").on("click", "p", function() {
        const page = this.id;
        window.open(`_mainpages/${page}/${page}.html`, "_blank", "noopener,noreferrer");
    });
});