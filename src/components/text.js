import "../index.css";

export const Text = ({ children, style }) => {
  return <span style={style} className="text">{children}</span>;
};
