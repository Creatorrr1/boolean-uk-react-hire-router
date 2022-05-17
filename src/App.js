import { useState } from "react";
import "./styles.css";

import { Route, Routes, useNavigate } from "react-router";
import { Link } from "react-router-dom";

import Dashboard from "./pages/Dashboard/index";
import PersonProfile from "./pages/PersonProfile";

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([]);

  const navigate = useNavigate();

  function successfulApplicant(applicant) {
    setHiredPeople([...hiredPeople, applicant]);
    navigate("/");
  }

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            {/* <li>Dashboard</li> */}
            <Link to="/">Dashboard</Link>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Dashboard hiredPeople={hiredPeople} />} />
        <Route
          path="/view/:id"
          element={<PersonProfile successfulApplicant={successfulApplicant} />}
        />
      </Routes>
    </>
  );
}

// {person.id.value = null ? "/:email" : "/view/:id"  }
