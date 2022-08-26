import { Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import Form from "../components/form";
import Modal from "../components/modal";
import { useModalContext } from "../context/modal-context";

const Home = () => {
  const { form } = useModalContext();

  const [openModal, setOpenModal] = useState(false);

  const handleModalOpen = () => {
    setOpenModal((openModal) => !openModal);
  };

  const handleSubmit = () => {
    handleModalOpen();
    alert(JSON.stringify(form));
  };

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Typography variant="h1">React Modal Context</Typography>
      <Button variant="contained" onClick={handleModalOpen}>
        Open Modal
      </Button>
      <Modal
        open={openModal}
        handleClose={handleModalOpen}
        ariaDescription="form-modal"
        title="Form Dialog"
        handleSubmit={handleSubmit}
      >
        <Form />
      </Modal>
    </Stack>
  );
};

export default Home;
