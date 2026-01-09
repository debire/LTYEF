import { useForm, ValidationError } from '@formspree/react';
import CTASection from '../components/sections/CTASection';

const Contact = () => {
  // Replace 'YOUR_FORMSPREE_ID' with your actual Formspree form ID for contact form
  const [state, handleSubmit] = useForm('YOUR_FORMSPREE_ID');

  return (
    <div>
      {/* Contact Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-350 mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Side - Contact Info */}
            <div>
              <span className="text-primary font-normal uppercase tracking-wide">
                Get In Touch
              </span>
              <h1 className="text-[40px] font-bold text-[#313A41] mt-3 mb-4 leading-tight">
                We'd love to hear from you
              </h1>
              <p className="text-[#313A41]/85 leading-relaxed mb-8">
                Have any question in mind or want to enquire? Please feel free to contact us through the form or the following details.
              </p>

              {/* Mobile */}
              <div className="mb-6">
                <h3 className="text-[#313A41] font-bold mb-1">Mobile:</h3>
                <a 
                  href="tel:+2348012345678" 
                  className="text-[#313A41]/85 hover:text-primary transition-colors"
                >
                  +234 801 234 5678
                </a>
              </div>

              {/* Email */}
              <div className="mb-6">
                <h3 className="text-[#313A41] font-bold mb-1">Email:</h3>
                <a 
                  href="mailto:info@ltyef.org" 
                  className="text-[#313A41]/85 hover:text-primary transition-colors"
                >
                  info@ltyef.org
                </a>
              </div>

              {/* Socials */}
              <div>
                <h3 className="text-[#313A41] font-bold mb-1">Socials:</h3>
                <div className="space-y-1">
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-[#313A41]/85 hover:text-primary transition-colors"
                  >
                    Facebook
                  </a>
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-[#313A41]/85 hover:text-primary transition-colors"
                  >
                    Instagram
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-[#313A41]/85 hover:text-primary transition-colors"
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div>
              <span className="text-primary font-normal uppercase tracking-wide">
                Contact Form
              </span>
              
              {state.succeeded ? (
                <div className="mt-6 p-8 bg-green-50 rounded-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#313A41] mb-2">Message Sent!</h3>
                  <p className="text-[#313A41]/85">
                    Thank you for reaching out. We'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="Full Name"
                      className="w-full px-4 py-4 border border-[#313A41] focus:outline-none focus:border-primary"
                    />
                    <ValidationError prefix="Full Name" field="fullName" errors={state.errors} className="text-red-500 text-sm mt-1" />
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="Phone Number"
                      className="w-full px-4 py-4 border border-[#313A41] focus:outline-none focus:border-primary"
                    />
                    <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-red-500 text-sm mt-1" />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Email"
                      className="w-full px-4 py-4 border border-[#313A41] focus:outline-none focus:border-primary"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm mt-1" />
                  </div>

                  <div>
                    <input
                      type="text"
                      name="subject"
                      required
                      placeholder="Subject"
                      className="w-full px-4 py-4 border border-[#313A41] focus:outline-none focus:border-primary"
                    />
                    <ValidationError prefix="Subject" field="subject" errors={state.errors} className="text-red-500 text-sm mt-1" />
                  </div>

                  <div>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Message"
                      className="w-full px-4 py-4 border border-[#313A41] focus:outline-none focus:border-primary resize-none"
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-sm mt-1" />
                  </div>

                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="text-[#313A41] px-12 py-2 font-normal border-2 border-[#313A41] hover:bg-[#313A41] hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {state.submitting ? 'Submitting...' : 'Submit'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default Contact;