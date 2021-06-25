import React from 'react';
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="home-container">
            <div className="home-header">
            <h1 className="home-header-title">Welcome to the ultimate book finder</h1>
            </div>

            <p className="home-header-text">This is the one place where you can search for your favorite book and save it to your custom reading list</p>

            <button className="home-search-btn">
            <Link
              to="/search">Search</Link>
            </button>

            <button className="home-save-btn">
            <Link
              to="/save">Save</Link>
            </button>
        </div>
    )
}

export default Home
