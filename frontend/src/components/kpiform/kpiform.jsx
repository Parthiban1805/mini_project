import React, { useState } from 'react';
import axios from 'axios';
import './KPIForm.css';

const KPIForm = () => {
    const [kpi, setKpi] = useState({
        type: '',
        target: '',
        currentValue: '',
        units: '',
    });

    const handleChange = (e) => {
        setKpi({ ...kpi, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("KPI data before submit:", kpi); 
        try {
            const response = await axios.post('http://localhost:5000/api/kpis', kpi); 
            console.log('KPI saved:', response.data);
            setKpi({ type: '', target: '', currentValue: '', units: '' });
        } catch (error) {
            console.error('Error saving KPI:', error);
        }
    };

    return (
        <form className="kpi-form" onSubmit={handleSubmit}>
            <h2>Add KPI</h2>
            <input
                type="text"
                name="type"
                placeholder="KPI Type"
                value={kpi.type}
                onChange={handleChange}
            />
            <input
                type="number"
                name="target"
                placeholder="Target Value"
                value={kpi.target}
                onChange={handleChange}
            />
            <input
                type="number"
                name="currentValue"
                placeholder="Current Value"
                value={kpi.currentValue}
                onChange={handleChange}
            />
            <input
                type="text"
                name="units"
                placeholder="Units"
                value={kpi.units}
                onChange={handleChange}
            />
            <button type="submit">Save KPI</button>
        </form>
    );
};

export default KPIForm;
