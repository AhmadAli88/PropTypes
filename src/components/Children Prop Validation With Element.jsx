import PropTypes from 'prop-types';

const ChildPropValidationWithElement = ({ children }) => {
  return (
    <div>
      <h2>Child Prop Validation With Element</h2>
      <div>{children}</div>
    </div>
  );
};

ChildPropValidationWithElement.propTypes = {
  //children: PropTypes.element.isRequired ensures that children must be a single React element (like <button> or <div>), not just text or an array of elements
  children: PropTypes.element.isRequired, // children should be a single React element
};

export default ChildPropValidationWithElement;
