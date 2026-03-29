import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

const EventRegistrationModal = ({ isOpen, onClose, eventName = 'Monthly Event' }) => {
  // Replace 'YOUR_FORMSPREE_ID' with your actual Formspree form ID
  const [state, handleSubmit] = useForm('YOUR_FORMSPREE_ID');

  if (!isOpen) return null;

  if (state.succeeded) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center modal-overlay" onClick={onClose}>
        <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 text-center" onClick={(e) => e.stopPropagation()}>
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-[#313A41] mb-2">Registration Successful!</h3>
          <p className="text-[#313A41]/85 mb-6">
            Thank you for registering for {eventName}. We'll be in touch soon with more details.
          </p>
          <button
            onClick={onClose}
            className="bg-primary text-white px-6 py-2 font-normal border-2 border-primary hover:bg-transparent hover:text-primary transition-all duration-300"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center modal-overlay" onClick={onClose}>
      <div 
        className="bg-white rounded-lg p-6 md:p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-[#313A41]">Event Registration</h2>
            <p className="text-primary font-medium">{eventName}</p>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <input type="hidden" name="event" value={eventName} />

          {/* Full Names */}
          <div>
            <label className="block text-[#313A41] font-medium mb-2">
              Full Names (Surname & First Name) <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              required
              placeholder="e.g. Adeyemi John"
              className="w-full px-4 py-3 border border-[#E0E0E0] rounded focus:outline-none focus:border-primary"
            />
            <ValidationError prefix="Full Name" field="fullName" errors={state.errors} className="text-red-500 text-sm mt-1" />
          </div>

          {/* Phone/WhatsApp Number */}
          <div>
            <label className="block text-[#313A41] font-medium mb-2">
              Phone/Whatsapp Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              required
              placeholder="e.g. 08012345678"
              className="w-full px-4 py-3 border border-[#E0E0E0] rounded focus:outline-none focus:border-primary"
            />
            <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-red-500 text-sm mt-1" />
          </div>

          {/* Parent/Guardian Names & Phone Number */}
          <div>
            <label className="block text-[#313A41] font-medium mb-2">
              Parent/Guardian Names & Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="parentDetails"
              required
              placeholder="e.g. Mrs. Adeyemi Grace - 08098765432"
              className="w-full px-4 py-3 border border-[#E0E0E0] rounded focus:outline-none focus:border-primary"
            />
            <ValidationError prefix="Parent Details" field="parentDetails" errors={state.errors} className="text-red-500 text-sm mt-1" />
          </div>

          {/* Age Group */}
          <div>
            <label className="block text-[#313A41] font-medium mb-2">
              Age Group <span className="text-red-500">*</span>
            </label>
            <div className="space-y-2">
              {['10-13', '14-17', '18 and above'].map((option) => (
                <label key={option} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="ageGroup"
                    value={option}
                    required
                    className="w-4 h-4 accent-primary"
                  />
                  <span className="text-[#313A41]/85">{option}</span>
                </label>
              ))}
            </div>
            <ValidationError prefix="Age Group" field="ageGroup" errors={state.errors} className="text-red-500 text-sm mt-1" />
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block text-[#313A41] font-medium mb-2">
              Date of Birth (DD-MM-YYYY) <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="dateOfBirth"
              required
              placeholder="e.g. 23-08-2010"
              pattern="\d{2}-\d{2}-\d{4}"
              className="w-full px-4 py-3 border border-[#E0E0E0] rounded focus:outline-none focus:border-primary"
            />
            <p className="text-[#313A41]/60 text-sm mt-1">Format: DD-MM-YYYY (e.g. 23-08-2010)</p>
            <ValidationError prefix="Date of Birth" field="dateOfBirth" errors={state.errors} className="text-red-500 text-sm mt-1" />
          </div>

          {/* Topic Suggestions / Questions */}
          <div>
            <label className="block text-[#313A41] font-medium mb-2">
              What topic(s) will you want us to discuss at our programme? Or do you have a question? Drop it here. <span className="text-red-500">*</span>
            </label>
            <textarea
              name="topicSuggestions"
              required
              rows={4}
              placeholder="Share topics you'd like us to discuss or any questions you have..."
              className="w-full px-4 py-3 border border-[#E0E0E0] rounded focus:outline-none focus:border-primary resize-none"
            />
            <ValidationError prefix="Topic Suggestions" field="topicSuggestions" errors={state.errors} className="text-red-500 text-sm mt-1" />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full bg-primary text-white py-3 font-normal border-2 border-primary hover:bg-transparent hover:text-primary transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {state.submitting ? 'Submitting...' : 'Register'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EventRegistrationModal;