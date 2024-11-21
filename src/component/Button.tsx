type ButtonProps = {
  label: string;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 20px",
        margin: "10px 0",
        backgroundColor: "#007bff",
        color: "#fff",
        cursor: "pointer",
      }}
    >
      {label}
    </button>
  );
};

export default Button;
