import PropTypes from 'prop-types';

function ObjectArrayType({ users, settings, numbers }) {
  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users?.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>

      <h2>Settings</h2>
      <ul>
        {settings &&
          Object.entries(settings).map(([key, value]) => (
            <li key={key}>
              {key}: {value.toString()}
            </li>
          ))}
      </ul>

      <h2>Numbers</h2>
      <ul>
        {numbers?.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
}

ObjectArrayType.propTypes = {
  //You can specify arrays or objects and their internal structures.
  users: PropTypes.arrayOf(PropTypes.string),
  settings: PropTypes.object,

  //For arrays of specific types, use .arrayOf
  numbers: PropTypes.arrayOf(PropTypes.number),
};

export default ObjectArrayType;
