import React from 'react';
import './style.css';
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="home-container">
            <div className="home-header">
            <h1 className="home-header-text">Welcome to the ultimate book finder</h1>
            </div>

            <p>This is the one place where you can search for your favorite book and save it to your custom reading list</p>

            <button>
            <Link
              to="/search"
              className="">Search</Link>
            </button>

            <button>
            <Link
              to="/save"
              className="">Save</Link>
            </button>
        </div>
    )
}

export default Home
