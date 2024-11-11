import PropTypes from 'prop-types';

const EnumOneOf = ({ status }) => {
  return (
    <div>
      <h2>Enum (One of)</h2>
      <p>Status: {status}</p>
    </div>
  );
};

EnumOneOf.propTypes = {
    //To restrict a prop to specific values, use oneOf
  status: PropTypes.oneOf(['active', 'inactive', 'pending']),
};

export default EnumOneOf;
