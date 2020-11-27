import React from "react";
import Modal from "@material-ui/core/Modal";
import Paper from "@material-ui/core/Paper";

const ImageSection = ({ label, source }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <label>{label}</label>
      <img
        className="zoomable preview"
        src={source}
        alt={label}
        onClick={handleOpen}
      />
      <Modal open={open} onClose={handleClose}>
        
          <Paper className="panel modal" elevation={3}>
            <img src={source} alt={label} />
          </Paper>
        
      </Modal>
    </>
  );
};

export default ImageSection;
