import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Form } from "./Pages/Form/Form.jsx";
import Users from "./Pages/Form/Users/Users.jsx";
import { User } from "./Pages/Form/User/User.jsx";
import { ErrorPage } from "./Pages/ErrorPage/ErrorPage.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import store from "./store/store.js";
import { Provider } from "react-redux";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.jsx";

const Root = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Form />} />
      <Route
        path="/users"
        element={
          <ProtectedRoute>
            <Users />
          </ProtectedRoute>
        }
      />
      <Route
        path="/users/:userId"
        element={
          <ProtectedRoute>
            <User />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
