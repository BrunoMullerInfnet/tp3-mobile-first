import "./App.css";
import Button from "./button";
import Card from "./Card";

function App() {
  const handleButtonClick = () => {
    alert("Botão clicado");
  };

  return (
    <div>
      <Card>
        <h2>Título do Card</h2>
        <p>Descrição do Card</p>
        <Button label="Clique aqui" onClick={handleButtonClick}></Button>
      </Card>
    </div>
  );
}
export default App;
