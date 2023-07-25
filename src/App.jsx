import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import GeneralLayOut from './components/GeneralLayOut';
import Home from './pages/HomePage';
import Work from './pages/WorkPage';
import About from './pages/AboutMe';
import Contact from './pages/ContactPage';
import ErrorPage from './pages/ErrorPage';
import SingleProject from './pages/SingleProjectPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<GeneralLayOut />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='work' element={<Work />} />
      <Route path='work/:projectSlug' element={<SingleProject />} />
      <Route path='contact' element={<Contact />} />
      <Route path='*' element={<ErrorPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
