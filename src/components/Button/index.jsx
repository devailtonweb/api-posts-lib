import "./style.css";

export const ButtomLoadMorePosts = (props) => {
  const { text, onClick, disabled } = props;

  return (
    <button className="button" onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};