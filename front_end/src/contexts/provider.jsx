import { createContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../services/api";

export const Contexts = createContext({});

const ContextsProvider = ({ children }) => {
  const navigate = useNavigate();

  const location = useLocation;
  const [user, setUser] = useState(null);

  async function registerUser(data) {
    await api.post("/users", data).catch((err) => console.log(err));
    navigate("/login", { replace: true });
  }

  async function loginUser(data) {
    const response = await api
      .post("/login", data)
      .catch((err) => console.log(err));
    const { accessToken, user } = response.data;

    setUser(user);
    const idUser = user.id;
    api.defaults.headers.authorization = `Bearer ${accessToken}`;

    const toNavigate = location.state?.from?.pathname || `/dashboard/${idUser}`;

    if (accessToken !== null) {
      localStorage.setItem("@motors_shop:token", accessToken);
      if (localStorage.getItem("@motors_shop:token") !== null) {
        navigate(toNavigate, { replace: true });
      }
    }
  }
  function logOut() {
    setUser(false);
    localStorage.clear();
    navigate("/home");
  }

  return (
    <Contexts.Provider
      value={{
        registerUser,
        loginUser,
        logOut,
        user,
      }}
    >
      {children}
    </Contexts.Provider>
  );
};

export default ContextsProvider;
