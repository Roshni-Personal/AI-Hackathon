import React, { useState, useEffect } from "react";
import { Table, Input, Button, Space, Tag, Image } from "antd";
import { SearchOutlined, EyeOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../apiFunctions/analytics";
import "./AdminProductsTable.css";

const AdminProductsTable = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProductsData = async () => {
      setLoading(true);
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProductsData();
  }, []);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    render: (text) =>
      searchedColumn === dataIndex ? (
        <span style={{ backgroundColor: "#ffc069" }}>{text}</span>
      ) : (
        text
      ),
  });

  const columns = [
    {
      title: "ASIN",
      dataIndex: "asin",
      key: "asin",
      ...getColumnSearchProps("asin"),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      ...getColumnSearchProps("name"),
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (date) => new Date(date * 86400000).toLocaleDateString(),
      sorter: (a, b) => a.date - b.date,
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
      render: (rating) => (
        <span>
          {rating} <span style={{ color: "#fadb14" }}>★</span>
        </span>
      ),
      sorter: (a, b) => a.rating - b.rating,
    },
    {
      title: "Review",
      dataIndex: "review",
      key: "review",
      ellipsis: true,
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (image) => <Image src={image} width={50} />,
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space size="middle">
          <Button
            type="link"
            icon={<EyeOutlined />}
            onClick={() => navigate(`/admin/product/${record.asin}`)}
          >
            View Details
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="admin-products-table">
      <h1>Admin Products Overview</h1>
      <Table
        columns={columns}
        dataSource={products}
        loading={loading}
        rowKey="asin"
        pagination={{
          pageSize: 10,
          showSizeChanger: true,
          showQuickJumper: true,
        }}
        onRow={(record) => ({
          onClick: () => navigate(`/admin/product/${record.asin}`),
        })}
      />
    </div>
  );
};

export default AdminProductsTable;
