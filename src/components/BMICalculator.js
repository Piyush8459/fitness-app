// src/components/BMICalculator.js
import React, { useState } from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';

const CalculatorContainer = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  margin: 20px 0;
  border-radius: 8px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 15px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 10px 15px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  const calculateBMI = () => {
    if (weight > 0 && height > 0) {
      const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
      let result = '';
      if (bmi < 18.5) {
        result = `Your BMI is ${bmi}. You are underweight.`;
      } else if (bmi < 24.9) {
        result = `Your BMI is ${bmi}. You are in a healthy weight range.`;
      } else {
        result = `Your BMI is ${bmi}. You are overweight.`;
      }
      Swal.fire('BMI Result', result, 'success');
    } else {
      Swal.fire('Error', 'Please enter valid inputs for weight and height.', 'error');
    }
  };

  return (
    <CalculatorContainer>
      <Title>BMI Calculator</Title>
      <FormGroup>
        <Label>Weight (kg):</Label>
        <Input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Enter your weight"
        />
      </FormGroup>

      <FormGroup>
        <Label>Height (cm):</Label>
        <Input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Enter your height"
        />
      </FormGroup>

      <Button onClick={calculateBMI}>Calculate BMI</Button>
    </CalculatorContainer>
  );
};

export default BMICalculator;
