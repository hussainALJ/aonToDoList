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
        note.innerHTML += `<button class = 'delete' onclick = 'deleteNote(${note.id})'><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#FF0000"/>
        <line x1="9.70711" y1="9.00002" x2="23" y2="22.2929" stroke="#FF0000" stroke-linecap="round"/>
        <line x1="9" y1="22.2929" x2="22.2929" y2="9" stroke="#FF0000" stroke-linecap="round"/>
        </svg>
        </button>`;
        const p = document.createElement("p");
        p.textContent = val;
        note.appendChild(p);
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
    counter.innerHTML = `Total list: <strong>${toDoArr.length}</strong>`
}

printNote();
upDateCounter();
