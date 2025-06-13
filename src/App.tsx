import React from 'react';
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import notes from "./mynotes";
import "./App.css";

//console.log(notes);
// function createNotes(noteItem: { key: number; title: string; content: string }){
//   return (
//     <Note key={noteItem.key} title={noteItem.title} content={noteItem.content} />
//   );
// }


// function App() {
//   return (
//     <div className="App">
//       <Header />
  // HERE createNotes function passed in map paramter. this is simple method
//       {notes.map(createNotes)} 
//       <Footer /> 
//     </div>
//   );
// }

// NOW LETS CREATE THIS WITH ARROW FUNCTION
function App() {
  return (
    <div className="App">
      <Header />
      {notes.map( (noteItem:{ key: number, title: string, content: string }) => ( 
        
          <Note key={noteItem.key} title={noteItem.title} content={noteItem.content} />
      ))}
      <Footer /> 
    </div>
  );
}

export default App;
