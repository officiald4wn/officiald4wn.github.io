$(document).ready(() => {
    $(".navbar").on("click", "p", function() {
        const page = this.id;
        window.open(`../${page}/${page}.html`, "_self", "noopener,noreferrer");
    });
})