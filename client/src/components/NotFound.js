import img from './404.gif';

const NotFound = () => {
  return (
    <div className="container">
      <h2>Oh NOOOONNNNNNNNNNNN!!!!!!</h2>
      <img src={img} alt="Page Not Found" className="img-fluid mb-5" />
    </div>
  );
};

export default NotFound;
