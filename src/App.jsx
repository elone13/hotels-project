import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import HomePage from "./pages/home/homepage";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Erreur from "./pages/erreur/erreur"


const App = () => {
  return (
    <Router>
      
    
      <>
      <Header />
      <main>
        <Routes>
          <Route path = "/" element={<HomePage/>}/>
          <Route path = "/about" element={<About/>}/>
          <Route path = "/contact" element={<Contact/>}/>
          <Route path="*" element={<Erreur />} />
        </Routes>
      </main>
      
      
      <Footer />

      
      </>
      </Router>
    
  );
};

export default App;
