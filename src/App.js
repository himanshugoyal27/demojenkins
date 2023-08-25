import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import InstructorApplication from "./pages/InstructorApplication";
import Registration from "./pages/Registration";
import BecomeInstructor from "./pages/BecomeInstructor";
import AuthContext from "./auth/context";

import Register from "./pages/Register";
import CourseDetails from "./pages/CourseDetails";

// import "./App.css";
import "./global.css";

const prefixerror = "App";

function App() {
  //#region const
  const [adminToken, setAdminToken] = useState("");
  const navigate = useNavigate();
  //#endregion

  // console.log = function () {};

  useEffect(() => {}, []);

  return (
    <>
      <AuthContext.Provider value={{}}>
        {/* {!adminToken ? null : ( */}
        <Routes>
          {/* <Route path="/" element={<Welcome />} /> */}
          <Route path="/" element={<BecomeInstructor />} />
          <Route path="/registration" element={<Registration />} />
          <Route
            path="/instructorapplication"
            element={<InstructorApplication />}
          />
          <Route path="/coursedetails" element={<CourseDetails />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        {/* )} */}
      </AuthContext.Provider>
    </>
  );
}

export default App;
