var timeblocksEl = document.querySelector("#timeblocks")
var scheduleTimeEl = $("#scheduleTime");


//Adds current date to header in 'Monday, October 26th' format
var todaysDate = moment().format("dddd, MMMM Do");
$("#currentDay").text(todaysDate);

//Pulls current time -- will need this to determine whether an event has already occurred, in progress, or upcoming.
//Something like:

var currentTime = moment().format("HH") // we only want hours since the schedule is done by the hour
for (var i = 0; i < 9; i++) {
  console.log (i)
  console.log (currentTime);
  //figure out how to just pull a single 'p', currently pulls all 'p' and concatenates them
  console.log (scheduleTimeEl.children(i).children('p').text());
  if (currentTime > scheduleTimeEl.children(i).children('p').text()) {
    timeblocksEl.setAttribute("style", "background-color: grey"); 
  } else if (currentTime == scheduleTimeEl.children(i).children('p').text()) {
    timeblocksEl.setAttribute("style", "background-color: red");
  } else {
    timeblocksEl.setAttribute("style", "background-color: green");
  }
}


