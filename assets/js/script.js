var timeblocks0El = document.querySelector("#timeblocks0");
var timeblocks1El = document.querySelector("#timeblocks1");
var timeblocks2El = document.querySelector("#timeblocks2");
var timeblocks3El = document.querySelector("#timeblocks3");
var timeblocks4El = document.querySelector("#timeblocks4");
var timeblocks5El = document.querySelector("#timeblocks5");
var timeblocks6El = document.querySelector("#timeblocks6");
var timeblocks7El = document.querySelector("#timeblocks7");
var timeblocks8El = document.querySelector("#timeblocks8");
var scheduleTimeEl = document.querySelector("#scheduleTime");
var unlockButtonEl = document.getElementById("unlockButton");
var timeSlot0El = document.querySelector("#timeSlot0");
var timeSlot1El = document.querySelector("#timeSlot1");
var timeSlot2El = document.querySelector("#timeSlot2");
var timeSlot3El = document.querySelector("#timeSlot3");
var timeSlot4El = document.querySelector("#timeSlot4");
var timeSlot5El = document.querySelector("#timeSlot5");
var timeSlot6El = document.querySelector("#timeSlot6");
var timeSlot7El = document.querySelector("#timeSlot7");
var timeSlot8El = document.querySelector("#timeSlot8");

//loads locally stored to do items into the slots on page load
timeblocks0El.textContent = localStorage.getItem('todoItem0')
timeblocks1El.textContent = localStorage.getItem('todoItem1')
timeblocks2El.textContent = localStorage.getItem('todoItem2')
timeblocks3El.textContent = localStorage.getItem('todoItem3')
timeblocks4El.textContent = localStorage.getItem('todoItem4')
timeblocks5El.textContent = localStorage.getItem('todoItem5')
timeblocks6El.textContent = localStorage.getItem('todoItem6')
timeblocks7El.textContent = localStorage.getItem('todoItem7')
timeblocks8El.textContent = localStorage.getItem('todoItem8')

//Adds current date to header in 'Monday, October 26th' format
var todaysDate = moment().format("dddd, MMMM Do");
$("#currentDay").text(todaysDate);


//function to change backgrounds color depending on the time
for (var i = 0; i < 9; i++) {
  var currentTime = moment().format("HH") + ":00" // Pulls current time, we only want hours since the schedule is done by the hour
  if (currentTime > scheduleTimeEl.children[i].children[0].innerHTML) {
    scheduleTimeEl.children[i].children[1].setAttribute("style", "background-color: #C0C0C0");
  } else if (currentTime == scheduleTimeEl.children[i].children[0].innerHTML) {
    scheduleTimeEl.children[i].children[1].setAttribute("style", "background-color: red");
  } else {
    scheduleTimeEl.children[i].children[1].setAttribute("style", "background-color: green");
  };
}

timeblocks0El.contentEditable = true;
timeblocks1El.contentEditable = true;
timeblocks2El.contentEditable = true;
timeblocks3El.contentEditable = true;
timeblocks4El.contentEditable = true;
timeblocks5El.contentEditable = true;
timeblocks6El.contentEditable = true;
timeblocks7El.contentEditable = true;
timeblocks8El.contentEditable = true;

timeSlot0El.children[2].addEventListener("click", function() {
  localStorage.setItem('todoItem0', timeblocks0El.innerHTML)
});

timeSlot1El.children[2].addEventListener("click", function() {
  localStorage.setItem('todoItem1', timeblocks1El.innerHTML)
});

timeSlot2El.children[2].addEventListener("click", function() {
  localStorage.setItem('todoItem2', timeblocks2El.innerHTML)
});

timeSlot3El.children[2].addEventListener("click", function() {
  localStorage.setItem('todoItem3', timeblocks3El.innerHTML)
});

timeSlot4El.children[2].addEventListener("click", function() {
  localStorage.setItem('todoItem4', timeblocks4El.innerHTML)
});

timeSlot5El.children[2].addEventListener("click", function() {
  localStorage.setItem('todoItem5', timeblocks5El.innerHTML)
});

timeSlot6El.children[2].addEventListener("click", function() {
  localStorage.setItem('todoItem6', timeblocks6El.innerHTML)
});

timeSlot7El.children[2].addEventListener("click", function() {
  localStorage.setItem('todoItem7', timeblocks7El.innerHTML)
});

timeSlot8El.children[2].addEventListener("click", function() {
  localStorage.setItem('todoItem8', timeblocks8El.innerHTML)
});

