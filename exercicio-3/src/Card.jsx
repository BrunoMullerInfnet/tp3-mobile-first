const Card = ({ children }) => {
  const CardStyle = {
    border: "1px solid white",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "300px",
  };
  return <div style={CardStyle}>{children}</div>;
};

export default Card;
