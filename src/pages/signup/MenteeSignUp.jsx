import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormField } from '../../components/auth/forms/FormField';
import { FileUpload } from '../../components/auth/forms/FileUpload';
import { ArrowLeft } from 'lucide-react';

export function MenteeSignUp() {
  const navigate = useNavigate();

  const [uploadedImage, setUploadedImage] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-[#F8F9FC] py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-sm p-8">
                    {/* Back Button with Arrow */}
                    <button
            onClick={() => navigate(-1)} // Navigate back to the previous page
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6"
          >
            <ArrowLeft className="h-5 w-5" />
            Back
          </button>
          <div className="bg-[#F0F1F8] rounded-lg p-6 mb-8">
            <h1 className="text-2xl font-bold text-[#1a1a1a] mb-4">
              Let's build your Mentee Profile!
            </h1>
            <p className="text-gray-600">
              Tell us about yourself and what you're looking to learn. This will help us match you with the perfect mentor.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Image Upload with Placeholder */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-32 h-32 bg-gray-100 rounded-full mb-2 overflow-hidden flex items-center justify-center">
                  {uploadedImage ? (
                    <img src={uploadedImage} alt="Uploaded" className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-gray-400">No Image</span>
                  )}
                </div>

                <label className="block text-center cursor-pointer mt-2">
                  <FileUpload
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <FormField label="First name" />
              <FormField label="Last name" />
            </div>

            <FormField label="Email address" type="email" />
            <FormField label="Job title" />
            <FormField label="Company name" />
            <FormField label="Choose password" type="password" />
            <FormField
              label="What are you interested in learning?"
              as="textarea"
            />

            <div className="flex justify-end">
              <button
                type="submit"
                className="px-8 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}