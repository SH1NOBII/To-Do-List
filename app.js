import { Note } from "/Note.js";
import { NoteList } from "./NoteList.js";


const newList = new NoteList(document.getElementById('app'));
newList.add('New Task')

document.getElementById('action').addEventListener('click', () => {
    newList.add(prompt('Task name'));
})
