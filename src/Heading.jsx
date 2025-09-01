const Heading = () => {
  return (
    <>
      <h1 className="pulse">
        <i className="fas fa-clock"></i> Bharat Clock
      </h1>
      <div className="flag" style={{ width: "200px", height: "auto" }}>
        <svg viewBox="0 0 900 600">
          <rect width="900" height="200" fill="#FF9933" />
          <rect y="200" width="900" height="200" fill="#FFFFFF" />
          <rect y="400" width="900" height="200" fill="#138808" />
          <circle cx="450" cy="300" r="60" fill="#000080" />
        </svg>
      </div>
    </>
  );
};

export default Heading;
