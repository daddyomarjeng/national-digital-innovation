'use client';

import { useState, FormEvent } from 'react';
import Section from '../components/ui/Section';
import SectionTitle from '../components/ui/SectionTitle';
import { ATTENDANCE_DAYS, REGISTRATION_CATEGORIES, EVENT_DATES } from '../constants';

export default function RegistrationPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    organization: '',
    position: '',
    country: 'The Gambia',
    email: '',
    phone: '',
    attendanceDays: [] as string[],
    category: '',
    specialRequirements: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const days = ATTENDANCE_DAYS;
  const categories = REGISTRATION_CATEGORIES;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleCheckboxChange = (day: string) => {
    setFormData((prev) => ({
      ...prev,
      attendanceDays: prev.attendanceDays.includes(day)
        ? prev.attendanceDays.filter((d) => d !== day)
        : [...prev.attendanceDays, day],
    }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.organization.trim()) newErrors.organization = 'Organization is required';
    if (!formData.position.trim()) newErrors.position = 'Position is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (formData.attendanceDays.length === 0) newErrors.attendanceDays = 'Select at least one day';
    if (!formData.category) newErrors.category = 'Participation category is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Simulate submission (no backend yet)
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      // Scroll to top to show success message
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (isSubmitted) {
    return (
      <>
        <Section bgColor="gradient" className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Registration Successful!</h1>
          </div>
        </Section>

        <Section bgColor="white">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You for Registering!</h2>
              <p className="text-lg text-gray-600 mb-6">
                Your registration for National Digital Innovation Week has been successfully submitted.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8 text-left">
              <h3 className="font-bold text-gray-900 mb-3">What's Next?</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>You will receive a confirmation email at <strong>{formData.email}</strong> within 24 hours.</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Your event badge and access details will be sent closer to the event date.</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Check your email regularly for important updates and programme changes.</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <a
                href="/programme"
                className="inline-block px-6 py-3 bg-blue-800 text-white font-semibold rounded-lg hover:bg-blue-900 transition-colors"
              >
                View Programme Schedule
              </a>
              <br />
              <a href="/" className="text-blue-800 font-semibold hover:text-blue-900">
                Return to Home
              </a>
            </div>
          </div>
        </Section>
      </>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <Section bgColor="gradient" className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Event Registration</h1>
          <p className="text-xl text-blue-100">
            Register for National Digital Innovation Week 2025
          </p>
        </div>
      </Section>

      {/* Registration Info */}
      <Section bgColor="white">
        <div className="max-w-4xl mx-auto">
          <SectionTitle>Who Should Register?</SectionTitle>
          <div className="prose prose-lg max-w-none text-gray-700 mb-8">
            <p>
              National Digital Innovation Week is open to all individuals and organizations interested in digital 
              transformation, innovation, and technology. We welcome:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Government officials and policymakers</li>
              <li>Technology professionals and entrepreneurs</li>
              <li>Startup founders and innovators</li>
              <li>Investors and business leaders</li>
              <li>Academia and researchers</li>
              <li>Students and young professionals</li>
              <li>Media and journalists</li>
              <li>Development partners and NGOs</li>
              <li>Anyone passionate about digital innovation</li>
            </ul>
            <p className="font-semibold text-blue-800 mt-4">
              Registration is free! Please complete the form below to secure your spot.
            </p>
          </div>
        </div>
      </Section>

      {/* Registration Form */}
      <Section bgColor="gray">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Registration Form</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
                    errors.fullName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.fullName && <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>}
              </div>

              {/* Organization */}
              <div>
                <label htmlFor="organization" className="block text-sm font-semibold text-gray-700 mb-2">
                  Organisation / Institution <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
                    errors.organization ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Your organization or institution"
                />
                {errors.organization && <p className="mt-1 text-sm text-red-500">{errors.organization}</p>}
              </div>

              {/* Position */}
              <div>
                <label htmlFor="position" className="block text-sm font-semibold text-gray-700 mb-2">
                  Position / Role <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
                    errors.position ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Your job title or role"
                />
                {errors.position && <p className="mt-1 text-sm text-red-500">{errors.position}</p>}
              </div>

              {/* Country */}
              <div>
                <label htmlFor="country" className="block text-sm font-semibold text-gray-700 mb-2">
                  Country <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  placeholder="Country"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="your.email@example.com"
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="+220 123 4567"
                />
                {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
              </div>

              {/* Attendance Days */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Attendance Days <span className="text-red-500">*</span>
                </label>
                <div className="space-y-2">
                  {days.map((day) => (
                    <label key={day} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.attendanceDays.includes(day)}
                        onChange={() => handleCheckboxChange(day)}
                        className="w-5 h-5 text-blue-800 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-gray-700">{day}</span>
                    </label>
                  ))}
                </div>
                {errors.attendanceDays && <p className="mt-1 text-sm text-red-500">{errors.attendanceDays}</p>}
              </div>

              {/* Category */}
              <div>
                <label htmlFor="category" className="block text-sm font-semibold text-gray-700 mb-2">
                  Participation Category <span className="text-red-500">*</span>
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${
                    errors.category ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select a category</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
                {errors.category && <p className="mt-1 text-sm text-red-500">{errors.category}</p>}
              </div>

              {/* Special Requirements */}
              <div>
                <label htmlFor="specialRequirements" className="block text-sm font-semibold text-gray-700 mb-2">
                  Special Requirements (Optional)
                </label>
                <textarea
                  id="specialRequirements"
                  name="specialRequirements"
                  value={formData.specialRequirements}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  placeholder="Please indicate any accessibility needs, dietary requirements, or other special requests"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-blue-800 text-white font-semibold rounded-lg hover:bg-blue-900 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Complete Registration
                </button>
              </div>

              <p className="text-sm text-gray-500 text-center">
                By registering, you agree to receive event-related communications.
              </p>
            </form>
          </div>
        </div>
      </Section>
    </>
  );
}
