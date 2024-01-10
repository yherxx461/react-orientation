



import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header'

import './App.css'

function App() {
  // const [count, setCount] = useState(0) Myron said to delete this line
  return (
    <>
    {/* Header component */}
      <Header/>
      
      <Card />
      <Card />

      <Footer />
    </>
  )
}

export default App
