import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Alert.css';

const Alerts = () => {
    const [alerts, setAlerts] = useState([]); // Initialize alerts as an empty array
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAlerts = async () => {
            try {
                const response = await axios.get('/api/alerts'); // Adjust the URL if needed
                if (Array.isArray(response.data)) {
                    setAlerts(response.data);
                } else {
                    setError("Unexpected response format: Alerts data should be an array");
                }
            } catch (error) {
                console.error('Error fetching alerts:', error);
                setError("Could not fetch alerts");
            }
        };

        fetchAlerts();
    }, []);

    if (error) {
        return <div className="alerts-error">Error: {error}</div>;
    }

    return (
        <div className="alerts">
            <h2>Active Alerts</h2>
            {alerts.length > 0 ? (
                <ul>
                    {alerts.map((alert, index) => (
                        <li key={index}>
                            <strong>{alert.metric}</strong>: {alert.message} <br />
                            <span>Threshold: {alert.thresholdValue}</span> | <span>Current: {alert.currentValue}</span>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No active alerts.</p>
            )}
        </div>
    );
};

export default Alerts;
