import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';
import MainLayout from './layouts/MainLayout.tsx';
import SearchPage from './pages/SearchPage.tsx';
import SearchLayout from './layouts/SearchLayout.tsx';


export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      <Route element={<SearchLayout />}>
        <Route path="/search" element={<SearchPage />} />
      </Route>
    </Routes>
  );
}