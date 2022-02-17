import { Route, Router, Routes } from "react-router-dom";
import NavMenu from "./components/NavMenu/NavMenu";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import Main from "./pages/Main/Main";
import Projects from "./pages/Projects/Projects";




function App() {
  return (
    <div>
      <NavMenu />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes> 
    </div>
  );
}

export default App;
