$(document).ready(function(){

    //first click function
    $("#click-div").click(function(){
        $(this).fadeOut(1000);
    });

    $('#side-div-about').hover(function(){
        $('#main-div-title').html("About")
        $('#main-div-content').html(`Welcome to the reworked webpage. <br> This is still in heavy development.`)

        $('#main-div')
        .removeAttr('hidden')
        .removeClass('animate-hide')
        .addClass('animate-show'); 
    });

    $('#side-div-contacts').hover(function(){ 
        $('#main-div-title').html("Contacts")
        $('#main-div-content').html(`<span>email: <a href="mailto:officiald4wn@gmail.com">officiald4wn@gmail.com</a></span><br>
        <span>github: officiald4wn</span><br>
        <span>instagram: @official.d4wn</span><br>
        <span>discord: @official.d4wn</span>`)

        $('#main-div')
        .removeAttr('hidden')
        .removeClass('animate-hide')
        .addClass('animate-show'); 
    });

    $('#side-div-projects').hover(function(){ 
        $('#main-div-title').html("Projects")
        $('#main-div-content').html(`<span>[as of --(6/11/26)--]</span><br>
        <span>-there are (2) projects currently available</span><br>
        <span><a href="/_projects/Project_1/index.html" target="_blank">Project 1</a> => (Reviewer Formatter)</span><br>
        <span><a href="/_projects/Project_2/index.html" target="_blank">Project 2</a> => (auto scheduler)</span>`)

        $('#main-div')
        .removeAttr('hidden')
        .removeClass('animate-hide')
        .addClass('animate-show'); 
    });

    $('#side-div-wip').hover(function(){ 
        $('#main-div-title').html("[WIP]")
        $('#main-div-content').html(`Work in progress.`)

        $('#main-div')
        .removeAttr('hidden')
        .removeClass('animate-hide')
        .addClass('animate-show'); 
    });
});