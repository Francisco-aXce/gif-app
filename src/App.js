import React from "react";
import "App.css";
import { Route } from "wouter";
import Home from "pages/Home";
import Detail from "pages/Detail";
import SearchResults from "pages/SearchResults";
import { GifsContextProvider } from "context/GifsContext";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <GifsContextProvider>
          <Route path="/" component={Home} />
          <Route path="/search/:keyword" component={SearchResults} />
          <Route path="/detail/:id" component={Detail} />
        </GifsContextProvider>
      </section>
    </div>
  );
}

export default App;
