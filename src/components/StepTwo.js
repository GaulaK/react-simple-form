const StepTwo = ({ name, email, password, handleModify }) => {
  return (
    <>
      <h1>Results</h1>
      <div className="result">
        <div className="informations">
          <span>Name : {name}</span>
          <span>Email : {email}</span>
          <span>Password : {password}</span>
        </div>
        <button className="edit-button" onClick={handleModify}>
          Edit your information
        </button>
      </div>
    </>
  );
};

export default StepTwo;
