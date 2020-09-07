var tasks = {};

var createCurrentDate = function () {
    var taskLi = $("<li>").addClass("list-group-item");
    console.log(taskLi);
    
    // create curren date
    var day = moment();
    console.log(day);
    // append to top of page
    $("#currentDay").append(day.format("dddd, MMMM Do YYYY"));

    auditTask(taskLi);
}

var saveTasks = function () {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

var loadTasks = function () {
    tasks = JSON.parse(localStorage.getItem("tasks"));
};



var auditTask = function(taskEl) {
    // get date from task element
    var date = $(taskEl).find("h4").text().trim();
    console.log(date);
    // convert to moment object at 5:00pm
    var time = moment(date, "L").set("hour", 17);
  
    // remove any old classes from element
    $(taskEl).removeClass("list-group-item-warning list-group-item-danger");
  
    // apply new class if task is near/over due date
    if (moment().isAfter(time)) {
      $(taskEl).addClass("list-group-item-danger");
    } 
    else if (Math.abs(moment().diff(time, "hours")) <= 2) {
      $(taskEl).addClass("list-group-item-warning");
    }
  };

// the paragraph of a given task will know that it's being clicked
$(".list-group").on("click", "p", function () {
    // get the textarea's current value/text
    var text = $(this).text().trim();
    console.log("I'm being clicked");
    // $("textarea") tell jQuery to find all existing <textarea> elements
    // $("<textarea>") tell jQuery to create a new <textarea> element
    // create new input element
    var textInput = $("<textarea>")
      .addClass("form-control")
      .val(text);
  
    //swap out elements
    $(this).replaceWith(textInput);
  
    //automatically focus on new element
    textInput.trigger("focus");
});

$(".list-group").on("blur", "textarea", function () {
    // get the textarea's current value/text
    var text = $(this)
      .val()
      .trim();
  
    // get the parent ul's id attribute
    var status = $(this)
      .closest(".list-group")
      .attr("id")
      .replace("list-", "");
  
    // get the task's position in the list of other li elements
    var index = $(this)
      .closest(".list-group-item")
      .index();
  
    tasks[status][index].text = text;
    saveTasks();
  
    // recreate p element
    var taskP = $("<p>")
      .addClass("m-1")
      .text(text);
  
    // replace textarea with p element
    $(this).replaceWith(taskP);
});

createCurrentDate();

//check times to adjust color segments
setInterval(function() {
    
}, (1000*60));