import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";

interface ICustomSwitchProps {
  uncheckedTrackColor?: string;
  uncheckedThumbColor?: string;
  checkedTrackColor?: string;
  checkedThumbColor?: string;
  checked?: boolean;
  onChange?: any;
  name?: string;
}

const CustomSwitch = styled(Switch)<ICustomSwitchProps>(
  ({
    uncheckedThumbColor = "#000000CC",
    uncheckedTrackColor = "white",
    checkedThumbColor = "#000000CC",
    checkedTrackColor = "#70FF00",
    checked = false,
    name = "ios-switch"
  }) => ({
    "& .MuiSwitch-switchBase": {
      padding: 1,
      margin: 12,
      transitionDuration: "300ms",
      position: 'absolute !important',
      "&.Mui-checked": {
        transform: "translateX(18px)",
        color: checkedThumbColor,
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor: checkedTrackColor,
        },
        "& .MuiSwitch-thumb": {
          color: checkedThumbColor,
          opacity: 1,
        }
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "none",
      width: 14,
      height: 14,
      color: uncheckedThumbColor,
    },
    "& .MuiSwitch-track": {
      borderRadius: 22,
      opacity: 0.7,
      height: 16,
      backgroundColor: uncheckedTrackColor,
    },
  })
);

const IOSSwitch: React.FC<ICustomSwitchProps> = ({
  uncheckedThumbColor = "#000000CC",
  uncheckedTrackColor = "white",
  checkedThumbColor = "#000000CC",
  checkedTrackColor = "#70FF00",
}) => {
  const [checked, setChecked] = useState(false);

  const handleSwitchChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setChecked(event.target.checked);
  };

  return (
    <CustomSwitch
      checked={checked}
      onChange={handleSwitchChange}
      name="ios-switch"
      uncheckedThumbColor={uncheckedThumbColor}
      uncheckedTrackColor={uncheckedTrackColor}
      checkedThumbColor={checkedThumbColor}
      checkedTrackColor={checkedTrackColor}
    />
  );
};

export default IOSSwitch;
