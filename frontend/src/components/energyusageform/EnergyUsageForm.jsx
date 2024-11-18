import React, { useState } from 'react';
import axios from 'axios';
import './EnergyUsageForm.css';

const EnergyUsageForm = () => {
    const [energyUsage, setEnergyUsage] = useState({
        totalEnergyConsumption: '',
        renewableEnergyUsage: '',
        energyEfficiencyMeasures: '',
        period: 'monthly',
    });

    const handleChange = (e) => {
        setEnergyUsage({ ...energyUsage, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/energy-usage', energyUsage);
            console.log('Energy usage data saved:', response.data);
            setEnergyUsage({
                totalEnergyConsumption: '',
                renewableEnergyUsage: '',
                energyEfficiencyMeasures: '',
                period: 'monthly',
            });
        } catch (error) {
            console.error('Error saving energy usage data:', error);
        }
    };

    return (
        <form className="energy-usage-form" onSubmit={handleSubmit}>
            <h2>Energy Usage Data Form</h2>

            <label htmlFor="totalEnergyConsumption">Total Energy Consumption (kWh):</label>
            <input
                type="number"
                name="totalEnergyConsumption"
                placeholder="Enter total energy consumption"
                value={energyUsage.totalEnergyConsumption}
                onChange={handleChange}
            />

            <label htmlFor="renewableEnergyUsage">Renewable Energy Usage (kWh):</label>
            <input
                type="number"
                name="renewableEnergyUsage"
                placeholder="Enter renewable energy usage"
                value={energyUsage.renewableEnergyUsage}
                onChange={handleChange}
            />

            <label htmlFor="energyEfficiencyMeasures">Energy Efficiency Measures:</label>
            <textarea
                name="energyEfficiencyMeasures"
                placeholder="Enter energy efficiency measures"
                value={energyUsage.energyEfficiencyMeasures}
                onChange={handleChange}
            />

            <label htmlFor="period">Period:</label>
            <select
                name="period"
                value={energyUsage.period}
                onChange={handleChange}
            >
                <option value="monthly">Monthly</option>
                <option value="annually">Annually</option>
            </select>

            <button type="submit">Save Energy Usage Data</button>
        </form>
    );
};

export default EnergyUsageForm;
