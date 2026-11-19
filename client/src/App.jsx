import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// पेजों को Lazy Load करें ताकि शुरुआती स्पीड सुपरफास्ट रहे
const Home = lazy(() => import('./pages/public/Home'));
const Pricing = lazy(() => import('./pages/public/Pricing'));
const Blog = lazy(() => import('./pages/public/Blog'));
const Dashboard = lazy(() => import('./pages/public/Dashboard'));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Nextnix...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
