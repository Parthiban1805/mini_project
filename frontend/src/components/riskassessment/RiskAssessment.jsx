import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './RiskAssessment.css';

const RiskAssessment = () => {
    const [risks, setRisks] = useState([]);

    useEffect(() => {
        const fetchRisks = async () => {
            try {
                const response = await axios.get('/api/compliance'); // Adjust URL if needed
                setRisks(response.data);
            } catch (error) {
                console.error('Error fetching climate risks:', error);
            }
        };

        fetchRisks();
    }, []);

    return (
        <div className="risk-assessment">
            <h2>Climate Risk Assessment</h2>
            <ul>
                {risks.map((risk, index) => (
                    <li key={index}>
                        <strong>Facility:</strong> {risk.location} <br />
                        <strong>Vulnerability:</strong> {risk.vulnerability} <br />
                        <strong>Risk Level:</strong> {risk.level}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RiskAssessment;
