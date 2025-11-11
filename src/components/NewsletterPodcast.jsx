import React from "react";
import "./newsletterPodcast.css";

export default function NewsletterPodcast() {
  return (
    <section className="newsletter-podcast">
      <div className="np-container">
        <div className="np-card">
          <h3>Newsletters</h3>
          <p>The best of the IEA sent straight to your inbox</p>
          <button className="np-btn">Subscribe to newsletters</button>
        </div>

        <div className="np-card">
          <h3>Podcasts</h3>
          <p>Top energy experts put IEA analysis in context</p>
          <button className="np-btn">Listen to our podcast</button>
        </div>
      </div>
    </section>
  );
}
