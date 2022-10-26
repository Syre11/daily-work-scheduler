//Adds current date to header in 'Monday, October 26th' format
var todaysDate = moment().format("dddd, MMMM Do");
$("#currentDay").text(todaysDate);

//Pulls current time -- will need this to determine whether an event has already occurred, in progress, or upcoming.
//Something like:
var currentTime = moment().format("HH") // we only want hours since the schedule is done by the hour
// if (currentTime > scheduleTime) {
//   background-color = grey; 
// } if (currentTime == scheduleTime) {
//   background-color = red;
// } else {
//   background-color = green;
// }