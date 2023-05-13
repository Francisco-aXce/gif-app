import React from "react";
import "./App.css";
import GifList from "./components/GifList";
import { Route } from "wouter";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Route path="/search/:keyword" component={GifList} />
      </section>
    </div>
  );
}

export default App;
