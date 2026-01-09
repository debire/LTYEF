import { useForm, ValidationError } from '@formspree/react';

const EventRegistrationModal = ({ isOpen, onClose, eventName = 'Monthly Event' }) => {
  // Replace 'YOUR_FORMSPREE_ID' with your actual Formspree form ID for event registration
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
          <h3 className="text-2xl font-bold text-[#313A41] mb-2">Registration Successful!</h3>
          <p className="text-gray-600 mb-6">
            You have been registered for {eventName}. We'll send you more details via email.
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
          <div>
            <h2 className="text-2xl font-bold text-[#313A41]">Event Registration</h2>
            <p className="text-primary font-medium">{eventName}</p>
          </div>
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
          {/* Hidden field for event name */}
          <input type="hidden" name="eventName" value={eventName} />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-[#313A41] mb-1">
                First Name *
              </label>
              <input
                id="firstName"
                type="text"
                name="firstName"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="First name"
              />
              <ValidationError prefix="First Name" field="firstName" errors={state.errors} className="text-red-500 text-sm mt-1" />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-[#313A41] mb-1">
                Last Name *
              </label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Last name"
              />
              <ValidationError prefix="Last Name" field="lastName" errors={state.errors} className="text-red-500 text-sm mt-1" />
            </div>
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
            <label htmlFor="attendees" className="block text-sm font-medium text-[#313A41] mb-1">
              Number of Attendees *
            </label>
            <select
              id="attendees"
              name="attendees"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="">Select number</option>
              <option value="1">1 Person</option>
              <option value="2">2 People</option>
              <option value="3">3 People</option>
              <option value="4">4 People</option>
              <option value="5+">5 or more</option>
            </select>
            <ValidationError prefix="Attendees" field="attendees" errors={state.errors} className="text-red-500 text-sm mt-1" />
          </div>

          <div>
            <label htmlFor="dietary" className="block text-sm font-medium text-[#313A41] mb-1">
              Dietary Requirements (if any)
            </label>
            <input
              id="dietary"
              type="text"
              name="dietary"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="e.g., Vegetarian, Halal, None"
            />
          </div>

          <div>
            <label htmlFor="specialRequirements" className="block text-sm font-medium text-[#313A41] mb-1">
              Special Requirements or Questions
            </label>
            <textarea
              id="specialRequirements"
              name="specialRequirements"
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
              placeholder="Any special requirements or questions..."
            />
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {state.submitting ? 'Registering...' : 'Register Now'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EventRegistrationModal;