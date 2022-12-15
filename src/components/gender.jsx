const Gender = ({ gender, onchange }) => {
  return (
    <>
      <div className="mt-3" onChange={onchange}>
        <input type="radio" value="Male" name={gender} /> Male
        <input
          className="ms-5"
          type="radio"
          value="Female"
          name={gender}
        />{" "}
        Female
      </div>
    </>
  );
};

export default Gender;
