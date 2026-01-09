import { useForm, ValidationError } from '@formspree/react';

const VolunteerModal = ({ isOpen, onClose }) => {
  // Replace 'YOUR_FORMSPREE_ID' with your actual Formspree form ID
  const [state, handleSubmit] = useForm('YOUR_FORMSPREE_ID');

  if (!isOpen) return null;

  if (state.succeeded) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center modal-overlay">
        <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-[#313A41] mb-2">Thank You!</h3>
          <p className="text-gray-600 mb-6">
            Your volunteer application has been submitted successfully. We'll be in touch soon!
          </p>
          <button onClick={onClose} className="btn-primary">
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center modal-overlay">
      <div className="bg-white rounded-lg p-8 max-w-lg w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-[#313A41]">Join as a Volunteer</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-[#313A41] mb-1">
              Full Name *
            </label>
            <input
              id="fullName"
              type="text"
              name="fullName"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Enter your full name"
            />
            <ValidationError prefix="Full Name" field="fullName" errors={state.errors} className="text-red-500 text-sm mt-1" />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#313A41] mb-1">
              Email Address *
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Enter your email"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm mt-1" />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-[#313A41] mb-1">
              Phone Number *
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Enter your phone number"
            />
            <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-red-500 text-sm mt-1" />
          </div>

          <div>
            <label htmlFor="occupation" className="block text-sm font-medium text-[#313A41] mb-1">
              Occupation
            </label>
            <input
              id="occupation"
              type="text"
              name="occupation"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Enter your occupation"
            />
          </div>

          <div>
            <label htmlFor="interest" className="block text-sm font-medium text-[#313A41] mb-1">
              Area of Interest *
            </label>
            <select
              id="interest"
              name="interest"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="">Select an area</option>
              <option value="education">Education & Mentoring</option>
              <option value="events">Event Planning</option>
              <option value="fundraising">Fundraising</option>
              <option value="communications">Communications & Media</option>
              <option value="other">Other</option>
            </select>
            <ValidationError prefix="Interest" field="interest" errors={state.errors} className="text-red-500 text-sm mt-1" />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-[#313A41] mb-1">
              Why do you want to volunteer with us?
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
              placeholder="Tell us about yourself and why you'd like to volunteer..."
            />
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {state.submitting ? 'Submitting...' : 'Submit Application'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default VolunteerModal;