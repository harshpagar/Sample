import './App.css';
import { Home } from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from './components/Login'
import { SignUp } from './components/SignUP'
import { UserDetails } from './components/UserDetails';


function App() {
  return (

  <div className ="App">
  
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={< Login/>} />
              <Route path="/signUp" element={< SignUp/>} />
              <Route path="/user" element={< UserDetails />} /> 
          </Routes>
        </BrowserRouter>

  </div>

   
  );
}

export default App;
