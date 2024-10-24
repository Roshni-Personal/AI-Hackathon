import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";
import { TagCloud } from "react-tagcloud";
import "./dashboard.css";
import { useParams } from "react-router-dom";
import { Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";

const ProductAnalyticsDashboard = () => {
  const { asin } = useParams();
  const [productData, setProductData] = useState({
    productId: "B07BGT4J55",
    averageRating: "4.50",
    reviewCount: 20,
    summarizedReview: {
      positiveFeedback: [
        "Previously I used to use Chicco but switched to this one due to good reviews and lower price",
        "Berry flavoured blast that the kids just love",
        "Made with 100% safe ingredients, this should be the toothpaste you should introduce your kids to",
        "Mamaearth Berry Blast toothpaste is 100% safe and toxin free",
        "My kids love the Berry taste while brushing",
      ],
      concerns: [
        "My 2 year old child doesn't have cavity but started developing bad breaths the morning after, while using this toothpaste for a couple of weeks during day and night brushing sessions",
        "I immediately shifted back to Pigeon toothpaste for night brushing and the bad breath stopped from the next day onward",
      ],
      suggestions: [
        "Mama Earth team needs to research more on the ingredients on this product",
        "This is one of the best flouride free tooth pastes available for kids that you should be buying right away",
      ],
    },
    generatedInsights:
      "## Sentiment Analysis & Recommendations:\n\n**Overall Sentiment:** Mixed.  While many customers praise the flavor and safety of Mamaearth Berry Blast toothpaste, there are concerns about its effectiveness in preventing cavities and potential for causing bad breath. \n\n**Key Insights:**",
    sentiment: "positive",
    reviewSummary:
      "Nice one... My 2.5 yr old son likes to brush with this flavour- strawberry. Previously I used to use Chicco but switched to this one due to good reviews and lower price.I had used Mee Mee also but this one's ingredients are better for my child's health. My 2 year old child doesn't have cavity but started developing bad breaths the morning after, while using this toothpaste for a couple of weeks during day and night brushing sessions. I feel this toothpaste might actually cause cavity rather than keep it away, from my experience. I immediately shifted back to Pigeon toothpaste for night brushing and the bad breath stopped from the next day onward.  I had purchased it for its all natural properties. Mama Earth team needs to research more on the ingredients on this product. I use other Mama Earth products and they are decent. Not this toothpaste though. Berry flavoured blast that the kids just love!  And the best part is that its perfectly fine if  they swallow it too! Made with 100% safe ingredients, this should be the toothpaste you should introduce your kids to! Mamaearth Berry Blast toothpaste is 100% safe and toxin free. My kids love the Berry taste while brushing. This is one of the best flouride free tooth pastes available for kids that you should be buying right away! ...",
    totalReviews: 20,
    ratingDistribution: {
      oneStar: 2,
      twoStar: 0,
      threeStar: 0,
      fourStar: 2,
      fiveStar: 16,
    },
    quantitySufficiency: "Sufficient",
    recommendation: "Buy",
    frequentWords: [
      {
        keyword: "the",
        count: 42,
      },
      {
        keyword: "it",
        count: 42,
      },
      {
        keyword: "to",
        count: 32,
      },
      {
        keyword: "i",
        count: 30,
      },
      {
        keyword: "for",
        count: 28,
      },
      {
        keyword: "my",
        count: 26,
      },
      {
        keyword: "this",
        count: 24,
      },
      {
        keyword: "and",
        count: 22,
      },
      {
        keyword: "is",
        count: 22,
      },
      {
        keyword: "toothpaste",
        count: 18,
      },
    ],
    reviewDates: [
      "1970-01-01T00:00:43.267Z",
      "1970-01-01T00:00:43.367Z",
      "1970-01-01T00:00:43.391Z",
      "1970-01-01T00:00:43.419Z",
      "1970-01-01T00:00:43.706Z",
      "1970-01-01T00:00:43.290Z",
      "1970-01-01T00:00:43.622Z",
      "1970-01-01T00:00:43.220Z",
      "1970-01-01T00:00:43.330Z",
      "1970-01-01T00:00:43.440Z",
      "1970-01-01T00:00:43.267Z",
      "1970-01-01T00:00:43.367Z",
      "1970-01-01T00:00:43.391Z",
      "1970-01-01T00:00:43.419Z",
      "1970-01-01T00:00:43.706Z",
      "1970-01-01T00:00:43.290Z",
      "1970-01-01T00:00:43.622Z",
      "1970-01-01T00:00:43.220Z",
      "1970-01-01T00:00:43.330Z",
      "1970-01-01T00:00:43.440Z",
    ],
    reviewTrend: [],
    seasonalTrends: {
      peakPeriod: "Holiday Season",
      insights: "Better sales during holidays",
    },
    timeSinceRelease: "6 months",
    promotionsImpact: {
      promotionDate: "2024-10-22T11:16:35.308Z",
      impactOnReviews: "Review spike after promotion",
    },
    reviewFreshness: {
      recentReviewsCount: 0,
      recentSentiment: "neutral",
    },
    qualityTrend: "Stable",
  });
  const [activeTab, setActiveTab] = useState("positive");

  const ratingData = [
    { name: "1 Star", value: productData.ratingDistribution.oneStar },
    { name: "2 Star", value: productData.ratingDistribution.twoStar },
    { name: "3 Star", value: productData.ratingDistribution.threeStar },
    { name: "4 Star", value: productData.ratingDistribution.fourStar },
    { name: "5 Star", value: productData.ratingDistribution.fiveStar },
  ];

  const COLORS = ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"];

  const reviewTrendChartData = Object.entries(
    productData.reviewDates.reduce((acc, date) => {
      const month = new Date(date).toLocaleString("default", {
        month: "short",
      });
      acc[month] = (acc[month] || 0) + 1;
      return acc;
    }, {})
  )?.map(([month, count]) => ({ month, count }));

  return (
    <div className="dashboard-container">
      <div>
        <Button
          icon={<ArrowLeftOutlined />}
          onClick={() => navigate("/admin/products")}
          style={{ marginBottom: "20px" }}
        >
          Back to Products
        </Button>
        {/* <h3>Product Image</h3> */}
        <img
          src={"https://picsum.photos/200/300?random=0.4836222380621975"}
          alt="Product"
          className="product-image1"
        />
        <div className="grid-item-word-cloud">
          <div className="word-cloud-and-feedback">
            <div className="word-cloud">
              <h3>Frequent Words</h3>
              <TagCloud
                minSize={12}
                maxSize={35}
                tags={productData.frequentWords?.map((word) => ({
                  value: word.keyword,
                  count: word.count,
                }))}
                onClick={(tag) => console.log("clicked:", tag)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-container1">
        <header className="dashboard-header">
          <h1>Mamaearth-Onion-Growth-Control-Redensyl</h1>
          <div className="product-info">
            <h2>B07W7CTLD1</h2>
            <div className="rating">
              <span className="star">★</span>
              <span className="rating-value">{productData.averageRating}</span>
              <span className="review-count">
                ({productData.reviewCount} reviews)
              </span>
            </div>
          </div>
        </header>

        <div className="dashboard-grid">
          <div className="grid-item kpi-cards">
            <div className="kpi-card insight-card">
              <h4>Sentiment</h4>
              <p>{productData.sentiment}</p>
            </div>
            <div className="kpi-card insight-card">
              <h4>Time Since Release</h4>
              <p>{productData.timeSinceRelease}</p>
            </div>
            <div className="kpi-card insight-card">
              <h4>Quality Trend</h4>
              <p>{productData.qualityTrend}</p>
            </div>
          </div>

          <div className="grid-item chart">
            <h3>Rating Distribution</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={ratingData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  innerRadius={40}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {ratingData?.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="grid-item chart">
            <h3>Review Trend</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={reviewTrendChartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="count" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="grid-item insights-and-words">
            <div className="additional-insights">
              <h3>Additional Insights</h3>
              <div className="insight-card">
                <h4>Seasonal Trends</h4>
                <p>{productData.seasonalTrends.insights}</p>
              </div>
              <div className="insight-card">
                <h4>Promotions Impact</h4>
                <p>{productData.promotionsImpact.impactOnReviews}</p>
              </div>
              <div className="insight-card">
                <h4>Review Freshness</h4>
                <p>
                  Recent reviews:{" "}
                  {productData.reviewFreshness.recentReviewsCount}
                </p>
                <p>Sentiment: {productData.reviewFreshness.recentSentiment}</p>
              </div>
            </div>
          </div>
          <div className="grid-item insights-and-words">
            <div className="feedback-section">
              <div className="feedback-tabs">
                <button
                  className={`feedback-tab positive ${
                    activeTab === "positive" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("positive")}
                >
                  Positive Feedback
                </button>
                <button
                  className={`feedback-tab concerns ${
                    activeTab === "concerns" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("concerns")}
                >
                  Concerns
                </button>
                <button
                  className={`feedback-tab suggestions ${
                    activeTab === "suggestions" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("suggestions")}
                >
                  Suggestions
                </button>
              </div>
              <div className="feedback-content">
                <ul>
                  {productData.summarizedReview[activeTab]?.map(
                    (item, index) => (
                      <li key={index}>{item}</li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAnalyticsDashboard;
