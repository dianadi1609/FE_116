import { Routes, Route } from "react-router-dom";
import 'reset-css';
import Layout from './components/layout/Layout';
import Home from './components/home/Home';
import Recipes from './components/recipes/Recipes';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import NotFoundPage from './components/notFoundPage/NotFoundPage';
import BlogPost from './components/blogPost/BlogPost';
import BlogPost2 from './components/blogPost2/BlogPost2';
import BlogPost3 from './components/blogPost3/BlogPost3';
import BlogPost4 from './components/blogPost4/BlogPost4';
import BlogPost5 from './components/blogPost5/BlogPost5';
import BlogPost6 from './components/blogPost6/BlogPost6';
import BlogPost7 from './components/blogPost7/BlogPost7';
import BlogPost8 from './components/blogPost8/BlogPost8';
import BlogPost9 from './components/blogPost9/BlogPost9';
import BlogPost10 from './components/blogPost10/BlogPost10';
import BlogPost11 from './components/blogPost11/BlogPost11';
import BlogPost12 from './components/blogPost12/BlogPost12';





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
          <Route path="/blog/post1" element={<BlogPost />} />
          <Route path="/blog/post2" element={<BlogPost2 />} />
          <Route path="/blog/post3" element={<BlogPost3 />} />
          <Route path="/blog/post4" element={<BlogPost4 />} />
          <Route path="/blog/post5" element={<BlogPost5 />} />
          <Route path="/blog/post6" element={<BlogPost6 />} />
          <Route path="/blog/post7" element={<BlogPost7 />} />
          <Route path="/blog/post8" element={<BlogPost8 />} />
          <Route path="/blog/post9" element={<BlogPost9 />} />
          <Route path="/blog/post10" element={<BlogPost10 />} />
          <Route path="/blog/post11" element={<BlogPost11 />} />
          <Route path="/blog/post12" element={<BlogPost12 />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
