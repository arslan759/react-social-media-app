const InputField = ({ label, type, onchange }) => {
  return (
    <>
      <div className="mt-3">
        <label className="form-label">{label}</label>
        <input type={type} className="form-control" onChange={onchange} />
      </div>
    </>
  );
};

export default InputField;
