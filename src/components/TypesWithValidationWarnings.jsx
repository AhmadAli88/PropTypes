const TypesWithValidationWarnings = ({ age }) => {
  return (
    <div>
      <h2>Types With Validation Warnings</h2>
      <p>Age: {age}</p>
    </div>
  );
};

TypesWithValidationWarnings.propTypes = {
  age: (props, propName, componentName) => {
    if (props[propName] && props[propName] < 0) {
      console.warn(`${propName} in ${componentName} should not be negative.`);
    }
  },
};

export default TypesWithValidationWarnings;
