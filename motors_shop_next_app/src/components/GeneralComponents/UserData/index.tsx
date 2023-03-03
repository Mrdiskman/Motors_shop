import { HeaderContext } from "@/contexts/header/HeaderContext";
import { api } from "@/services/api";
import { useContext, useEffect, useState } from "react";
import { UserdataStyle } from "./styles";

const userData = () => {
  const { toggleDeskTop } = useContext(HeaderContext);
  const [userDataApi, setUserDataApi] = useState({
    abbreviation: "",
    id: "",
    name: "",
  });
  function getToken() {
    if (typeof window !== "undefined") {
      return window.localStorage.getItem("@TOKEN");
    }
  }
  async function takeUserData(token: any) {
    const result = await api
      .get("/user", { headers: { Authorization: `Bearer ${token}` } })
      .then((res: any) => {
        setUserDataApi(res.data);
      })
      .catch((err: any) => console.log(err));
  }
  useEffect(() => {
    const token = getToken();
    takeUserData(token);
  }, []);

  return (
    <>
      <UserdataStyle onClick={() => toggleDeskTop()}>
        <div className="containerNameAbreviation">
          <p className="nameAbreviation">{userDataApi.abbreviation}</p>
        </div>
        <p className="userName">{userDataApi.name}</p>
      </UserdataStyle>
    </>
  );
};
export default userData;
