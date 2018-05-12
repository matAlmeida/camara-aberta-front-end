import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { Avatar, Paper } from "material-ui";
import Typography from "material-ui/Typography";
import Grid from "material-ui/Grid";
import Table, { TableBody, TableCell, TableRow } from "material-ui/Table";

import { Doughnut } from "react-chartjs-2";

import Page from "../layout/page";

class Perfil extends Component {
  render() {
    const INITIAL_STATE = {
      id: 1,
      name: "Nome",
      avatar_url: "http://static.eleicoes2012.info/fotos/c4/fa/fabio-magal.jpg",
      infos: {
        partido: "Partido",
        naturalidade: "Ilhéus/BA",
        idade: 112,
        estado_civil: "sorteiro",
        escolaridade: "burrão"
      }
    };

    const { id, name, avatar_url, infos, estatisticas, presenca } = {
      ...INITIAL_STATE,
      ...this.props.location.state
    };

    const impacto_projeto = {
      labels: ["Baixo Impacto", "Alto Impacto"],
      datasets: [
        {
          data: [
            estatisticas.num_projetos_baixo[0].total,
            estatisticas.num_projetos_alto[0].total
          ],
          backgroundColor: ["#FF6384", "#36A2EB"],
          hoverBackgroundColor: ["#FF6384", "#36A2EB"]
        }
      ]
    };

    const impacto_lei = {
      labels: ["Baixo Impacto", "Alto Impacto"],
      datasets: [
        {
          data: [
            estatisticas.num_leis_baixo[0].total,
            estatisticas.num_leis_alto[0].total
          ],
          backgroundColor: ["#FF6384", "#36A2EB"],
          hoverBackgroundColor: ["#FF6384", "#36A2EB"]
        }
      ]
    };

    return (
      <Page>
        <div style={{ paddingLeft: 40, paddingRight: 40, marginTop: 40 }}>
          <Grid container spacing={24}>
            <Grid item xs={4} sm={1}>
              <Avatar
                alt={name}
                src={avatar_url}
                style={{
                  width: 100,
                  height: 100
                }}
              />
            </Grid>
            <Grid item xs={8} sm={2}>
              <h1>{name}</h1>
              <h3>{infos.partido}</h3>
            </Grid>
          </Grid>

          <Grid item container xs={12} sm={4}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Data de Nascimento
                  </TableCell>
                  <TableCell>{infos.idade}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Naturalidade
                  </TableCell>
                  <TableCell>{infos.naturalidade}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Escolaridade
                  </TableCell>
                  <TableCell>{infos.escolaridade}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Estado Civil
                  </TableCell>
                  <TableCell>{infos.estado_civil}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Grid>

          <Grid
            container
            spacing={24}
            style={{ marginTop: 40, textAlign: "center" }}
          >
            <Grid item xs={12} sm={4}>
              <Paper elevation={1} style={{ padding: 25 }}>
                <Typography variant="headline">
                  Número de Projetos de Leis
                </Typography>
                <Typography variant="display3">
                  {parseInt(estatisticas.num_projetos_alto[0].total) +
                    parseInt(estatisticas.num_projetos_baixo[0].total)}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper elevation={1} style={{ padding: 25 }}>
                <Typography variant="headline">
                  Número de Leis Aprovadas
                </Typography>
                <Typography variant="display3">
                  {parseInt(estatisticas.num_leis_alto[0].total) +
                    parseInt(estatisticas.num_leis_baixo[0].total)}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper elevation={1} style={{ padding: 25 }}>
                <Typography variant="headline">Presença em Seções</Typography>
                <Typography variant="display3">{`
                  ${parseInt(presenca[0].qtd_presencas) +
                    parseInt(presenca[1].qtd_presencas) +
                    parseInt(presenca[2].qtd_presencas)} de ${67 * 3} 
                `}</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={1} style={{ padding: 25 }}>
                <Typography variant="headline">
                  Impacto dos Projetos de Lei
                </Typography>
                <Doughnut data={impacto_projeto} />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={1} style={{ padding: 25 }}>
                <Typography variant="headline">Impacto das Leis</Typography>
                <Doughnut data={impacto_lei} />
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Page>
    );
  }
}

export default withRouter(Perfil);
