$(document).ready(() => {
    $("#title").click(() => {
        $("#subtitle").fadeToggle();
        $("#return-div").fadeToggle();
    });

    $("#main-form").on("submit", function(event){
        event.preventDefault();

        var formArray = $(this).serializeArray();
        var fArray = formArray.map(item => item.value);
        generate(...fArray);

        $("#main-form")[0].reset();
    })

    function loadFile(url, callback) {
        PizZipUtils.getBinaryContent(url, callback);
    };
    
    window.generate = function generate(sub,quiznumber,topic1,topic2,topic3,topic4,topic5,topic6,topic7){
        loadFile(
            "../../_assets/template.docx",
            (error, content) => {
                if (error) {
                    throw error;
                }
                const zip = new PizZip(content);
                const doc = new window.docxtemplater(zip, {
                    paragraphLoop: true,
                    linebreaks: true,
                });

                doc.render({
                    sub: (sub || "SUB").toString(),
                    quiznumber: (quiznumber || "1-1").toString(),
                    topic1: (topic1 || "topic1").toString(),
                    topic2: (topic2 || "topic2").toString(),
                    topic3: (topic3 || "topic3").toString(),
                    topic4: (topic4 || "topic4").toString(),
                    topic5: (topic5 || "topic5").toString(),
                    topic6: (topic6 || "topic6").toString(),
                    topic7: (topic7 || "topic7").toString()
                });

                saveAs(doc.toBlob(), `${sub || "SUB"}10-Q${quiznumber || "1-1"}-REV.docx`);
            }
        );
    };
});