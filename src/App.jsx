import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Team from './Pages/Team';
import Volunteering from './Pages/Volunteering';
import Donate from './Pages/Donate';
import Hackathon from './Pages/Hackathon';
import Join from './Pages/Join';
import Contact from './Pages/Contact';
import Beginner from './Pages/learn/Beginner'; // Updated import path
import Intermediate from './Pages/learn/Intermediate';
import Advanced from './Pages/learn/Advanced'; // Updated import path
import HTMLCSSBasics from './Pages/learn/HTMLCSSBasics';
import JavaScriptBasics from './Pages/learn/JavaScriptBasics';
import WebDevPrimer from './Pages/learn/WebDevPrimer';
import ApCsp from './Pages/learn/ApCsp';
import ApCsa from './Pages/learn/ApCsa';
import Dsa from './Pages/learn/Dsa';
import MobileDev from './Pages/learn/MobileDev';
import Start from './Pages/learn/Start';
import Forum from './Pages/Forum';
import Privacy from './Pages/Privacy';
import Terms from './Pages/Terms';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/volunteering" element={<Volunteering />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/hackathon" element={<Hackathon />} />
          <Route path="/join" element={<Join />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/learn/beginner" element={<Beginner />} />
          <Route path="/learn/intermediate" element={<Intermediate />} />
          <Route path="/learn/advanced" element={<Advanced />} />
          <Route path="/learn/html-css-basics" element={<HTMLCSSBasics />} />
          <Route path="/learn/javascript-basics" element={<JavaScriptBasics />} />
          <Route path="/learn/web-dev-primer" element={<WebDevPrimer />} />
          <Route path="/learn/ap-csp" element={<ApCsp />} />
          <Route path="/learn/ap-csa" element={<ApCsa />} />
          <Route path="/learn/dsa" element={<Dsa />} />
          <Route path="/learn/mobile-dev" element={<MobileDev />} />
          <Route path="/learn/start" element={<Start />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />


        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;