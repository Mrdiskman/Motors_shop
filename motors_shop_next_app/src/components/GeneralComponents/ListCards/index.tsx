import CardVehicle from "@/components/HomeComponents/CardVehicle";
import { AnnounceContext } from "@/contexts/announce/announceContext";
import { api } from "services/api";
import { useContext, useEffect, useState } from "react";
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

type IProps = {
  type?: string;
};

const ListCards = ({ type }: IProps) => {
  const { setAnnounceId } = useContext(AnnounceContext);
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
            if (announcer.type == type) {
              return (
                <CardVehicle
                  key={index}
                  img={announcer.default_img}
                  title={announcer.model}
                  description={announcer.description}
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
