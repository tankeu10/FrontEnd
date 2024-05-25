import React, { useState} from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import ContactUs from './pages/ContactUs';
import SmsAuth from './pages/SmsAuth';


function App() {
  const [isVerified, setIsVerified] = useState(false); 
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/Signup' exacrt Component={Signup} />
          <Route path='/' exacrt Component={Home}/>
          <Route path='/signin' exacrt Component= {Signin}> </Route>
          <Route path='/ContactUs' exacrt Component={ContactUs}></Route>
          <Route path="/sms-auth" component={() => <SmsAuth onVerify={() => setIsVerified(true)} />} />
        </Routes>
        
      </Router>
      {isVerified && <p>2FA Verified! You have access to protected routes.</p>}
    
      
    </div>
  );
}

export default App;
