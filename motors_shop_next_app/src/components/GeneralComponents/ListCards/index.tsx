import CardVehicle from "@/components/HomeComponents/CardVehicle";
import { api } from "@/services/api";
import { useEffect, useState } from "react";
import CarouselComponent from "../Carousel";
type announce = {
  id?: string;
  model?: string;
  type?: string;
  default_img?: string;
  title?: string;
  description?: string;
  announcer?: string;
  km?: number;
  year?: number;
  price?: number;
  user?: user;
};
type user = {
  name: string;
  abbreviation: string;
};

type props = {
  tipo?: string;
};

const ListCards = ({ tipo }: props) => {
  const [isAnnouncer, setIsAnnouncer] = useState<[] | announce[]>([]);
  async function announcerData() {
    const result = await api
      .get("/announcements")
      .then((res: any) => {
        setIsAnnouncer(res.data);
      })
      .catch((err: any) => console.log(err));
  }
  useEffect(() => {
    announcerData();
  }, []);
  return (
    <>
      <CarouselComponent>
        {isAnnouncer ? (
          isAnnouncer.map((announcer, index) => {
            if (announcer.type == tipo) {
              return (
                <CardVehicle
                  key={index}
                  img={announcer.default_img}
                  title={announcer.model}
                  descryption={announcer.description}
                  announcer={announcer.user?.name}
                  abbreviation={announcer.user?.abbreviation}
                  km={announcer.km}
                  year={announcer.year}
                  price={announcer.price}
                />
              );
            }
          })
        ) : (
          <></>
        )}
      </CarouselComponent>
    </>
  );
};
export default ListCards;