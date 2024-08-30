import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Form from './components/Form';
import AfterSubmitSuccess from './components/AfterSubmitSuccess';
import AfterSubmitFailure from './components/AfterSubmitFailure';
import Home from './components/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/form',
    element: <Form />,
  },
  {
    path: '/submit/success',
    element: <AfterSubmitSuccess />,
  },
  {
    path: '/submit/failure',
    element: <AfterSubmitFailure />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
