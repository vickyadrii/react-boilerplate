import { Route, Routes } from "react-router";
import { HomePage, LoginPage, NotFoundPage } from "@/pages";
import { AppLayout, AuthLayout } from "@/layouts";

import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Protected Route */}
      <Route element={<ProtectedRoute />}>
        <Route element={<AppLayout />}>
          <Route index element={<HomePage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Route>

      {/* Auth Layout */}
      <Route element={<AuthLayout />}>
        <Route path="login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
