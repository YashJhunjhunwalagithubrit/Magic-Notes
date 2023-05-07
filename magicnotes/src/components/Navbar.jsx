import { useContext, useRef } from "react";
import NotesContext from "../context/notesContext.jsx";

const Navbar = () => {

  const context = useContext(NotesContext);
  const { searchNote } = context;

  const searchBoxRef = useRef(null);

  const handleSearch = (e) =>{
    e.preventDefault();
    searchNote(searchBoxRef.current.value);
  }


  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Magic Notes
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only" />
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="login.html">
                Login <span className="sr-only" />
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#notes">
                My Notes <span className="sr-only" />
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              id="searchTxt"
              type="search"
              placeholder="Search"
              aria-label="Search"
              ref={searchBoxRef}
              onChange={handleSearch}
            />
          </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
