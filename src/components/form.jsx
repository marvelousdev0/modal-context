import { Box, TextField } from "@mui/material";
import { useModalContext } from "../context/modal-context";

const Form = () => {
  const { form = {}, handleFormChange } = useModalContext();

  const handleTextChange = (event) => {
    handleFormChange({ ...form, [event.target.id]: event.target.value });
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "32ch" },
      }}
      noValidate
    >
      <TextField
        id="firstName"
        label="First Name"
        value={form?.firstName}
        onChange={handleTextChange}
      />
      <TextField
        id="lastName"
        label="Last Name"
        value={form?.lastName}
        onChange={handleTextChange}
      />
    </Box>
  );
};

export default Form;
