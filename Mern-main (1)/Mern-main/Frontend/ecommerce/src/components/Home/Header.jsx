import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, ShoppingCart, ShieldCheck } from "lucide-react";
import useCartStore from "../../store/cartStore";
import useAuthStore from "../../store/authStore";
import axios from "axios";

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token"); // normal user token
  const adminToken = localStorage.getItem("adminToken"); // admin token
  const cartItems = useCartStore((state) => state.cartItems);
  const isAdmin = useAuthStore((state) => state.isAdmin);
  const logoutAdmin = useAuthStore((state) => state.logoutAdmin);
  const cartCount = cartItems.reduce((total, item) => total + (item.quantity || 0), 0);

  // Normal user logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  // Admin system logout
  const handleAdminLogout = async () => {
    try {
      // Call backend API to invalidate all admin sessions
      await axios.post(
        "/api/admin/logout-all",
        {},
        {
          headers: {
            Authorization: `Bearer ${adminToken}`,
          },
        }
      );
      // Client-side cleanup
      logoutAdmin();
      localStorage.removeItem("adminToken");
      localStorage.removeItem("token"); // Clear user token if present
      navigate("/admin/login");
    } catch (error) {
      console.error("Admin system logout failed:", error);
      // Force client-side cleanup even if API fails
      logoutAdmin();
      localStorage.removeItem("adminToken");
      localStorage.removeItem("token"); // Clear user token if present
      navigate("/admin/login");
    }
  };

  // Cart click requires normal user to be logged in
  const handleCartClick = () => {
    if (!token) navigate("/login");
    else navigate("/cart");
  };

  return (
    <header className="bg-white border-b border-gray-200 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-extrabold tracking-tight text-gray-900 hover:text-blue-600 transition duration-300"
        >
          Ghar Sansar
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6 text-sm md:text-base">
          <Link to="/" className="text-gray-700 font-medium hover:text-blue-600 transition-all duration-300">
            Home
          </Link>
          <Link to="/collections" className="text-gray-700 font-medium hover:text-blue-600 transition-all duration-300">
            Collections
          </Link>
          <Link to="/about" className="text-gray-700 font-medium hover:text-blue-600 transition-all duration-300">
            About
          </Link>
          {/* Show cart only if normal user logged in and not admin */}
          {token && !isAdmin && (
            <button
              onClick={handleCartClick}
              aria-label="Cart"
              className="relative p-2 rounded-md hover:bg-gray-100 transition"
            >
              <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-blue-600" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
          )}
          {/* Admin logout button when admin is logged in */}
          {isAdmin && adminToken ? (
            <button
              onClick={handleAdminLogout}
              className="px-4 py-2 bg-red-700 text-white text-sm rounded-lg hover:bg-red-600 shadow-sm transition-all duration-300"
              title="Admin System Logout"
            >
              Admin Logout
            </button>
          ) : (
            // Show buttons only if admin is not logged in
            <>
              {/* User logout button if user is logged in and not admin */}
              {token && (
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-800 shadow-sm transition-all duration-300"
                >
                  Logout
                </button>
              )}
              {/* Login buttons only if neither admin nor user is logged in */}
              {!isAdmin && !token && (
                <>
                  <Link
                    to="/login"
                    aria-label="User Login"
                    className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
                  >
                    <User className="w-5 h-5" />
                  </Link>
                  <Link
                    to="/admin/login"
                    aria-label="Admin Login"
                    className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:border-green-600 hover:text-green-600 transition-all duration-300"
                    title="Admin Login"
                  >
                    <ShieldCheck className="w-5 h-5" />
                  </Link>
                </>
              )}
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;