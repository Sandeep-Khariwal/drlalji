import React from 'react';

const Map = () => {
  return (
    <div className="relative w-full h-[80vh]">
      <div className="overflow-hidden w-full h-full">
        <iframe
          className="w-full h-full"
          frameBorder="0"
          scrolling="no"
          src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=University of 351, khudda jassu, near gurdwara sahib, Khudda Lahora, Chandigarh, Khudda Lahora, Chandigarh 160014Oxford&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        />
      </div>
    </div>
  );
};

export default Map;
