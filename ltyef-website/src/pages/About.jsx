import discoverImg from '../assets/images/discover.png';
import milestoneImg from '../assets/images/milestone.png';
import CTASection from '../components/sections/CTASection';

const About = () => {
  return (
    <div>
      {/* Discover Our Story Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-350 mx-auto px-4 sm:px-6 lg:px-12">
          {/* Subtitle above the grid */}
          <span className="text-primary font-normal uppercase tracking-wide">
            Know About Us
          </span>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-3">
            {/* Text Content */}
            <div>
              <h1 className="text-[40px] font-bold text-[#313A41] mb-6 leading-tight">
                Discover Our Story
              </h1>
              <div className="space-y-4">
                <p className="text-[#313A41]/85 leading-relaxed">
                  Welcome to Leading Teens & Youth Empowerment Foundation (LTYEF), a nonprofit organisation born out of passion, purpose, and a deep commitment to the next generation.
                </p>
                <p className="text-[#313A41]/85 leading-relaxed">
                  Our story begins in 2017 with the founding of Girl-to-Queen Initiative (G2Q), a nonprofit organisation created with a heartfelt mission — to mentor and empower girls and young women to become confident, fulfilled, and successful. What started as a small vision quickly grew into a movement that touched the lives of countless young women across Nigeria.
                </p>
                <p className="text-[#313A41]/85 leading-relaxed">
                  G2Q was officially registered with the Corporate Affairs Commission Nigeria in January 2019, marking a significant milestone in our journey. For seven years, G2Q worked tirelessly to provide mentorship, host empowerment programmes, and create safe spaces where girls could discover their worth, develop their potential, and step boldly into their futures.
                </p>
                <p className="text-[#313A41]/85 leading-relaxed">
                  In collaboration with Girl-to-Queen Initiative (G2Q), we are dedicated to mentoring, equipping, and empowering teens and youth across Nigeria to become confident, responsible, and fulfilled individuals. Our work is rooted in the belief that every young person — regardless of their background, circumstances, or challenges — deserves access to guidance, support, and opportunities that will help them thrive.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="h-full">
              <img
                src={discoverImg}
                alt="Happy children smiling"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-350 mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            {/* Our Mission */}
            <div>
              <h2 className="text-primary font-normal uppercase tracking-wide mb-4">
                Our Mission
              </h2>
              <p className="text-[#313A41]/85 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
              </p>
            </div>

            {/* Our Vision */}
            <div>
              <h2 className="text-primary font-normal uppercase tracking-wide mb-4">
                Our Vision
              </h2>
              <p className="text-[#313A41]/85 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-16 md:py-24 bg-[#F5F7FA]">
        <div className="max-w-350 mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div>
              <img
                src={milestoneImg}
                alt="Together we will change the world"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Text Content */}
            <div>
              <span className="text-primary font-normal uppercase tracking-wide">
                Our Journey
              </span>
              <h2 className="text-[40px] font-bold text-[#313A41] mt-3 mb-6 leading-tight">
                Milestones That Define Us
              </h2>
              <div className="space-y-4">
                <p className="text-[#313A41]/85 leading-relaxed">
                  The journey of LTYEF and G2Q is one filled with faith, resilience, and countless moments of impact. It began in 2017 when Girl-to-Queen Initiative was founded with nothing but a vision and a heart for young women. Over the years, G2Q grew from a small mentorship group into a recognised nonprofit organisation, officially registered in 2019. Through mentorship sessions, empowerment events, school outreaches, and leadership workshops, G2Q impacted the lives of hundreds of girls and young women — helping them build confidence, develop life skills, and pursue their dreams with boldness.
                </p>
                <p className="text-[#313A41]/85 leading-relaxed">
                  In September 2024, we reached a defining milestone. As G2Q celebrated seven years of transforming lives, we officially launched Leading Teens & Youth Empowerment Foundation. This expansion marked a new chapter — one that embraced both young men and women and broadened our scope of impact. Since then, the collaboration between G2Q and LTYEF has resulted in powerful programmes, increased volunteer participation, and a growing community of young people who are being shaped into future leaders. Our journey is far from over; in fact, it's only just beginning. With every passing year, we are committed to reaching more young people, deepening our impact, and staying true to the mission that started it all.
                </p>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 md:gap-12 mt-8">
                <div>
                  <span className="text-2xl md:text-4xl font-bold text-[#313A41]">75+</span>
                  <p className="text-[#313A41]/85 text-sm md:text-base mt-1">Donations Received</p>
                </div>
                <div>
                  <span className="text-2xl md:text-4xl font-bold text-[#313A41]">10+</span>
                  <p className="text-[#313A41]/85 text-sm md:text-base mt-1">Volunteers</p>
                </div>
                <div>
                  <span className="text-2xl md:text-4xl font-bold text-[#313A41]">50+</span>
                  <p className="text-[#313A41]/85 text-sm md:text-base mt-1">Lives Impacted</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-350 mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-[40px] font-bold text-[#313A41] text-center mb-12">
            Meet Our Team
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {/* Team Member 1 */}
            <div>
              <div className="bg-[#E0E0E0] rounded-lg overflow-hidden aspect-3/4] mb-3 md:mb-4">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=500&fit=crop"
                  alt="Adaeze Okonkwo"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-[#313A41] font-medium text-sm md:text-lg">Adaeze Okonkwo</h3>
              <p className="text-primary text-xs md:text-base">Founder & Executive Director</p>
            </div>

            {/* Team Member 2 */}
            <div>
              <div className="bg-[#E0E0E0] rounded-lg overflow-hidden aspect-3/4] mb-3 md:mb-4">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop"
                  alt="Chukwuemeka Eze"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-[#313A41] font-medium text-sm md:text-lg">Chukwuemeka Eze</h3>
              <p className="text-primary text-xs md:text-base">Programme Director</p>
            </div>

            {/* Team Member 3 */}
            <div>
              <div className="bg-[#E0E0E0] rounded-lg overflow-hidden aspect-3/4] mb-3 md:mb-4">
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop"
                  alt="Funke Adeyemi"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-[#313A41] font-medium text-sm md:text-lg">Funke Adeyemi</h3>
              <p className="text-primary text-xs md:text-base">Outreach Coordinator</p>
            </div>

            {/* Team Member 4 */}
            <div>
              <div className="bg-[#E0E0E0] rounded-lg overflow-hidden aspect-3/4] mb-3 md:mb-4">
                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop"
                  alt="Tunde Bakare"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-[#313A41] font-medium text-sm md:text-lg">Tunde Bakare</h3>
              <p className="text-primary text-xs md:text-base">Volunteer Manager</p>
            </div>

            {/* Team Member 5 */}
            <div>
              <div className="bg-[#E0E0E0] rounded-lg overflow-hidden aspect-3/4] mb-3 md:mb-4">
                <img
                  src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=500&fit=crop"
                  alt="Ngozi Okafor"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-[#313A41] font-medium text-sm md:text-lg">Ngozi Okafor</h3>
              <p className="text-primary text-xs md:text-base">Mentorship Lead</p>
            </div>

            {/* Team Member 6 */}
            <div>
              <div className="bg-[#E0E0E0] rounded-lg overflow-hidden aspect-3/4] mb-3 md:mb-4">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop"
                  alt="Emeka Nwosu"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-[#313A41] font-medium text-sm md:text-lg">Emeka Nwosu</h3>
              <p className="text-primary text-xs md:text-base">Communications Officer</p>
            </div>

            {/* Team Member 7 */}
            <div>
              <div className="bg-[#E0E0E0] rounded-lg overflow-hidden aspect-3/4] mb-3 md:mb-4">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop"
                  alt="Blessing Uche"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-[#313A41] font-medium text-sm md:text-lg">Blessing Uche</h3>
              <p className="text-primary text-xs md:text-base">Events Coordinator</p>
            </div>

            {/* Team Member 8 */}
            <div>
              <div className="bg-[#E0E0E0] rounded-lg overflow-hidden aspect-3/4] mb-3 md:mb-4">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop"
                  alt="Kayode Ajayi"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-[#313A41] font-medium text-sm md:text-lg">Kayode Ajayi</h3>
              <p className="text-primary text-xs md:text-base">Finance Officer</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default About;