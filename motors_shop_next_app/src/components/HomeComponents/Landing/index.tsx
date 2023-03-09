import Button from "@/components/GeneralComponents/Button";
import { Section } from "./style";

interface ILanding {
  id?: string;
}

const Landing = ({ id }: ILanding): JSX.Element => {
  return (
    <Section id={id}>
      <div className="box description">
        <span className="main description">
          Velocidade e experiência em um lugar feito para você
        </span>
        <span className="sub description">
          Um ambiente feito para você explorar o seu melhor
        </span>
        <div className="box select">
          <Button className="select">Carros</Button>
          <Button className="select">Motos</Button>
        </div>
      </div>
    </Section>
  );
};

export default Landing;
