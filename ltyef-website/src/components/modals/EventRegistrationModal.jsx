// import { useForm, ValidationError } from '@formspree/react';

// const EventRegistrationModal = ({ isOpen, onClose, eventName = 'Monthly Event' }) => {
//   // Replace 'YOUR_FORMSPREE_ID' with your actual Formspree form ID for event registration
//   const [state, handleSubmit] = useForm('YOUR_FORMSPREE_ID');

//   if (!isOpen) return null;

//   if (state.succeeded) {
//     return (
//       <div className="fixed inset-0 z-50 flex items-center justify-center modal-overlay">
//         <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 text-center">
//           <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//             <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//             </svg>
//           </div>
//           <h3 className="text-2xl font-bold text-[#313A41] mb-2">Registration Successful!</h3>
//           <p className="text-gray-600 mb-6">
//             You have been registered for {eventName}. We'll send you more details via email.
//           </p>
//           <button onClick={onClose} className="btn-primary">
//             Close
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center modal-overlay">
//       <div className="bg-white rounded-lg p-8 max-w-lg w-full mx-4 max-h-[90vh] overflow-y-auto">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-6">
//           <div>
//             <h2 className="text-2xl font-bold text-[#313A41]">Event Registration</h2>
//             <p className="text-primary font-medium">{eventName}</p>
//           </div>
//           <button
//             onClick={onClose}
//             className="text-gray-400 hover:text-gray-600 transition-colors"
//             aria-label="Close modal"
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>
//         </div>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Hidden field for event name */}
//           <input type="hidden" name="eventName" value={eventName} />

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div>
//               <label htmlFor="firstName" className="block text-sm font-medium text-[#313A41] mb-1">
//                 First Name *
//               </label>
//               <input
//                 id="firstName"
//                 type="text"
//                 name="firstName"
//                 required
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
//                 placeholder="First name"
//               />
//               <ValidationError prefix="First Name" field="firstName" errors={state.errors} className="text-red-500 text-sm mt-1" />
//             </div>

//             <div>
//               <label htmlFor="lastName" className="block text-sm font-medium text-[#313A41] mb-1">
//                 Last Name *
//               </label>
//               <input
//                 id="lastName"
//                 type="text"
//                 name="lastName"
//                 required
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
//                 placeholder="Last name"
//               />
//               <ValidationError prefix="Last Name" field="lastName" errors={state.errors} className="text-red-500 text-sm mt-1" />
//             </div>
//           </div>

//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-[#313A41] mb-1">
//               Email Address *
//             </label>
//             <input
//               id="email"
//               type="email"
//               name="email"
//               required
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
//               placeholder="Enter your email"
//             />
//             <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm mt-1" />
//           </div>

//           <div>
//             <label htmlFor="phone" className="block text-sm font-medium text-[#313A41] mb-1">
//               Phone Number *
//             </label>
//             <input
//               id="phone"
//               type="tel"
//               name="phone"
//               required
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
//               placeholder="Enter your phone number"
//             />
//             <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-red-500 text-sm mt-1" />
//           </div>

//           <div>
//             <label htmlFor="attendees" className="block text-sm font-medium text-[#313A41] mb-1">
//               Number of Attendees *
//             </label>
//             <select
//               id="attendees"
//               name="attendees"
//               required
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
//             >
//               <option value="">Select number</option>
//               <option value="1">1 Person</option>
//               <option value="2">2 People</option>
//               <option value="3">3 People</option>
//               <option value="4">4 People</option>
//               <option value="5+">5 or more</option>
//             </select>
//             <ValidationError prefix="Attendees" field="attendees" errors={state.errors} className="text-red-500 text-sm mt-1" />
//           </div>

//           <div>
//             <label htmlFor="dietary" className="block text-sm font-medium text-[#313A41] mb-1">
//               Dietary Requirements (if any)
//             </label>
//             <input
//               id="dietary"
//               type="text"
//               name="dietary"
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
//               placeholder="e.g., Vegetarian, Halal, None"
//             />
//           </div>

//           <div>
//             <label htmlFor="specialRequirements" className="block text-sm font-medium text-[#313A41] mb-1">
//               Special Requirements or Questions
//             </label>
//             <textarea
//               id="specialRequirements"
//               name="specialRequirements"
//               rows={3}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
//               placeholder="Any special requirements or questions..."
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={state.submitting}
//             className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
//           >
//             {state.submitting ? 'Registering...' : 'Register Now'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EventRegistrationModal;


import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

