const Button = ({ text, onclick }) => {
  return (
    <>
      <button className="btn btn-primary mt-3 w-100" onClick={onclick}>
        {text}
      </button>
    </>
  );
};

export default Button;
