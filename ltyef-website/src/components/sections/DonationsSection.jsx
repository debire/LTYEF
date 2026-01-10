const DonationsSection = ({
  title = "How we use your donations and where it goes",
  description = "Every naira you give goes directly toward transforming young lives. Here's how your generosity creates impact:",
  data = [
    { percentage: 40, label: "Programme Development & Delivery", color: "#F39B14" },
    { percentage: 35, label: "Educational Materials & Resources", color: "#313A41" },
    { percentage: 15, label: "Community Outreach & Events", color: "#14BDD8" },
    { percentage: 10, label: "Administrative & Operational Costs", color: "#B01E83" }
  ]
}) => {
  // Calculate the donut chart segments
  const calculateDonutSegments = () => {
    let cumulativePercentage = 0;
    return data.map((item) => {
      const startAngle = (cumulativePercentage / 100) * 360;
      cumulativePercentage += item.percentage;
      const endAngle = (cumulativePercentage / 100) * 360;
      return {
        ...item,
        startAngle,
        endAngle
      };
    });
  };

  const segments = calculateDonutSegments();

  // Convert polar coordinates to cartesian for SVG arc
  const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians)
    };
  };

  // Create SVG arc path
  const describeArc = (x, y, radius, startAngle, endAngle) => {
    const start = polarToCartesian(x, y, radius, endAngle);
    const end = polarToCartesian(x, y, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    return [
      "M", start.x, start.y,
      "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
    ].join(" ");
  };

  return (
    <section className="py-16 md:py-24 bg-[#F5F7FA]">
      <div className="max-w-300 mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 items-center">
          {/* Text Content */}
          <div className="max-w-2xl">
            <h2 className="text-[28px] md:text-[40px] font-bold text-[#313A41] mb-6">
              {title}
            </h2>
            <p className="text-[#313A41]/85 leading-relaxed mb-8">
              {description}
            </p>
            
            {/* Legend */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
              {data.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span 
                    className="w-4 h-4 shrink-0 rounded-sm mt-0.5" 
                    style={{ backgroundColor: item.color }}
                  ></span>
                  <span className="text-[#313A41]/85 wrap-break-word">
                    {item.percentage}% {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Donut Chart */}
          <div className="flex justify-center">
            <svg width="350" height="350" viewBox="0 0 350 350">
              {segments.map((segment, index) => (
                <path
                  key={index}
                  d={describeArc(175, 175, 120, segment.startAngle, segment.endAngle)}
                  fill="none"
                  stroke={segment.color}
                  strokeWidth="70"
                />
              ))}
              {/* Inner circle to create donut effect - matches background */}
              <circle cx="175" cy="175" r="85" fill="#F5F7FA" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationsSection;