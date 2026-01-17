const notes = document.querySelector(`#notes`);
const text = document.querySelector(`#text`);
const addBtn = document.querySelector(`#add`);

function addNote() {
    storeNote(localStorage.length);
    showNotes()
    
}

function storeNote(id) {
    localStorage.setItem(`${id}`, text.value);
    noteCounter();
}

function showNotes() {
    notes.innerHTML = "";
    for (let i = localStorage.length - 1; i >= 0; i--) {
        const newNote = document.createElement("li");
        newNote.innerHTML = `${localStorage.getItem(i)} <button class = "delete" onclick = "deleteNote(${i})"> X </button>`;
        notes.appendChild(newNote);
    }
}

function deleteNote(noteId) {
    localStorage.removeItem(noteId);
    showNotes();
    noteCounter();
}

function noteCounter() {
    const counter = document.querySelector("#total");
    counter.innerHTML = `Total list: <span>${localStorage.length}</span>`
}

showNotes();
noteCounter();

