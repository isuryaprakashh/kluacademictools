import React, { useState } from 'react';
import SEO from './SEO';

const PercentageCalculator = () => {
    const [cgpa, setCgpa] = useState('');
    const [percentage, setPercentage] = useState(null);

    const calculatePercentage = (value) => {
        setCgpa(value);
        if (value && !isNaN(value)) {
            // Formula: (CGPA - 0.75) * 10
            const calc = (parseFloat(value) - 0.75) * 10;
            setPercentage(calc.toFixed(2));
        } else {
            setPercentage(null);
        }
    };

    return (
        <div className="max-w-[600px] mx-auto p-5 font-sans text-text-main">
            <SEO
                title="CGPA to Percentage"
                description="Convert your KLU CGPA to Percentage instantly using the official formula."
                url="/percentage"
            />
            <header className="text-center mb-12">
                <h1 className="text-4xl font-extrabold tracking-tight mb-2">CGPA to Percentage</h1>
                <p className="text-text-muted">Convert your Cumulative GPA to Percentage</p>
            </header>

            <div className="bg-white p-8 rounded-[2.5rem] border border-border-color shadow-sm text-center">
                <label htmlFor="cgpaInput" className="block text-xl font-bold mb-4 text-text-main">
                    Enter Your CGPA
                </label>

                <input
                    id="cgpaInput"
                    type="number"
                    placeholder="e.g. 8.5"
                    className="w-full sm:w-2/3 mx-auto p-5 bg-secondary-bg border-2 border-transparent rounded-full text-3xl font-bold text-center outline-none focus:border-primary focus:bg-white transition-all mb-8"
                    value={cgpa}
                    onChange={(e) => calculatePercentage(e.target.value)}
                    step="0.01"
                    min="0"
                    max="10"
                />

                <div className="pt-8 border-t border-border-color">
                    <h2 className="text-lg text-text-muted mb-2 font-medium">KLU Equivalent Percentage</h2>
                    <div className={`text-6xl font-black tracking-tight ${percentage ? 'text-primary' : 'text-gray-200'}`}>
                        {percentage !== null ? `${percentage}%` : '--'}
                    </div>
                    <p className="text-xs text-text-muted mt-4 bg-secondary-bg inline-block px-3 py-1 rounded-full">
                        Formula: (CGPA - 0.75) × 10
                    </p>
                    <p className="text-xs text-text-muted mt-3">
                        *Check the back of your marks list to confirm the formula.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PercentageCalculator;
