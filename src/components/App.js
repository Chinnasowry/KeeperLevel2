import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import info from "../notes";

function App() {
  return (
    <div>
      <Header />
      {info.map((createNote) => (
        <Note title={createNote.title} content={createNote.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
