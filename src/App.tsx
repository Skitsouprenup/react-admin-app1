import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AdminView from '@views/AdminView'
import UsersView from './views/UsersView';
import ProductsView from './views/ProductsView';
import AdminViewContent from '@comps/AdminViewContent';
import UserPage from './components/pages/UserPage';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AdminView/>,
      children: 
      [
        {
          path: "/",
          element: <AdminViewContent />
        },
        {
          path: "users",
          element: <UsersView />,
        },
        {
          path: "users/:userId",
          element: <UserPage />,
        },
        {
          path: "products",
          element: <ProductsView />,
        },
      ]
    },
  ]);

  return (
    <RouterProvider router={router}/>
  )
}

export default App
