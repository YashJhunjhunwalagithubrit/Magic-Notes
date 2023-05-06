import React, {useContext, useRef} from "react";
import NotesContext from "../context/notesContext.jsx";

const AddNotes = () => {
    const context = useContext(NotesContext);
    const {addNote, deleteAll} = context;

    const titleRef = useRef(null);
    const textRef = useRef(null);

    const handleAddNote = (e) => {
        e.preventDefault();
        addNote(titleRef.current.value, textRef.current.value);
        titleRef.current.value = "";
        textRef.current.value = "";
    }
  return (
    <>
      <div className="container my-3">
        <h1>Welcome To Magic Notes</h1>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Please add your note</h5>
            <div className="form-group">
                <input ref={titleRef} type="text" className="form-control my-2" id="addTitle" aria-describedby="emailHelp" placeholder="Enter title" />
              <textarea
              ref={textRef}
                className="form-control"
                id="addTxt"
                rows={3}
                defaultValue={""}
                placeholder="Enter your note here..."
              />
            </div>
            <div>
              <button className="btn btn-primary mx-2" onClick={handleAddNote}>
                Add Note
              </button>
              <button className="btn btn-primary" onClick={deleteAll}>
                Delete All Notes
              </button>
            </div>
          </div>
        </div>
        <hr />
        <div id="notes" className="row container-fluid" />
      </div>
    </>
  );
};

export default AddNotes;
