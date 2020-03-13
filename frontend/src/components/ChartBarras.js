import React, { Component } from "react";
import axios from "axios";
/* Imports */
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_dark from "@amcharts/amcharts4/themes/dark";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

/* Chart code */
// Themes begin
am4core.useTheme(am4themes_dark);
am4core.useTheme(am4themes_animated);
// Themes end

export default class ChartBarras extends Component {
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
    // Create chart instance
    let chart = am4core.create("chartdiv2", am4charts.PieChart);
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
    chart.radius = am4core.percent(70);
    chart.innerRadius = am4core.percent(40);
    chart.startAngle = 180;
    chart.endAngle = 360;

    let series = chart.series.push(new am4charts.PieSeries());
    series.dataFields.value = "cantidad";
    series.dataFields.category = "leads";

    series.slices.template.cornerRadius = 10;
    series.slices.template.innerCornerRadius = 7;
    series.slices.template.draggable = true;
    series.slices.template.inert = true;
    series.alignLabels = false;

    series.hiddenState.properties.startAngle = 90;
    series.hiddenState.properties.endAngle = 90;

    chart.legend = new am4charts.Legend();

    this.chart = chart;
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }
  render() {
    return (
      <div className="p-2 my-auto">
        <div id="chartdiv2" style={{ width: "90%", height: "250px" }}></div>
      </div>
    );
  }
}
