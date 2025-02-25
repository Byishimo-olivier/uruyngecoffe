import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DoNotSellMyInfo from './DoNotSellMyInfo';

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <nav className="navbar fixed w-full bg-black bg-opacity-90 shadow-lg z-50">
            <div className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <Link to="/" className="logo">
                        <img src="/images/logo.jpg" alt="Coffee Shop" className="w-[70px] hover:scale-105 transition" />
                    </Link>

                    <button 
                        className="nav-toggle md:hidden text-white text-2xl"
                        onClick={() => setIsNavOpen(!isNavOpen)}
                    >
                        <i className="fas fa-bars"></i>
                    </button>

                    <div className={`nav-links ${isNavOpen ? 'active' : ''}`}>
                        <ul className="flex md:flex-row flex-col gap-8">
                            <li><Link to="/"><i className="fa fa-home"></i> Home</Link></li>
                            <li><Link to="/ourcoffee"><i className="fas fa-coffee"></i> Our Coffee</Link></li>
                            <li><Link to="/subscription"><i className="fas fa-box"></i> Subscription</Link></li>
                            <li><Link to="/about"><i className="fas fa-info-circle"></i> About Us</Link></li>
                            <li><Link to="/contact"><i className="fas fa-address-book"></i> Contact</Link></li>
                        </ul>

                        <div className="nav-buttons">
                            <Link to="/cart" className="cart-icon">
                                <i className="fa-solid fa-cart-shopping"></i>
                                <span className="cart-count">0</span>
                            </Link>
                            
                            <div className="dashboard-menu">
                                {/* Dashboard menu implementation */}
                            </div>

                            <Link to="/subscription">
                                <button className="btn btn-primary">
                                    <i className="fas fa-rocket"></i> Get Started
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar; 