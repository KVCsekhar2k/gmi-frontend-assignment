import React from "react";
import "./footer.css";
import {
  FaYoutube,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="iea-footer">
      <div className="footer-links">
        <div className="footer-col">
          <h4>Understand energy</h4>
          <ul>
            <li>Reports</li>
            <li>News and commentaries</li>
            <li>Events</li>
            <li>Energy system</li>
            <li>Topics</li>
            <li>Countries and regions</li>
            <li>Glossary</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Explore data</h4>
          <ul>
            <li>Data explorers</li>
            <li>Data sets</li>
            <li>Policies database</li>
            <li>Chart library</li>
            <li>Energy Statistics Browser</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>IEA essentials</h4>
          <ul>
            <li>About</li>
            <li>Mission</li>
            <li>Membership</li>
            <li>Structure</li>
            <li>Programmes</li>
            <li>International collaborations</li>
            <li>Technology collaboration</li>
            <li>Training</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Connect</h4>
          <ul>
            <li>Contact</li>
            <li>Press</li>
            <li>Jobs</li>
            <li>Internships</li>
            <li>Delegates</li>
            <li>Help centre</li>
          </ul>
        </div>

        {/* Vertical label on the right */}
        <div className="footer-agency">
          <span>International<br />Energy Agency</span>
        </div>
      </div>

      {/* Bottom section */}
      <div className="footer-bottom">
        <div className="footer-copy">
          © 2025 IEA &nbsp; &nbsp; <span>Terms</span> &nbsp; <span>Privacy</span>
        </div>

        <div className="footer-social">
          <FaYoutube />
          <FaLinkedin />
          <FaFacebook />
          <FaInstagram />
          <FaXTwitter />
        </div>
      </div>
    </footer>
  );
}
