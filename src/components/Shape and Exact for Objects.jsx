import PropTypes from 'prop-types';

const ShapeAndExactforObjects = ({ user, config }) => {
  return (
    <div>
      <h2>User Info</h2>
      {user ? (
        <p>
          Name: {user.name} <br />
          Age: {user.age}
        </p>
      ) : (
        <p>No user data available</p>
      )}

      <h2>Config</h2>
      {config ? (
        <p>
          API Key: {config.apiKey} <br />
          URL: {config.url || 'Not provided'}
        </p>
      ) : (
        <p>No config data available</p>
      )}
    </div>
  );
};

ShapeAndExactforObjects.propTypes = {
    //Define specific shapes for objects with shape or exact
  user: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
  }),
  config: PropTypes.exact({
    apiKey: PropTypes.string.isRequired,
    url: PropTypes.string,
  }),
};

export default ShapeAndExactforObjects;
