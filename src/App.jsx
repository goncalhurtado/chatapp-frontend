// App.jsx
import { useContext, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Messages from "./pages/Messages";
import UserContext from "./contexts/UserContext";
import { SocketProvider } from "./contexts/SocketContext.jsx";

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <SocketProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/messages" element={<Messages />} />
        </Routes>
      </SocketProvider>
    </UserContext.Provider>
  );
}

export default App;
