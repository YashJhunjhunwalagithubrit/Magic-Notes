import { useState } from "react";
import NotesContext from "./notesContext.jsx";

const NotesState = (props) => {

  const[notes, setNotes] = useState([]);
  const[allNotes, setAllNotes] = useState([]);
  
  const addNote = (title, description) => {
    let newNote = {
        title: title?title:`Note ${notes.length + 1}`,
        description: description,
        isImportant: false,
        noteNumber: notes.length<1?0:notes[notes.length-1].noteNumber+1
    }
    setNotes([...notes, newNote]);
    setAllNotes([...allNotes, newNote]);
  }

    const deleteNote = (noteNumber) => {
        setNotes(notes.filter((note) => {
            return note.noteNumber !== noteNumber;
        }))
        
        setAllNotes(allNotes.filter((note) => {
            return note.noteNumber !== noteNumber;
        }))
    }

    const editNote = (title, description , noteNumber) => {
        const newNotes = notes.map((note) => {
            if(note.noteNumber === noteNumber){
                return {
                    ...note,
                    title: title?title:note.title,
                    description: description,
                    noteNumber: noteNumber
                }
            }
            return note;
        })
        setNotes(newNotes);
        setAllNotes(newNotes);
    }

    const markImportant = (noteNumber) => {
        const newNotes = notes.map((note) => {
            if(note.noteNumber === noteNumber){
                return {
                    ...note,
                    isImportant: !note.isImportant
                }
            }
            return note;
        })
        setNotes(newNotes);
        setAllNotes(newNotes);
    }

    const deleteAll = () => {
        setNotes([]);
        setAllNotes([]);
    }

    const searchNote = (searchText) => {
        const newNotes = allNotes.filter((note) => {
            return note.description.includes(searchText);
        })
        setNotes(newNotes);
    }


  return (
    <NotesContext.Provider value={{ notes, addNote, deleteNote, deleteAll, editNote, markImportant, searchNote}}>
      {props.children}
    </NotesContext.Provider>
  );
};

export default NotesState;