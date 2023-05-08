import React from "react";
import "./App.css";
import GifList from "./components/GifList";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <GifList gifs={"one piece"} />
      </section>
    </div>
  );
}

export default App;
