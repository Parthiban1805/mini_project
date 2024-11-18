import React, { useState } from 'react';
import axios from 'axios';
import './riskForm.css';

const ClimateRiskForm = () => {
    const [riskData, setRiskData] = useState({
        location: '',
        vulnerabilities: '',
        riskLevel: 'low',
        resilienceMeasures: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRiskData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formattedData = {
            ...riskData,
            vulnerabilities: riskData.vulnerabilities.split(',').map((vul) => vul.trim()),
            resilienceMeasures: riskData.resilienceMeasures.split(',').map((measure) => measure.trim()),
        };

        try {
            const response = await axios.post('http://localhost:5000/api/climate-risk', formattedData);
            console.log('Climate Risk data saved:', response.data);
            setRiskData({ location: '', vulnerabilities: '', riskLevel: 'low', resilienceMeasures: '' });
        } catch (error) {
            console.error('Error saving Climate Risk data:', error);
        }
    };

    return (
        <form className="climate-risk-form" onSubmit={handleSubmit}>
            <h2>Climate Risk Assessment</h2>

            <label>
                Location:
                <input
                    type="text"
                    name="location"
                    value={riskData.location}
                    onChange={handleChange}
                    required
                />
            </label>

            <label>
                Vulnerabilities (comma-separated):
                <input
                    type="text"
                    name="vulnerabilities"
                    value={riskData.vulnerabilities}
                    onChange={handleChange}
                    placeholder="e.g., flood zone, high winds"
                    required
                />
            </label>

            <label>
                Risk Level:
                <select name="riskLevel" value={riskData.riskLevel} onChange={handleChange} required>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </label>

            <label>
                Resilience Measures (comma-separated):
                <input
                    type="text"
                    name="resilienceMeasures"
                    value={riskData.resilienceMeasures}
                    onChange={handleChange}
                    placeholder="e.g., flood barriers, backup power"
                />
            </label>

            <button type="submit">Save Climate Risk</button>
        </form>
    );
};

export default ClimateRiskForm;
