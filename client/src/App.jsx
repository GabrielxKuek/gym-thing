import TestPage from './pages/TestPage'
import ErrorPage from './pages/ErrorPage'
import { Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/test" element={<TestPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
