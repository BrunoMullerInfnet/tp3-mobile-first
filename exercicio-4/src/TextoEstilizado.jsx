const TextoEstilizado = () => {
  const StyleTexto = {
    backgroundColor: "white",
    color: "#333",
    padding: "20px",
    fontFamily: "sans-serif",
  };

  return (
    <div>
      <p style={StyleTexto}>
        Este é um texto estilizado usando inline styles em React.
      </p>
    </div>
  );
};

export default TextoEstilizado;
