function Button({ onClickFunction, children }) {
  return (
    <button onClick={onClickFunction} className="button">
      {children}
    </button>
  );
}

export default Button;
