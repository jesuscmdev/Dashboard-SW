import React, { Component } from "react";
import axios from "axios";

/* Imports */
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_dark from "@amcharts/amcharts4/themes/dark";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_dark);

export default class ChartEx extends Component {
  state = {
    leads: [],
    asistentes: [],
    interesados: [],
    nointeresados: []
  };
  async componentDidMount() {
    const res = await axios.get("http://localhost:4000/api/leads");
    this.setState({ leads: res.data });
    this.state.asistentes = this.state.leads.filter(
      lead => lead.llegocita === "SI"
    );
    this.state.interesados = this.state.leads.filter(
      lead => lead.interes === "SI"
    );
    this.state.nointeresados = this.state.leads.filter(
      lead => lead.interes === "NO"
    );
    let chart = am4core.create("chartdiv", am4charts.PieChart);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.data = [
      {
        leads: "No asistieron",
        cantidad: this.state.leads.length - this.state.asistentes.length
      },
      {
        leads: "Asistieron",
        cantidad: this.state.asistentes.length
      }
    ];
let pieSeries = chart.series.push(new am4charts.PieSeries());
pieSeries.dataFields.value = "cantidad";
pieSeries.dataFields.category = "leads";
pieSeries.slices.template.stroke = am4core.color("#fff");
pieSeries.slices.template.strokeWidth = 2;
pieSeries.slices.template.strokeOpacity = 1;

// This creates initial animation
pieSeries.hiddenState.properties.opacity = 1;
pieSeries.hiddenState.properties.endAngle = -90;
pieSeries.hiddenState.properties.startAngle = -90;

this.chart = chart;
  }
  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }
  render() {
    return (
      <div >
        <div id="chartdiv" style={{ width: "100%", height: "300px" }}></div>
      </div>
    );
  }
}
