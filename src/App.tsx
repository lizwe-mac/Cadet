import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from './pages/login/login';
import { ReviewTeamPage } from './pages/review-team/review-team';

function App() {
  return (
    <Routes>
      <Route path="account/login" element={<LoginPage />} />
      <Route path="analysis/review-team" element={<ReviewTeamPage />} />

      <Route path="/*" element={<Navigate to={'/account/login'} />} />
    </Routes>
  );
}

export default App;

