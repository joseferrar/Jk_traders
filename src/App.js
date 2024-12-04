// import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ArrowButton from './components/Button/ArrowButton';
import CustomerNavbar from './components/Navbar/CustomerNavbar';
import Home from './page/Customer/Home';
import Login from './page/Customer/AdminLogin';
import ProtectedRoute from './page/ProductedRoute';
import Dashboard from './page/Admin/Dashboard';
import { auth } from './config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import AdminNavbar from './components/Navbar/AdminNavbar';
import UnAuthRoute from './page/UnAuthRoute';
import AddGallery from './page/Admin/AddGallery';
import About from './page/Customer/About';
import DealerShip from './components/DealerShip';
import MyDealers from './page/Admin/MyDealers';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import MagicCursor from './components/Button/CustomCusor';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
        window.removeEventListener("resize", handleResize);
    };
}, []);

  return (
    <BrowserRouter>
    {isMobile ? null : <MagicCursor/>}
    <div>
      {user ? <AdminNavbar /> : <CustomerNavbar />}
      <Routes>
        <Route path="/" element={
          <UnAuthRoute>
            <Home />
          </UnAuthRoute>
        } />
        <Route path="/login" element={
          <UnAuthRoute>
            <Login />
          </UnAuthRoute>
        } />
        <Route path="/about" element={
          <UnAuthRoute>
            <About />
          </UnAuthRoute>
        } />
        <Route path="/dealership" element={
          <UnAuthRoute>
            <DealerShip />
          </UnAuthRoute>
        } />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/addGallery"
          element={
            <ProtectedRoute>
              <AddGallery />
            </ProtectedRoute>
          }
        />
        <Route
          path="/mydealers"
          element={
            <ProtectedRoute>
              <MyDealers />
            </ProtectedRoute>
          }
        />
      </Routes>

      {/* <!-- Back to Top --> */}
      <Footer />
      <ArrowButton />
    </div>
    </BrowserRouter>
  );
}

export default App;
