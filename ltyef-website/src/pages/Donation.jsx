import { useState } from 'react';
import donationImg from '../assets/images/donation.png';
import DonationsSection from '../components/sections/DonationsSection';
import EventsSection from '../components/sections/EventsSection';
import CTASection from '../components/sections/CTASection';


const Donation = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div>
      {/* Your Generosity Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-350 mx-auto px-4 sm:px-6 lg:px-12">
          {/* Subtitle above the grid */}
          <span className="text-primary font-normal uppercase tracking-wide">
            Donate
          </span>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-3">
            {/* Text Content */}
            <div>
              <h1 className="text-[40px] font-bold text-[#313A41] mb-6 leading-tight">
                Your Generosity Changes Lives
              </h1>
              <div className="space-y-4">
                <p className="text-[#313A41]/85 leading-relaxed">
                  Every donation to Leading Teens & Youth Empowerment Foundation (LTYEF) and Girl-to-Queen Initiative (G2Q) is an investment in the future of a young person. Your generosity helps us provide mentorship, training, resources, and life-changing programmes to teens and youth who are hungry for guidance and opportunity. We are a nonprofit organisation, and we rely on the kindness of individuals, families, churches, and corporate partners to sustain and expand our work.
                </p>
                <p className="text-[#313A41]/85 leading-relaxed">
                  When you give to LTYEF, you're not just making a donation — you're becoming part of a movement that is raising a generation of confident, responsible, and purpose-driven young leaders. Whether it's funding a mentorship session, sponsoring a young person's attendance at a conference, or providing resources for a community outreach, your contribution makes a tangible difference. No amount is too small, and every naira counts.
                </p>
                <p className="text-[#313A41]/85 leading-relaxed">
                  We are deeply grateful for every gift we receive. Your trust in our work motivates us to be excellent stewards of every resource entrusted to us. We are committed to transparency, accountability, and ensuring that your donations are used wisely to maximise impact. Thank you for considering a gift to LTYEF — together, we are building a brighter future for Nigeria's youth.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="h-full">
              <img 
                src={donationImg} 
                alt="Donation box" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How You Can Contribute Section */}
      <section className="py-16 md:py-24 bg-[#F5F7FA]">
        <div className="max-w-350 mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Side - Static Content */}
            <div>
              <h2 className="text-[40px] font-bold text-[#313A41] mb-6 leading-tight">
                How you can contribute to the Future of Our Youth
              </h2>
              <div className="space-y-4">
                <p className="text-[#313A41]/85 leading-relaxed">
                  There are many ways you can support the work of LTYEF and G2Q. The most direct way is through a financial donation, which helps us fund our programmes, events, mentorship initiatives, and community outreach efforts. You can make a one-time gift or become a recurring donor, providing consistent support that allows us to plan and execute impactful programmes throughout the year. Every donation — whether large or small — goes directly toward transforming young lives.
                </p>
                <p className="text-[#313A41]/85 leading-relaxed">
                  Beyond financial giving, you can also contribute by sponsoring specific programmes or events. For example, you can sponsor a teen's participation in a leadership summit, fund the printing of educational materials, or cover the cost of transportation for outreach to underserved communities. Corporate sponsors and partners can also collaborate with us to host joint events, provide in-kind donations, or offer skills training to our beneficiaries.
                </p>
                <p className="text-[#313A41]/85 leading-relaxed">
                  If you're unable to give financially at this time, you can still make a difference by spreading the word about our work. Share our social media posts, tell your friends and family about LTYEF, or invite others to attend our events. You can also volunteer your time, skills, or expertise to support our programmes. Every form of contribution matters, and we are grateful for every partner who joins us in this mission.
                </p>
                <p className="text-[#313A41]/85 leading-relaxed">
                  We also welcome partnerships with schools, churches, community organisations, and businesses who share our passion for youth empowerment. If you'd like to explore partnership opportunities, please reach out to us via our contact page. Together, we can reach more young people and create lasting impact in communities across Nigeria.
                </p>
              </div>
            </div>

            {/* Right Side - Tabs */}
            <div>
              {/* Tab Navigation */}
              <div className="flex gap-8 border-b border-[#E0E0E0] mb-6">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`pb-3 font-normal transition-colors ${
                    activeTab === 'overview'
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-[#313A41]/85 hover:text-primary'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('impact')}
                  className={`pb-3 font-normal transition-colors ${
                    activeTab === 'impact'
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-[#313A41]/85 hover:text-primary'
                  }`}
                >
                  Impact
                </button>
                <button
                  onClick={() => setActiveTab('account')}
                  className={`pb-3 font-normal transition-colors ${
                    activeTab === 'account'
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-[#313A41]/85 hover:text-primary'
                  }`}
                >
                  Account Details
                </button>
              </div>

              {/* Tab Content */}
              <div>
                {/* Overview Tab */}
                {activeTab === 'overview' && (
                  <div className="space-y-4">
                    <p className="text-[#313A41]/85 leading-relaxed">
                      Your donation to LTYEF and G2Q directly funds the programmes, resources, and operations that make our work possible. Here's an overview of what your generosity supports:
                    </p>
                    <p className="text-[#313A41]/85 leading-relaxed">
                      <span className="font-bold text-[#313A41]">Mentorship Programmes:</span> Your donation helps us recruit, train, and support mentors who walk alongside young people, providing guidance, encouragement, and accountability. Mentorship is the cornerstone of our work, and your gift ensures that more teens and youth have access to quality mentors who care about their growth and success.
                    </p>
                    <p className="text-[#313A41]/85 leading-relaxed">
                      <span className="font-bold text-[#313A41]">Skills Training & Workshops:</span> We organise workshops and training sessions on topics such as leadership, financial literacy, public speaking, digital skills, and career readiness. Your support helps cover the costs of facilitators, venues, materials, and refreshments — ensuring that these sessions are accessible to as many young people as possible.
                    </p>
                    <p className="text-[#313A41]/85 leading-relaxed">
                      <span className="font-bold text-[#313A41]">Conferences & Summits:</span> Our flagship events bring together hundreds of teens and youth for powerful experiences of learning, inspiration, and connection. Your donation helps us secure venues, invite quality speakers, provide event materials, and offer subsidised or free tickets to young people who cannot afford to pay.
                    </p>
                    <p className="text-[#313A41]/85 leading-relaxed">
                      <span className="font-bold text-[#313A41]">Community Outreach:</span> We take our programmes to schools, rural communities, and underserved areas where young people have limited access to mentorship and empowerment resources. Your support funds transportation, logistics, and materials for these outreach efforts — helping us reach those who need it most.
                    </p>
                    <p className="text-[#313A41]/85 leading-relaxed">
                      <span className="font-bold text-[#313A41]">Operational Costs:</span> Running a nonprofit organisation requires resources for administration, communication, and coordination. Your donation helps cover essential operational costs that keep the organisation running smoothly and enable us to deliver quality programmes consistently.
                    </p>
                  </div>
                )}

                {/* Impact Tab */}
                {activeTab === 'impact' && (
                  <div className="space-y-4">
                    <p className="text-[#313A41]/85 leading-relaxed">
                      When you give to LTYEF and G2Q, you're not just donating money, you're changing lives. Here's a glimpse of the impact your generosity creates:
                    </p>
                    <p className="text-[#313A41]/85 leading-relaxed">
                      <span className="font-bold text-[#313A41]">₦5,000</span> can provide educational materials (notebooks, pens, workbooks) for a teen participating in one of our programmes. These resources help young people engage fully in learning and take notes that they can refer back to long after the programme ends.
                    </p>
                    <p className="text-[#313A41]/85 leading-relaxed">
                      <span className="font-bold text-[#313A41]">₦10,000</span> can sponsor a young person's attendance at a one-day workshop or training session. This covers their registration, materials, and refreshments, giving them access to life-changing content and connections they might not otherwise afford.
                    </p>
                    <p className="text-[#313A41]/85 leading-relaxed">
                      <span className="font-bold text-[#313A41]">₦25,000</span> can fund a full mentorship cycle for one teen, covering mentor training, session materials, and follow-up support. This investment gives a young person consistent access to guidance and accountability over several months.
                    </p>
                    <p className="text-[#313A41]/85 leading-relaxed">
                      <span className="font-bold text-[#313A41]">₦50,000</span> can sponsor a teen's full participation in a leadership summit or conference, including registration, transportation, meals, and materials. For many young people, this is a once-in-a-lifetime experience that opens their eyes to new possibilities.
                    </p>
                    <p className="text-[#313A41]/85 leading-relaxed">
                      Every donation matters. Whether you give ₦1,000 or ₦1,000,000, your contribution joins with others to create a wave of impact that reaches young people across Nigeria. Thank you for believing in the potential of our youth.
                    </p>
                  </div>
                )}

                {/* Account Details Tab */}
                {activeTab === 'account' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-bold text-[#313A41] mb-2">Bank Account Information</h3>
                      <p className="text-[#313A41]/85 leading-relaxed mb-4">
                        Ready to make a donation? You can transfer directly to our official bank account below. All donations go toward funding our programmes, events, and operations.
                      </p>
                      <div className="space-y-2">
                        <p className="text-[#313A41]/85">
                          <span className="font-bold text-[#313A41]">Account Name:</span> Girl-to-Queen Initiative
                        </p>
                        <p className="text-[#313A41]/85">
                          <span className="font-bold text-[#313A41]">Bank:</span> Guaranty Trust Bank (GTB)
                        </p>
                        <p className="text-[#313A41]/85">
                          <span className="font-bold text-[#313A41]">Account Number:</span> 0635139181
                        </p>
                        <p className="text-[#313A41]/85">
                          <span className="font-bold text-[#313A41]">Currency:</span> Nigerian Naira (₦)
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-bold text-[#313A41] mb-2">After Making Your Donation:</h3>
                      <p className="text-[#313A41]/85 leading-relaxed mb-3">
                        Once you've completed your transfer, if you want to notify us so we can acknowledge your gift and keep you updated on how it's being used. You can reach us via:
                      </p>
                      <ul className="text-[#313A41]/85 space-y-1 ml-4">
                        <li>• Email: [Insert email address]</li>
                        <li>• WhatsApp: [Insert phone number]</li>
                        <li>• Social Media: Send us a direct message on Instagram, Facebook, or Twitter</li>
                      </ul>
                    </div>

                    <div>
                      <p className="text-[#313A41]/85 leading-relaxed mb-3">
                        Please include the following details when notifying us:
                      </p>
                      <ul className="text-[#313A41]/85 space-y-1 ml-4">
                        <li>• Your full name (or organisation name)</li>
                        <li>• Amount donated</li>
                        <li>• Purpose of donation</li>
                      </ul>
                    </div>

                    <p className="text-[#313A41]/85 leading-relaxed">
                      Your decision to give is a powerful one. With your support, we can continue mentoring, training, and empowering teens and youth across Nigeria. Every donation, no matter the size, makes a real difference. Thank you for partnering with us to build a brighter future for young people. We are truly grateful.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donations Section */}
      <DonationsSection />

      {/* Events Section */}
      <EventsSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default Donation;