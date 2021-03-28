import { Grid } from "@material-ui/core";
import Content from "./Content";
import { useParams } from "react-router-dom";
import data from "../data/data";

const Home = (props) => {
  const { searchKeyword } = props;

  let { recipeStyle } = useParams();

  const filteredData = data
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
