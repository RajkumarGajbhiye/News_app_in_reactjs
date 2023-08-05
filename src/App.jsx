
import './App.css'
import NavbarComp from './components/NavbarComp'
import {
  BrowserRouter,
  Routes,Route
} from "react-router-dom";
import Home from './pages/Home';
import FetchData from './components/FetchData';
import Footer from './components/Footer';
function App() {
 

  return (
    <>
    <BrowserRouter>
    <NavbarComp/>
      <Routes>
      <Route exact path = "/" element={<Home/>}/>
      <Route  path = "/general" element={<FetchData cat ="general"/>}/>
      <Route  path = "/entertainment" element={<FetchData cat ="entertainment"/>}/>
      <Route  path = "/health" element={<FetchData cat ="health"/>}/>
      <Route  path = "/science" element={<FetchData cat ="science"/>}/>
      <Route  path = "/sports" element={<FetchData cat ="sports"/>}/>
      <Route  path = "/technology" element={<FetchData cat ="technology"/>}/>
      <Route  path = "/business" element={<FetchData cat ="business"/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>

    </>
  )
}

export default App
