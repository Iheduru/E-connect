import PropTypes from 'prop-types';
import { Upload } from 'lucide-react';

export function FileUpload({ label, accept, onChange }) {
  return (
    <div className="mb-4">
      <label className="block text-[#1a1a1a] font-medium mb-2">{label}</label>
      <div className="relative">
        <input
          type="file"
          accept={accept}
          onChange={onChange}
          className="hidden"
          id={`file-${label}`}
        />
        <label
          htmlFor={`file-${label}`}
          className="flex items-center gap-2 p-3 rounded-lg bg-[#F8F9FC] border border-gray-200 cursor-pointer hover:bg-gray-50"
        >
          <Upload className="w-5 h-5 text-gray-500" />
          <span className="text-gray-500">Choose file</span>
        </label>
      </div>
    </div>
  );
}

FileUpload.propTypes = {
  label: PropTypes.string.isRequired,
  accept: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};