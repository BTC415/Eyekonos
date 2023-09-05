import React from "react";
import { Select, MenuItem, makeStyles, InputLabel } from "@material-ui/core";
import { FormControl } from "@mui/material";
import DownSvg from "../assets/svgs/down.svg";
import UpSvg from "../assets/svgs/up.svg";

const useStyles = makeStyles(() => ({
  formControl: {
    display: "flex",
    alignItems: "center",
    background: "#102F82", // Customize the background color of the input field
    borderRadius: 7,
    minWidth: 150,

    "& .MuiSelect-selectMenu": {
      color: "white",
      paddingLeft: 10,
      paddingTop: 10,
      paddingBottom: 10,
      paddingRight: 30,
    },

    "& .MuiSelect-icon": {
      color: "white",
    },
  },
  select: {
    marginLeft: "auto",
    width: "100%",

    "&:hover": {
      "& .MuiSelect-root": {
        "&::after": {
          display: "none",
          borderBottom: "none", // Remove the underline on hover
        },
      },
    },

    "&.MuiInput-underline": {
      "&:after": {
        borderBottom: "none",
      },

      "&:before": {
        borderBottom: "none",
      },

      "&:hover:not(.Mui-disabled)": {
        "&:before": {
          borderBottom: "none",
        },
      },
    },
  },
}));

const useDarkStyles = makeStyles(() => ({
  formControl: {
    display: "flex",
    alignItems: "center",
    background: "rgba(0, 0, 0, 0.7)", // Customize the background color of the input field
    borderRadius: 7,
    minWidth: 300,
    textAlign: "left",

    "& .MuiSelect-selectMenu": {
      color: "white",
      paddingLeft: 10,
      paddingTop: 10,
      paddingBottom: 10,
      paddingRight: 30,
    },

    "& .MuiSelect-icon": {
      color: "white",
    },
  },
  select: {
    marginLeft: "auto",
    width: "100%",

    "&:hover": {
      "& .MuiSelect-root": {
        "&::after": {
          display: "none",
          borderBottom: "none", // Remove the underline on hover
        },
      },
    },

    "&.MuiInput-underline": {
      "&:after": {
        borderBottom: "none",
      },

      "&:before": {
        borderBottom: "none",
      },

      "&:hover:not(.Mui-disabled)": {
        "&:before": {
          borderBottom: "none",
        },
      },
    },
  },
}));

const useUploadStyles = makeStyles(() => ({
  formControl: {
    display: "flex",
    alignItems: "center",
    background: "#F0BB51", // Customize the background color of the input field
    borderRadius: 7,
    minWidth: 150,

    "& .MuiSelect-selectMenu": {
      color: "#061B66",
      paddingLeft: 10,
      paddingTop: 10,
      paddingBottom: 10,
      paddingRight: 30,
    },

    "& .MuiSelect-icon": {
      color: "#061B66",
    },
  },
  select: {
    marginLeft: "auto",
    width: "100%",

    "&:hover": {
      "& .MuiSelect-root": {
        "&::after": {
          display: "none",
          borderBottom: "none", // Remove the underline on hover
        },
      },
    },

    "&.MuiInput-underline": {
      "&:after": {
        borderBottom: "none",
      },

      "&:before": {
        borderBottom: "none",
      },

      "&:hover:not(.Mui-disabled)": {
        "&:before": {
          borderBottom: "none",
        },
      },
    },
  },
}));

interface IESelectViewProps {
  colorTheme?: "dark" | "light" | "upload";
  data?: Array<String>;
}

const ESelectView: React.FC<IESelectViewProps> = ({
  colorTheme = "light",
  data = ["Event Ticket 1", "Event Ticket 2", "Event Ticket 3"],
}) => {
  const [selectedValue, setSelectedValue] = React.useState(0);
  const [isOpen, setIsOpen] = React.useState(false);

  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);
  };

  function handleClose() {
    setIsOpen(false);
  }

  function handleOpen() {
    setIsOpen(true);
  }

  const classes = useStyles();
  const darkClasses = useDarkStyles();
  const uploadClasses = useUploadStyles();

  function CustomIcon(props: any) {
    const { isOpen } = props;
    return (
      <svg viewBox="0 0 24 24" width="24" height="24">
        {isOpen ? <path d="M7 10l5 5 5-5z" /> : <path d="M7 14l5-5 5 5z" />}
      </svg>
    );
  }

  return (
    <div
      style={{
        display: "block",
        position: "static",
      }}
    >
      <FormControl
        className={
          colorTheme === "light"
            ? classes.formControl
            : colorTheme === "upload"
            ? uploadClasses.formControl
            : darkClasses.formControl
        }
      >
        <Select
          className={
            colorTheme === "dark"
              ? classes.select
              : colorTheme === "upload"
              ? uploadClasses.select
              : darkClasses.select
          }
          value={selectedValue}
          onChange={handleChange}
          onClose={handleClose}
          onOpen={handleOpen}
          MenuProps={{
            anchorOrigin: {
              vertical: "bottom", // Position the menu below the input
              horizontal: "left", // Align the menu with the left side of the input
            },
            getContentAnchorEl: null, // Disable automatic vertical alignment
            PaperProps: {
              style: {
                background: "rgb(5, 14, 39)",
                color: "white",
              },
            },
          }}
        >
          {data.map((item, index) => {
            return (
              <MenuItem key={index} value={index}>
                {item}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default ESelectView;
