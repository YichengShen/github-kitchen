import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Header from "./Header";

const useStyles = makeStyles((theme) => ({
  containerDiv: {
    backgroundImage: `url(${process.env.PUBLIC_URL + "/hip_square.png"})`,
    height: "100vh",
    overflow: "auto",
  },
}));

const App = () => {
  const classes = useStyles();
  const [searchInput, setSearchInput] = React.useState("");

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className={classes.containerDiv}>
        <Grid container direction="column">
          <Grid item xs={12}>
            <Header onSearch={handleSearch} />
          </Grid>
          <Grid item>
            <main>
              <Switch>
                <Route path="/:recipeStyle?">
                  <Home searchKeyword={searchInput} />
                </Route>
              </Switch>
            </main>
          </Grid>
        </Grid>
      </div>
    </Router>
  );
};

export default App;
