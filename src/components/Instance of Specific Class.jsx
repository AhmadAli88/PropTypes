import PropTypes from 'prop-types';

const InstanceOfSpecificClass = ({ date }) => {
  return (
    <div>
      <h1>Instance of Specific Class</h1>
      <p>Date: {date.toString()}</p>
    </div>
  );
};

InstanceOfSpecificClass.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,  // Ensures 'date' is an instance of Date
};

export default InstanceOfSpecificClass;
