import React from "react";
import { Grid } from "@material-ui/core";
import Content from "./Content";
import { useParams } from "react-router-dom";
import data from "../data/data";
import db from "../services/StoreContext";

const Home = (props) => {
  const { searchKeyword } = props;

  const [recipes, setRecipes] = React.useState([]);

  React.useEffect(() => {
    // initialization
    db.collection("recipes")
      .get()
      .then((snapshot) => {
        const recipes = snapshot.docs.map((d) => d.data());
        setRecipes(recipes);
      });
  }, []);

  let { recipeStyle } = useParams();

  const filteredData = recipes
    .filter((d) =>
      typeof recipeStyle !== "undefined" ? d.style === recipeStyle : true
    )
    .filter((d) =>
      searchKeyword !== "" ? d.title.includes(searchKeyword) : true
    );

  return (
    <div>
      <Grid container>
        <Grid item xs={1} lg={2} />
        <Grid item xs={10} lg={8}>
          <Content data={filteredData} />
        </Grid>
        <Grid item xs={1} lg={2} />
      </Grid>
    </div>
  );
};

export default Home;
