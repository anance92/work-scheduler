var tasks = {};

var createCurrentDate = function () {
    // create current date
    var day = moment();
    console.log(day);
    // append to top of page
    $("#currentDay").append(day.format("dddd, MMMM Do YYYY"));
}

var saveTasks = function () {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

var loadTasks = function () {
    tasks = JSON.parse(localStorage.getItem("tasks"));
};

$(".saveBtn").on("click", function () {
    // figure out which save button was clicked

    var text = $("textarea").text().trim();
    console.log(text);

    saveTasks();
});

var auditTask = function(taskEl) {
    var time = moment().format("hA");
    console.log(time);

    // past
    if (time.isAfter(".time-block")) {
        $("textarea").addClass("past");
    }
    // present
    if (time) {
        $("textarea").addClass("present");
    }
    // future
    else {
        $("textarea").addClass("future");
    }
}

var present = moment();
var future = moment().add(1, "hour");
var past = moment().subtract(1, "hour");

if (present) {
    $("textarea").addClass("present");
}

createCurrentDate();

//check times to adjust color segments
setInterval(function() {
    var tasks = $(".time-block").each();
    //var time = tasks.moment().format("hA");
    //auditTask(time);
    console.log(tasks);
}, (1000));
