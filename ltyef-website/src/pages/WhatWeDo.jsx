import { useState } from 'react';
import empowermentImg from '../assets/images/empowerment.png';
import VolunteerModal from '../components/modals/VolunteerModal';
import ProjectsSection from '../components/sections/ProjectsSection';
import EventsSection from '../components/sections/EventsSection';
import CTASection from '../components/sections/CTASection';

const WhatWeDo = () => {
  const [isVolunteerModalOpen, setIsVolunteerModalOpen] = useState(false);

  return (
    <div>
      {/* Our Approach Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-350 mx-auto px-4 sm:px-6 lg:px-12">
          {/* Subtitle above the grid */}
          <span className="text-primary font-normal uppercase tracking-wide">
            Know About Us
          </span>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mt-3">
            {/* Text Content */}
            <div>
              <h1 className="text-[40px] font-bold text-[#313A41] mb-6 leading-tight whitespace-nowrap">
                Our Approach to Youth Empowerment
              </h1>
              <div className="space-y-4">
                <p className="text-[#313A41]/85 leading-relaxed">
                  We believe that true empowerment goes beyond motivational speeches and one-time events. It requires consistent investment in the lives of young people — walking with them through their challenges, celebrating their victories, and equipping them with practical skills that will serve them for a lifetime. That's why our approach is holistic, intentional, and deeply relational. We focus not only on what young people can do but also on who they are becoming. Character development, emotional intelligence, and a strong sense of identity are just as important to us as academic achievement and career readiness.
                </p>
                <p className="text-[#313A41]/85 leading-relaxed">
                  Our programmes are designed to meet young people where they are and take them where they need to go. Whether it's through mentorship, workshops, community outreach, or special events, we create multiple touchpoints for transformation. We partner with schools, churches, community organisations, and families to ensure that our impact reaches as many young lives as possible. Every programme is an opportunity — an opportunity for a young person to discover their worth, develop their gifts, and step boldly into their future.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="h-full">
              <img 
                src={empowermentImg} 
                alt="Happy children smiling" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do For Teens Section */}
      <section className="py-16 md:py-24 bg-[#F5F7FA]">
        <div className="max-w-350 mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-[40px] font-bold text-[#313A41] mb-12 leading-tight">
            What we do for our Teens and Youth
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
            {/* Mentorship & Coaching */}
            <div>
              <h3 className="text-xl font-bold text-[#313A41] mb-3">
                Mentorship & Coaching
              </h3>
              <p className="text-[#313A41]/85 leading-relaxed">
                Mentorship is at the heart of everything we do. We connect teens and youth with experienced mentors who provide guidance, encouragement, and accountability.
              </p>
            </div>

            {/* Leadership Development */}
            <div>
              <h3 className="text-xl font-bold text-[#313A41] mb-3">
                Leadership Development
              </h3>
              <p className="text-[#313A41]/85 leading-relaxed">
                We believe that every young person has the capacity to lead. Our leadership development programmes are designed to identify, nurture, and refine the leadership potential within teens and youth.
              </p>
            </div>

            {/* Skills Acquisition & Training */}
            <div>
              <h3 className="text-xl font-bold text-[#313A41] mb-3">
                Skills Acquisition & Training
              </h3>
              <p className="text-[#313A41]/85 leading-relaxed">
                In today's fast-changing world, young people need more than academic knowledge to succeed. They need practical, marketable skills that will give them an edge in life.
              </p>
            </div>

            {/* Community Outreach */}
            <div>
              <h3 className="text-xl font-bold text-[#313A41] mb-3">
                Community Outreach
              </h3>
              <p className="text-[#313A41]/85 leading-relaxed">
                We are passionate about reaching young people in underserved communities who may not have access to quality mentorship and empowerment programmes.
              </p>
            </div>

            {/* Conferences & Summits */}
            <div>
              <h3 className="text-xl font-bold text-[#313A41] mb-3">
                Conferences & Summits
              </h3>
              <p className="text-[#313A41]/85 leading-relaxed">
                Our conferences and summits are flagship events that bring together hundreds of teens and youth for a powerful experience of learning, inspiration, and connection.
              </p>
            </div>

            {/* Counselling & Support */}
            <div>
              <h3 className="text-xl font-bold text-[#313A41] mb-3">
                Counselling & Support
              </h3>
              <p className="text-[#313A41]/85 leading-relaxed">
                We understand that many young people face emotional and psychological challenges that can hinder their growth. We provide access to counselling and emotional support as holistic approach to youth empowerment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <ProjectsSection />

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

export default WhatWeDo;