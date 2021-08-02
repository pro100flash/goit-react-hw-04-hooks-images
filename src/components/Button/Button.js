import PropTypes from "prop-types";
import S from "./Button.module.css";

const Button = ({ onClick }) => (
  <button type="button" className={S.Button} onClick={onClick}>
    Load more
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
