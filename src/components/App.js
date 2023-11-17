import React from "react";
import bin from "../assets/bin.png";
import writing from "../assets/writing.png";
import note from "../assets/pencil.png";

function addNote() {
  const newNote = document.createElement("p");
  const image = document.createElement("img");
  const em = document.createElement('em')
  const fullDate = new Date();
  const year = fullDate.getFullYear();
  const month = fullDate.getMonth();
  const day = fullDate.getDay();
  em.textContent = `${day}/${month}/${year}.`
  image.src = bin;
  image.addEventListener("click", function () {
    this.parentElement.remove();
    this.style.cursor = "pointer";
  });
  newNote.append(image, em);
  newNote.setAttribute("contenteditable", "true");
  newNote.classList.add("note-p");
  const noteWrapper = document.querySelector(".notes");
  return noteWrapper.appendChild(newNote);
}

function App() {
  return (
    <div className="container">
      <img src={note} alt="notebook" className="note-img" />
      <h1>Notes</h1>
      <button className="create" onClick={addNote}>
        <img src={writing} alt="pen" />
        Create
      </button>
      <div className="notes"></div>
    </div>
  );
}

export default App;
