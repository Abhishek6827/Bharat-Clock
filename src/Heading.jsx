const Heading = () => {
  return (
    <>
      <h1 className="pulse">
        <i className="fas fa-clock"></i> Bharat Clock
      </h1>
      <div className="flag">
        <img src="/india.png" alt="India Flag" style={{ width: "60px" }} />
      </div>
    </>
  );
};

export default Heading;
