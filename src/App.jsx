import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import BlogDetails from "./pages/Blog/BlogDetails";
import Layout from './Layout/Layout';
import data from "./Data/posts.json";
import Privacy from './pages/Privacy/Privacy';
import Terms from './pages/Terms/Terms';
import Notfound from './pages/Notfound/Notfound';

const routes = createBrowserRouter([
  {
    path: "",
    element: <Layout data={data} />,
    children: [
  { index: true, element: <Home data={data} /> },
  { path: "privacy", element: <Privacy data={data} /> },
  { path: "*", element: <Notfound /> },
  { path: "about", element: <About data={data} /> },
  { path: "terms", element: <Terms data={data} /> },
  { path: "blog", element: <Blog data={data} /> },
  { path: "blog/:slug", element: <BlogDetails data={data} /> },
],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App