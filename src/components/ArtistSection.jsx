import React from "react";
import './ArtistSection.css';
// import sanni from "../assets/sanni-1.svg";
// import tonmoy from "../assets/tonmoy-1.svg";
// import klanz from "../assets/ab-676161000051747-bed-9620-a-313-b-34927185-ab-8-1.svg";
// import aarxslan from "../assets/ab-6761610000517446-d-369-ed-6-b-31-a-1-b-61-d-4-aa-10-c-1.svg";
import sanni from "../assets/7ways.jpeg";
import tonmoy from "../assets/odhi.jpeg";
import klanz from "../assets/bitter.jpeg";
import aarxslan from "../assets/tangerine.jpg";
import uda from "../assets/udahoron.jpeg";
import nahiba from "../assets/nahiba.jpeg";


const artists = [
  { name: "7 Ways", image: sanni },
  { name: "Odhikar", image: tonmoy },
  { name: "Bitter", image: klanz },
  { name: "Tangerine High", image: aarxslan },
  { name: "Udahoron", image: uda },
  { name: "Nahiba Ubhoti", image: nahiba }

  
];

const ArtistSection = () => {
  return (
    <section className="artist-section">
      {/* <h2>UPCOMING RELEASES</h2> */}
      <div className='inline-flex gap-2 items-center mb-3 '>
         {/* <p className='text-gray-500'>UPCOMING <span className='text-gray-700 font-medium'>RELEASES</span></p> */}
         <h2 className="text-gray-500">UPCOMING <span className="text-gray-700">RELEASES</span></h2>
         {/* <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700'></p> */}
    </div>
      
      <div className="artist-cards">
        {artists.map((artist, index) => (
          <div key={index} className="artist-card">
            <img src={artist.image} alt={artist.name} />
            <p>{artist.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArtistSection;

