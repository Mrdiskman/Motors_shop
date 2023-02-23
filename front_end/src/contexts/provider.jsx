import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export const Contexts = createContext({});

const ContextsProvider = ({ children }) => {
  const navigate = useNavigate();

  async function registerUser(data) {
    await api.post("/users", data).catch((err) => console.log(err));
    navigate("/login", { replace: true });
  }

  return (
    <Contexts.Provider
      value={{
        registerUser,
      }}
    >
      {children}
    </Contexts.Provider>
  );
};

export default ContextsProvider;
