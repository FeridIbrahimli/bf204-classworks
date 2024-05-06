import AddEmployee from "../pages/Admin/AddEmployee";
import AdminRoot from "../pages/Admin/AdminRoot";
import Dashboard from "../pages/Admin/Dashboard";
import EditEmployee from "../pages/Admin/EditEmploee";
import ClientRoot from "../pages/Client/ClientRoot";
import EmployeeDetail from "../pages/Client/EmployeeDetail";
import Employes from "../pages/Client/Employes";
import Favorites from "../pages/Client/Favorites";
import Home from "../pages/Client/Home";
import NotFound from "../pages/Client/NotFound";

export const ROUTES = [
  {
    path: "/",
    element: <ClientRoot />,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path:"employees",
        element: <Employes/>
      },
      {
        path:"favorites",
        element: <Favorites/>
      },
      {
        path: "categories/:id",
        element: <EmployeeDetail/>
      },
      {
        path: "*",
        element: <NotFound/>
      }
    ],
  },
  {
    path: '/admin',
    element: <AdminRoot/>,
    children: [
      {
          index: true,
          element: <Dashboard/>
      },
      {
          path: 'employes',
          element: <Employes/>
      },
      {
          path: 'AddEmployee',
          element: <AddEmployee/>
      },
      {
          path: 'EditEmployee',
          element: <EditEmployee/>
      }
    ]
  }
];
