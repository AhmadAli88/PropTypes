import PropTypes from 'prop-types';

const ObjectOfSpecificType = ({ scores }) => {
  return (
    <div>
      <h2>Object of Specific Type</h2>
      {scores && Object.keys(scores).length > 0 ? (
        <ul>
          {Object.entries(scores).map(([key, value]) => (
            <li key={key}>
              {key}: {value}
            </li>
          ))}
        </ul>
      ) : (
        <p>No scores available</p>
      )}
    </div>
  );
};

ObjectOfSpecificType.propTypes = {
  scores: PropTypes.objectOf(PropTypes.number), // scores is an object where each value must be a number
};

export default ObjectOfSpecificType;
