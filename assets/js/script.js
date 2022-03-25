// display current day
$("#currentDay").text(moment().format("LLLL"));

var time = ['0900', '1000', '1100', '1200', '1300', '1400', '1500', '1600', '1700']

function appendDiv() {
    // create HTML DOM elements
    time.forEach(hour => {

        $('.container').append(`
        <div class="row time-block">
            <div class="col-md-1 hour">${hour}hrs</div>
            <textarea class="col-md-10 hour-block description" id="${hour}"></textarea>
            <button class="col-md-1 saveBtn"><span class="oi oi-lock-locked"></span></button>
        </div>
    `)
    });
};

function createTask() {
    appendDiv();
    
    // get current time and set it to military time
    var currentTime = moment().format("HH" + "00");

    // loop through each hour to set corresponding color blocks
    $(".time-block").each(function () {

        var hrBlock = ($(this).find(".hour").text().split("hrs")[0]);
        $(this).find(".saveBtn").attr("id", hrBlock);

        if (currentTime < hrBlock) {
            $(this).find(".hour-block").addClass("future").attr("id", hrBlock);
        } else if (currentTime > hrBlock) {
            $(this).find(".hour-block").addClass("past").attr("id", hrBlock);
        } else {
            $(this).find(".hour-block").addClass("present").attr("id", hrBlock);
        }

    });
}

// localStorage the hr id value and text description
$(".container").on("click", "button", function () {

    var text = $(this).siblings(".description").val();
    var time = $(this).attr("id");
    
    localStorage.setItem(time, text);
});


createTask();

