import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import RegisterForm from "./forms/RegisterForm";
import Home from "./pages/Home";
import Requests from "./pages/admin/Requests";
import axios from "axios";
import FindDoctorWizard from "./pages/FindDoctorWizard";
import DoctorInfo from "./pages/DoctorInfo";
import Login from "./pages/Login";
import FAQs from "./pages/FAQs";
import Pricing from "./pages/Pricing";
import FindCompanyWizard from "./pages/FindCompanyWizard";
import CompanyInfo from "./pages/CompanyInfo";
import DoctorDashboard from "./pages/DoctorDashboard";
import UserProfileForm from "./forms/UserProfileForm";
import UserGalleryPreview from "./pages/UserGalleryPreview";
import { getUser } from "./api/user";
import UserContext from "./contexts/userContext";
import UserPlanChange from "./pages/UserPlanChange";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Users from "./pages/admin/Users";
import ManagePlans from "./pages/admin/ManagePlans";
import AddPlan from "./pages/admin/AddPlan";
import EditPlan from "./pages/admin/EditPlan";
import EditPageInfo from "./pages/admin/EditPageInfo";
import InfoContext from "./contexts/infoContext";
import api from "./api/api";
import AdminChangePasswordModal from "./components/modals/AdminChangePasswordModal";

function App() {
  const [user, setUser] = useState(() => {
    if (!getUser()) {
      return {};
    }

    return getUser();
  });
  const [info, setInfo] = useState({});
  const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false);

  const blah = async () => {
    navigator.geolocation.getCurrentPosition(async function (position) {
      await axios.get(
        `https://nominatim.openstreetmap.org/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`
      );
    });
  };

  const getInfo = async () => {
    const res = await api.get("/info");
    setInfo(res.data);
  };

  useEffect(() => {
    // blah();
    getInfo();
  }, []);

  return (
    <div className="bg-light min-h-screen w-full">
      <InfoContext.Provider value={{ info, setInfo }}>
        <UserContext.Provider value={{ user: user, setUser: setUser }}>
          <Header setIsChangePasswordOpen={setIsChangePasswordOpen} />
          <div className="w-full flex justify-center pt-5">
            <Routes>
              <Route path="/register" element={<RegisterForm />} />
              <Route path="/login" element={<Login />} />

              <Route path="/find-doctor" element={<FindDoctorWizard />} />
              <Route path="/doctors/:id" element={<DoctorInfo />} />
              <Route path="/find-company" element={<FindCompanyWizard />} />
              <Route path="/companies/:id" element={<CompanyInfo />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/faqs" element={<FAQs />} />
              <Route path="/user-dashboard" element={<DoctorDashboard />}>
                <Route path="profile" element={<UserProfileForm />} />
                <Route path="gallery" element={<UserGalleryPreview />} />
                <Route path="plan" element={<UserPlanChange />} />
              </Route>
              <Route path="/admin" element={<AdminDashboard />}>
                <Route path="users" element={<Users />} />
                <Route path="requests" element={<Requests />} />
                <Route path="plans" element={<ManagePlans />} />
                <Route path="plans/add" element={<AddPlan />} />
                <Route path="plans/edit/:id" element={<EditPlan />} />
                <Route path="edit-page" element={<EditPageInfo />} />
              </Route>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
          <AdminChangePasswordModal
            isOpen={isChangePasswordOpen}
            onClose={() => setIsChangePasswordOpen(false)}
          />
        </UserContext.Provider>
      </InfoContext.Provider>
    </div>
  );
}

export default App;
