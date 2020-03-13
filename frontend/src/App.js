import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navigation from "./components/Navigation";
import LeadsList from "./components/LeadsList";
import CreateLead from "./components/CreateLead";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <Navigation></Navigation>
      <div className=" p-4">
        <Route path="/" component={LeadsList} exact />
        <Route path="/edit/:id" component={CreateLead} />
        <Route path="/create" component={CreateLead} />
        <Route path="/dashboard" component={Dashboard} />
      </div>
    </Router>
  );
}

export default App;
