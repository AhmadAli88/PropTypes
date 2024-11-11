import PropTypes from 'prop-types';

const FunctionTypes = ({ onClick }) => {
  return (
    <div onClick={onClick}>
      <h2>Function Types</h2>
      <p>Click this area to trigger the onClick function.</p>
    </div>
  );
};

FunctionTypes.propTypes = {
  onClick: PropTypes.func, // onClick must be a function
};

export default FunctionTypes;
