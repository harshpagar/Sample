import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserDetails } from './Components/UserDetails';
import { SignUp } from './Components/SignUP';
import { Login } from './Components/Login';
import { Home } from './Components/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />    
          <Route path="/userdetails" element={<UserDetails />} />    

        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
