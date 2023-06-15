var initialsInput = document.querySelector("#initials-text");
var initialsForm = document.querySelector("#initials-form");
var initialsList = document.querySelector("#initials-list");
var initialsCountSpan = document.querySelector("#initials-count");
var clearButtonEl = document.getElementById('clear-storage');



var initials = [];

// The following function renders items in a initials list as <li> elements
//function renderInitials() {
  // Clear initials element and update initialsCountSpan
  //initialsList.innerHTML = "";
  //initialsCountSpan.textContent = initials.length;

  // Render a new li for each initials
  //for (var i = 0; i < initials.length; i++) {
    //var initial = initials[i];

    //var li = document.createElement("li");
    //li.textContent = initial;
    //li.setAttribute("data-index", i);

    //var button = document.createElement("button");
    //initialsList.appendChild(li);
 // }
//}



function renderInitials() {
    // Sort the initials array from high to low
    initials.sort(function(a, b) {
      return b - a;
    });
  
    // Clear initials element and update initialsCountSpan
    initialsList.innerHTML = "";
    initialsCountSpan.textContent = initials.length;
  
    // Render a new li for each initial
    for (var i = 0; i < initials.length; i++) {
      var initial = initials[i];
  
      var li = document.createElement("li");
      li.textContent = initial;
      li.setAttribute("data-index", i);
  
      var button = document.createElement("button");
      initialsList.appendChild(li);
    }
  }



// This function is being called below and will run when the page loads.
function init() {
  // Get stored initials from localStorage
  var storedInitials = JSON.parse(localStorage.getItem("initials"));

  // If initials were retrieved from localStorage, update the initials array to it
  if (storedInitials !== null) {
    initials = storedInitials;
  }

  // This is a helper function that will render initials to the DOM
  renderInitials();
}


function clearStorage () {
  localStorage.removeItem("initials");
}

clearButtonEl.addEventListener("click", clearStorage);


// Calls init to retrieve data and render it to the page on load
init()