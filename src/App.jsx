import { useState } from 'react';



import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import './App.css';

function App() {
  const [globalName, setGlobalName] = useState();

  const clickGlobalNameChange = () => {
    setGlobalName('GLOBAL!!!');
  }


  return (
    <>
    {/* Header component */}
      <Header/>

      <button onClick={clickGlobalNameChange}>CHANGE ALL NAMES</button>
      
      <Card globalName={globalName} /> 
      <Card globalName={globalName} /> 
 
      <Footer />
    </>
  )
};

export default App
