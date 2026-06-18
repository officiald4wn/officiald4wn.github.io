$(document).ready(() => {
    $("#title").click(() => {
        $(".subtitle").fadeToggle();
        $("#return-div").fadeToggle();
    });

    $("#update").click(() => {
        window.open("login.html", "_self", "noopener,noreferrer");
    });
        
    $("#Pword-form").submit(function(event){
        event.preventDefault();

        let $PWord = $("#PWord").val()
        if($PWord === "Password"){
            window.open("updateinfo.html", "_self", "noopener,noreferrer");
            sessionStorage.setItem('isLoggedIn', 'true');
        } else {
            window.open("index.html", "_self", "noopener,noreferrer");
        }

        $("#Pword-form")[0].reset();
    });
});

function logback(){
    window.open("index.html", "_self", "noopener,noreferrer");
};