import React from "react";
import { Link } from "react-router-dom";

import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
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

class Page extends React.Component {
  render() {
    const { classes, children, className } = this.props;
    return (
      <div className={className}>
        <AppBar
          position="static"
          style={{
            background: "#fff",
            color: "#000",
            paddingRight: 25,
            paddingLeft: 25
          }}
          elevation={0}
        >
          <Toolbar>
            <Typography
              variant="title"
              color="inherit"
              className={classes.flex}
              style={{
                justifyContent: "center"
              }}
            >
              <Link to="/" style={{ textDecoration: "none" }}>
                Câmara Aberta
              </Link>
            </Typography>

            <Button href="http://ilheus.democracy.earth/" color="inherit">
              Democracy Earth Ilhéus
            </Button>
            <Link to="/geral">
              <Button color="inherit">Estatistica Geral</Button>
            </Link>
            <Button color="inherit">Ajude o Projeto</Button>
          </Toolbar>
        </AppBar>
        {children}
      </div>
    );
  }
}

export default withStyles(styles)(Page);
