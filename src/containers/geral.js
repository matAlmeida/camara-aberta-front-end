import React, { Component } from "react";

import { Avatar, Paper } from "material-ui";
import Typography from "material-ui/Typography";
import Grid from "material-ui/Grid";

import { Bar } from "react-chartjs-2";

import Page from "../layout/page";

const data = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July"
  ],
  datasets: [
    {
      label: "Projetos de Lei",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [
        65,
        59,
        80,
        81,
        56,
        55,
        40,
        59,
        80,
        81,
        56,
        55,
        40,
        59,
        80,
        81,
        56,
        55,
        40
      ]
    }
  ]
};

const data2 = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July"
  ],
  datasets: [
    {
      label: "Projetos de Leis Aprovadas",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [
        65,
        59,
        80,
        81,
        56,
        55,
        40,
        59,
        80,
        81,
        56,
        55,
        40,
        59,
        80,
        81,
        56,
        55,
        40
      ]
    }
  ]
};

class Geral extends Component {
  render() {
    return (
      <Page>
        <div style={{ paddingLeft: 40, paddingRight: 40, marginTop: 40 }}>
          <Grid container spacing={24}>
            <Grid item xs={12} sm={12}>
              <Bar
                data={data}
                width={10}
                height={250}
                options={{
                  maintainAspectRatio: false
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <Bar
                data={data2}
                width={10}
                height={250}
                options={{
                  maintainAspectRatio: false
                }}
              />
            </Grid>
          </Grid>
        </div>
      </Page>
    );
  }
}

export default Geral;
