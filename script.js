//variables
const aboutMessage = 
`Welcome to the reworked webpage. <br>
This is still in heavy development. <br><br>
Last updated on [--(07/06/26)--] <br>
Updates: organized the schedule for project 2`;

const contactsMessage = 
`<span>email: <a href="mailto:officiald4wn@gmail.com">officiald4wn@gmail.com</a></span><br>
<span>github: officiald4wn</span><br>
<span>instagram: @official.d4wn</span><br>
<span>discord: @official.d4wn</span>`;

const projectsMessage = 
`<span>[as of --(6/11/26)--]</span><br>
<span>-there are (2) projects currently available</span><br>
<span><a href="/_projects/Project_1/index.html" target="_blank">Project 1</a> => (Reviewer Formatter)</span><br>
<span><a href="/_projects/Project_2/index.html" target="_blank">Project 2</a> => (auto scheduler)</span>`;

const wipMessage = 
`Work in progress.`;

let db_sideDiv = false;
let content_sideDiv = 0;

//code
$(document).ready(function(){

    //first click function
    $('#click-div').click(function(){
        const audio = new Audio('/_assets/sfx/first_click.wav');
        audio.play();

        $(this).fadeOut(1000);
    });

    //side-div hover functions
    $('#side-div-about').hover(
        function(){
            $('#main-div-title').html('About');
            $('#main-div-content').html(aboutMessage);

            $('#main-div')
            .removeAttr('hidden')
            .removeClass('animate-hide')
            .addClass('animate-show'); 

            const audio = new Audio('/_assets/sfx/hover.wav');
            audio.play();

            db_sideDiv = false;
        },
        function(){
            if (db_sideDiv === true){
                return;
            };

            if (content_sideDiv === 0){
                $('#main-div')
                .removeClass('animate-show')
                .addClass('animate-hide')
                .attr('hidden');

            } else if (content_sideDiv === 1){
                $('#main-div-title').html('About');
                $('#main-div-content').html(aboutMessage);

            } else if (content_sideDiv === 2){
                $('#main-div-title').html('Contacts');
                $('#main-div-content').html(contactsMessage);

            } else if (content_sideDiv === 3){
                $('#main-div-title').html('Projects');
                $('#main-div-content').html(projectsMessage);

            } else if (content_sideDiv === 4){
                $('#main-div-title').html('[WIP]');
                $('#main-div-content').html(wipMessage);
            };
        }
    );

    $('#side-div-contacts').hover(
        function(){ 
            $('#main-div-title').html('Contacts');
            $('#main-div-content').html(contactsMessage);

            $('#main-div')
            .removeAttr('hidden')
            .removeClass('animate-hide')
            .addClass('animate-show'); 

            const audio = new Audio('/_assets/sfx/hover.wav');
            audio.play();

            db_sideDiv = false;
        },
        function(){
            if (db_sideDiv === true){
                return;
            };

            if (content_sideDiv === 0){
                $('#main-div')
                .removeClass('animate-show')
                .addClass('animate-hide')
                .attr('hidden');

            } else if (content_sideDiv === 1){
                $('#main-div-title').html('About');
                $('#main-div-content').html(aboutMessage);

            } else if (content_sideDiv === 2){
                $('#main-div-title').html('Contacts');
                $('#main-div-content').html(contactsMessage);

            } else if (content_sideDiv === 3){
                $('#main-div-title').html('Projects');
                $('#main-div-content').html(projectsMessage);

            } else if (content_sideDiv === 4){
                $('#main-div-title').html('[WIP]');
                $('#main-div-content').html(wipMessage);
            };
        }
    );

    $('#side-div-projects').hover(
        function(){ 
            $('#main-div-title').html('Projects');
            $('#main-div-content').html(projectsMessage);

            $('#main-div')
            .removeAttr('hidden')
            .removeClass('animate-hide')
            .addClass('animate-show'); 

            const audio = new Audio('/_assets/sfx/hover.wav');
            audio.play();

            db_sideDiv = false;
        },
        function(){
            if (db_sideDiv === true){
                return;
            };

            if (content_sideDiv === 0){
                $('#main-div')
                .removeClass('animate-show')
                .addClass('animate-hide')
                .attr('hidden');

            } else if (content_sideDiv === 1){
                $('#main-div-title').html('About');
                $('#main-div-content').html(aboutMessage);

            } else if (content_sideDiv === 2){
                $('#main-div-title').html('Contacts');
                $('#main-div-content').html(contactsMessage);

            } else if (content_sideDiv === 3){
                $('#main-div-title').html('Projects');
                $('#main-div-content').html(projectsMessage);

            } else if (content_sideDiv === 4){
                $('#main-div-title').html('[WIP]');
                $('#main-div-content').html(wipMessage);
            };
        }
    );

    $('#side-div-wip').hover(
        function(){ 
            $('#main-div-title').html('[WIP]');
            $('#main-div-content').html(wipMessage);

            $('#main-div')
            .removeAttr('hidden')
            .removeClass('animate-hide')
            .addClass('animate-show'); 

            const audio = new Audio('/_assets/sfx/hover.wav');
            audio.play();

            db_sideDiv = false;
        },
        function(){
            if (db_sideDiv === true){
                return;
            };

            if (content_sideDiv === 0){
                $('#main-div')
                .removeClass('animate-show')
                .addClass('animate-hide')
                .attr('hidden');

            } else if (content_sideDiv === 1){
                $('#main-div-title').html('About');
                $('#main-div-content').html(aboutMessage);

            } else if (content_sideDiv === 2){
                $('#main-div-title').html('Contacts');
                $('#main-div-content').html(contactsMessage);

            } else if (content_sideDiv === 3){
                $('#main-div-title').html('Projects');
                $('#main-div-content').html(projectsMessage);

            } else if (content_sideDiv === 4){
                $('#main-div-title').html('[WIP]');
                $('#main-div-content').html(wipMessage);
            };
        }
    );

    //side-div click functions
    $('#side-div-about').click(function(){
        $('#main-div-content').html(aboutMessage);

        $('#main-div')
        .removeAttr('hidden')
        .removeClass('animate-hide')
        .addClass('animate-show');

        const audio = new Audio('/_assets/sfx/click.wav');
        audio.play();

        db_sideDiv = true;
        content_sideDiv = 1;
    });

    $('#side-div-contacts').click(function(){
        $('#main-div-content').html(contactsMessage);

        $('#main-div')
        .removeAttr('hidden')
        .removeClass('animate-hide')
        .addClass('animate-show');

        const audio = new Audio('/_assets/sfx/click.wav');
        audio.play();

        db_sideDiv = true;
        content_sideDiv = 2;
    });

    $('#side-div-projects').click(function(){
        $('#main-div-content').html(projectsMessage);

        $('#main-div')
        .removeAttr('hidden')
        .removeClass('animate-hide')
        .addClass('animate-show');

        const audio = new Audio('/_assets/sfx/click.wav');
        audio.play();

        db_sideDiv = true;
        content_sideDiv = 3;
    });

    $('#side-div-wip').click(function(){

        $('#main-div-content').html(wipMessage);

        $('#main-div')
        .removeAttr('hidden')
        .removeClass('animate-hide')
        .addClass('animate-show');

        const audio = new Audio('/_assets/sfx/click.wav');
        audio.play();

        db_sideDiv = true;
        content_sideDiv = 4;
    });

    $(document).on('click', 'a', function(){
        const audio = new Audio('/_assets/sfx/swoosh.wav');
        audio.play();
    });
});