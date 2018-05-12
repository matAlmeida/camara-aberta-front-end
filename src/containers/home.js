import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";
import Grid from "material-ui/Grid";
import Paper from "material-ui/Paper";
import Card, { CardContent, CardMedia } from "material-ui/Card";
import Avatar from "material-ui/Avatar";
import Chip from "material-ui/Chip";

import Page from "../layout/page";

import Ilheus from "../ilheus.jpg";

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  card: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40
  },
  details: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 750,
    height: 435
  },
  controls: {
    display: "flex",
    alignItems: "center"
  },
  paper: {
    textAlign: "center"
  },
  chip: {
    margin: 10
  }
};

class Home extends Component {
  constructor() {
    super();
    this.state = {
      vereadores: [],
      outros: []
    };
  }

  async componentDidMount() {
    await axios
      .get("https://evencert.com/_andre/nibs2018/api_ca/vereador")
      .then(response => {
        const p = [];

        response.data.data.map(rep => {
          p.push({
            id: rep.vereador_id,
            name: rep.nome,
            avatar_url: rep.foto,
            infos: {
              naturalidade: rep.naturalidade,
              idade: rep.data_nascimento,
              estado_civil: rep.descricao_estado_civil,
              escolaridade: rep.descricao_escolaridade
            }
          });
        });

        this.setState({ vereadores: p });
      });

    this.state.vereadores.map((vereador, index) => {
      axios
        .get(
          `https://evencert.com/_andre/nibs2018/api_ca/vereador?id=${
            vereador.id
          }`
        )
        .then(resp => {
          const o = {
            estatisticas: resp.data.data.estatisticas,
            presenca: resp.data.data.presenca
          };

          this.setState({ outros: [...this.state.outros, o] });
        });
    });
  }

  renderVereador() {
    const Pvereadores = [];

    this.state.vereadores.map((vereador, index) => {
      Pvereadores.push(
        <Link
          key={index}
          to={{
            pathname: `/perfil/${vereador.id}`,
            state: {
              ...vereador,
              ...this.state.outros[index]
            }
          }}
        >
          <Chip
            avatar={<Avatar src={vereador.avatar_url} />}
            label={vereador.name}
            style={{
              margin: 10
            }}
          />
        </Link>
      );
    });

    return Pvereadores;
  }

  render() {
    const { classes } = this.props;
    return (
      <Page className={classes.root}>
        <Card className={classes.card} elevation={0}>
          <Grid container spacing={24}>
            <Grid item xs={12} sm={6} style={{ textAlign: "center" }}>
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Paper className={classes.paper} elevation={0}>
                    <Typography variant="headline">Sobre o Projeto</Typography>
                    <Typography variant="subheading" color="textSecondary">
                      Description
                    </Typography>
                  </Paper>
                </CardContent>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <CardMedia
                className={classes.cover}
                image={Ilheus}
                title="Live from space album cover"
              />
            </Grid>
          </Grid>
        </Card>

        <Grid container spacing={24}>
          <Grid item xs={12} sm={12}>
            <Paper
              className={classes.paper}
              elevation={0}
              style={{ marginTop: 40 }}
            >
              <Typography variant="headline">
                O que os vereadores fazem?
              </Typography>
              <Typography variant="body2">
                Vereador é o agente político eleito que deve acompanhar o
                dia-a-dia das comunidades e, por isso, conhece de perto suas
                necessidades.
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <Grid container spacing={24}>
          <Grid item xs={12} sm={12}>
            <Paper
              className={classes.paper}
              elevation={0}
              style={{ marginTop: 40 }}
            >
              <Typography variant="headline">Os vereadores</Typography>

              {this.state.vereadores && this.renderVereador()}
            </Paper>
          </Grid>
        </Grid>
      </Page>
    );
  }
}

export default withStyles(styles)(Home);
