
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomeScreen from './Screens/HomeScreen'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ProductScreen from './Screens/ProductScreen'

function App() {
 
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<HomeScreen/>}/>
        <Route exact path='/product/:id' element={<ProductScreen/>}/>
      </Routes>
      <Footer/>
   </BrowserRouter>
    </>
  )
}

export default App
