import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Download, Mail, Check, ArrowLeft, ArrowRight, User, Building, Phone } from 'lucide-react';

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

interface UserDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  jobTitle: string;
  consent: boolean;
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
    housing: { heating: 0, heatingType: 'natural_gas', householdSize: 1 }
  });

  const [userDetails, setUserDetails] = useState<UserDetails>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    consent: false
  });

  const [results, setResults] = useState<EmissionResults | null>(null);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [isSendingEmail, setIsSendingEmail] = useState(false);
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
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else if (currentStep === 3) {
      // After housing data, move to user details instead of calculating
      setCurrentStep(4);
    } else if (currentStep === 4) {
      // After user details, calculate and show results
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

  const updateUserDetails = (field: keyof UserDetails, value: any) => {
    setUserDetails(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const validateUserDetails = (): boolean => {
    const { firstName, lastName, email, consent } = userDetails;
    if (!firstName.trim() || !lastName.trim() || !email.trim() || !consent) {
      return false;
    }
    if (!validateEmail(email)) {
      return false;
    }
    return true;
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
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
    setIsSendingEmail(true);
    setEmailError('');

    try {
      const pdfBlob = await generatePDF(true);
      
      if (!pdfBlob) {
        throw new Error('Failed to generate PDF');
      }

      const formData = new FormData();
      formData.append('email', userDetails.email);
      formData.append('pdf', pdfBlob, 'carbon-footprint-report.pdf');
      formData.append('totalEmissions', results?.totalEmissions.toString() || '0');
      formData.append('subject', 'Your Carbon Footprint Report from NetZero Energy Experts');
      formData.append('firstName', userDetails.firstName);
      formData.append('lastName', userDetails.lastName);

      const response = await fetch('/api/send-report', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setEmailSent(true);
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

  const resetCalculator = () => {
    setCurrentStep(1);
    setResults(null);
    setCalculatorData({
      electricity: { usage: 0, unit: 'kWh' },
      transportation: { carMileage: 0, fuelType: 'petrol', publicTransport: 0, flights: 0 },
      housing: { heating: 0, heatingType: 'natural_gas', householdSize: 1 }
    });
    setUserDetails({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      jobTitle: '',
      consent: false
    });
    setEmailSent(false);
    setEmailError('');

    const calculatorElement = document.getElementById('carbon-calculator');
    if (calculatorElement) {
      calculatorElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderCustomizedLabel = ({
    cx, cy, midAngle, innerRadius, outerRadius, percent, index
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
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <span className={`text-sm font-medium ${currentStep >= 1 ? 'text-green-600' : 'text-gray-400'}`}>Electricity</span>
                <span className={`text-sm font-medium ${currentStep >= 2 ? 'text-green-600' : 'text-gray-400'}`}>Transportation</span>
                <span className={`text-sm font-medium ${currentStep >= 3 ? 'text-green-600' : 'text-gray-400'}`}>Housing</span>
                <span className={`text-sm font-medium ${currentStep >= 4 ? 'text-green-600' : 'text-gray-400'}`}>Your Details</span>
                <span className={`text-sm font-medium ${currentStep >= 5 ? 'text-green-600' : 'text-gray-400'}`}>Results</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-green-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(Math.min(currentStep, 5) / 5) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Step 1: Electricity */}
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
                      className="w-full"
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

            {/* Step 2: Transportation */}
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

            {/* Step 3: Housing */}
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

            {/* Step 4: User Details */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <User className="w-12 h-12 text-green-600 mx-auto mb-3" />
                  <h2 className="text-2xl font-semibold text-gray-800">Almost There!</h2>
                  <p className="text-gray-600">Please provide your details to receive your personalized carbon footprint report</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </Label>
                    <Input
                      type="text"
                      value={userDetails.firstName}
                      onChange={(e) => updateUserDetails('firstName', e.target.value)}
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <Label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </Label>
                    <Input
                      type="text"
                      value={userDetails.lastName}
                      onChange={(e) => updateUserDetails('lastName', e.target.value)}
                      placeholder="Doe"
                      required
                    />
                  </div>
                  <div>
                    <Label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </Label>
                    <Input
                      type="email"
                      value={userDetails.email}
                      onChange={(e) => updateUserDetails('email', e.target.value)}
                      placeholder="john.doe@company.com"
                      required
                    />
                  </div>
                  <div>
                    <Label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </Label>
                    <Input
                      type="tel"
                      value={userDetails.phone}
                      onChange={(e) => updateUserDetails('phone', e.target.value)}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <Label className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </Label>
                    <Input
                      type="text"
                      value={userDetails.company}
                      onChange={(e) => updateUserDetails('company', e.target.value)}
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <Label className="block text-sm font-medium text-gray-700 mb-2">
                      Job Title
                    </Label>
                    <Input
                      type="text"
                      value={userDetails.jobTitle}
                      onChange={(e) => updateUserDetails('jobTitle', e.target.value)}
                      placeholder="Your position"
                    />
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="consent"
                      checked={userDetails.consent}
                      onChange={(e) => updateUserDetails('consent', e.target.checked)}
                      className="mt-1"
                      required
                    />
                    <label htmlFor="consent" className="text-sm text-gray-700">
                      I consent to receive my carbon footprint report and agree to the processing of my personal data in accordance with the privacy policy. I understand that I may be contacted by NetZero Energy Experts to discuss energy efficiency solutions.*
                    </label>
                  </div>
                </div>

                {!validateUserDetails() && (
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <p className="text-amber-800 text-sm">
                      Please fill in all required fields (marked with *) and accept the consent to continue.
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Step 5: Results */}
            {currentStep === 5 && results && (
              <div className="space-y-8">
                <div ref={pdfRef} className="space-y-8">
                  {/* ... (keep all your existing results JSX exactly as it was) ... */}
                  {/* This includes the summary card, charts, breakdown table, recommendations, and input data summary */}
                </div>

                {/* Download and Email Section */}
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
                        </>
                      )}
                    </Button>

                    <div className="space-y-3">
                      {emailSent ? (
                        <div className="text-center p-4 bg-green-100 rounded-lg">
                          <p className="text-green-700 font-medium">
                            ✅ Report sent successfully! Check your email.
                          </p>
                        </div>
                      ) : (
                        <>
                          <div className="flex gap-2">
                            <div className="flex-1 bg-white rounded-lg border border-gray-300 px-4 py-2">
                              <p className="text-sm text-gray-600">Sending to:</p>
                              <p className="font-medium">{userDetails.email}</p>
                            </div>
                            <Button
                              onClick={sendEmailWithPDF}
                              disabled={isSendingEmail}
                              className="bg-green-600 hover:bg-green-700"
                            >
                              {isSendingEmail ? (
                                'Sending...'
                              ) : (
                                <>
                                  <Mail className="w-4 h-4 mr-2" />
                                  Email
                                </>
                              )}
                            </Button>
                          </div>
                          {emailError && (
                            <p className="text-red-600 text-sm">{emailError}</p>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <Button
                    onClick={resetCalculator}
                    className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                  >
                    Calculate Again
                  </Button>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            {currentStep < 5 && (
              <div className="flex justify-between mt-8">
                <Button
                  onClick={handleBack}
                  disabled={currentStep === 1}
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </Button>
                
                <Button
                  onClick={handleNext}
                  disabled={currentStep === 4 && !validateUserDetails()}
                  className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2"
                >
                  {currentStep === 4 ? 'Get My Results' : currentStep === 3 ? 'Continue' : 'Next Step'}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CarbonCalculator;
