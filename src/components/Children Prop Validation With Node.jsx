import PropTypes from 'prop-types';

const ChildrenPropValidation = ({ children }) => {
  return (
    <div>
      <h2>Children Prop Validation</h2>
      {children}
    </div>
  );
};

ChildrenPropValidation.propTypes = {
  children: PropTypes.node,  // This allows any renderable content, including React elements
};

export default ChildrenPropValidation;
