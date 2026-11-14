import { Route, Routes } from "react-router-dom";
import { LandingPage, NotFoundPage } from "@/features/landing";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
