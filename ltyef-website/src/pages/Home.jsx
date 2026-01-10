import { useState } from 'react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/images/herobg.png';
import aboutImg from '../assets/images/about.png';
import differenceImg from '../assets/images/difference.png';
import checkmarkIcon from '../assets/icons/checkmark.svg';
import VolunteerModal from '../components/modals/VolunteerModal';
import ProjectsSection from '../components/sections/ProjectsSection';
import DonationsSection from '../components/sections/DonationsSection';
import EventsSection from '../components/sections/EventsSection';
import CTASection from '../components/sections/CTASection';

const Home = () => {
  const [isVolunteerModalOpen, setIsVolunteerModalOpen] = useState(false);

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat min-h-150 flex items-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-350 mx-auto my-12 px-4 sm:px-6 lg:px-12 py-32">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-5xl leading-tight">
            Empowering Teens & Youth to Lead with Purpose
          </h1>
          <p className="text-white text-lg md:text-xl mb-8 max-w-4xl leading-relaxed">
            A collaboration of Girl-to-Queen Initiative and Leading Teens & Youth Empowerment Foundation — building a community of confident, responsible, and fulfilled young leaders across Nigeria.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setIsVolunteerModalOpen(true)}
              className="bg-white text-[#313A41] px-6 py-3 font-normal border-2 border-white hover:bg-transparent hover:text-white transition-all duration-300"
            >
              Join as a Volunteer
            </button>
            <Link
              to="/donation"
              className="bg-primary text-white px-10 py-3 font-normal border-2 border-primary hover:bg-transparent hover:text-primary transition-all duration-300"
            >
              Donate
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-350 mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <span className="text-primary font-normal uppercase tracking-wide">
                Know About Us
              </span>
              <h2 className="text-[28px] md:text-[40px] font-bold text-[#313A41] mt-3 mb-6">
                From Vision to Impact
              </h2>
              <p className="text-[#313A41]/85 leading-relaxed mb-4">
                Our journey began in 2017 when Girl-to-Queen Initiative (G2Q) was founded with a simple yet powerful vision — to mentor and empower girls and young women to become confident, fulfilled, and successful. After seven years of transforming lives and celebrating countless success stories, we expanded our mission. In July 2024, Leading Teens & Youth Empowerment Foundation (LTYEF) was born, extending our reach to include both male and female teens and youth. Today, these two organizations work hand-in-hand to build a generation of responsible, purpose-driven young leaders.
              </p>
              <p className="text-[#313A41]/85 leading-relaxed mb-8">
                LTYEF exists to build a community where every teen and youth — regardless of background or circumstance — has access to mentorship, guidance, and opportunities for growth. Our mission is to groom young people into responsible, confident, and fulfilled adults who contribute meaningfully to their families, communities, and nation.
              </p>
              <Link
                to="/about"
                className="inline-block text-[#313A41] px-6 py-3 font-normal border-2 border-[#313A41] hover:bg-[#313A41] hover:text-white transition-all duration-300"
              >
                Learn More
              </Link>
            </div>

            {/* Image */}
            <div>
              <img
                src={aboutImg}
                alt="Children in community"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 md:py-24 bg-[#F5F7FA]">
        <div className="max-w-350 mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div>
              <img
                src={differenceImg}
                alt="Young people in community"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Text Content */}
            <div>
              <span className="text-primary font-normal uppercase tracking-wide">
                What We Do
              </span>
              <h2 className="text-[28px] md:text-[40px] font-bold text-[#313A41] mt-3 mb-8">
                How We Make a Difference
              </h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <img src={checkmarkIcon} alt="" className="w-6 h-6 mt-1 shrink-0" />
                  <p className="text-[#313A41]/85 leading-relaxed">
                    <span className="font-bold text-[#313A41]">Mentorship & Coaching:</span> We pair young people with experienced mentors who guide them through personal development, academic excellence, and career exploration, helping them discover and pursue their unique potential.
                  </p>
                </div>

                <div className="flex gap-4">
                  <img src={checkmarkIcon} alt="" className="w-6 h-6 mt-1 shrink-0" />
                  <p className="text-[#313A41]/85 leading-relaxed">
                    <span className="font-bold text-[#313A41]">Skills Development:</span> Through workshops, training sessions, and hands-on programmes, we equip teens and youth with practical life skills — from leadership and communication to financial literacy and entrepreneurship.
                  </p>
                </div>

                <div className="flex gap-4">
                  <img src={checkmarkIcon} alt="" className="w-6 h-6 mt-1 shrink-0" />
                  <p className="text-[#313A41]/85 leading-relaxed">
                    <span className="font-bold text-[#313A41]">Community Building:</span> We create safe spaces where young people connect, share experiences, and support one another. Our community events foster lasting friendships and a sense of belonging.
                  </p>
                </div>

                <div className="flex gap-4">
                  <img src={checkmarkIcon} alt="" className="w-6 h-6 mt-1 shrink-0" />
                  <p className="text-[#313A41]/85 leading-relaxed">
                    <span className="font-bold text-[#313A41]">Outreach Programmes:</span> We extend our impact to underserved communities, bringing empowerment programmes to teens and youth who need them most, ensuring no young person is left behind.
                  </p>
                </div>
              </div>

              <Link
                to="/what-we-do"
                className="inline-block mt-8 text-[#313A41] px-10 py-3 font-normal border-2 border-[#313A41] hover:bg-[#313A41] hover:text-white transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <ProjectsSection />

      {/* Donations Section */}
      <DonationsSection />

      {/* Events Section */}
      <EventsSection />

      {/* CTA Section */}
      <CTASection />

      {/* Volunteer Modal */}
      <VolunteerModal
        isOpen={isVolunteerModalOpen}
        onClose={() => setIsVolunteerModalOpen(false)}
      />
    </div>
  );
};

export default Home;