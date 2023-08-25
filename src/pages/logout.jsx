import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import storage from "../auth/storage";

function Logout() {
  const navigate = useNavigate();

  const getHomePage = async () => {
    try {
      await storage.removeId();
      navigate("/");
    } catch (error) {}
  };

  useEffect(() => {
    getHomePage();
  }, []);
}

export default Logout;
