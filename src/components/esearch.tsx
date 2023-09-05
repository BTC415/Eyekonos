import React from "react";
import { makeStyles, alpha } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { InputBase } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    maxWidth: 200,
    // width: '100%',
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
    border: "2px solid #102F82",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 1,
    paddingBottom: 1,
  },
  searchIconWrapper: {
    padding: theme.spacing(0, 2),
    height: "100%",
    right: 0,
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#102F82",
    fontSize: 20,
  },
  inputRoot: {
    color: "#102F82",
  },
  inputInput: {
    maxWidth: 150,
    minWidth: 100,
    padding: theme.spacing(1, 0, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    // width: '100%',
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const useUploadStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: 20,
    backgroundColor: alpha(theme.palette.common.white, 0.8),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 1),
    },
    marginLeft: 0,
    maxWidth: 200,
    // width: '100%',
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
    border: "2px solid #102F82",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 1,
    paddingBottom: 1,
  },
  searchIconWrapper: {
    padding: theme.spacing(0, 2),
    height: "100%",
    right: 0,
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#102F82",
    fontSize: 20,
  },
  inputRoot: {
    color: "#102F82",
  },
  inputInput: {
    maxWidth: 150,
    minWidth: 100,
    padding: theme.spacing(1, 0, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    // width: '100%',
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

interface IESearchViewProps {
  colorTheme?: "normal" | "upload";
}

const ESearchView: React.FC<IESearchViewProps> = ({
  colorTheme = "normal",
}) => {
  const classes = useStyles();
  const uploadClasses = useUploadStyles();

  return (
    <div
      className={
        colorTheme === "normal" ? classes.search : uploadClasses.search
      }
    >
      <div
        className={
          colorTheme === "normal"
            ? classes.searchIconWrapper
            : uploadClasses.searchIconWrapper
        }
      >
        {/* Add your search icon component here */}
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search..."
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
      />
    </div>
  );
};

export default ESearchView;
