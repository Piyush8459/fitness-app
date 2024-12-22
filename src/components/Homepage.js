import React, { useState } from 'react';
import './Homepage.css'; // Import the CSS file for styling

const Homepage = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [bmiCategory, setBmiCategory] = useState('');

  const calculateBMI = () => {
    if (weight > 0 && height > 0) {
      const bmiValue = (weight / ((height / 100) ** 2)).toFixed(2);
      setBmi(bmiValue);
      if (bmiValue < 18.5) {
        setBmiCategory('Underweight');
      } else if (bmiValue < 24.9) {
        setBmiCategory('Normal weight');
      } else {
        setBmiCategory('Overweight');
      }
    } else {
      alert('Please enter valid inputs for weight and height');
    }
  };

  return (
    <div className="homepage-container">
      <div className="welcome-container">
        <h1 className="welcome-text">Welcome to PJFitness</h1>
      </div>

      <div className="bmi-container">
        <h2>BMI Calculator</h2>
        <div className="form-group">
          <label>Weight (kg):</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter your weight"
          />
        </div>

        <div className="form-group">
          <label>Height (cm):</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Enter your height"
          />
        </div>

        <button className="calculate-btn" onClick={calculateBMI}>
          Calculate BMI
        </button>

        {bmi && (
          <div className="bmi-result">
            <h3>Your BMI: {bmi}</h3>
            <p>Category: {bmiCategory}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Homepage;