const EventRegistrationModal = ({ isOpen, onClose, eventName = 'Monthly Event' }) => {
  // Replace 'YOUR_FORMSPREE_ID' with your actual Formspree form ID
  const [state, handleSubmit] = useForm('YOUR_FORMSPREE_ID');
  const [showG2QQuestion, setShowG2QQuestion] = useState(false);
  const [showOnlineQuestion, setShowOnlineQuestion] = useState(false);
  const [availability, setAvailability] = useState([]);

  const handleGenderChange = (e) => {
    setShowG2QQuestion(e.target.value === 'Female');
  };

  const handlePreferenceChange = (e) => {
    setShowOnlineQuestion(e.target.value === 'Online (not started yet)');
  };

  const handleAvailabilityChange = (value) => {
    setAvailability(prev => {
      if (prev.includes(value)) {
        return prev.filter(item => item !== value);
      } else if (prev.length < 2) {
        return [...prev, value];
      }
      return prev;
    });
  };

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
              placeholder="Enter your full name"
              className="w-full px-4 py-3 border border-[#E0E0E0] rounded focus:outline-none focus:border-primary"
            />
            <ValidationError prefix="Full Name" field="fullName" errors={state.errors} className="text-red-500 text-sm mt-1" />
          </div>

          {/* Teen's Phone */}
          <div>
            <label className="block text-[#313A41] font-medium mb-2">
              Teen's/Youth's Phone/Whatsapp Number
            </label>
            <input
              type="tel"
              name="teenPhone"
              placeholder="Enter phone number"
              className="w-full px-4 py-3 border border-[#E0E0E0] rounded focus:outline-none focus:border-primary"
            />
          </div>

          {/* Parent's Phone */}
          <div>
            <label className="block text-[#313A41] font-medium mb-2">
              Parent's/Guardian's Phone/Whatsapp Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="parentPhone"
              required
              placeholder="Enter parent/guardian phone number"
              className="w-full px-4 py-3 border border-[#E0E0E0] rounded focus:outline-none focus:border-primary"
            />
            <ValidationError prefix="Parent Phone" field="parentPhone" errors={state.errors} className="text-red-500 text-sm mt-1" />
          </div>

          {/* Availability - Pick 1 or 2 */}
          <div>
            <label className="block text-[#313A41] font-medium mb-2">
              You can pick 1/2 options below that apply to you
            </label>
            <div className="space-y-2">
              {['I am in boarding school', 'I am in day school', 'I am only available during holidays'].map((option) => (
                <label key={option} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="availability"
                    value={option}
                    checked={availability.includes(option)}
                    onChange={() => handleAvailabilityChange(option)}
                    className="w-4 h-4 accent-primary"
                  />
                  <span className="text-[#313A41]/85">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Category - Age */}
          <div>
            <label className="block text-[#313A41] font-medium mb-2">
              Category <span className="text-red-500">*</span>
            </label>
            <div className="space-y-2">
              {['Age 10-14', 'Age 15-21', 'Age above 21'].map((option) => (
                <label key={option} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="ageCategory"
                    value={option}
                    required
                    className="w-4 h-4 accent-primary"
                  />
                  <span className="text-[#313A41]/85">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Gender */}
          <div>
            <label className="block text-[#313A41] font-medium mb-2">
              Gender <span className="text-red-500">*</span>
            </label>
            <div className="space-y-2">
              {['Male', 'Female'].map((option) => (
                <label key={option} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value={option}
                    required
                    onChange={handleGenderChange}
                    className="w-4 h-4 accent-primary"
                  />
                  <span className="text-[#313A41]/85">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* G2Q Question - Female Only */}
          {showG2QQuestion && (
            <div>
              <label className="block text-[#313A41] font-medium mb-2">
                For Female only, Will you like to join Girl-to-Queen Initiative?
              </label>
              <div className="space-y-2">
                {['Yes', 'No'].map((option) => (
                  <label key={option} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="joinG2Q"
                      value={option}
                      className="w-4 h-4 accent-primary"
                    />
                    <span className="text-[#313A41]/85">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Sub-Category */}
          <div>
            <label className="block text-[#313A41] font-medium mb-2">
              Sub-Category <span className="text-red-500">*</span>
            </label>
            <div className="space-y-2">
              {[
                'In Secondary School/Completed SSCE/WAEC',
                'In Tertiary Institution',
                'Graduate - Working',
                'Graduate - Unemployed',
                'Not in School - Learning a Skill'
              ].map((option) => (
                <label key={option} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="subCategory"
                    value={option}
                    required
                    className="w-4 h-4 accent-primary"
                  />
                  <span className="text-[#313A41]/85">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="block text-[#313A41] font-medium mb-2">
              Location <span className="text-red-500">*</span>
            </label>
            <div className="space-y-2">
              {['Lagos, Surulere axis', 'Lagos, outside Surulere', 'Outside Lagos'].map((option) => (
                <label key={option} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="location"
                    value={option}
                    required
                    className="w-4 h-4 accent-primary"
                  />
                  <span className="text-[#313A41]/85">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Group Preference */}
          <div>
            <label className="block text-[#313A41] font-medium mb-2">
              Which of the following group will you like to belong
            </label>
            <div className="space-y-2">
              {[
                'Technical - Multimedia, TV, Public address system setup/management',
                'Social Media management - LTYEF FB, IG, Youtube & Blog',
                'Venue Management - Packing & Unpacking',
                'Event Planning/Coordination'
              ].map((option) => (
                <label key={option} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="groupPreference"
                    value={option}
                    className="w-4 h-4 accent-primary"
                  />
                  <span className="text-[#313A41]/85">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Attendance Preference */}
          <div>
            <label className="block text-[#313A41] font-medium mb-2">
              I prefer to join <span className="text-red-500">*</span>
            </label>
            <div className="space-y-2">
              {['In-person (attend physically)', 'Online (not started yet)'].map((option) => (
                <label key={option} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="attendancePreference"
                    value={option}
                    required
                    onChange={handlePreferenceChange}
                    className="w-4 h-4 accent-primary"
                  />
                  <span className="text-[#313A41]/85">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Online Resources Question */}
          {showOnlineQuestion && (
            <div>
              <label className="block text-[#313A41] font-medium mb-2">
                If you prefer online, do you have internet data and phone/laptop to join the programme?
              </label>
              <div className="space-y-2">
                {['Yes', 'No'].map((option) => (
                  <label key={option} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="hasOnlineResources"
                      value={option}
                      className="w-4 h-4 accent-primary"
                    />
                    <span className="text-[#313A41]/85">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

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