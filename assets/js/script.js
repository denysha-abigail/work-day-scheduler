// display current day at the top of the calendar
$("#currentDay").text(moment().format("LLLL"));

var time = ['0900', '1000', '1100', '1200', '1300', '1400', '1500', '1600', '1700']

// dynamically render HTML DOM elements
function appendDiv() {
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

// allow user to input tasks and save them onto local storage
function createTask() {
    appendDiv();
    // set current time to military time
    var currentTime = moment().format("HH" + "00");

    // loop through each hour to color code task blocks based on scheduled time vs current time comparison
    $(".time-block").each(function () {

        var hrBlock = ($(this).find(".hour").text().split("hrs")[0]);
        $(this).find(".saveBtn").attr("id", hrBlock);
        $(this).attr("id", hrBlock);
        loadLocal();

        if (currentTime < hrBlock) {
            $(this).find(".hour-block").addClass("future");
        } else if (currentTime > hrBlock) {
            $(this).find(".hour-block").addClass("past");
        } else {
            $(this).find(".hour-block").addClass("present");
        }
    });
}

// set time and text description on localStorage when save button is clicked
$(".container").on("click", "button", function () {

    var text = $(this).siblings(".description").val();
    var time = $(this).attr("id");

    localStorage.setItem(time, text);
});

// get time and text description from localStorage when page is refreshed or opened again after browser was closed
function loadLocal() {

    $("#0900 .description").val(localStorage.getItem("0900"));
    $("#1000 .description").val(localStorage.getItem("1000"));
    $("#1100 .description").val(localStorage.getItem("1100"));
    $("#1200 .description").val(localStorage.getItem("1200"));
    $("#1300 .description").val(localStorage.getItem("1300"));
    $("#1400 .description").val(localStorage.getItem("1400"));
    $("#1500 .description").val(localStorage.getItem("1500"));
    $("#1600 .description").val(localStorage.getItem("1600"));
    $("#1700 .description").val(localStorage.getItem("1700"));
}

// call createTask function
createTask();

// refresh page every 5 minutes to display current time and compare it to hrBlock
// gives user time to input and save their task before the page reloads on them
setInterval(function () {
    location.reload();
}, 300000);