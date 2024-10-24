import React, { useEffect, useMemo, useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
import { getProducts } from "../apiFunctions/analytics";
import "./ProductsTable.css";

const ITEMS_PER_PAGE = 12;

const ProductsTable = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const filteredProducts = useMemo(() => {
    if (activeTab === "all") return data;
    return data.filter((product) => product.rating === parseInt(activeTab));
  }, [data, activeTab]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  useEffect(() => {
    const fetchProductsData = async () => {
      setLoading(true);
      try {
        const data = await getProducts();
        setData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProductsData();
  }, []);

  return (
    <div className="product-container">
      <div className="product-tabs">
        <button
          className={activeTab === "all" ? "active" : ""}
          onClick={() => handleTabChange("all")}
        >
          All Products
        </button>
        {[5, 4, 3, 2, 1].map((rating) => (
          <button
            key={rating}
            className={activeTab === rating.toString() ? "active" : ""}
            onClick={() => handleTabChange(rating.toString())}
          >
            {rating} Star
          </button>
        ))}
      </div>

      <div className="product-list">
        {paginatedProducts.map((product, index) => (
          <div key={index} className="product-card">
            <div className="product-card-content">
              <div className="product-card-header">
                <img
                  src={product.image}
                  alt="Product"
                  className="product-image"
                />
                <div className="product-meta">
                  <h3 className="product-name">{product.name}</h3>
                  <div className="product-info">
                    <span className="product-date">
                      {new Date(product.date * 86400000).toLocaleDateString()}
                    </span>
                    <div className="rating-stars">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={
                            i < product.rating ? "star filled" : "star"
                          }
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <p className="product-review">
                {product.review?.slice(0, 100) + "..."}
              </p>
            </div>
            <div className="product-footer">
              <span className="asin">ASIN: {product.asin}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          {currentPage} of {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductsTable;
