import React, { Component } from "react";
import axios from "axios";
import Chart from './ChartCitas'

function fechacorta(fecha) {
  var date = new Date(fecha);
  return date.toLocaleDateString();
}
export default class LeadsList extends Component {
  state = {
    leads: []
  };

  async componentDidMount() {
    const res = await axios.get("http://localhost:4000/api/leads");
    console.log(res);
    this.setState({ leads: res.data });
    // console.log(this.state.leads.length);
  }
  render() {
    return (
      <div className="">
        <div className="p-3">
            <Chart/>
        </div>
        <div className="table-responsive">
          <table className="table table-hover font-small">
            <thead>
              <tr>
                <th>Fecha</th>
                <th scope="col">Nick</th>
                <th scope="col">Teléfono</th>
                {/* <th scope="col">Medio</th> */}
                <th scope="col">Pregunta</th>
                <th>Interes</th>
                <th>Seguimiento</th>
                <th>Nomenclatura</th>
                <th>Llegó a cita</th>
                <th>Val inicial</th>
                <th>Tratamiento</th>
                <th>Trat Des</th>
                {/* <th>Cupon</th>
                <th>Cupon Des</th> */}
                {/* <th>Comentario</th> */}
              </tr>
            </thead>
            <tbody>
              {this.state.leads.map(lead => (
                <tr key={lead._id}>
                  <td>{fechacorta(lead.fecha)}</td>
                  <td>{lead.nick}</td>
                  <td>{lead.tel}</td>
                  {/* <td>{lead.medio}</td> */}
                  <td>{lead.preg}</td>
                  <td>{lead.interes}</td>
                  <td>{lead.seguimiento}</td>
                  <td>{lead.nomseg}</td>
                  <td>{lead.llegocita}</td>
                  <td>{lead.valinicial}</td>
                  <td>{lead.tratamiento}</td>
                  <td>{lead.desctrat}</td>
                  {/* <td>{lead.cupon}</td>
                  <td>{lead.desccupon}</td> */}
                  {/* <td>{lead.comentario}</td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
