const Button = ({ label, onClick }) => {
  const buttonStyle = {
    backgroundColor: "red",
    color: "white",
    padding: "10px 20px",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    fontSize: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
