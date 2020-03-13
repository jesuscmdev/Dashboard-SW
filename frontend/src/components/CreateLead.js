import React, { Component } from "react";
import axios from "axios";

export default class CreateLead extends Component {
  state = {
    leads: []
  };
  async componentDidMount() {
    const res = await axios.get("http://localhost:4000/api/leads");
    this.setState({ leads: res.data });
    console.log(this.state.leads);
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-4">Form</div>
        <div className="col-md-8">
          <ul className="list-group">
            {this.state.leads.map(lead => (
              <li
                className="list-group-item list-group-item-action"
                key={lead._id}
              >
                {lead.nick}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
