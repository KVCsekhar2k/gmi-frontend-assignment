import React from "react";
import "./relatedContent.css";
// sample placeholder (replace if needed)

export default function RelatedContent() {
  return (
    <section className="related-content">
      <div className="rc-container">
        <h2>Related content</h2>

        {/* Filter tabs */}
        <div className="rc-tabs">
          <button className="rc-tab active">All</button>
          <button className="rc-tab">Data</button>
          <button className="rc-tab">Reports</button>
          <button className="rc-tab">All results →</button>
        </div>

        {/* Cards */}
        <div className="rc-cards">
          <div className="rc-card light-card">
            <h3>Global EV Policy Explorer</h3>
            <p>
              Key policies and measures that support the deployment of electric
              and zero-emission vehicles
            </p>
            <span className="rc-link">Data explorer</span>
          </div>

          <div className="rc-card dark-card">
            <img src="https://i.pinimg.com/736x/78/5e/84/785e84f2037506c4308c44dbd0c992a1.jpg" alt="EV" className="rc-img" />
            <div className="rc-overlay">
              <h3>Global EV Outlook 2025</h3>
              <p>Expanding sales in diverse markets</p>
              <span className="rc-footer">Flagship report — 14 May 2025</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
