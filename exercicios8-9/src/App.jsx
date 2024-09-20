import Card from "./Card";
import Button from "./Button";
import "./styles.css";

function App() {
  return (
    <div className="paiDeTodos">
      <Card
        image="src/assets/culinaria2.webp"
        title="Foto de pizza"
        description="Descrição 1"
      />
      <Card
        image="src/assets/culinaria1.webp"
        title="Foto de homem cozinhando"
        description="Descrição 2"
      />
      <Button text="Botão" />
    </div>
  );
}

export default App;
