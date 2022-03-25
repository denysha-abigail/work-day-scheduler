$("#currentDay").text(moment().format("LLLL"));

var time = ['0900', '1000', '1100', '1200', '1300', '1400', '1500', '1600', '1700']



function loadTask() {
    // create HTML DOM elements
    time.forEach(hour => {

        $('.container').append(`
        <div class="row time-block">
            <div class="col-md-1 hour">${hour}hrs</div>
            <textarea class="col-md-10" id="${hour}"></textarea>
            <button class="col-md-1 saveBtn" id="saveBtn"><span class="oi oi-lock-locked"></span></button>
        </div>
    `)
    });
};

function createTask() {
    loadTask();
    // get current time and set it to military time
    var currentTime = moment().format("HH" + "00");
    console.log(currentTime);

    $(".time-block").each(function(){
        var hrBlock = ($(this).find(".hour").text().split("hrs")[0]);
        console.log(hrBlock);
        if (currentTime < hrBlock) {
            console.log("this time is future " + hrBlock)
        } else if (currentTime > hrBlock) {
            console.log("this time is past " + hrBlock)
        } else {
            console.log("this time is present " + hrBlock)
        }
    });

    // loop through each hour to set corresponding color blocks
    // if (currentTime == hour) {
        
    // }
}

createTask();
