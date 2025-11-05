import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Download, Mail, ArrowLeft, ArrowRight } from 'lucide-react';

interface UserDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  country: string;
}

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
  userDetails: UserDetails;
}

interface EmissionResults {
  totalEmissions: number;
  breakdown: { category: string; emissions: number }[];
}

const CarbonCalculator = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [calculatorData, setCalculatorData] = useState<CalculatorData>({
    electricity: { usage: 0, unit: 'kWh' },
    transportation: { carMileage: 0, fuelType: 'petrol', publicTransport: 0, flights: 0 },
    housing: { heating: 0, heatingType: 'natural_gas', householdSize: 1 },
    userDetails: { firstName: '', lastName: '', email: '', phone: '', company: '', country: '' }
  });

  const [results, setResults] = useState<EmissionResults | null>(null);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState('');
  const pdfRef = useRef<HTMLDivElement>(null);

  const COLORS = ['#10b981', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6'];

  const calculateEmissions = () => {
    const factors = {
      electricity: 0.233,
      petrol: 2.31,
      diesel: 2.68,
      natural_gas: 0.185,
      heating_oil: 2.68,
      flight: 0.115,
      public_transport: 0.05
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
        { category: 'Car Travel', emissions: carEmissions },
        { category: 'Public Transport', emissions: transportEmissions },
        { category: 'Flights', emissions: flightEmissions },
        { category: 'Heating', emissions: heatingEmissions }
      ].filter(item => item.emissions > 0)
    });
  };

  const handleNext = () => {
    if (currentStep === 4) {
      const { firstName, lastName, email } = calculatorData.userDetails;
      if (!firstName || !lastName || !email) {
        alert('Please fill in all required fields (First Name, Last Name, and Email)');
        return;
      }
      if (!validateEmail(email)) {
        alert('Please enter a valid email address');
        return;
      }
    }

    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateEmissions();
      setCurrentStep(5);
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

  const generatePDF = async (forEmail = false): Promise<Blob | null> => {
    if (!pdfRef.current) return null;
    
    setIsGeneratingPDF(true);
    
    try {
      const html2canvas = (await import('html2canvas')).default;
      const { jsPDF } = await import('jspdf');
      
      const canvas = await html2canvas(pdfRef.current, {
        scale: 2,
        useCORS: true,
        logging: false,
        scrollY: -window.scrollY,
        windowHeight: pdfRef.current.scrollHeight,
        height: pdfRef.current.scrollHeight,
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      let heightLeft = pdfHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, pdfHeight);
      heightLeft -= pdf.internal.pageSize.getHeight();

      while (heightLeft >= 0) {
        position = heightLeft - pdfHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, pdfHeight);
        heightLeft -= pdf.internal.pageSize.getHeight();
      }

      if (!forEmail) {
        pdf.save('carbon-footprint-report.pdf');
        return null;
      } else {
        const pdfBlob = pdf.output('blob');
        return pdfBlob;
      }
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
      return null;
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  const sendEmailWithPDF = async () => {
    if (!email) {
      setEmailError('Please enter your email address');
      return;
    }

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    setIsSendingEmail(true);
    setEmailError('');

    try {
      const pdfBlob = await generatePDF(true);
      
      if (!pdfBlob) {
        throw new Error('Failed to generate PDF');
      }

      const formData = new FormData();
      formData.append('email', email);
      formData.append('pdf', pdfBlob, 'carbon-footprint-report.pdf');
      formData.append('totalEmissions', results?.totalEmissions.toString() || '0');
      formData.append('subject', 'Your Carbon Footprint Report from NetZero Energy Experts');

      const response = await fetch('/api/send-report', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setEmailSent(true);
        setEmail('');
        setTimeout(() => setEmailSent(false), 5000);
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setEmailError('Failed to send email. Please try again or download the report directly.');
    } finally {
      setIsSendingEmail(false);
    }
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const resetCalculator = () => {
    setCurrentStep(1);
    setResults(null);
    setCalculatorData({
      electricity: { usage: 0, unit: 'kWh' },
      transportation: { carMileage: 0, fuelType: 'petrol', publicTransport: 0, flights: 0 },
      housing: { heating: 0, heatingType: 'natural_gas', householdSize: 1 },
      userDetails: { firstName: '', lastName: '', email: '', phone: '', company: '', country: '' }
    });
    setEmail('');
    setEmailSent(false);
    setEmailError('');

    const calculatorElement = document.getElementById('carbon-calculator');
    if (calculatorElement) {
      calculatorElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderCustomizedLabel = ({
    cx, cy, midAngle, innerRadius, outerRadius, percent
  }: any) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text 
        x={x} 
        y={y} 
        fill="white" 
        textAnchor={x > cx ? 'start' : 'end'} 
        dominantBaseline="central"
        fontSize={12}
        fontWeight="bold"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div id="carbon-calculator" className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12">
      <div className="container mx-auto px-4">
        <Card className="shadow-lg max-w-5xl mx-auto">
          <CardContent className="p-6">
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <span className={`text-xs sm:text-sm font-medium ${currentStep >= 1 ? 'text-green-600' : 'text-gray-400'}`}>Electricity</span>
                <span className={`text-xs sm:text-sm font-medium ${currentStep >= 2 ? 'text-green-600' : 'text-gray-400'}`}>Transportation</span>
                <span className={`text-xs sm:text-sm font-medium ${currentStep >= 3 ? 'text-green-600' : 'text-gray-400'}`}>Housing</span>
                <span className={`text-xs sm:text-sm font-medium ${currentStep >= 4 ? 'text-green-600' : 'text-gray-400'}`}>Your Details</span>
                <span className={`text-xs sm:text-sm font-medium ${currentStep >= 5 ? 'text-green-600' : 'text-gray-400'}`}>Results</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-green-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(Math.min(currentStep, 5) / 5) * 100}%` }}
                ></div>
              </div>
            </div>

            {currentStep === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Electricity Usage</h2>
                <div className="space-y-4">
                  <div>
                    <Label className="block text-sm font-medium text-gray-700 mb-2">
                      Monthly Electricity Usage
                    </Label>
                    <Input
                      type="number"
                      value={calculatorData.electricity.usage || ''}
                      onChange={(e) => updateData('electricity', 'usage', parseFloat(e.target.value) || 0)}
                      className="w-full"
                      placeholder="Enter your monthly electricity usage"
                    />
                  </div>
                  <div>
                    <Label className="block text-sm font-medium text-gray-700 mb-2">
                      Unit
                    </Label>
                    <Select
                      value={calculatorData.electricity.unit}
                      onValueChange={(value: 'kWh' | 'mwh') => updateData('electricity', 'unit', value)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="kWh">kWh (Kilowatt-hours)</SelectItem>
                        <SelectItem value="mwh">MWh (Megawatt-hours)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Transportation</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label className="block text-sm font-medium text-gray-700 mb-2">
                      Monthly Car Mileage (km)
                    </Label>
                    <Input
                      type="number"
                      value={calculatorData.transportation.carMileage || ''}
                      onChange={(e) => updateData('transportation', 'carMileage', parseFloat(e.target.value) || 0)}
                      placeholder="0"
                    />
                  </div>
                  <div>
                    <Label className="block text-sm font-medium text-gray-700 mb-2">
                      Fuel Type
                    </Label>
                    <Select
                      value={calculatorData.transportation.fuelType}
                      onValueChange={(value: 'petrol' | 'diesel' | 'electric') => updateData('transportation', 'fuelType', value)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="petrol">Petrol</SelectItem>
                        <SelectItem value="diesel">Diesel</SelectItem>
                        <SelectItem value="electric">Electric</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="block text-sm font-medium text-gray-700 mb-2">
                      Monthly Public Transport (km)
                    </Label>
                    <Input
                      type="number"
                      value={calculatorData.transportation.publicTransport || ''}
                      onChange={(e) => updateData('transportation', 'publicTransport', parseFloat(e.target.value) || 0)}
                      placeholder="0"
                    />
                  </div>
                  <div>
                    <Label className="block text-sm font-medium text-gray-700 mb-2">
                      Monthly Flight Distance (km)
                    </Label>
                    <Input
                      type="number"
                      value={calculatorData.transportation.flights || ''}
                      onChange={(e) => updateData('transportation', 'flights', parseFloat(e.target.value) || 0)}
                      placeholder="0"
                    />
                  </div>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Housing</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label className="block text-sm font-medium text-gray-700 mb-2">
                      Monthly Heating Usage (kWh)
                    </Label>
                    <Input
                      type="number"
                      value={calculatorData.housing.heating || ''}
                      onChange={(e) => updateData('housing', 'heating', parseFloat(e.target.value) || 0)}
                      placeholder="0"
                    />
                  </div>
                  <div>
                    <Label className="block text-sm font-medium text-gray-700 mb-2">
                      Heating Type
                    </Label>
                    <Select
                      value={calculatorData.housing.heatingType}
                      onValueChange={(value: 'natural_gas' | 'electric' | 'oil') => updateData('housing', 'heatingType', value)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="natural_gas">Natural Gas</SelectItem>
                        <SelectItem value="electric">Electric</SelectItem>
                        <SelectItem value="oil">Oil</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="block text-sm font-medium text-gray-700 mb-2">
                      Household Size
                    </Label>
                    <Input
                      type="number"
                      value={calculatorData.housing.householdSize}
                      onChange={(e) => updateData('housing', 'householdSize', parseInt(e.target.value) || 1)}
                      min="1"
                    />
                  </div>
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-semibold mb-2 text-gray-800">Your Details</h2>
                  <p className="text-gray-600">Please provide your information to receive your carbon footprint report</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      type="text"
                      value={calculatorData.userDetails.firstName}
                      onChange={(e) => updateData('userDetails', 'firstName', e.target.value)}
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <Label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      type="text"
                      value={calculatorData.userDetails.lastName}
                      onChange={(e) => updateData('userDetails', 'lastName', e.target.value)}
                      placeholder="Doe"
                      required
                    />
                  </div>
                  <div>
                    <Label className="block text-sm font-medium text-gray-700 mb-2">
                      Email <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      type="email"
                      value={calculatorData.userDetails.email}
                      onChange={(e) => updateData('userDetails', 'email', e.target.value)}
                      placeholder="john.doe@example.com"
                      required
                    />
                  </div>
                  <div>
                    <Label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </Label>
                    <Input
                      type="tel"
                      value={calculatorData.userDetails.phone}
                      onChange={(e) => updateData('userDetails', 'phone', e.target.value)}
                      placeholder="+44 20 1234 5678"
                    />
                  </div>
                  <div>
                    <Label className="block text-sm font-medium text-gray-700 mb-2">
                      Company/Organization
                    </Label>
                    <Input
                      type="text"
                      value={calculatorData.userDetails.company}
                      onChange={(e) => updateData('userDetails', 'company', e.target.value)}
                      placeholder="NetZero Energy Experts"
                    />
                  </div>
                  <div>
                    <Label className="block text-sm font-medium text-gray-700 mb-2">
                      Country
                    </Label>
                    <Input
                      type="text"
                      value={calculatorData.userDetails.country}
                      onChange={(e) => updateData('userDetails', 'country', e.target.value)}
                      placeholder="United Kingdom"
                    />
                  </div>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                  <p className="text-sm text-blue-800">
                    <span className="font-semibold">Privacy Notice:</span> Your information will be used solely to provide you with your carbon footprint report. We respect your privacy and will not share your data with third parties.
                  </p>
                </div>
              </div>
            )}

            {currentStep === 5 && results && (
              <div className="space-y-8">
                <div ref={pdfRef} className="space-y-8">
                  <div className="text-center">
                    <h2 className="text-3xl font-bold mb-2 text-gray-800">Your Carbon Footprint</h2>
                    <p className="text-gray-600">Complete analysis of your monthly emissions</p>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-8">
                    <div className="text-center mb-6">
                      <div className="text-5xl font-bold text-green-700 mb-2">
                        {results.totalEmissions.toFixed(2)} kg CO₂
                      </div>
                      <p className="text-green-600 text-lg">Monthly Carbon Emissions</p>
                      <p className="text-gray-600 mt-2">
                        Annual Projection: <span className="font-semibold">{(results.totalEmissions * 12).toFixed(2)} kg CO₂</span>
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h3 className="font-semibold text-lg mb-4 text-gray-800">Emissions Distribution</h3>
                      <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                          <Pie
                            data={results.breakdown}
                            cx="50%"
                            cy="50%"
                            outerRadius={100}
                            fill="#8884d8"
                            dataKey="emissions"
                            label={renderCustomizedLabel}
                            labelLine={false}
                          >
                            {results.breakdown.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip 
                            formatter={(value: number) => [`${value.toFixed(2)} kg CO₂`, 'Emissions']}
                          />
                          <Legend 
                            layout="vertical" 
                            verticalAlign="middle" 
                            align="right"
                            wrapperStyle={{
                              paddingLeft: '20px'
                            }}
                          />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-6">
                      <h3 className="font-semibold text-lg mb-4 text-gray-800">Emissions by Category</h3>
                      <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={results.breakdown}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="category" angle={-45} textAnchor="end" height={80} />
                          <YAxis />
                          <Tooltip formatter={(value: number) => [`${value.toFixed(2)} kg CO₂`, 'Emissions']} />
                          <Bar dataKey="emissions" fill="#10b981" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="font-semibold text-lg mb-4 text-gray-800">Detailed Breakdown</h3>
                    <div className="space-y-3">
                      {results.breakdown.map((item, index) => (
                        <div key={index} className="flex justify-between items-center p-3 bg-white rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div 
                              className="w-4 h-4 rounded" 
                              style={{ backgroundColor: COLORS[index % COLORS.length] }}
                            ></div>
                            <span className="font-medium text-gray-700">{item.category}</span>
                          </div>
                          <span className="font-semibold text-green-700">{item.emissions.toFixed(2)} kg CO₂</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                    <h4 className="font-semibold text-amber-900 text-lg mb-3">💡 Recommendations to Reduce Your Footprint</h4>
                    <ul className="text-amber-800 space-y-2">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Switch to renewable energy sources to reduce electricity emissions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Use public transportation or carpool when possible</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Improve home insulation to reduce heating needs</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Consider energy-efficient appliances and LED lighting</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Reduce air travel and consider video conferencing alternatives</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Adopt a plant-based diet to reduce food-related emissions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Regular vehicle maintenance improves fuel efficiency</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                    <h4 className="font-semibold text-blue-900 text-lg mb-3">📋 Your Input Data</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <strong>Electricity:</strong> {calculatorData.electricity.usage} {calculatorData.electricity.unit}
                      </div>
                      <div>
                        <strong>Car Mileage:</strong> {calculatorData.transportation.carMileage} km ({calculatorData.transportation.fuelType})
                      </div>
                      <div>
                        <strong>Public Transport:</strong> {calculatorData.transportation.publicTransport} km
                      </div>
                      <div>
                        <strong>Flights:</strong> {calculatorData.transportation.flights} km
                      </div>
                      <div>
                        <strong>Heating:</strong> {calculatorData.housing.heating} kWh ({calculatorData.housing.heatingType})
                      </div>
                      <div>
                        <strong>Household Size:</strong> {calculatorData.housing.householdSize}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h4 className="font-semibold text-blue-900 text-lg mb-4">📊 Save Your Results</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button
                      onClick={() => generatePDF(false)}
                      disabled={isGeneratingPDF}
                      className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                      {isGeneratingPDF ? (
                        'Generating PDF...'
                      ) : (
                        <>
                          <Download className="w-5 h-5" />
                          Download Report (PDF)
