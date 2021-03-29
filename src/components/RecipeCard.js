import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import ShareIcon from "@material-ui/icons/Share";
import { IconButton } from "@material-ui/core";
import IngredientsAccordion from "./IngredientsAccordion";

const RecipeCard = (props) => {
  const { title, style, ingredients } = props;
  return (
    <Card>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <ShareIcon />
          </IconButton>
        }
        title={title}
        subheader={style}
      />
      {/* <CardMedia style={{ height: "150px" }} image={imageUrl} /> */}
      <CardContent>
        <IngredientsAccordion ingredients={ingredients} />
      </CardContent>
    </Card>
  );
};

export default RecipeCard;
