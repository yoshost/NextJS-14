const Card = ({ children }: { children: React.ReactNode }) => {
  const cardStyle = {
    padding: "1 rem",
    backgroundColor: "green",
  };

  return <div style={cardStyle}>{children}</div>;
};

export default Card;
