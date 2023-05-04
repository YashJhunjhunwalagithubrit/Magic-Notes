import React, {useContext} from 'react'
import NotesContext from '../context/notesContext.jsx'
import NoteItem from './NoteItem.jsx';

const Notes = () => {

    const context = useContext(NotesContext);
    const {notes, editNote, deleteNote, markImportant} = context;

  return (
    <div className='container'>  
        <div id="notes" className="row container-fluid">
        {notes.map((note) => {
            return (
                <NoteItem key={note.noteNumber} note={note} editNote={editNote} deleteNote={deleteNote} markImportant={markImportant} />
            )}
        )}
        </div>
    </div>
  )
}

export default Notes