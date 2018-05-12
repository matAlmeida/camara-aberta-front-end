import React, { Component } from "react";
import { Link } from "react-router-dom";

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
  renderVereador() {
    const vereadores = [];

    const vereadores_api = [
      {
        id: 1,
        name: "Fabio Magal",
        avatar_url:
          "http://static.eleicoes2012.info/fotos/c4/fa/fabio-magal.jpg",
        infos: {
          partido: "fodace",
          naturalidade: "Ilhéus/BA",
          idade: 112,
          estado_civil: "sorteiro",
          escolaridade: "burrão"
        }
      },
      {
        id: 2,
        name: "Fabio Magal",
        avatar_url:
          "http://static.eleicoes2012.info/fotos/c4/fa/fabio-magal.jpg",
        infos: {
          partido: "fodace",
          naturalidade: "Ilhéus/BA",
          idade: 112,
          estado_civil: "sorteiro",
          escolaridade: "burrão"
        }
      },
      {
        id: 3,
        name: "Fabio Magal",
        avatar_url:
          "http://static.eleicoes2012.info/fotos/c4/fa/fabio-magal.jpg",
        infos: {
          partido: "fodace",
          naturalidade: "Ilhéus/BA",
          idade: 112,
          estado_civil: "sorteiro",
          escolaridade: "burrão"
        }
      },
      {
        id: 4,
        name: "Fabio Magal",
        avatar_url:
          "http://static.eleicoes2012.info/fotos/c4/fa/fabio-magal.jpg",
        infos: {
          partido: "fodace",
          naturalidade: "Ilhéus/BA",
          idade: 112,
          estado_civil: "sorteiro",
          escolaridade: "burrão"
        }
      }
    ];

    vereadores_api.map((vereador, index) => {
      vereadores.push(
        <Link
          key={index}
          to={{
            pathname: `/perfil/${vereador.id}`,
            state: {
              ...vereador
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

    return vereadores;
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

              {this.renderVereador()}
            </Paper>
          </Grid>
        </Grid>
      </Page>
    );
  }
}

export default withStyles(styles)(Home);
