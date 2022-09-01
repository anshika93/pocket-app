import logo from './logo.svg';
import './App.css';
import './pocket-app/components/css/main.css'
import SignupPageHeader from './pocket-app/components/signupPage/header';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import OTP from './pocket-app/components/signupPage/OTP';
import OtpVerification from './pocket-app/components/signupPage/otpVerification';
function App() {
  return (


    <div>
     <Routes>
      {/* <SignupPageHeader/> */}
      <Route path="/" element={<SignupPageHeader/>}/>
      <Route path="/loginviaOtp" element={<OTP/>}/>
      <Route path="/generateOtp" element={<OtpVerification/>}/>
      </Routes>
    </div>
    
  );
}

export default App;
