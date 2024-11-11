import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { routeList } from "./routelist";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {routeList.map(({path,Element},i)=>{
        return <Route path={path} element={<Element />} />
      })}
    </Route>
  )
);
export const AppRouter = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};
