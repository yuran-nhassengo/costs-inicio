import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Home from './componentes/pages/Home';
import Company from './componentes/pages/Company';
import Contacto from './componentes/pages/Contacto';
import NewProject from './componentes/pages/NewProject';
import NavBar from './componentes/pages/NavBar';


function App() {

  return (
    <Router>

        <NavBar/>

          <Routes>

              <Route path="/"  element={<Home/>} />

              <Route path ="/company" element ={<Company />} />

              <Route path="/contacto" element={<Contacto/>}/>

              <Route path="/newproject" element={<NewProject />}/>

          </Routes>

    </Router>

  )
}

export default App
