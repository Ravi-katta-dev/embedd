import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import ModuleDetail from './pages/ModuleDetail';
import TopicView from './pages/TopicView';
import Certifications from './pages/Certifications';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/module/:moduleId" element={<ModuleDetail />} />
        <Route path="/module/:moduleId/topic/:topicId" element={<TopicView />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;