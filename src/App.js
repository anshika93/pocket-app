import logo from './logo.svg';
import './App.css';
import './pocket-app/components/css/main.css'
import SignupPageHeader from './pocket-app/components/signupPage/header';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import OTP from './pocket-app/components/signupPage/OTP';
import OtpVerification from './pocket-app/components/signupPage/otpVerification';
import PersonalInfo from './pocket-app/components/onBoardingpages/personalInfo';
import UploadPicture from './pocket-app/components/onBoardingpages/uploadPicture';

function App() {
  return (


    <div>
     <Routes>
      {/* <SignupPageHeader/> */}
      <Route path="/" element={<SignupPageHeader/>}/>
      <Route path="/loginviaOtp" element={<OTP/>}/>
      <Route path="/generateOtp" element={<OtpVerification/>}/>
      <Route path="/verifyAndProceed" element={<PersonalInfo/>}/>
      <Route path="/next" element={<UploadPicture/>}></Route>
      </Routes>
    </div>
    
  );
}

export default App;
