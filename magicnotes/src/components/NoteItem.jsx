import React, {useRef, useState} from "react";

const NoteItem = (props) => {
  const { note, editNote, deleteNote, markImportant } = props;
  const [isEditing, setIsEditing] = useState(false);

  const titleRef = useRef(null);
  const textRef = useRef(null);

  const handleEditNote = () => {
    editNote(
      titleRef.current.value,
      textRef.current.value,
      note.noteNumber
    );
    setIsEditing(false);
  };

  return (
    <>
      <div className="noteCard my-2 mx-2 card" style={{ width: "32rem" }}>
        {note.isImportant && (
          <div className="position-relative">
            <div className="position-absolute end-0 top-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="yellow"
                className="bi bi-star-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
            </div>
          </div>
        )}
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <button className="btn btn-primary mx-1" onClick={()=> {setIsEditing(!isEditing); }}>
            Edt Note
          </button>
          <button
            className="btn btn-primary mx-1"
            onClick={() => deleteNote(note.noteNumber)}
          >
            Delete Note
          </button>
          <button
            className="btn btn-primary mx-1"
            onClick={() => markImportant(note.noteNumber)}
          >
            Important
          </button>

          {isEditing&&<div className="">

          <input type="text" placeholder='Edit Title' id='editTitle' ref={titleRef} className="mt-2 form-control"/>
          <input type="text" placeholder='Edit Note' id='editNote' ref={textRef} className="mt-2 form-control"/>
    <button className="btn btn-success mt-2" onClick={handleEditNote}>Save Note</button>
    </div>}
        </div>
      </div>
    </>
  );
};

export default NoteItem;
