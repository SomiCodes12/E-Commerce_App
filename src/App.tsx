import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  ActivationPage,
  HomePage,
  LoginPage,
  SignupPage,
} from "./Pages/Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import store from "./redux/store";
import { loadUser } from "./redux/actions/user";

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route path="/verify/:activation_token" element={<ActivationPage />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
