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

  //  Default dummy data to show initially
  const defaultChartData = [
    { year: 2015, value: 2000 },
    { year: 2016, value: 4000 },
    { year: 2017, value: 6500 },
    { year: 2018, value: 8000 },
    { year: 2019, value: 12000 },
    { year: 2020, value: 15000 },
    { year: 2021, value: 18000 },
    { year: 2022, value: 21000 },
    { year: 2023, value: 26000 },
    { year: 2024, value: 31000 },
  ];

  //  Fetch backend data when category changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/data?category=all", {
          params: { category: activeCategory },
        });
        if (res.data && res.data.length > 0) {
          setData(res.data);
        } else {
          setData(defaultChartData); // fallback to dummy data
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        setData(defaultChartData); // fallback to dummy data
      }
    };
    fetchData();
  }, [activeCategory]);

  // AI-powered search handler
  const handleAiSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    try {
      const res = await axios.post("http://localhost:5000/api/ai/query", {
        query,
      });
      if (res.data && res.data.chartData?.length) {
        setActiveCategory(res.data.category || activeCategory);
        setData(res.data.chartData);
      } else {
        setData(defaultChartData); // fallback
      }
    } catch (err) {
      console.error("AI search error:", err);
      setData(defaultChartData);
    }
  };

  //  Format data for chart
  const chartData =
    data && data.length
      ? Object.values(
          data.reduce((acc, row) => {
            const year = row.year || row.Year; // handle Excel keys
            if (!acc[year]) acc[year] = { year, value: 0 };
            acc[year].value += Number(row.value || row.Value || 0);
            return acc;
          }, {})
        ).sort((a, b) => a.year - b.year)
      : defaultChartData;

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
            {/* Single color for all bars */}
            <Bar dataKey="value" fill="#0066FF" barSize={40} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
