import React from "react";

export const Card = ({ image, title, description, price, onClick }) => {
  return (
    <div style={styles.cardStyle} onClick={onClick}>
      <img
        src={image}
        alt={title}
        style={{ width: "100%", marginBottom: "10px", borderRadius: "10px" }}
      />
      <div style={styles.titleStyle}>{title}</div>
      <div style={styles.descriptionStyle}>{description}</div>
      <div style={styles.priceStyle}>${price}</div>
    </div>
  );
};

const styles = {
  cardStyle: {
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    width: 250,
    cursor: "pointer",
  },
  titleStyle: {
    color: "#6315eb",
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "5px",
  },
  descriptionStyle: {
    color: "#333",
    fontSize: "16px",
    marginBottom: "5px",
  },
  priceStyle: {
    color: "#6315eb",
    fontSize: "18px",
    fontWeight: "bold",
  },
};

export default Card;
