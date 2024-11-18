import React, { useState } from 'react';
import axios from 'axios';
import './AlertForm.css';

const AlertForm = () => {
    const [alert, setAlert] = useState({
        metric: '',
        thresholdValue: '',
        currentValue: '',
        message: '',
        user: '',
        status: 'active',
    });

    const handleChange = (e) => {
        setAlert({ ...alert, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/alerts', alert);
            console.log('Alert saved:', response.data);
            setAlert({
                metric: '',
                thresholdValue: '',
                currentValue: '',
                message: '',
                user: '',
                status: 'active',
            });
        } catch (error) {
            console.error('Error saving alert:', error);
        }
    };

    return (
        <form className="alert-form" onSubmit={handleSubmit}>
            <h2>Create Alert</h2>

            <label htmlFor="metric">Metric:</label>
            <input
                type="text"
                name="metric"
                placeholder="Enter metric"
                value={alert.metric}
                onChange={handleChange}
            />

            <label htmlFor="thresholdValue">Threshold Value:</label>
            <input
                type="number"
                name="thresholdValue"
                placeholder="Enter threshold value"
                value={alert.thresholdValue}
                onChange={handleChange}
            />

            <label htmlFor="currentValue">Current Value:</label>
            <input
                type="number"
                name="currentValue"
                placeholder="Enter current value"
                value={alert.currentValue}
                onChange={handleChange}
            />

            <label htmlFor="message">Message:</label>
            <textarea
                name="message"
                placeholder="Enter alert message"
                value={alert.message}
                onChange={handleChange}
            />

            <label htmlFor="user">User:</label>
            <input
                type="text"
                name="user"
                placeholder="Enter user"
                value={alert.user}
                onChange={handleChange}
            />

            <label htmlFor="status">Status:</label>
            <select
                name="status"
                value={alert.status}
                onChange={handleChange}
            >
                <option value="active">Active</option>
                <option value="resolved">Resolved</option>
            </select>

            <button type="submit">Save Alert</button>
        </form>
    );
};

export default AlertForm;
