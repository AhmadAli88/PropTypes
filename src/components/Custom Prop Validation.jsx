const CustomPropValidation = ({ age }) => {
  return (
    <div>
      <h2>Custom Prop Validation</h2>
      <p>Age: {age}</p>
    </div>
  );
};

CustomPropValidation.propTypes = {
  //Create custom validation functions for unique use cases
  age: function (props, propName, componentName) {
    if (props[propName] < 18) {
      return new Error(
        `${propName} in ${componentName} should be at least 18.`
      );
    }
  },
};

export default CustomPropValidation;
