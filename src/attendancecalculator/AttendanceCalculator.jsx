import React, { useState, useEffect } from 'react';

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
    setPercentage((weightedSum / totalWeight) * 100);
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
    <div className="container">
      <h1>KLU L-T-P-S Attendance Calculator</h1>
      <p>Enter attendance values (leave blank if not applicable).</p>
      {error && <div className="error-message">{error}</div>}

      <form onSubmit={e => e.preventDefault()} id="attendanceForm">
        {COMPONENTS.map(key => (
          <div className="input-card" key={key}>
            <label htmlFor={key}>Enter {key} attendance (%)</label>
            <input
              type="number"
              id={key}
              min="0"
              max="100"
              value={inputs[key]}
              onChange={handleInputChange}
              placeholder="Leave blank if not applicable"
            />
          </div>
        ))}
        <button type="button" onClick={calculateAttendance}>Calculate Attendance</button>
      </form>

      <div className="result-section">
        <h2>Attendance Percentage</h2>
        <div id="result" className={percentage !== null ? getPercentageClass() : ''}>
          {percentage !== null ? `${percentage.toFixed(2)}%` : '--'}
        </div>
      </div>
    </div>
  );
};

export default AttendanceCalculator;
