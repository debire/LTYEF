import { useState } from 'react';
import arrowIcon from '../../assets/icons/arrow.svg';
import EventRegistrationModal from '../modals/EventRegistrationModal';

const EventsSection = ({
  subtitle = "Our Events",
  title = "Upcoming Events",
  events = [
    {
      day: "24",
      month: "DEC",
      label: "Next Event",
      eventName: "Youth Empowerment Workshop",
      location: "Kernel Park",
      time: "10:00am",
      registerable: true
    },
    {
      day: "22",
      month: "JAN",
      label: "Coming Soon",
      eventName: "Mentorship Connect",
      location: "Kernel Park",
      time: "10:00am",
      registerable: false
    }
  ]
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState('');

  const handleRegisterClick = (eventName) => {
    setSelectedEvent(eventName);
    setIsModalOpen(true);
  };

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-350 mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="mb-12">
          <span className="text-primary font-normal uppercase tracking-wide">
            {subtitle}
          </span>
          <h2 className="text-[28px] md:text-[40px] font-bold text-[#313A41] mt-3">
            {title}
          </h2>
        </div>

        {/* Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div 
              key={index} 
              className="border border-[#E0E0E0] rounded-lg p-6 flex gap-6"
            >
              {/* Date */}
              <div className="text-start">
                <span className="text-4xl font-bold text-[#313A41] block">{event.day}</span>
                <span className="text-primary font-medium uppercase">{event.month}</span>
              </div>

              {/* Event Details */}
              <div className="flex-1">
                <span className="text-[#313A41]/85 text-sm uppercase tracking-wide">
                  {event.label}
                </span>
                <h3 className="text-sm font-bold text-[#313A41] mt-1 mb-2">
                  {event.eventName}
                </h3>
                <p className="text-[#313A41]/85">{event.location}</p>
                <p className="text-[#313A41]/85">{event.time}</p>
              </div>

              {/* Register Link - Only show if registerable */}
              {event.registerable && (
                <div className="flex items-end">
                  <button 
                    onClick={() => handleRegisterClick(event.eventName)}
                    className="text-primary font-medium flex items-center gap-2 hover:gap-3 transition-all duration-300"
                  >
                    Register
                    <img src={arrowIcon} alt="" className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Event Registration Modal */}
      <EventRegistrationModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        eventName={selectedEvent}
      />
    </section>
  );
};

export default EventsSection;