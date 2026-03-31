import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logos/logo.svg';
import VolunteerModal from '../modals/VolunteerModal';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isVolunteerModalOpen, setIsVolunteerModalOpen] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('Subscribed:', email);
    setEmail('');
  };

  return (
    <footer className="bg-white">
      <div className="max-w-350 mx-auto px-4 sm:px-6 lg:px-12 py-16">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-12">
          <div className="shrink-0">
            <Link to="/">
              <img
                src={logo}
                alt="LTYEF - Raising Great Leaders"
                className="h-28 w-auto"
              />
            </Link>
          </div>

          <div className="flex flex-wrap gap-x-20 gap-y-8">
            <div>
              <h3 className="text-[#313A41] font-bold mb-4">Home</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-[#313A41]/85 hover:text-primary transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/media" className="text-[#313A41]/85 hover:text-primary transition-colors">
                    Media
                  </Link>
                </li>
                <li>
                  <Link to="/what-we-do" className="text-[#313A41]/85 hover:text-primary transition-colors">
                    What We Do
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-[#313A41]/85 hover:text-primary transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-[#313A41] font-bold mb-4">More</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/media" className="text-[#313A41]/85 hover:text-primary transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to="/media" className="text-[#313A41]/85 hover:text-primary transition-colors">
                    Events
                  </Link>
                </li>
                <li>
                  <Link to="/donation" className="text-[#313A41]/85 hover:text-primary transition-colors">
                    Donate
                  </Link>
                </li>
                <li>
                  <button 
                    onClick={() => setIsVolunteerModalOpen(true)}
                    className="text-[#313A41]/85 hover:text-primary transition-colors"
                  >
                    Volunteer
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-[#313A41] font-bold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#313A41]/85 hover:text-primary transition-colors">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#313A41]/85 hover:text-primary transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="mailto:g2qinitiative@gmail.com" className="text-[#313A41]/85 hover:text-primary transition-colors">
                    g2qinitiative@gmail.com
                  </a>
                </li>
                <li>
                  <a href="mailto:Leadingteensandyouth@gmail.com" className="text-[#313A41]/85 hover:text-primary transition-colors">
                    Leadingteensandyouth@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:w-80">
            <h3 className="text-[#313A41] font-bold text-xl mb-4">Subscribe to get latest updates</h3>
            <form onSubmit={handleSubscribe} className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className="flex-1 min-w-0 px-4 py-3 border border-[#E0E0E0] border-r-0 focus:outline-none focus:border-primary"
              />
              <button
                type="submit"
                className="bg-primary text-white px-6 py-3 font-normal hover:bg-[#e08c0b] transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <VolunteerModal 
        isOpen={isVolunteerModalOpen}
        onClose={() => setIsVolunteerModalOpen(false)}
      />
    </footer>
  );
};

export default Footer;