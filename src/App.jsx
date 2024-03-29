// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import LoginForm from './components/Loginform';
import BMICalculator from './components/BMICalculator';
import PricePlanCard from './components/PriceplanCard';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import './App.css';

function App() {
  const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    },
    {
    path: "/Priceplan",
    element:<div className="price-plans">
        <PricePlanCard
          planName="Basic Plan"
          price="$9.99/month"
          features={["Feature 1", "Feature 2", "Feature 3"]}
        />
        <PricePlanCard
          planName="Premium Plan"
          price="$19.99/month"
          features={["All features from Basic", "Additional feature 1", "Additional feature 2"]}
        />
      </div>,
    },
    {
    path: "/Login",
    element: <LoginForm />,
    },
    {
    path: "/BMI",
    element: <BMICalculator />,
    },
]);
  return (
    <div>
      <Navbar />
       <RouterProvider router={router} />
      {/* <Navbar />
      
      
      <BMICalculator />
      <div className="price-plans">
        <PricePlanCard
          planName="Basic Plan"
          price="$9.99/month"
          features={["Feature 1", "Feature 2", "Feature 3"]}
        />
        <PricePlanCard
          planName="Premium Plan"
          price="$19.99/month"
          features={["All features from Basic", "Additional feature 1", "Additional feature 2"]}
        />
      </div> */}
    </div>
  );
}

export default App;
