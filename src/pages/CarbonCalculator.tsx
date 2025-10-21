// src/pages/CarbonCalculator.tsx
import React from 'react';
import CarbonCalculator from '../components/CarbonCalculator';

const CarbonCalculatorPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Carbon Emission Calculator
          </h1>
          <p className="text-xl text-muted-foreground">
            Calculate your carbon footprint and discover ways to reduce it
          </p>
        </div>
        <CarbonCalculator />
      </div>
    </div>
  );
};

export default CarbonCalculatorPage;
