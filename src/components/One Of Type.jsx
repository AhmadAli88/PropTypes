import PropTypes from 'prop-types';

const OneOfType = ({ id }) => {
  return (
    <div>
      <h2>One Of Type</h2>
      <p>ID: {id}</p>
    </div>
  );
};

OneOfType.propTypes = {
    //Accept multiple types for a single prop with oneOfType
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default OneOfType;
