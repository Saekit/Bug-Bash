import "../index.css";
import { CrossOut } from "../assets/svg";

export const Modal = ({ close, image }) => {
  return (
    <div className="modal">
      <div className="modal-box">
        <CrossOut
          onClick={close}
          style={{
            height: 20,
            color: "#6c6f72",
            padding: 10,
            position: "absolute",
            right: 0,
            cursor: "pointer",
          }}
        />
        <div className="modal-info">
          Get started today!
          <img src={image} alt="pic" />
        </div>
      </div>
    </div>
  );
};
