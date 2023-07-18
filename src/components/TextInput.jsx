export const TextInput = ({
  onTextChange,
  placeholder,
  type,
  value,
  inputStyle,
}) => {
  return (
    <div style={{ display: "flex", flex: 1 }}>
      <input
        type={type}
        placeholder={placeholder}
        style={{ ...styles.input, inputStyle }}
        onChange={(e) => onTextChange(e.target.value)}
        value={value}
      />
    </div>
  );
};

const styles = {
  input: {
    marginBottom: "10px",
    padding: "10px",
    fontSize: "16px",
    borderRadius: 5,
    width: "100%",
  },
};
