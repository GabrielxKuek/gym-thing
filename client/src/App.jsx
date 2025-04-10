// dependencies
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
  // handler
import TestPage from './pages/TestPage'
import HomePage from './pages/HomePage'
import ErrorPage from './pages/ErrorPage'
  // features
import ProgressPage from './pages/ProgressPage'

// elements
import Layout from './components/misc/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* handler routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/test" element={<TestPage />} />

          {/* feature routes */}
          <Route path="/progress" element={<ProgressPage />}></Route>

          {/* catch all 404 page */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
