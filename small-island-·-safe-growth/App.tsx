import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { SafetyBar } from './components/SafetyBar';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Protect } from './pages/Protect';
import { Protect10To13 } from './pages/protect/Protect10To13';
import { Protect13To15 } from './pages/protect/Protect13To15';
import { Protect15To18 } from './pages/protect/Protect15To18';
import { Uncomfortable } from './pages/Uncomfortable';
import { Help } from './pages/Help';
import { HelpHotlines } from './pages/help/HelpHotlines';
import { HelpLegal } from './pages/help/HelpLegal';
import { HelpSchool } from './pages/help/HelpSchool';
import { Supporters } from './pages/Supporters';
import { SupportParents } from './pages/supporters/SupportParents';
import { SupportTeachers } from './pages/supporters/SupportTeachers';
import { SupportFriends } from './pages/supporters/SupportFriends';
import { About } from './pages/About';
import { Privacy } from './pages/Privacy';
import { Contact } from './pages/Contact';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  
  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-island-bg text-island-text font-sans flex flex-col">
      <SafetyBar />
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/protect" element={<Protect />} />
          <Route path="/protect/10-13" element={<Protect10To13 />} />
          <Route path="/protect/13-15" element={<Protect13To15 />} />
          <Route path="/protect/15-18" element={<Protect15To18 />} />
          <Route path="/uncomfortable" element={<Uncomfortable />} />
          <Route path="/help" element={<Help />} />
          <Route path="/help/hotlines" element={<HelpHotlines />} />
          <Route path="/help/legal" element={<HelpLegal />} />
          <Route path="/help/school-work" element={<HelpSchool />} />
          <Route path="/supporters" element={<Supporters />} />
          <Route path="/supporters/parents" element={<SupportParents />} />
          <Route path="/supporters/teachers" element={<SupportTeachers />} />
          <Route path="/supporters/friends" element={<SupportFriends />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;