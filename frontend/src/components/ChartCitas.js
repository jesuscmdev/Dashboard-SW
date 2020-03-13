import React, { Component } from "react";
import axios from "axios";
import ChartEx from "./ChartComp";
import ChartBarras from "./ChartBarras";

function fechacorta(fecha) {
  var date = new Date(fecha);
  return date.toLocaleDateString();
}

export default class ChartCitas extends Component {
  state = {
    leads: [],
    asistentes: []
  };
  async componentDidMount() {
    const res = await axios.get("http://localhost:4000/api/leads");
    this.setState({ leads: res.data });
    this.state.asistentes = this.state.leads.filter(
      lead => lead.llegocita === "SI"
    );

    // console.log();
    // console.log(this.state.leads.length);
  }

  render() {
    return (
      <div>
        <div
          className="row p-2"
          style={{ backgroundColor: "#30303d", color: "#fff" }}
        >
          <div className="col s-12 m-6">
            <ChartEx />
          </div>
          <div className="col s-12 m-6">
            <ChartBarras />
          </div>
        </div>
        <div className="p-2"> </div>
        <div className="row">
          <div className="col s-12">
            <div className="">
              <ul className="list-group">
                <li className="list-group-item list-group-item-action">
                  Total leads: {this.state.leads.length}
                </li>
                <li className="list-group-item list-group-item-action">
                  Numero de asistentes: {this.state.asistentes.length}
                </li>
              </ul>
            </div>
            <div className="responsive-table font-small">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Llegaron a cita</th>
                  </tr>
                  <tr>
                    <th>Fecha</th>
                    <th>Nick</th>
                    <th>Telefono</th>
                    <th>Seguimiento</th>
                    <th>Tratamiento</th>
                    <th>Desc Trat</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.asistentes.map(lead => (
                    <tr key={lead._id}>
                      <td>{fechacorta(lead.fecha)}</td>
                      <td>{lead.nick}</td>
                      <td>{lead.tel}</td>
                      <td>{lead.seguimiento}</td>
                      <td>{lead.tratamiento}</td>
                      <td>{lead.desctrat}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}
