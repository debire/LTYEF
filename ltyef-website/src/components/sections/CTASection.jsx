import { useState } from 'react';
import { Link } from 'react-router-dom';
import VolunteerModal from '../modals/VolunteerModal';

const CTASection = ({
  title = "Join Us in Shaping the Next Generation",
  description = "There's a place for you in this movement. Join us as a volunteer or support our work with a donation."
}) => {
  const [isVolunteerModalOpen, setIsVolunteerModalOpen] = useState(false);

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#14BDD8] rounded-2xl py-16 px-8 md:py-20 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            {description}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => setIsVolunteerModalOpen(true)}
              className="bg-white text-[#14BDD8] px-8 py-3 font-normal border-2 border-white hover:bg-transparent hover:text-white transition-all duration-300"
            >
              Join as a Volunteer
            </button>
            <Link 
              to="/donation"
              className="bg-primary text-white px-10 py-3 font-normal border-2 border-primary hover:bg-white hover:text-primary transition-all duration-300"
            >
              Donate
            </Link>
          </div>
        </div>
      </div>

      {/* Volunteer Modal */}
      <VolunteerModal 
        isOpen={isVolunteerModalOpen}
        onClose={() => setIsVolunteerModalOpen(false)}
      />
    </section>
  );
};

export default CTASection;