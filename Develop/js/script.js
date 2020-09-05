var tasks = {};

var createCurrentDate = function () {
    // create 
    var day = moment();
    console.log(day);
    // append 
    $("#currentDay").append(day.format("dddd, MMMM Do YYYY"));

}
createCurrentDate();
setInterval(function() {
    $("#currentDay").each(function(){
        
    })
}, 1000);
