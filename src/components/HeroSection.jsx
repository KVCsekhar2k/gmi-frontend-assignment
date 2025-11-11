import React from "react";
import "./heroSection.css";

export default function HeroSection() {
  return (
    <section className="hero">
      {/* Top intro section */}
      <div className="hero-top">
        <div className="hero-container">
          <h1 className="hero-title">Global EV Data Explorer</h1>
          <p className="hero-subtitle">
            Explore historical and projected data on electric vehicles sales,
            stock, charging infrastructure and oil displacement
          </p>

          <div className="hero-meta">
            <div>
              <span className="meta-label">Last updated</span>
              <p className="meta-value">31 Jul 2025</p>
            </div>
            <div>
              <span className="meta-label">Licence</span>
              <p className="meta-value link">CC BY 4.0</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tab navigation */}
      <div className="hero-tabs">
        <div className="tab active">Overview</div>
      </div>

      {/* Content section */}
      <div className="hero-content hero-container">
        <div className="hero-left">
          <h2>
            Explore and download the full data behind the Global EV Outlook
          </h2>
        </div>

        <div className="hero-right">
          <p>
            The <span className="link">Global EV Outlook</span> is an annual
            publication that identifies and discusses recent developments in
            electric mobility across the globe. It is developed with the support
            of the members of the Electric Vehicles Initiative (EVI).
          </p>
          <p>
            Combining historical analysis with projections to 2030, the report
            examines key areas of interest such as electric vehicle and charging
            infrastructure deployment, energy use, CO₂ emissions, battery demand
            and related policy developments. The report includes policy
            recommendations that incorporate lessons learned from leading
            markets to inform policy makers and stakeholders with regard to
            policy frameworks and market systems for electric vehicle adoption.
          </p>
        </div>
      </div>
    </section>
  );
}
