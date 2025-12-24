import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
<<<<<<< HEAD
import Contact from './pages/contact';
import Admin from './pages/Admin';
import DietPlans from './pages/DietPlans';
import Plans from './pages/Plans';
import Tools from './pages/Tools';
import FAQ from './pages/FAQ';
import Blog from './pages/Blog';
import NotFoundPage from './pages/404';
=======
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import DietPlans from './pages/DietPlans';
>>>>>>> 8bff2cf9889b423589be9e2273d5ab564ac73cec

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
<<<<<<< HEAD
          <Route path="/tools" element={<Tools />} />
          <Route path="/diet-plans" element={<DietPlans />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFoundPage />} />
=======
          <Route path="/diet-plans" element={<DietPlans />} />
          <Route path="/admin" element={<Admin />} />
>>>>>>> 8bff2cf9889b423589be9e2273d5ab564ac73cec
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;