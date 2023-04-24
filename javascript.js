
console.log("Welcome to notes app. This is app.js");
showNotes();
// If user adds a note, add it to the localStorage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  // e.preventDefault();
  let addTxt = document.getElementById("addTxt");
  if (!addTxt.value) {
    return false;
  }

  let notes = localStorage.getItem("notes");

  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  // console.log(notesObj);
  showNotes();
});

// Function to show elements from localStorage
function showNotes() {
  let notes = localStorage.getItem("notes");

  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `
              <div class="noteCard my-2 mx-2 card" style="width: 32rem;">
                <div class="card-body">
                  <div class="success">
                    <p><strong><h5 class="card-title">Note ${index + 1}</h5></strong> <p class="card-title"> ${element}</p></p>
                    <button id="${index}"onclick="editNote(this.id)" class="btn btn-outline-success">Edit Note</button>
                    <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-outline-success">Delete Note</button>
                    <button id="${index}"onclick="impNote(this.id)" class="btn btn-outline-success">Important</button>
                  </div>
                </div>                      
              </div>`;
    
  });
  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
  }
}

// Function to delete a note
function deleteNote(index) {
  //   console.log("I am deleting", index);

  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  location.reload();
  showNotes();
}

// Function to edit notes
function editNote(index) {
  let notesElm = document.getElementById("notes");

  let currDiv = notesElm.children[index].children[0];
  currDiv.innerHTML += `
    <input type="text" placeholder='add text' id='editInput' class="mt-2 form-control"/>
    <button onclick="getInputValue(${index})" class="btn btn-success mt-2">Save Note</button>
    `;
}

function impNote(index) {
  let notesElm = document.getElementById("notes");

  let currDiv = notesElm.children[index].children[0].children[0];
  // console.log(currDiv);
  currDiv.innerHTML += `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
  </svg>
    `;
}

function getInputValue(index) {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  var inputVal = document.getElementById("editInput").value;
  notesObj[index] = inputVal;
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}

//delete notes
let deleteAll = document.getElementById("deleteAllBtn");
if (notesObj.length < 1) {
  deleteAll.classList.add("invisible");
}
deleteAll.addEventListener("click", function (e) {
  localStorage.setItem("notes", JSON.stringify([]));
  showNotes();
});

let search = document.getElementById("searchTxt");
search.addEventListener("input", function () {
  let inputVal = search.value.toLowerCase();
  // console.log('Input event fired!', inputVal);
  let noteCards = document.getElementsByClassName("noteCard");
  Array.from(noteCards).forEach(function (element) {
    let cardTxt = element.getElementsByTagName("p")[0].innerText;
    if (cardTxt.includes(inputVal)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
    // console.log(cardTxt);
  });
});

/*
Further Features:
1. Add Title
2. Mark a note as Important
3. Separate notes by user
4. Sync and host to web server 
*/

 
                          
                          
