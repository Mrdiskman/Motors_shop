import { createContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  accountCreated,
  fail,
  wellcome,
} from "../components/toatify/Toastify.style";
import api from "../services/api";

export const Contexts = createContext({});

const ContextsProvider = ({ children }) => {
  const navigate = useNavigate();

  const location = useLocation;
  const [user, setUser] = useState(null);

  async function registerUser(data) {
    await api.post("/users", data).catch(function (error) {
      fail();
    });
    navigate("/login", { replace: true });
    return accountCreated();
  }

  async function loginUser(data) {
    const response = await api.post("/login", data).catch(function (error) {
      fail();
    });
    const { accessToken, user } = response.data;

    setUser(user);
    const idUser = user.id;
    api.defaults.headers.authorization = `Bearer ${accessToken}`;

    const toNavigate = location.state?.from?.pathname || `/dashboard/${idUser}`;

    if (accessToken !== null) {
      localStorage.setItem("@nowaiting:token", accessToken);
      if (localStorage.getItem("@nowaiting:token") !== null) {
        navigate(toNavigate, { replace: true });
        wellcome();
      }
    }
  }

  return (
    <Contexts.Provider
      value={{
        registerUser,
        loginUser,
        user,
      }}
    >
      {children}
    </Contexts.Provider>
  );
};

export default ContextsProvider;
