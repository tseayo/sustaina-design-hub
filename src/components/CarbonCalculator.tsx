import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

interface EmissionResults {
  total: number;
  breakdown: Array<{
    name: string;
    value: number;
    color: string;
  }>;
  monthly: number;
  equivalent: string;
}

const CarbonCalculator = () => {
  const [formData, setFormData] = useState({
    electricity: '',
    gas: '',
    vehicle: '',
    flights: '',
    diet: 'average'
  });
  const [results, setResults] = useState<EmissionResults | null>(null);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const pdfRef = useRef<HTMLDivElement>(null);

  const emissionFactors = {
    electricity: 0.5, // kg CO2 per kWh
    gas: 2.2, // kg CO2 per therm
    vehicle: 2.3, // kg CO2 per liter
    flights: 90, // kg CO2 per hour
  };

  const dietFactors: Record<string, number> = {
    vegetarian: 1200,
    average: 1600,
    meatHeavy: 2200,
  };

  const calculateEmissions = () => {
    const electricityEmissions = parseFloat(formData.electricity || '0') * emissionFactors.electricity;
    const gasEmissions = parseFloat(formData.gas || '0') * emissionFactors.gas;
    const vehicleEmissions = parseFloat(formData.vehicle || '0') * emissionFactors.vehicle;
    const flightEmissions = parseFloat(formData.flights || '0') * emissionFactors.flights;
    const dietEmissions = dietFactors[formData.diet] || 0;

    const totalEmissions = electricityEmissions + gasEmissions + vehicleEmissions + flightEmissions + dietEmissions;

    const breakdown = [
      { name: 'Electricity', value: Math.round(electricityEmissions), color: '#8884d8' },
      { name: 'Natural Gas', value: Math.round(gasEmissions), color: '#82ca9d' },
      { name: 'Vehicle', value: Math.round(vehicleEmissions), color: '#ffc658' },
      { name: 'Flights', value: Math.round(flightEmissions), color: '#ff8042' },
      { name: 'Diet', value: Math.round(dietEmissions), color: '#0088fe' },
    ];

    setResults({
      total: Math.round(totalEmissions),
      breakdown,
      monthly: Math.round(totalEmissions / 12),
      equivalent: (totalEmissions / 2000).toFixed(1),
    });
  };

  const generatePDF = async () => {
    if (!pdfRef.current) return;
    
    setIsGeneratingPDF(true);
    
    try {
      // Dynamic imports to avoid build issues
      const html2canvas = (await import('html2canvas')).default;
      const { jsPDF } = await import('jspdf');
      
      const canvas = await html2canvas(pdfRef.current, {
        scale: 2,
        useCORS: true,
        logging: false,
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('carbon-emission-report.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#0088fe'];

  const hasFormData = formData.electricity || formData.gas || formData.vehicle || formData.flights;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Carbon Emission Calculator
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Calculate your carbon footprint and discover ways to reduce your environmental impact
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Input Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Your Energy Usage</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="electricity">Monthly Electricity (kWh)</Label>
                <Input
                  id="electricity"
                  type="number"
                  value={formData.electricity}
                  onChange={(e) => setFormData({ ...formData, electricity: e.target.value })}
                  placeholder="e.g., 300"
                  min="0"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="gas">Monthly Natural Gas (therms)</Label>
                <Input
                  id="gas"
                  type="number"
                  value={formData.gas}
                  onChange={(e) => setFormData({ ...formData, gas: e.target.value })}
                  placeholder="e.g., 50"
                  min="0"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="vehicle">Monthly Vehicle Fuel (liters)</Label>
                <Input
                  id="vehicle"
                  type="number"
                  value={formData.vehicle}
                  onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                  placeholder="e.g., 100"
                  min="0"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="flights">Annual Flight Hours</Label>
                <Input
                  id="flights"
                  type="number"
                  value={formData.flights}
                  onChange={(e) => setFormData({ ...formData, flights: e.target.value })}
                  placeholder="e.g., 10"
                  min="0"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="diet">Diet Type</Label>
                <Select value={formData.diet} onValueChange={(value) => setFormData({ ...formData, diet: value })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="vegetarian">Vegetarian</SelectItem>
                    <SelectItem value="average">Average</SelectItem>
                    <SelectItem value="meatHeavy">Meat-Heavy</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                onClick={calculateEmissions} 
                className="w-full bg-green-600 hover:bg-green-700"
                disabled={!hasFormData}
              >
                Calculate Carbon Footprint
              </Button>
            </CardContent>
          </Card>

          {/* Results Section */}
          {results && (
            <div className="space-y-6">
              <Card className="shadow-lg" ref={pdfRef}>
                <CardHeader className="bg-gradient-to-r from-green-500 to-blue-500 text-white">
                  <CardTitle className="text-2xl">Your Carbon Emission Report</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  {/* Total Emissions */}
                  <div className="text-center mb-8">
                    <h3 className="text-lg text-gray-600 mb-2">Total Annual Carbon Emissions</h3>
                    <div className="text-4xl font-bold text-green-600">
                      {results.total.toLocaleString()} kg CO₂
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                      Equivalent to driving {results.equivalent} cars for a year
                    </p>
                    <p className="text-sm text-gray-500">
                      Monthly average: {results.monthly.toLocaleString()} kg CO₂
                    </p>
                  </div>

                  {/* Charts Section */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Bar Chart */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg">Emissions by Category</h4>
                      <ResponsiveContainer width="100%" height={200}>
                        <BarChart data={results.breakdown}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip 
                            formatter={(value: number) => [`${value.toLocaleString()} kg CO₂`, 'Emissions']}
                          />
                          <Legend />
                          <Bar dataKey="value" name="Emissions (kg CO₂)">
                            {results.breakdown.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    </div>

                    {/* Pie Chart */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg">Emissions Distribution</h4>
                      <ResponsiveContainer width="100%" height={200}>
                        <PieChart>
                          <Pie
                            data={results.breakdown}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {results.breakdown.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip 
                            formatter={(value: number) => [`${value.toLocaleString()} kg CO₂`, 'Emissions']}
                          />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Detailed Breakdown */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-lg">Detailed Breakdown</h4>
                    {results.breakdown.map((item, index) => (
                      <div key={item.name} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div 
                            className="w-4 h-4 rounded" 
                            style={{ backgroundColor: item.color }}
                          ></div>
                          <span className="font-medium">{item.name}</span>
                        </div>
                        <span className="font-semibold">{item.value.toLocaleString()} kg CO₂</span>
                      </div>
                    ))}
                  </div>

                  {/* Recommendations */}
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-lg text-blue-900 mb-2">Reduction Recommendations</h4>
                    <ul className="list-disc list-inside space-y-1 text-blue-800">
                      <li>Switch to renewable energy sources</li>
                      <li>Use public transportation or electric vehicles</li>
                      <li>Reduce air travel when possible</li>
                      <li>Adopt a plant-based diet</li>
                      <li>Improve home insulation</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={generatePDF} 
                  disabled={isGeneratingPDF}
                  className="flex-1 bg-green-600 hover:bg-green-700"
                >
                  {isGeneratingPDF ? 'Generating PDF...' : 'Download Full Report (PDF)'}
                </Button>
                <Button variant="outline" className="flex-1">
                  Contact Our Experts
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Information Section */}
        {!results && (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="text-center p-6">
              <div className="text-3xl mb-4">🌱</div>
              <h3 className="font-semibold text-lg mb-2">Calculate Impact</h3>
              <p className="text-gray-600">Understand your carbon footprint across different activities</p>
            </Card>
            <Card className="text-center p-6">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="font-semibold text-lg mb-2">Visualize Data</h3>
              <p className="text-gray-600">See detailed breakdowns with interactive charts and graphs</p>
            </Card>
            <Card className="text-center p-6">
              <div className="text-3xl mb-4">📄</div>
              <h3 className="font-semibold text-lg mb-2">Export Reports</h3>
              <p className="text-gray-600">Generate comprehensive PDF reports with charts included</p>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarbonCalculator;
