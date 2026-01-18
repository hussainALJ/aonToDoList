const toDoArr = localStorage.getItem("notes") === null? []: JSON.parse(localStorage.getItem("notes"))

const toDo = document.querySelector(`#toDoList`);
const text = document.querySelector(`#text`);
const addBtn = document.querySelector(`#add`);
const counter = document.querySelector('#total')

text.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        addNote();
    }
})

function addNote() {
    toDoArr.unshift(text.value);
    text.value = '';
    save()
    printNote();
    upDateCounter()
    console.log(toDoArr);
}

function printNote() {
    toDo.textContent = '';
    toDoArr.forEach((val, index) => {
        const note = document.createElement("li");
        note.className = "note";
        note.id = index;
        note.textContent = val;
        note.innerHTML += `<button class = 'delete' onclick = 'deleteNote(${note.id})'>X</button>`;
        toDo.appendChild(note);
    })
    upDateCounter();
}

function save() {
    localStorage.setItem("notes", JSON.stringify(toDoArr))
}

function deleteNote(note) {
    toDoArr.splice(note, 1);
    printNote()
    save();
}

function upDateCounter() {
    counter.innerHTML = `Total list: <span>${toDoArr.length}</span>`
}

printNote();
upDateCounter();
