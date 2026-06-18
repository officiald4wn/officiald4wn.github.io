$(document).ready(function(){
    const date = new Date();

    const options = { 
        day: '2-digit', 
        month: '2-digit', 
        year: '2-digit' 
    };
    const options2 = { weekday: 'long' };

    const dateformat = date.toLocaleDateString('en-US', options);
    const dayformat = date.toLocaleDateString('en-US', options2);

    $("#Date").text(dateformat);
    $("#Day").text(dayformat);
})
 