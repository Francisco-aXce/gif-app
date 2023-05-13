import React from "react";
import "./App.css";
import { Route } from "wouter";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import SearchResults from "./components/SearchResults";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Route path="/" component={Home} />
        <Route path="/search/:keyword" component={SearchResults} />
        <Route path="/detail/:id" component={Detail} />
      </section>
    </div>
  );
}

export default App;
