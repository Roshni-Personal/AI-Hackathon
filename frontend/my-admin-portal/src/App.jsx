import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminProductsTable from "./admin/AdminProductsTable";
import ProductAnalyticsDashboard from "./dashboard/dashboard";
import ProductsTable from "./products/productsTable";

// test
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/products" element={<AdminProductsTable />} />
        <Route
          path="/admin/product/:asin"
          element={<ProductAnalyticsDashboard />}
        />
        <Route path="/customer/products" element={<ProductsTable />} />
        <Route path="/" element={<ProductsTable />} />
        {/* tets  */}
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
