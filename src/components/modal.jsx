import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { SlideUp } from "./transition";

const Modal = ({
  open,
  handleClose,
  ariaDescription,
  title,
  children,
  handleSubmit,
}) => {
  return (
    <Dialog
      open={open}
      TransitionComponent={SlideUp}
      keepMounted
      onClose={handleClose}
      aria-describedby={ariaDescription}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
