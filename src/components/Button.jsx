export const Button = ({ label, onClick }) => {
  return (
    <div style={buttonStyles.container} onClick={onClick}>
      <div>{label}</div>
    </div>
  );
};

const buttonStyles = {
  container: {
    border: "1px solid #627fd9",
    borderRadius: "5px",
    padding: "20px",
    backgroundColor: "#7a4ec7",
    color: "#ffffff",
  },
};
