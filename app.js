const pageHTMLText = document.getElementById("number");
const titleHTMLText = document.getElementById("title");
const authorHTMLText = document.getElementById("author");
const submitHTMLText = document.getElementById("submit");
const readHTMLText = document.getElementById("read");
const modal = document.getElementById("modal");
const form = document.querySelector(".form");
const formDiv = document.querySelector(".form-inner__div");
const xIcon = document.getElementById("xicon");
let pageText = 0;
let counter = 0;
let authorText = "";
let titleText = "";
let readText = "";
let submitText = "";
let read = false;
let clicked = false;
let modal1 = true;
let myLibrary = [];

function titleInput(event) {
  titleText = event.target.value;
}

function authorInput(event) {
  authorText = event.target.value;
}

function pageInput(event) {
  pageText = event.target.value;
}
function readInput() {
  read = !read;
  if (read) {
    readText = "Read";
  } else {
    readText = "Not read";
  }
}

function isNotEmpty(inputValue) {
  return inputValue.trim("") === "";
}

function deleteBookFromLibrary(id) {
  const updatedLibrary = myLibrary.filter((item) => item.id !== id);
  myLibrary = updatedLibrary;
  innerHTML();
}

function changeReadState(id) {
  const book = myLibrary.find((item) => item.id === id);

  if (book) {
    book.read = !book.read;
    if (book.read) {
      book.readText = "Read";
    } else {
      book.readText = "Not Read";
    }
  }
  console.log(read);
  innerHTML();
}

function addBookToLibrary() {
  if (isNotEmpty(pageText) || isNotEmpty(authorText) || isNotEmpty(titleText)) {
    return;
  }
  const newLibrary = {
    title: titleText,
    author: authorText,
    page: pageText,
    read: readText,
    id: counter,
  };
  counter++;
  myLibrary.push(newLibrary);
  innerHTML();
}
function innerHTML() {
  const content = myLibrary
    .map(
      (item) => `  
      <div>
        <p id="title">"${item.title}"</p>
        <p id="author">${item.author}</p>
       <p id="number">${item.page} pages</p>
       <p id="read" onclick="changeReadState(${item.id})">${
        item.read ? "Read" : "Not Read"
      }</p>
       <p id="delete" onclick="deleteBookFromLibrary(${
         item.id
       })">Remove Book</p>
       </div>`
    )
    .join("");

  modal.innerHTML = content;
}

function modalOpen() {
  clicked = !clicked;
  console.log(clicked);
  if (clicked) {
    form.classList.remove("form");
  } else {
    form.classList.add("form");
  }
}
xIcon.addEventListener("click", () => {
  clicked = !clicked;
  if (modal1) {
    form.classList.add("form");
  } else {
    form.classList.remove("form");
  }
  console.log(modal1);
});
