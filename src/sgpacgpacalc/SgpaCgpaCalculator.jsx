import React, { useState } from 'react';

const SgpaCgpaCalculator = () => {
  const [calculatorType, setCalculatorType] = useState('SGPA');
  const [courses, setCourses] = useState([{ grade: '', credits: '' }]);
  const [result, setResult] = useState({ gpa: 0.00, percentage: 0.00 });

  const handleCourseChange = (index, field, value) => {
    const updated = [...courses];
    updated[index][field] = value;
    setCourses(updated);
  };

  const addCourse = () => {
    setCourses([...courses, { grade: '', credits: '' }]);
  };

  const deleteCourse = (index) => {
    const updated = [...courses];
    updated.splice(index, 1);
    setCourses(updated);
    calculateGPA(updated, calculatorType);
  };

  const calculateGPA = (courseList = courses, type = calculatorType) => {
    let totalPoints = 0, totalCredits = 0;

    courseList.forEach(({ grade, credits }) => {
      const g = Number(grade);
      const c = Number(credits);
      if (!isNaN(g) && !isNaN(c)) {
        totalPoints += g * c;
        totalCredits += c;
      }
    });

    const gpa = totalCredits ? (totalPoints / totalCredits).toFixed(2) : 0.00;
    const percentage = type === 'CGPA' ? ((gpa - 0.75) * 10).toFixed(2) : 0.00;
    setResult({ gpa, percentage });
  };

  const handleCalculatorChange = (value) => {
    setCalculatorType(value);
    setCourses([{ grade: '', credits: '' }]);
    setResult({ gpa: 0.00, percentage: 0.00 });
  };

  return (
    <div className="container">
      <header>
        SGPA & CGPA Calculator
      </header>

      <div className="toggle-buttons">
        <button
          className={calculatorType === 'SGPA' ? 'active' : ''}
          onClick={() => handleCalculatorChange('SGPA')}
        >
          SGPA
        </button>
        <button
          className={calculatorType === 'CGPA' ? 'active' : ''}
          onClick={() => handleCalculatorChange('CGPA')}
        >
          CGPA
        </button>
      </div>

      <div className="calculator-section">
        <h2>{calculatorType} Calculator</h2>
        {courses.map((course, index) => (
          <div className="input-card" key={index}>
            <div className="input-group">
              <label>Grade Points:</label>
              <input
                type="number"
                value={course.grade}
                onChange={(e) => handleCourseChange(index, 'grade', e.target.value)}
                placeholder="Enter grade points"
              />
            </div>
            <div className="input-group">
              <label>Credits:</label>
              <input
                type="number"
                value={course.credits}
                onChange={(e) => handleCourseChange(index, 'credits', e.target.value)}
                placeholder="Enter credits"
              />
            </div>
            <button onClick={() => deleteCourse(index)}>Delete</button>
          </div>
        ))}

        <button onClick={addCourse}>Add Course</button>
        <button onClick={() => calculateGPA()}>Calculate {calculatorType}</button>

        <h3>{calculatorType}: <span>{result.gpa}</span></h3>
        {calculatorType === 'CGPA' && (
          <h3>Percentage: <span>{result.percentage}</span>%</h3>
        )}
      </div>


    </div>
  );
};

export default SgpaCgpaCalculator;
