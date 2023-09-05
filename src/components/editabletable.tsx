import React from "react";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import PencilSvg from "../assets/svgs/pencil.svg";
import TrashSvg from "../assets/svgs/trash.svg";
import WarningSvg from "../assets/svgs/warning.svg";
import { Input } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface IEditableTableProps {
  colorTheme?: string;
}

const Editabletable: React.FC<IEditableTableProps> = ({
  colorTheme = "dark",
}) => {
  const [removalItemIndex, setRemovalItemIndex] = React.useState<string>("");
  const [open, setOpen] = React.useState<boolean>(false);
  const [editPencil, setEditPencil] = React.useState<string>('')
  const [emails, setEmails] = React.useState<string[]>(['aa1@website.com', 'aa2@website.com', 'aa3@website.com', 'aa4@website.com', 'aa5@website.com', 'aa6@website.com', 'aa7@website.com', 'aa8@website.com', 'aa9@website.com', 'aa10@website.com', 'aa11@website.com', 'aa12@website.com'])
  // const [editedEmails, setEditedEmails] = React.useState<string[]>(emails);

  const handleOpen = (itemIndex: string) => {
    setOpen(true);
    setRemovalItemIndex(itemIndex);
  };
  const handleClose = () => {
    setOpen(false);
    setEditPencil('');
  }

  return (
    <div className="component-editabletable">
      {emails.map((email, index) => {
        // const editedEmail = editedEmails[index];
        
        return (
          <div
            className="component-editabletable__item"
            key={index}
            id={`editable-item-${index}`}
            style={{
              backgroundColor: colorTheme === "dark" ? "#000000cc" : "#102F82",
            }}
          >
            <div className="component-editabletable__item__title" style={{paddingTop:50}}>
              {email}
            </div>
            <div className="component-editabletable__item__edit" onClick={() => setEditPencil(`${index}`)}>
              <img src={PencilSvg} style={{ width: 30 }} />
            </div>
            <Modal
              open={editPencil == `${index}`}
              onClose={handleClose}
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Please input your email address
                </Typography>
                <Input
                  type="email"
                  onChange={(e) => {
                    const newEmails = [...emails];
                    newEmails[index] = e.target.value;
                    setEmails(newEmails);
                  }}
                  value={email}
                  required
                />
                <Button
                  style={{
                    backgroundColor: "blue",
                    color: "white",
                    marginLeft: 300,
                    marginTop: 30,
                  }}
                  onClick={() => {
                    // handleClose();
                    setEditPencil('')
                    setEmails(emails)
                  }}
                >
                  save
                </Button>
              </Box>
            </Modal>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Confirmation Dialog
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Willing to remove this item?
                </Typography>
                <Button
                  style={{
                    backgroundColor: "grey",
                    color: "white",
                    marginLeft: 300,
                    marginTop: 30,
                  }}
                  onClick={() => {
                    if (removalItemIndex.length === 0) return;
                    const elementToRemove =
                      document.getElementById(removalItemIndex);
                    if (elementToRemove) {
                      elementToRemove.remove();
                    }
                    handleClose();
                  }}
                >
                  Yes
                </Button>
              </Box>
            </Modal>
            <div
              className="component-editabletable__item__remove"
              onClick={() => {
                handleOpen(`editable-item-${index}`);
              }}
            >
              <img src={TrashSvg} style={{ width: 30 }} />
            </div>
            <div className="component-editabletable__item__warning">
              <img src={WarningSvg} style={{ width: 30 }} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Editabletable;
