// TODO: Update this import
import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core";
import pink from "@material-ui/core/colors/pink";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#fafafa",
    },
    secondary: {
      main: pink[500],
    },
  },
});

export default theme;
