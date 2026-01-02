import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import SEO from './SEO';

const AttendanceCalculator = () => {
  const COMPONENTS = ['lecture', 'tutorial', 'practical', 'skilling'];
  const WEIGHTS = { lecture: 100, tutorial: 25, practical: 50, skilling: 25 };

  const [inputs, setInputs] = useState(Object.fromEntries(COMPONENTS.map(k => [k, ''])));
  const [percentage, setPercentage] = useState(null);
  const [error, setError] = useState('');

  const handleInputChange = ({ target: { id, value } }) => {
    if (value === '' || (value >= 0 && value <= 100)) {
      setInputs(prev => ({ ...prev, [id]: value }));
      setError('');
    } else {
      setError('Enter a value between 0 and 100');
    }
  };

  const calculateAttendance = () => {
    const entries = COMPONENTS.filter(key => inputs[key] !== '').map(key => ({
      weight: WEIGHTS[key],
      score: parseFloat(inputs[key])
    }));

    if (entries.length === 0) {
      setError('Please enter at least one component');
      setPercentage(null);
      return;
    }

    const totalWeight = entries.reduce((sum, { weight }) => sum + weight, 0);
    const weightedSum = entries.reduce((sum, { score, weight }) => sum + score * (weight / 100), 0);
    const result = (weightedSum / totalWeight) * 100;
    setPercentage(result);

    if (result >= 85) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const getPercentageClass = () => {
    if (percentage >= 85) return 'excellent';
    if (percentage >= 75) return 'good';
    if (percentage >= 65) return 'average';
    return 'warning';
  };

  useEffect(() => {
    const handleClickOutside = e => {
      const nav = document.querySelector('.nav-links');
      const toggle = document.querySelector('.nav-toggle');
      if (nav && toggle && !nav.contains(e.target) && !toggle.contains(e.target)) {
        // setNavActive(false); // Removed since navActive is unused
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className="max-w-[800px] mx-auto p-5 font-sans text-text-main">
      <SEO
        title="Attendance Calculator"
        description="Calculate your required class attendance securely. Find out how many classes you can bunk or need to attend."
        url="/attendance"
      />
      <h1 className="text-4xl font-extrabold text-center mb-2 tracking-tight">Attendance Calculator</h1>
      <p className="text-center text-text-muted mb-8">Enter attendance values (leave blank if not applicable).</p>
      {error && <div className="bg-red-50 text-red-700 p-4 rounded-lg mb-6 border border-red-100">{error}</div>}

      <form onSubmit={e => e.preventDefault()} id="attendanceForm">
        {COMPONENTS.map(key => (
          <div className="flex flex-col sm:flex-row gap-4 items-center bg-white p-6 rounded-[2rem] border border-border-color shadow-sm mb-4 transition-shadow hover:shadow-md" key={key}>
            <label htmlFor={key} className="block font-semibold flex-1 capitalize text-lg pl-2">
              {key} <span className="text-text-muted text-sm font-normal normal-case ml-2">(%)</span>
            </label>
            <input
              className="p-3 bg-secondary-bg border border-transparent rounded-full w-full sm:w-40 text-lg outline-none focus:border-primary focus:bg-white transition-all text-center"
              id={key}
              min="0"
              max="100"
              value={inputs[key]}
              onChange={handleInputChange}
              placeholder="0-100"
            />
          </div>
        ))}
        <button type="button" onClick={calculateAttendance} className="w-full bg-primary text-white py-4 rounded-full font-bold text-lg hover:bg-[#8a161d] transition-colors shadow-lg shadow-primary/20 mt-4">
          Calculate Attendance
        </button>
      </form>

      <div className="bg-secondary-bg p-8 rounded-[2.5rem] mt-8 text-center">
        <h2 className="text-xl font-semibold mb-2 text-text-muted">Attendance Percentage</h2>
        <div id="result" className={`text-5xl font-black ${percentage !== null ? (percentage >= 75 ? 'text-primary' : 'text-orange-500') : 'text-gray-300'}`}>
          {percentage !== null ? `${percentage.toFixed(2)}%` : '--'}
        </div>

        <p className="text-xs text-text-muted mt-4">
          *Calculated attendance is approximate and may vary from official records.
        </p>
      </div>
    </div>
  );
};

export default AttendanceCalculator;
