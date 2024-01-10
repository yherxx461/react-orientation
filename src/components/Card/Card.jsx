// To use state, we need hooks -- we'll be using useState(0);
// object deconstruction
import {useState} from 'react';
  // Hooks are behavior that using involve state
    // useState(0)



function Card({globalName}) {
  const [myName, setMyName] = useState('Ying'); //function call gives us back an array -- inside the paranthesis must be mused as is

  // Anything anything in this change, this will change the component

  function clickChangeName() {
    // set name to new name --> need to use setMyName function to call
    console.log('Test');
    setMyName('YING');
  }
    return (
        <div className="card">
          {/* create state to increment the count */}
        <button>count is 0</button>
        <p>{props.globalName ? props.globalName: myName}</p>
        <button onClick={clickChangeName}>Change Name</button> 
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    );
}

export default Card;