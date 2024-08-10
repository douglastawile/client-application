const LoadingSpinner = () => {
  return (
    <div className="d-flex flex-column justify-content-center mt-4 mx-auto">
      <div className="spinner-border mt-4" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <h3 className="fw-bold fs-4">Please wait...</h3>
    </div>
  );
};

export default LoadingSpinner;
