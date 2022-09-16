import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { invoke } from "@tauri-apps/api/tauri";

import Layout from './pages/Layout';
import Home from './pages/Home';
import NoPage from './pages/NoPage';

export default function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='*' element={<NoPage />} />
        </Route>
      </Routes>
    </Router>
  )
}