import { createContext, useContext, useState } from "react";

const initialValue = {
  form: undefined,
  handleFormChange: () => {},
};

const ModalContext = createContext(initialValue);

const ModalContextProvider = ({ children }) => {
  const [form, setForm] = useState(undefined);

  const handleFormChange = (form) => setForm(form);
  return (
    <ModalContext.Provider value={{ form, handleFormChange }}>
      {children}
    </ModalContext.Provider>
  );
};

const useModalContext = () => useContext(ModalContext);

export { ModalContextProvider, useModalContext };
