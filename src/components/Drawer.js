import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import LabelOutlinedIcon from "@material-ui/icons/LabelOutlined";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  list: {
    width: 250,
  },
  linkNoDecoration: {
    color: "black",
    textDecoration: "none",
  },
}));

const Drawer = () => {
  const classes = useStyles();
  const [menuStatus, setMenuStatus] = React.useState(false);

  const recipeStyles = ["所有", "中式", "法餐", "面点", "甜品"];

  const toggleDrawer = () => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setMenuStatus(!menuStatus);
  };

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer()}
      onKeyDown={toggleDrawer()}
    >
      <List>
        {recipeStyles.map((text) => (
          <Link
            to={text === "所有" ? "/" : "/" + text}
            key={text}
            className={classes.linkNoDecoration}
          >
            <ListItem button>
              <LabelOutlinedIcon />
              <Box m={1} />
              <ListItemText primary={text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment>
        <IconButton
          onClick={toggleDrawer()}
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="open drawer"
        >
          <MenuIcon />
        </IconButton>

        <SwipeableDrawer
          open={menuStatus}
          onClose={toggleDrawer()}
          onOpen={toggleDrawer()}
        >
          {list()}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
};

export default Drawer;
