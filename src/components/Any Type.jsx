import PropTypes from 'prop-types';


const AnyType = ({ data }) => {
  return (
    <div>
      <h2>Any Type</h2>
      <p>Data: {JSON.stringify(data)}</p>
    </div>
  );
};

AnyType.propTypes = {
  data: PropTypes.any, // data can be any type
};

export default AnyType;
