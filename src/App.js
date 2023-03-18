import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/header";

import PostList from "./components/postList";
import PostView from "./components/postView";

const App = () => (
  <Router>
    <div>
      <Header />
      <section className="section container content">
        <Route exact path="/" Component={PostList} />
        <Route path="/:slug" Component={PostView} />
      </section>
    </div>
  </Router>
);

export default App;
