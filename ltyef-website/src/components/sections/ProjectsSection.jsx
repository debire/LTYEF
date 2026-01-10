import projectsOne from '../../assets/images/projectsone.png';
import projectsTwo from '../../assets/images/projectstwo.png';
import projectsThree from '../../assets/images/projectsthree.png';
import projectsFour from '../../assets/images/projectsfour.png';
import checkmarkIcon from '../../assets/icons/checkmark.svg';

const ProjectsSection = ({ 
  subtitle = "Projects We Have Done",
  title = "How We Make an Impact",
  items = [
    {
      title: "G2Q Education Support Fund:",
      description: "Payment of UMTE/JAMB forms fees, school expenses support and payment of school fees for financially challenged girls in Nigerian public universities in year 2022 and 2023 and 2024."
    },
    {
      title: "Monthly Teens & Youth Series:",
      description: "Every third Saturday of the month, we gather with the teens and youth and have sessions with them. Mentoring, teaching, advising them on those sensitive topics they might not be opportune to learn in school."
    },
    {
      title: "Educational Games/Recreational activities:",
      description: "During the monthly gatherings, we engage the teens and youth in educational games, that help them gain more basic knowledge. We also engage them in recreational activities to make sure they are still filled with energy and enthusiasm."
    },
    {
      title: "Book Reviews:",
      description: "We also encourage the teens and youth to read books and novels, whether motivational, inspirational, educational, and after a timeframe we review the books with them and ensure they learn valuable lessons from the books."
    },
    {
      title: "Annual End of Year Party:",
      description: "Towards the end of the year we host a party for the teens and youth. For them to ease their mind and enjoy themselves. We have various activities during the party and ensure everyone showcases and contributes to the fun and success of the party."
    },
    {
      title: "Upcoming Projects(2026-2027):",
      description: "- G2Q-LTYEF IT & CREATIVES HUB\n- G2Q-LTYEF LIBRARY & WORKSPACE"
    }
  ],
  images = [
    { src: projectsOne, alt: "Project one" },
    { src: projectsTwo, alt: "Project two" },
    { src: projectsThree, alt: "Project three" },
    { src: projectsFour, alt: "Project four" }
  ]
}) => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-350 mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Text Content */}
          <div>
            <span className="text-primary font-normal uppercase tracking-wide">
              {subtitle}
            </span>
            <h2 className="text-[28px] md:text-[40px] font-bold text-[#313A41] mt-3 mb-8 leading-tight">
              {title}
            </h2>
            <div className="space-y-5">
              {items.map((item, index) => (
                <div key={index} className="flex gap-3">
                  <img src={checkmarkIcon} alt="" className="w-5 h-5 mt-1 shrink-0" />
                  <div>
                    <span className="font-bold text-[#313A41]">{item.title}</span>
                    <p className="text-[#313A41]/85 leading-relaxed whitespace-pre-line">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Images Grid - Custom Layout */}
          <div className="grid grid-cols-2 grid-rows-[1fr_1fr_1.5fr] gap-4">
            {/* Top left image - spans 2 rows */}
            <div className="row-span-2">
              <img 
                src={images[0]?.src} 
                alt={images[0]?.alt} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Top right image */}
            <div>
              <img 
                src={images[1]?.src} 
                alt={images[1]?.alt} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Middle right image */}
            <div>
              <img 
                src={images[2]?.src} 
                alt={images[2]?.alt} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom image - spans full width */}
            <div className="col-span-2">
              <img 
                src={images[3]?.src} 
                alt={images[3]?.alt} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;