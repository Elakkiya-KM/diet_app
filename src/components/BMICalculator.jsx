// src/components/BMICalculator.jsx
// import React from 'react';

// const BMICalculator = () => {
//   // Implement BMI calculation logic here
  
//   return (
//     <div className="bmi-calculator">
//       {/* Add BMI calculator UI here */}
//       <h2>BMI Calculator</h2>
//     </div>
//   );
// };

// export default BMICalculator;
import React, { useState } from 'react';

function BMICalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBMI(bmiValue.toFixed(2));
  };

  return (
    <div className="bmi-calculator">
      <h2>BMI Calculator</h2>
      <div>
        <label>Height (in cm):</label>
        <input 
          type="number" 
          value={height} 
          onChange={(e) => setHeight(e.target.value)} 
        />
      </div>
      <div>
        <label>Weight (in kg):</label>
        <input 
          type="number" 
          value={weight} 
          onChange={(e) => setWeight(e.target.value)} 
        />
      </div>
      <button onClick={calculateBMI}>Calculate BMI</button>
      {bmi && <p>Your BMI is: {bmi}</p>}
    </div>
  );
}

export default BMICalculator;

