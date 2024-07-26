
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
 
import Home from './assets/components/Routes/Home'
import About from './assets/components/Routes/About'
import Projects from './assets/components/Routes/Projects'
import Skills from './assets/components/Routes/Skills'
import Contact from './assets/components/Routes/Contact'
import NavBar from './assets/components/Routes/NavBar'
// import Education from './assets/components/Routes/Education'


function App() {
  return(
    <Router>
      <NavBar links={['Home',"About","Skills" ,"Projects","Contact"]}/>
  <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/skills' element={<Skills/>}/>
  {/* <Route path="/education" element={<Education/>}/> */}
  <Route path='/projects' element={<Projects/>}/>
  <Route path='/contact' element={<Contact/>}/>
    </Routes>
  </Router>
  )
  
  
}

export default App
