import { HeaderContext } from "@/contexts/header/HeaderContext";
import { api } from "services/api";
import { useContext, useEffect, useState } from "react";
import { UserdataStyle } from "./styles";

const UserData = () => {
  const { toggleDeskTop } = useContext(HeaderContext);
  const [userDataApi, setUserDataApi] = useState({
    abbreviation: "",
    id: "",
    name: "",
  });

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@TOKEN") || "");
    if (token) {
      api
        .get("/user", { headers: { Authorization: `Bearer ${token}` } })
        .then((res) => setUserDataApi(res.data))
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <UserdataStyle onClick={toggleDeskTop}>
      <div className="containerNameAbreviation">
        <p className="nameAbreviation">{userDataApi.abbreviation}</p>
      </div>
      <p className="userName">{userDataApi.name}</p>
    </UserdataStyle>
  );
};

export default UserData;
