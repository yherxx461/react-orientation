// To use state, we need hooks -- we'll be using useState(0);
// object deconstruction
import {useState} from 'react';
  // Hooks are behavior that using involve state
    // useState(0)

function Card({globalName}) {
  const [myName, setMyName] = useState('Ying'); //function call gives us back an array -- inside the paranthesis must be used as is

  // Anything anything in this change, this will change the component

  function clickChangeName() {
    // set name to new name --> need to use setMyName function to call
    console.log('Test');
    setMyName('YING');
  }
  const [count, setCount] = useState(0);
  
  function countUp() {
    console.log('adding');
    setCount(count + 1);
  };
    return (
        <div className="card">
          {/* create state to increment the count */}
        <button onClick={countUp}>count is {count}</button> 
        {/* For some reason, I found it so hard to increment the button. NOTE: make sure the starting number is also {count} */}
        <p>{globalName ? globalName: myName}</p>
        <button onClick={clickChangeName}>Change Name</button> 
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    );
}

export default Card;