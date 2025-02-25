import React, { useState } from 'react';
import './Settings.css';

const Sidebar = () => {
  const menuItems = [
    { path: '/overview', label: 'Overview' },
    { path: '/users', label: 'Users' },
    { path: '/analytics', label: 'Analytics' },
    { path: '/settings', label: 'Settings' },
    { path: '/posting', label: 'Posting' },
    { path: '/orders', label: 'Order' }
  ];

  return (
    <nav className="sidebar">
      <h2>Dashboard</h2>
      <ul>
        {menuItems.map((item) => (
          <li key={item.path}>
            <a href={item.path}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const Settings = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="dashboard">
      <Sidebar />
      <main className="content">
        <h2>Settings</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          
          <button type="submit">Save Changes</button>
        </form>
      </main>
    </div>
  );
};

export default Settings; 