import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import RegisterForm from "./forms/RegisterForm";
import Home from "./pages/Home";
import Requests from "./pages/Requests";
import axios from "axios";
import FindDoctorWizard from "./pages/FindDoctorWizard";
import DoctorInfo from "./pages/DoctorInfo";
import Login from "./pages/Login";
import FAQs from "./pages/FAQs";

function App() {
  const blah = async () => {
    navigator.geolocation.getCurrentPosition(async function (position) {
      const res = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`
      );
      console.log("====================================");
      console.log(res);
      console.log("====================================");
    });
  };
  useEffect(() => {
    // blah();
  }, []);

  return (
    <div className="bg-light min-h-screen w-full">
      <Header />
      <div className="w-full flex justify-center py-5">
        <Routes>
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/requests" element={<Requests />} />
          <Route path="/find-doctor" element={<FindDoctorWizard />} />
          <Route path="/doctors/:id" element={<DoctorInfo />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
