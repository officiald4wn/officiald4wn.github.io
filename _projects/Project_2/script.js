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

    //date & day
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

    //schedule (from JSON)
    let schedvalue
    fetch('../../_assets/info/scheduleinfo.json')
    .then(response => response.json())
    .then(jsonData => {
        const textData = JSON.stringify(jsonData, null, 2);
        const match = Object.keys(jsonData).find(key => key === dayformat);

        if (match) {
            schedvalue = jsonData[match];
            $("#Schedule").text(schedvalue);
        } else {
            $("#Schedule").text("[System Error]");
        }
    })
    .catch(error => console.error("Error loading JSON:", error));

    //eventinfo update script
    let newArrayCopy_E

    $("#uiform-event").submit(function(event){
        event.preventDefault();
        let Eventname = $("#Eventname").val();
        let Eventdate = $("#Eventdate").val();

        const textElement = document.getElementById("count-event");
        let currentcount = parseInt(textElement.innerText, 10);
        if(currentcount > 0){
            var arrayCopy = [...newArrayCopy_E]; 
            var userNewObject = {
                [Eventname]: Eventdate
            };
            arrayCopy.push(userNewObject);
            newArrayCopy_E = arrayCopy;

            currentcount += 1; 
            textElement.innerText = currentcount;
        } else {
            $.getJSON("../../_assets/info/eventinfo.json", function(originalArray) {
                var arrayCopy = [...originalArray]; 
                var userNewObject = {
                    [Eventname]: Eventdate
                };
                arrayCopy.push(userNewObject);
                newArrayCopy_E = arrayCopy;

                currentcount += 1; 
                textElement.innerText = currentcount;

            });
            $("#download-event").prop("hidden", false);
        }
        $("#uiform-event")[0].reset();
    })

    $("#download-event").click(function(){
        downloadJsonCopy(newArrayCopy_E, "eventinfo.json");
        newArrayCopy_E = null;

        const textElement = document.getElementById("count-event");
        textElement.innerText = 0;
        $("#download-event").prop("hidden", true);
    })

    //quizinfo update script
    let newArrayCopy_Q

    $("#uiform-quiz").submit(function(event){
        event.preventDefault();
        let Quizname = $("#Quizname").val();
        let Quizdate = $("#Quizdate").val();

        const textElement = document.getElementById("count-quiz");
        let currentcount = parseInt(textElement.innerText, 10);
        if(currentcount > 0){
            var arrayCopy = [...newArrayCopy_Q]; 
            var userNewObject = {
                [Quizname]: Quizdate
            };
            arrayCopy.push(userNewObject);
            newArrayCopy_Q = arrayCopy;

            currentcount += 1; 
            textElement.innerText = currentcount;
        } else {
            $.getJSON("../../_assets/info/quizinfo.json", function(originalArray) {
                var arrayCopy = [...originalArray]; 
                var userNewObject = {
                    [Quizname]: Quizdate
                };
                arrayCopy.push(userNewObject);
                newArrayCopy_Q = arrayCopy;

                currentcount += 1; 
                textElement.innerText = currentcount;
            });
            $("#download-quiz").prop("hidden", false);
        }
        $("#uiform-quiz")[0].reset();
    })

    $("#download-quiz").click(function(){
        downloadJsonCopy(newArrayCopy_Q, "quizinfo.json");
        newArrayCopy_Q = null;

        const textElement = document.getElementById("count-quiz");
        textElement.innerText = 0;
        $("#download-quiz").prop("hidden", true);
    })

    //painfo update script
    let newArrayCopy_PA

    $("#uiform-PA").submit(function(event){
        event.preventDefault();
        let PAname = $("#PAname").val();
        let PAdate = $("#PAdate").val();

        const textElement = document.getElementById("count-PA");
        let currentcount = parseInt(textElement.innerText, 10);
        if(currentcount > 0){
            var arrayCopy = [...newArrayCopy_PA]; 
            var userNewObject = {
                [PAname]: PAdate
            };
            arrayCopy.push(userNewObject);
            newArrayCopy_PA = arrayCopy;

            currentcount += 1; 
            textElement.innerText = currentcount;
        } else {
            $.getJSON("../../_assets/info/painfo.json", function(originalArray) {
                var arrayCopy = [...originalArray]; 
                var userNewObject = {
                    [PAname]: PAdate    
                };
                arrayCopy.push(userNewObject);
                newArrayCopy_PA = arrayCopy;

                currentcount += 1; 
                textElement.innerText = currentcount;

                $("#download-PA").prop("hidden", false);
            });
        }
        $("#uiform-PA")[0].reset();
    })

    $("#download-PA").click(function(){
        downloadJsonCopy(newArrayCopy_PA, "painfo.json");
        newArrayCopy_PA = null;

        const textElement = document.getElementById("count-PA");
        textElement.innerText = 0;
        $("#download-PA").prop("hidden", true);
    })

    //matching dates to events
        //getting every date for next week
    const getNextWeekDates = () => {
        const dates = [];
        for (let i = 0; i <= 7; i++) {
            const currentDate = new Date();
            currentDate.setDate(currentDate.getDate() + i);
            let formOptions = { 
                day: '2-digit', 
                month: '2-digit', 
                year: '2-digit' 
            };
            let formatDate = currentDate.toLocaleDateString('en-US', formOptions);
            dates.push(formatDate);
        }
        return dates;
    };
    
        //code
    fetch('../../_assets/info/quizinfo.json')
    .then(response => response.json())
    .then(dataArray => { //this is an array of objects (quizname: quizdate)
        let weekdays = getNextWeekDates() //this is an array

        const matchedKeys = dataArray.flatMap(obj => 
            Object.keys(obj).filter(key => weekdays.includes(obj[key]))
        );

        $("#Quizzes").text(matchedKeys);
    })
    .catch(error => console.error('Error fetching data:', error));

    
});

function logback(){
    window.open("index.html", "_self", "noopener,noreferrer");
};

function downloadJsonCopy(dataObject, filename) {
    var jsonString = JSON.stringify(dataObject, null, 4);
    var blob = new Blob([jsonString], { type: "application/json" });
    var downloadLink = document.createElement("a");
    
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = filename;
    
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    
    URL.revokeObjectURL(downloadLink.href);
};