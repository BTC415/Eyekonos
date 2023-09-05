import React from "react";
import { TreeView, TreeItem } from "@mui/lab";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PlusIcon from "../assets/svgs/plus.png";
import MinusSvg from "../assets/svgs/minus.svg";
import RoundRectangelSvg from "../assets/svgs/roundrectangle.svg";
import useWindowWidth from "../hooks/useWindowWidth";

interface IETreeViewItem {
  id: string;
  label: string;
  children: Array<IETreeViewItem>;
}

interface ICustomTreeItem {
  key: any;
  nodeId: any;
  label: any;
}

interface IETreeViewProps {
  treeData?: Array<IETreeViewItem>;
  backgroundColor?: string;
  isSideBar?: boolean;
}

const CustomTreeItem: React.FC<ICustomTreeItem> = styled(TreeItem)(
  ({ theme }) => ({
    "& .MuiTreeItem-content": {
      borderRadius: "2vmin !important",
      backgroundColor: "#102F82",
      paddingTop: "1vmin",
      paddingLeft: "1vmin",
      paddingRight: "1vmin",
      paddingBottom: "0.5vmin",
      marginBottom: "1vmin",
      textAlign: "center",
    },
    "& .MuiTreeItem-group": {
      marginRight: "-2vmin",
      paddingRight: "2vmin",
    },
    "& .MuiTreeItem-label": {
      color: "white",
      fontWeight: "bold",
      paddingLeft: "2vmin",
      paddingRight: "2vmin",
      paddingTop: "1vmin",
      paddingBottom: "1vmin",
      fontSize: "2.5vmin !important",
    },
    "& .MuiTreeItem-iconContainer": {
      color: "white",
      fontWeight: "bold",
      fontSize: "2.5vmin",
      width: "100% !important",
      position: "absolute",
      right: "3vmin",
    },
    "& .Mui-selected": {
      backgroundColor: "#0066FF !important",
    },
    "& .css-9l5vo-MuiCollapse-wrapperInner": {
      "& .hover-item": {
        marginLeft: "3vmin",
      },
    },
    "& .css-1g86id8-MuiTreeItem-content": {
      width: "initial",
    },
  })
);

const CustomTreeItemEx: React.FC<ICustomTreeItem> = styled(TreeItem)(
  ({ theme }) => ({
    "& .MuiTreeItem-content": {
      borderRadius: "2vmin !important",
      backgroundColor: "#3663CD",
      paddingTop: "1vmin",
      paddingLeft: "1vmin",
      paddingRight: "1vmin",
      paddingBottom: "0.5vmin",
      marginBottom: "1vmin",
      textAlign: "center",
    },
    "& .MuiTreeItem-group": {
      marginRight: "-2vmin",
      paddingRight: "2vmin",
    },
    "& .MuiTreeItem-label": {
      color: "white",
      fontWeight: "bold",
      paddingLeft: "2vmin",
      paddingRight: "2vmin",
      paddingTop: "1vmin",
      paddingBottom: "1vmin",
      fontSize: "2vmin !important",
    },
    "& .MuiTreeItem-iconContainer": {
      color: "white",
      fontWeight: "bold",
      fontSize: "2vmin",
      width: "100% !important",
      position: "absolute",
      right: "1vmin",
    },
    "& .Mui-selected": {
      backgroundColor: "#0066FF !important",
    },
    "& .css-9l5vo-MuiCollapse-wrapperInner": {
      "& .hover-item": {
        marginLeft: "3vmin",
      },
    },
    "& .css-1g86id8-MuiTreeItem-content": {
      width: "initial",
    },
  })
);

const ETreeView: React.FC<IETreeViewProps> = ({
  treeData = [],
  backgroundColor = "transparent",
  isSideBar = false,
}) => {
  const [windowWidth, setWindowWidth] = useWindowWidth();
  console.log(windowWidth);
  const renderTreeItems = (items: Array<IETreeViewItem>) => {
    return items.map((item, index) => (
      <div
        key={index}
        style={{ position: "relative", backgroundColor: backgroundColor }}
        className="hover-item"
      >{console.log('item.childern', item.children)}
        {isSideBar && (
          <CustomTreeItem
            key={index}
            nodeId={item.id}
            label={
              Number(windowWidth) < 832
                ? item.label.slice(0, 3) + "..."
                : item.label +
                  " (" +
                  (Array.isArray(item.children)
                    ? item.children.length.toString()
                    : "0") +
                  ")"
            }
          >
            {Array.isArray(item.children)
              ? renderTreeItems(item.children)
              : null}
          </CustomTreeItem>
        )}
        {!isSideBar && (
          <CustomTreeItemEx
            key={index}
            nodeId={item.id}
            label={
              item.label === "+"
                ? "+"
                : Number(windowWidth) < 832 || Number(windowWidth) > 2000
                ? item.label.slice(0, 3) + "..."
                : item.label +
                  " (" +
                  (Array.isArray(item.children)
                    ? item.children.length.toString()
                    : "0") +
                  ")"
            }
          >
            {Array.isArray(item.children)
              ? renderTreeItems(item.children)
              : null}
          </CustomTreeItemEx>
        )}
      </div>
    ));
  };

  return (
    <TreeView
      defaultCollapseIcon={
        <div
          style={{
            position: "absolute",
            width: "100%",
            left: 0,
          }}
        >
          <img
            src={MinusSvg}
            style={{
              position: "absolute",
              right: 0,
              top: isSideBar ? "-2vmin" : "-1.5vmin",
              width: isSideBar ? "4vmin" : "2.5vmin",
            }}
          />
        </div>
      }
      defaultExpandIcon={
        <div
          style={{
            position: "absolute",
            width: "100%",
            left: 0,
          }}
        >
          <></>
          <img
            src={PlusIcon}
            style={{
              position: "absolute",
              right: 0,
              top: isSideBar ? "-2vmin" : "-1.5vmin",
              width: isSideBar ? "4vmin" : "2.5vmin",
            }}
          />
        </div>
      }
    >
      {renderTreeItems(treeData)}
    </TreeView>
  );
};

export default ETreeView;
