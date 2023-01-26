import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Home from './componentes/pages/Home';
import Company from './componentes/pages/Company';
import Contacto from './componentes/pages/Contacto';
import NewProject from './componentes/pages/NewProject';
import NavBar from './componentes/layout/NavBar';
import Container from './componentes/layout/Container';
import Footer from  './componentes/layout/Footer'
import Project from './componentes/pages/Project';


function App() {

  return (
    <Router>

        <NavBar/>

        <Container customClass="min-height" >

              <Routes>
                  

                      <Route path="/"  element={<Home/>} />

                      <Route path ="/project" element ={<Project/>} />

                      <Route path ="/company" element ={<Company />} />

                      <Route path="/contacto" element={<Contacto/>}/>

                      <Route path="/newproject" element={<NewProject />}/>

                    
              </Routes>

             
          </Container>
          
          <Footer/>

    </Router>

  )
}

export default App
