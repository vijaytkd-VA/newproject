import './App.scss';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Header from './components/Header/Header';
import Login from './continers/Login/Login';

const routesConfig = [
  {
    path: "/",
    element: <Login/>
  },
  {
    path: "/register",
    element: <h1>Registration Page</h1>
  }
];

const routes = createBrowserRouter(routesConfig);


function App() {
  return (
    <>
      <div className="App">
        <Header />
        <RouterProvider router={routes} />
      </div>
    </>
  );
}

export default App;