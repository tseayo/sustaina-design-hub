// src/components/CarbonCalculator.tsx
import { useState } from 'react';

interface CalculatorData {
  electricity: {
    usage: number;
    unit: 'kWh' | 'mwh';
  };
  transportation: {
    carMileage: number;
    fuelType: 'petrol' | 'diesel' | 'electric';
    publicTransport: number;
    flights: number;
  };
  housing: {
    heating: number;
    heatingType: 'natural_gas' | 'electric' | 'oil';
    householdSize: number;
  };
}

export default function CarbonCalculator() {
  const [currentStep, setCurrentStep] = useState(1);
  const [calculatorData, setCalculatorData] = useState<CalculatorData>({
    electricity: { usage: 0, unit: 'kWh' },
    transportation: { carMileage: 0, fuelType: 'petrol', publicTransport: 0, flights: 0 },
    housing: { heating: 0, heatingType: 'natural_gas', householdSize: 1 }
  });

  const [results, setResults] = useState<{
    totalEmissions: number;
    breakdown: { category: string; emissions: number }[];
  } | null>(null);

  const calculateEmissions = () => {
    // Emission factors (kg CO2 per unit)
    const factors = {
      electricity: 0.233, // kg CO2 per kWh (UK average)
      petrol: 2.31, // kg CO2 per liter
      diesel: 2.68, // kg CO2 per liter
      natural_gas: 0.185, // kg CO2 per kWh
      heating_oil: 2.68, // kg CO2 per liter
      flight: 0.115, // kg CO2 per km
      public_transport: 0.05 // kg CO2 per km
    };

    const electricityEmissions = calculatorData.electricity.usage * factors.electricity;
    
    const carEmissions = calculatorData.transportation.carMileage * 
      (calculatorData.transportation.fuelType === 'petrol' ? factors.petrol : 
       calculatorData.transportation.fuelType === 'diesel' ? factors.diesel : 0);
    
    const heatingEmissions = calculatorData.housing.heating * 
      (calculatorData.housing.heatingType === 'natural_gas' ? factors.natural_gas : 
       calculatorData.housing.heatingType === 'electric' ? factors.electricity : factors.heating_oil);
    
    const flightEmissions = calculatorData.transportation.flights * factors.flight;
    const transportEmissions = calculatorData.transportation.publicTransport * factors.public_transport;

    const total = electricityEmissions + carEmissions + heatingEmissions + flightEmissions + transportEmissions;

    setResults({
      totalEmissions: total,
      breakdown: [
        { category: 'Electricity', emissions: electricityEmissions },
        { category: 'Transportation', emissions: carEmissions + transportEmissions + flightEmissions },
        { category: 'Heating', emissions: heatingEmissions }
      ]
    });
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateEmissions();
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateData = (section: keyof CalculatorData, field: string, value: any) => {
    setCalculatorData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <span className="text-sm font-medium">Electricity</span>
          <span className="text-sm font-medium">Transportation</span>
          <span className="text-sm font-medium">Housing</span>
          <span className="text-sm font-medium">Results</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-green-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / 3) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Step 1: Electricity */}
      {currentStep === 1 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold mb-4">Electricity Usage</h2>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Monthly Electricity Usage
            </label>
            <input
              type="number"
              value={calculatorData.electricity.usage}
              onChange={(e) => updateData('electricity', 'usage', parseFloat(e.target.value) || 0)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your monthly electricity usage"
            />
            <select
              value={calculatorData.electricity.unit}
              onChange={(e) => updateData('electricity', 'unit', e.target.value)}
              className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="kWh">kWh</option>
              <option value="mwh">MWh</option>
            </select>
          </div>
        </div>
      )}

      {/* Step 2: Transportation */}
      {currentStep === 2 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold mb-4">Transportation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Monthly Car Mileage (km)
              </label>
              <input
                type="number"
                value={calculatorData.transportation.carMileage}
                onChange={(e) => updateData('transportation', 'carMileage', parseFloat(e.target.value) || 0)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Fuel Type
              </label>
              <select
                value={calculatorData.transportation.fuelType}
                onChange={(e) => updateData('transportation', 'fuelType', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="petrol">Petrol</option>
                <option value="diesel">Diesel</option>
                <option value="electric">Electric</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Monthly Public Transport (km)
              </label>
              <input
                type="number"
                value={calculatorData.transportation.publicTransport}
                onChange={(e) => updateData('transportation', 'publicTransport', parseFloat(e.target.value) || 0)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Monthly Flight Distance (km)
              </label>
              <input
                type="number"
                value={calculatorData.transportation.flights}
                onChange={(e) => updateData('transportation', 'flights', parseFloat(e.target.value) || 0)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
        </div>
      )}

      {/* Step 3: Housing */}
      {currentStep === 3 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold mb-4">Housing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Monthly Heating Usage (kWh)
              </label>
              <input
                type="number"
                value={calculatorData.housing.heating}
                onChange={(e) => updateData('housing', 'heating', parseFloat(e.target.value) || 0)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Heating Type
              </label>
              <select
                value={calculatorData.housing.heatingType}
                onChange={(e) => updateData('housing', 'heatingType', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="natural_gas">Natural Gas</option>
                <option value="electric">Electric</option>
                <option value="oil">Oil</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Household Size
              </label>
              <input
                type="number"
                value={calculatorData.housing.householdSize}
                onChange={(e) => updateData('housing', 'householdSize', parseInt(e.target.value) || 1)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                min="1"
              />
            </div>
          </div>
        </div>
      )}

      {/* Results */}
      {results && (
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold mb-4">Your Carbon Footprint</h2>
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-green-700 mb-2">
                {results.totalEmissions.toFixed(2)} kg CO₂
              </div>
              <p className="text-green-600">Monthly Carbon Emissions</p>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Breakdown</h3>
              {results.breakdown.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span>{item.category}</span>
                  <span className="font-semibold">{item.emissions.toFixed(2)} kg CO₂</span>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">Recommendations</h4>
              <ul className="text-yellow-700 text-sm space-y-1">
                <li>• Switch to renewable energy sources</li>
                <li>• Use public transportation when possible</li>
                <li>• Improve home insulation</li>
                <li>• Consider energy-efficient appliances</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8">
        <button
          onClick={handleBack}
          disabled={currentStep === 1}
          className={`px-6 py-2 rounded-lg font-medium ${
            currentStep === 1 
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
              : 'bg-gray-500 text-white hover:bg-gray-600'
          }`}
        >
          Back
        </button>
        
        <button
          onClick={handleNext}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium"
        >
          {currentStep === 3 ? 'Calculate' : 'Next'}
        </button>
      </div>
    </div>
  );
}
