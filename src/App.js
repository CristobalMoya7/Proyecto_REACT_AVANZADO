import { Route, Routes, Outlet, Navigate } from "react-router-dom";
import "./App.css";
import AdvertsPage from "./pages/adverts/advertsPage";
import { LoginPage } from "./pages/auth/LoginPage";
import RequireAuth from "./pages/auth/RequireAuth";
import AdvertPage from "./pages/AdvertPage";
import NewAdvertPage from "./pages/NewAdvertPage";
import PageNotFound from "./pages/adverts/PageNotFound";

function App() {
  return (
    <Routes>
      <Route path="/auth/login" element={<LoginPage />} />
      <Route
        path="v1/adverts"
        element={
          <div className="container">
            <RequireAuth>
              <Outlet />
            </RequireAuth>
          </div>
        }
      >
        <Route index element={<AdvertsPage />} />
        <Route path="new" element={<NewAdvertPage />} />
        <Route path=":advertId" element={<AdvertPage />} />
      </Route>
      <Route path="/" element={<Navigate to="v1/adverts" />} />
      <Route path="/404" element={<PageNotFound />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
}

export default App;
