import { createContext, useContext, useState, useEffect } from "react";
import axiosInstance from "../lib/axios";
import toast from "react-hot-toast";

const AuthContext = createContext();

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  async function checkAuth() {
    try {
      const res = await axiosInstance.get("/auth/me");
      setUser(res.data);
    } catch (error) {
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }

  async function signup(username, email, password) {
    try {
      const res = await axiosInstance.post("/auth/signup", {
        username,
        email,
        password,
      });
      setUser(res.data);
      toast.success("Account created successfully!");
      return true;
    } catch (error) {
      toast.error(error.response?.data?.message || "Signup failed");
      return false;
    }
  }

  async function login(email, password) {
    try {
      const res = await axiosInstance.post("/auth/login", { email, password });
      setUser(res.data);
      toast.success("Logged in successfully!");
      return true;
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
      return false;
    }
  }

  async function logout() {
    try {
      await axiosInstance.post("/auth/logout");
      setUser(null);
      toast.success("Logged out successfully!");
    } catch (error) {
      toast.error("Logout failed");
    }
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
