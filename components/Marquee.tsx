import React from "react";

const Marquee = () => {
  const items = [
    "Social Media Marketing",
    "Meta Ads",
    "Instagram Growth",
    "Content Creation",
    "Video Editing",
    "Graphic Design",
    "SEO",
    "Web Development",
    "Photography",
  ];

  return (
    <div className="py-8 bg-navy border-y border-white/5 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap flex items-center gap-8">
        {[...Array(4)].map((_, i) => (
          <React.Fragment key={i}>
            {items.map((item, index) => (
              <span
                key={`${i}-${index}`}
                className="text-2xl md:text-4xl font-syne font-bold text-white/20 hover:text-violet transition-colors cursor-default"
              >
                {item} <span className="mx-4 text-violet">·</span>
              </span>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
