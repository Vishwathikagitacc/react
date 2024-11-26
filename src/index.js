import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from './pages/Layout'; 
import Home from './pages/Home'; 
import About from './pages/About'; 
import Contact from './pages/Contact'; 
import Login from './pages/Login'; 
import NoPage from './pages/NoPage'; 

export default function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="About" element={<About/>} />
          <Route path="Contact" element={<Contact/>} />
          <Route path="Login" element={<Login/>} />
          <Route path="*" element={<NoPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
      
      
  )
}

const r1 = ReactDOM.createRoot(document.getElementById('root'));
r1.render(<App />); //root is the id of the div in index.html
