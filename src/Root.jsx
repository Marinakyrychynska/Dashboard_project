import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import App from "./App";
import { Dashboard } from "./pages/DashboardPage/Dashboard";
import { Product } from "./pages/ProductPage/Product";
import { Customers } from "./pages/CustomersPage/Customers";
import { Income } from "./pages/IncomePage/Income";
import { Promote } from "./pages/PromotePage/Promote";
import { Help } from "./pages/HelpPage/Help";

export const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/product" element={<Product />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/income" element={<Income />} />
          <Route path="/promote" element={<Promote />} />
          <Route path="/help" element={<Help />} />
        </Route>
      </Routes>
    </Router>
  )
};
