import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { FormField } from './FormField';
import { FileUpload } from './FileUpload';

export function MenteeSignUpForm({ onBack }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    companyName: '',
    password: '',
    interests: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        Back
      </button>

      <h2 className="text-2xl font-bold text-[#1a1a1a] mb-2">Let's build your Mentee Profile!</h2>
      <p className="text-gray-600 mb-6">
        Tell us about yourself and what you're looking to learn. This will help us match you with the perfect mentor.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex justify-center mb-8">
          <FileUpload
            label="Profile Photo"
            accept="image/*"
            onChange={(e) => console.log(e.target.files[0])}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <FormField
            label="First name"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          />
          <FormField
            label="Last name"
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
          />
        </div>

        <FormField
          label="Email address"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />

        <FormField
          label="Job title"
          value={formData.jobTitle}
          onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
        />

        <FormField
          label="Company name"
          value={formData.companyName}
          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
        />

        <FormField
          label="Choose password"
          type="password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />

        <FormField
          label="What are you interested in learning?"
          as="textarea"
          value={formData.interests}
          onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
        />

        <div className="text-sm text-gray-600 mt-4">
          By signing up, you agree to our Terms of Service and Privacy Policy.
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition mt-6"
        >
          Next
        </button>
      </form>
    </div>
  );
}