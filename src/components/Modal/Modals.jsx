import React from "react";
import { Button, Modal } from "react-bootstrap";
const Modals = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Modal
        style={{
          marginTop: "50px",
        }}
        open={open}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            style={{
              display: "block",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <h3>Are you sure?</h3>
            <h5
              style={{
                color: "gray",
              }}
            >
              Do you really want to delete these records? This process cannot be
              undone.
            </h5>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div
            style={{
              display: "block",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>

            <Button variant="danger">Delete</Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Modals;
