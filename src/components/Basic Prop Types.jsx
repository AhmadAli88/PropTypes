import PropTypes from 'prop-types';

function Basic({ title, age, isAvailable }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>Age: {age}</p>
      <p>{isAvailable ? 'Available' : 'Not Available'}</p>
    </div>
  );
}

Basic.propTypes = {
  title: PropTypes.string.isRequired,
  age: PropTypes.number,
  isAvailable: PropTypes.bool,
};

export default Basic;