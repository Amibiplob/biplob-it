import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './Components/ErrorPage';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Root from './Root';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
        },
        {
          path: 'home',
          element: <Home></Home>,
        },
        {
          path: 'login',
          element: <Login></Login>,
        },
        {
          path: 'register',
          element: <Register></Register>,
        },
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
