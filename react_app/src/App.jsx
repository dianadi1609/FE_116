import { Routes, Route } from "react-router-dom";
import 'reset-css';
import './assets/css/style.css';
import Layout from './components/layout/Layout';
import Home from './components/home/Home';
import Recipes from './components/recipes/Recipes';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import NotFoundPage from './components/notFoundPage/NotFoundPage';



function App() {
  return (
    <Routes> 
      <Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
