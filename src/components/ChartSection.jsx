import React, { useState, useEffect, useRef } from "react";
import "./chartSection.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";
import { FaSearch } from "react-icons/fa";

export default function ChartSection() {
  const [tab, setTab] = useState("Historical");
  const [activeCategory, setActiveCategory] = useState("Passenger Vehicles");
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  // Fetch from backend based on selected category
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/data/all", {
          params: { category: activeCategory },
        });
        setData(res.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, [activeCategory]);

  // Handle AI search query
  const handleAiSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    try {
      const res = await axios.post("http://localhost:5000/api/ai/query", {
        query,
      });
      if (res.data && res.data.chartData) {
        setActiveCategory(res.data.category || activeCategory);
        setData(res.data.chartData);
      }
    } catch (err) {
      console.error("AI search error:", err);
    }
  };

  // Convert raw dataset into chart-friendly format (group by year)
  const chartData = Object.values(
    data.reduce((acc, row) => {
      const year = row.year;
      if (!acc[year]) acc[year] = { year, value: 0 };
      acc[year].value += Number(row.value || 0);
      return acc;
    }, {})
  ).sort((a, b) => a.year - b.year);

  const categories = [
    "Passenger Vehicles",
    "Commercial Vehicles",
    "Mining",
    "Manufacturing & Construction",
    "Agriculture",
    "Others",
  ];

  return (
    <section className="chart-section">
      {/* Tabs */}
      <div className="tabs">
        {["Historical", "Projected"].map((t) => (
          <div
            key={t}
            className={`tab ${tab === t ? "active" : ""}`}
            onClick={() => setTab(t)}
          >
            {t}
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="filters-row">
        <div className="filter">
          <label>Show</label>
          <div className="dropdown-box">
            <span>Lubricant Sales</span>
            <span className="arrow">&#9662;</span>
          </div>
        </div>

        <div className="filter">
          <label>Region</label>
          <div className="dropdown-box">
            <span>World</span>
            <span className="arrow">&#9662;</span>
          </div>
        </div>
      </div>

      {/* AI Search Bar */}
      <div className="ai-search-container">
        <form onSubmit={handleAiSearch} className="ai-search-form">
          <input
            ref={inputRef}
            type="text"
            placeholder="Ask AI about lubricant data (e.g. 'Show mining data for 2023')"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="ai-search-btn">
            <FaSearch />
          </button>
        </form>
      </div>

      {/* Category Buttons */}
      <div className="category-buttons">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`cat-btn ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Chart */}
      <div className="chart-card">
        <h3>
          {activeCategory} - World, 2010–2024
        </h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip formatter={(v) => v.toLocaleString()} />
            <Bar dataKey="value" fill="#007bff" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
