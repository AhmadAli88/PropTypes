import './App.css';
import AnyType from './components/Any Type';
import Basic from './components/Basic Prop Types';
import ChildPropValidationWithElement from './components/Children Prop Validation With Element';
import ChildrenPropValidation from './components/Children Prop Validation With Node';
import CustomPropValidation from './components/Custom Prop Validation';
import EnumOneOf from './components/Enum (One of)';
import FunctionTypes from './components/Function Types';
import InstanceOfSpecificClass from './components/Instance of Specific Class';
import ObjectArrayType from './components/Object and Array Types';
import ObjectOfSpecificType from './components/ObjectOfSpecificType';
import OneOfType from './components/One Of Type';
import ShapeAndExactforObjects from './components/Shape and Exact for Objects';
import TypesWithValidationWarnings from './components/TypesWithValidationWarnings';

function App() {
  const currentDate = new Date();
  const handleClick = () => {
    alert('The div was clicked!');
  };
  const scores = {
    math: 90,
    english: 85,
    science: 88,
  };
  return (
    <div>
      <Basic age={20} title='Xeven' isAvailable={true} />
      <ObjectArrayType
        users={['Alice', 'Bob', 'Charlie']}
        settings={{ theme: 'dark', notifications: true }}
        numbers={[1, 2, 3, 4, 5]}
      />
      <ShapeAndExactforObjects
        user={{ name: 'Alice', age: 30 }}
        config={{ apiKey: '12345', url: 'https://example.com' }}
      />
      <div>
        <EnumOneOf status='active' />
        <EnumOneOf status='inactive' />
        <EnumOneOf status='pending' />
      </div>
      <div>
        <OneOfType id='123' />
        <OneOfType id={456} />
      </div>
      <div>
        <CustomPropValidation age={20} />
        <CustomPropValidation age={15} />
      </div>
      <div>
        <ChildrenPropValidation>
          <p>This is a child element</p>
        </ChildrenPropValidation>

        <ChildrenPropValidation>
          <h3>Another child element</h3>
        </ChildrenPropValidation>

        {/* You can also pass plain text, numbers, or other content */}
        <ChildrenPropValidation>Some plain text content</ChildrenPropValidation>
      </div>
      <div>
        <InstanceOfSpecificClass date={currentDate} />
      </div>
      <div>
        <FunctionTypes onClick={handleClick} />
      </div>
      <div>
        <AnyType data='A string value' />
        <AnyType data={42} />
        <AnyType data={{ key: 'value' }} />
        <AnyType data={[1, 2, 3]} />
        <AnyType data={true} />
      </div>
      <div>
        <ObjectOfSpecificType scores={scores} />
      </div>
      <div>
        {/* This will not show a warning */}
        <TypesWithValidationWarnings age={25} />

        {/* This will trigger the warning */}
        <TypesWithValidationWarnings age={-5} />
      </div>
      <div>
        <ChildPropValidationWithElement>
          <button>Click me!</button>
        </ChildPropValidationWithElement>

        {/* Uncommenting the following line will show an error because it's not a single element */}
        {/* <ChildPropValidationWithElement>Some text</ChildPropValidationWithElement> */}
      </div>
      
    </div>
  );
}

export default App;
