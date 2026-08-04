import Fieldset from "../Fieldset";
import InputText from "../InputText";
import Button from "../Button";
import style from "./NewsLetter.module.css";

const NewLetter = () => {
  return (
    <section className={style.newsletter}>
      <h2 className={style.titulo}>Inscreva-se para ganhar desconto</h2>
      <form className={style.form}>
        <Fieldset>
          <InputText placeholder="Digite o seu email" />
        </Fieldset>
        <Button variant="default" type="submit">
          Inscreva-se
        </Button>
      </form>
    </section>
  );
};

export default NewLetter;
