import {
  HeaderHomeContainer,
  HomeContainer,
  MotorsShopDiv,
} from "../../components/Home/homeHeader.style";

const Homepage = () => {
  return (
    <HomeContainer>
      <MotorsShopDiv>
        Mortors Shop
        <button>Menu</button>
      </MotorsShopDiv>
      <HeaderHomeContainer></HeaderHomeContainer>
    </HomeContainer>
  );
};

export default Homepage;
