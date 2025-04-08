// dependencies
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import TestPage from './pages/TestPage'
import HomePage from './pages/HomePage'
import ErrorPage from './pages/ErrorPage'
import Layout from './components/misc/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
