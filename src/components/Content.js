import React from "react";
import { Grid } from "@material-ui/core";
import RecipeCard from "./RecipeCard";

const Content = (props) => {
  const { data } = props;

  const getRecipeCard = (RecipeObj) => {
    return (
      <Grid item xs={12} sm={6} md={4} key={RecipeObj.title}>
        <RecipeCard {...RecipeObj} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={2}>
      {data.map((d) => getRecipeCard(d))}
    </Grid>
  );
};

export default Content;
