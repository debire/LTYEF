import { Link } from 'react-router-dom';
import projectsOne from '../../assets/images/projectsone.png';
import projectsTwo from '../../assets/images/projectstwo.png';
import projectsThree from '../../assets/images/projectsthree.png';

const ProjectsSection = ({ 
  subtitle = "Projects We Have Done",
  title = "Some header text here",
  paragraphs = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    "Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    "Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
    "Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
  ],
  images = [
    { src: projectsOne, alt: "Project one" },
    { src: projectsTwo, alt: "Project two" },
    { src: projectsThree, alt: "Project three" }
  ],
  linkTo = "/media"
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#313A41] mt-3 mb-6">
              {title}
            </h2>
            <div className="space-y-4">
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="text-[#313A41]/85 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* Large image on the left */}
            <div className="row-span-2 relative group">
              <img 
                src={images[0]?.src} 
                alt={images[0]?.alt} 
                className="w-full h-full object-cover"
              />
              <Link 
                to={linkTo}
                className="absolute bottom-4 right-4 bg-white text-[#313A41] px-6 py-2 text-sm font-normal border-2 border-white hover:bg-transparent hover:text-white hover:border-white transition-all duration-300"
              >
                Learn More
              </Link>
            </div>

            {/* Top right image */}
            <div className="relative group">
              <img 
                src={images[1]?.src} 
                alt={images[1]?.alt} 
                className="w-full h-full object-cover"
              />
              <Link 
                to={linkTo}
                className="absolute bottom-4 right-4 bg-white text-[#313A41] px-6 py-2 text-sm font-normal border-2 border-white hover:bg-transparent hover:text-white hover:border-white transition-all duration-300"
              >
                Learn More
              </Link>
            </div>

            {/* Bottom right image */}
            <div className="relative group">
              <img 
                src={images[2]?.src} 
                alt={images[2]?.alt} 
                className="w-full h-full object-cover"
              />
              <Link 
                to={linkTo}
                className="absolute bottom-4 right-4 bg-white text-[#313A41] px-6 py-2 text-sm font-normal border-2 border-white hover:bg-transparent hover:text-white hover:border-white transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;