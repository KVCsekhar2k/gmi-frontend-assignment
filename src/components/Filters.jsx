import React, { useState } from 'react';

export default function Filters({ filters, setFilters }) {
  const [local, setLocal] = useState(filters);

  const apply = () => setFilters(local);

  return (
    <div className="filters">
      <div className="filter-item">
        <label>Show</label>
        <select value={local.category} onChange={e => setLocal({...local, category: e.target.value})}>
          <option value="">All</option>
          <option value="cars">Cars</option>
          <option value="vans">Vans</option>
          <option value="trucks">Trucks</option>
          <option value="industrial">Industrial</option>
        </select>
      </div>

      <div className="filter-item">
        <label>Region</label>
        <select value={local.region} onChange={e => setLocal({...local, region: e.target.value})}>
          <option value="">World</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="north america">North America</option>
        </select>
      </div>

      <div className="filter-item">
        <label>Year</label>
        <input type="text" placeholder="e.g., 2020" value={local.year} onChange={e => setLocal({...local, year: e.target.value})} />
      </div>

      <div className="filter-item">
        <button onClick={apply} className="btn-primary">Apply</button>
      </div>
    </div>
  );
}