//Below is event listeners to add lock and unlock buttons rather than the save button with an always editable field. Just need to put "🔒" as the button text in index.html
// I would obviously like this to be more automated, but I was struggling with it, I tried using a for loop with scheduleTime.Children[i].children[2].innerHTML, but I couldn't get it to work
// timeSlot0El.children[2].addEventListener("click", function() {
//     console.log(timeSlot0El.children[2].innerHTML);
//     if (timeSlot0El.children[2].innerHTML == "🔓") {
//       localStorage.setItem('todoItem0', timeblocks0El.innerHTML)
//       timeSlot0El.children[2].innerHTML = "🔒";
//       timeblocks0El.contentEditable = false;
//     } else {
//       timeSlot0El.children[2].textContent = "🔓";
//       timeblocks0El.contentEditable = true;

//     }
// });  

// timeSlot1El.children[2].addEventListener("click", function() {
//   console.log(timeSlot1El.children[2].innerHTML);
//   if (timeSlot1El.children[2].innerHTML == "🔓") {
//     localStorage.setItem('todoItem1', timeblocks1El.innerHTML)
//     timeSlot1El.children[2].innerHTML = "🔒";
//     timeblocks1El.contentEditable = false;
//   } else {
//     timeSlot1El.children[2].textContent = "🔓";
//     timeblocks1El.contentEditable = true;

//   }
// });  

// timeSlot2El.children[2].addEventListener("click", function() {
//   console.log(timeSlot2El.children[2].innerHTML);
//   if (timeSlot2El.children[2].innerHTML == "🔓") {
//     localStorage.setItem('todoItem2', timeblocks2El.innerHTML)
//     timeSlot2El.children[2].innerHTML = "🔒";
//     timeblocks2El.contentEditable = false;
//   } else {
//     timeSlot2El.children[2].textContent = "🔓";
//     timeblocks2El.contentEditable = true;

//   }
// });  

// timeSlot3El.children[2].addEventListener("click", function() {
//   console.log(timeSlot3El.children[2].innerHTML);
//   if (timeSlot3El.children[2].innerHTML == "🔓") {
//     localStorage.setItem('todoItem3', timeblocks3El.innerHTML)
//     timeSlot3El.children[2].innerHTML = "🔒";
//     timeblocks3El.contentEditable = false;
//   } else {
//     timeSlot3El.children[2].textContent = "🔓";
//     timeblocks3El.contentEditable = true;

//   }
// });  

// timeSlot4El.children[2].addEventListener("click", function() {
//   console.log(timeSlot4El.children[2].innerHTML);
//   if (timeSlot4El.children[2].innerHTML == "🔓") {
//     localStorage.setItem('todoItem4', timeblocks4El.innerHTML)
//     timeSlot4El.children[2].innerHTML = "🔒";
//     timeblocks4El.contentEditable = false;
//   } else {
//     timeSlot4El.children[2].textContent = "🔓";
//     timeblocks4El.contentEditable = true;

//   }
// });  

// timeSlot5El.children[2].addEventListener("click", function() {
//   console.log(timeSlot5El.children[2].innerHTML);
//   if (timeSlot5El.children[2].innerHTML == "🔓") {
//     localStorage.setItem('todoItem5', timeblocks5El.innerHTML)
//     timeSlot5El.children[2].innerHTML = "🔒";
//     timeblocks5El.contentEditable = false;
//   } else {
//     timeSlot5El.children[2].textContent = "🔓";
//     timeblocks5El.contentEditable = true;

//   }
// });  

// timeSlot6El.children[2].addEventListener("click", function() {
//   console.log(timeSlot6El.children[2].innerHTML);
//   if (timeSlot6El.children[2].innerHTML == "🔓") {
//     localStorage.setItem('todoItem6', timeblocks6El.innerHTML)
//     timeSlot6El.children[2].innerHTML = "🔒";
//     timeblocks6El.contentEditable = false;
//   } else {
//     timeSlot6El.children[2].textContent = "🔓";
//     timeblocks6El.contentEditable = true;

//   }
// });  

// timeSlot7El.children[2].addEventListener("click", function() {
//   console.log(timeSlot7El.children[2].innerHTML);
//   if (timeSlot7El.children[2].innerHTML == "🔓") {
//     localStorage.setItem('todoItem7', timeblocks7El.innerHTML)
//     timeSlot7El.children[2].innerHTML = "🔒";
//     timeblocks7El.contentEditable = false;
//   } else {
//     timeSlot7El.children[2].textContent = "🔓";
//     timeblocks7El.contentEditable = true;

//   }
// });  

// timeSlot8El.children[2].addEventListener("click", function() {
//   console.log (timeblocks8El.innerHTML)
//   if (timeSlot8El.children[2].innerHTML == "🔓") {
//     localStorage.setItem('todoItem8', timeblocks8El.innerHTML)
//     timeSlot8El.children[2].innerHTML = "🔒";
//     timeblocks8El.contentEditable = false;
//   } else {
//     timeSlot8El.children[2].textContent = "🔓";
//     timeblocks8El.contentEditable = true;

//   }
// }); 

