import AddNotes from "./components/AddNotes"
import Navbar from "./components/Navbar"
import Notes from "./components/Notes"
import NotesState from "./context/NotesState"

function App() {
 

  return (
    <>
      <NotesState>
      <Navbar />
      <AddNotes />
      <Notes />
      </NotesState>
    </>
  )
}

export default App
