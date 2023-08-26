import { Note } from "./Note.js";

export class NoteList {
    _notes = [];

    constructor(container) {
        this.container = container;
        this.list = document.createElement('div');
        this.list.classList.add('list-group');

        container.innerHTML = '';
        container.append(this.list);
        console.log(container)
    }

    add(name, done = false) {
        let newNote = new Note(this.container, name, done);
        this._notes.push(newNote);
    }

    remove(value) {
        let id = value;

        
    }
}
