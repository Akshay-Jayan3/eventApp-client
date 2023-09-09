import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route , Navigate} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import SpinLoader from "../components/SpinLoader";


const Login = lazy(() => import("../Pages/Auth/Login/index"));
const Error404 = lazy(() => import("../Pages/Auth/Error404/index"));
const Dashboard = lazy(() => import("../Pages/Dashboard/Dashboard.js"));
const PastEvents = lazy(() => import("../Pages/PastEvents/index"));
const UpcomingEvents = lazy(() => import("../Pages/UpcomingEvents/index"));
const UpcomingBirthdays = lazy(() =>
  import("../Pages/UpcomingBirthdays/index")
);
const Schedule = lazy(() => import("../Pages/Schedule/index"));

const PageRouter = () => {
  return (
    <>
      <Router>
          <Suspense fallback={<SpinLoader />}>
            <Routes>
              <Route path="/" element={<Navigate replace to="/dashboard" />} />
              <Route path="/login" element={<Login />} />
              <Route
                exact 
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/past_events"
                element={
                  <ProtectedRoute>
                    <PastEvents />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/upcoming_events"
                element={
                  <ProtectedRoute>
                    <UpcomingEvents />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/upcoming_birthdays"
                element={
                  <ProtectedRoute>
                    <UpcomingBirthdays />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/schedule"
                element={
                  <ProtectedRoute>
                    <Schedule />
                  </ProtectedRoute>
                }
              />

              <Route path="*" element={<Error404 />} />
            </Routes>
          </Suspense>
      </Router>
    </>
  );
};

export default PageRouter;
