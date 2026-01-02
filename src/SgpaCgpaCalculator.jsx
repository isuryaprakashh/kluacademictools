import React, { useState, useEffect } from 'react';
import SEO from './SEO';

const SgpaCgpaCalculator = () => {
  const [calculatorType, setCalculatorType] = useState('SGPA');
  const [courses, setCourses] = useState([{ grade: '', credits: '' }]);
  const [result, setResult] = useState({ gpa: 0.00, percentage: 0.00, totalCredits: 0 });

  useEffect(() => {
    calculateGPA();
  }, [courses, calculatorType]);

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
  };

  const calculateGPA = () => {
    let totalPoints = 0, totalCredits = 0;

    courses.forEach(({ grade, credits }) => {
      const g = Number(grade);
      const c = Number(credits);
      if (!isNaN(g) && !isNaN(c) && grade !== '' && credits !== '') {
        totalPoints += g * c;
        totalCredits += c;
      }
    });

    const gpa = totalCredits ? (totalPoints / totalCredits).toFixed(2) : 0.00;
    const percentage = calculatorType === 'CGPA' ? ((gpa - 0.75) * 10).toFixed(2) : 0.00;
    setResult({ gpa, percentage, totalCredits });
  };

  const handleCalculatorChange = (value) => {
    setCalculatorType(value);
    setCourses([{ grade: '', credits: '' }]);
    setResult({ gpa: 0.00, percentage: 0.00, totalCredits: 0 });
  };

  return (
    <div className="max-w-[800px] mx-auto p-5 font-sans text-text-main">
      <SEO
        title="SGPA & CGPA Calculator"
        description="Calculate your Semester Grade Point Average (SGPA) and Cumulative Grade Point Average (CGPA) instantly."
        url="/sgpacgpa"
      />
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold tracking-tight mb-2">SGPA & CGPA Calculator</h1>
        <p className="text-text-muted">Calculate your Semester or Cumulative Grade Point Average</p>
      </header>

      <div className="flex justify-center mb-8">
        <div className="bg-secondary-bg p-1.5 rounded-full inline-flex gap-1 shadow-inner">
          {['SGPA', 'CGPA'].map((type) => (
            <button
              key={type}
              className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${calculatorType === type ? 'bg-white text-primary shadow-sm' : 'text-text-muted hover:text-text-main hover:bg-white/50'}`}
              onClick={() => handleCalculatorChange(type)}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-center mb-6">{calculatorType} Calculator</h2>
        {courses.map((course, index) => (
          <div className="flex flex-col sm:flex-row gap-4 items-end bg-white p-6 rounded-[2rem] border border-border-color shadow-sm transition-shadow hover:shadow-md group" key={index}>
            <div className="flex-1 w-full">
              <label className="block text-sm font-semibold mb-2 text-text-muted pl-2">Grade Points</label>
              <input
                type="number"
                className="w-full p-3 bg-secondary-bg border border-transparent rounded-full outline-none focus:border-primary focus:bg-white transition-all font-medium text-center"
                value={course.grade}
                onChange={(e) => handleCourseChange(index, 'grade', e.target.value)}
                placeholder="Ex: 10"
              />
            </div>
            <div className="flex-1 w-full">
              <label className="block text-sm font-semibold mb-2 text-text-muted pl-2">Credits</label>
              <input
                type="number"
                className="w-full p-3 bg-secondary-bg border border-transparent rounded-full outline-none focus:border-primary focus:bg-white transition-all font-medium text-center"
                value={course.credits}
                onChange={(e) => handleCourseChange(index, 'credits', e.target.value)}
                placeholder="Ex: 4"
              />
            </div>
            <button onClick={() => deleteCourse(index)} className="p-3 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors w-full sm:w-auto flex justify-center" title="Delete Course">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-1 1-1h6c1 0 1 1 1 1v2" /><line x1="10" y1="11" x2="10" y2="17" /><line x1="14" y1="11" x2="14" y2="17" /></svg>
            </button>
          </div>
        ))}

        <button onClick={addCourse} className="w-full py-4 bg-secondary-bg hover:bg-border-color text-text-main font-semibold rounded-[2rem] border-2 border-dashed border-border-color hover:border-gray-400 transition-all mb-4 mt-6 flex items-center justify-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
          Add Another Course
        </button>

        <div className="mt-8 pt-8 border-t border-border-color text-center">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
            <div>
              <h3 className="text-xl text-text-muted mb-2">{calculatorType} Score</h3>
              <div className="text-6xl font-black text-primary tracking-tight">{result.gpa}</div>
            </div>

            <div className="w-px h-24 bg-border-color hidden md:block"></div>

            <div>
              <h3 className="text-base text-text-muted mb-2">Total Credits</h3>
              <div className="text-5xl font-black text-text-main tracking-tight">{result.totalCredits}</div>
            </div>
          </div>

          {calculatorType === 'CGPA' && (
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary-bg rounded-full text-sm font-medium text-text-muted mt-6">
              <span>KLU Equivalent Percentage:</span>
              <span className="text-text-main font-bold">{result.percentage}%</span>
            </div>
          )}
        </div>
      </div>


    </div>
  );
};

export default SgpaCgpaCalculator;
