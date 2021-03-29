import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const IngredientsAccordion = (props) => {
  const classes = useStyles();

  const { ingredients } = props;

  const [numPeople, setNumPeople] = React.useState(1);

  const handleNumPeopleChange = (e) => {
    setNumPeople(e.target.value > 0 ? e.target.value : 1);
  };

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>用料</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography component={"span"} variant={"body2"}>
          <TextField
            label="人数"
            defaultValue="1"
            variant="outlined"
            size="small"
            fullWidth={true}
            onChange={handleNumPeopleChange}
          />
          <List>
            {ingredients.map((item, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={item.title}
                  secondary={
                    Math.round(item.quantity * numPeople * 100) / 100 +
                    item.unit
                  }
                />
              </ListItem>
            ))}
          </List>
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default IngredientsAccordion;
