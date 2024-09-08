// import React from "react";
// import './ContentSection.css';


// const ContentSection = () => {
//   return (
//     <section className="content-section">
//       <div className="content-item">
   
//         <h3>About Us</h3>
//         <p>Regional Music Centre is a record label dedicated to bringing the true essence of regional music to the world. We produce, promote, and celebrate the unique sounds that define our cultural heritage, connecting audiences with the rich musical traditions of our region.</p>
//         <button>Read more</button>
//       </div>
//       {/* Add other content sections as needed */}
//       <div className="content-item">
   
//         <h3>About Us</h3>
//         <p>Regional Music Centre is a record label dedicated to bringing the true essence of regional music to the world. We produce, promote, and celebrate the unique sounds that define our cultural heritage, connecting audiences with the rich musical traditions of our region.</p>
//         <button>Read more</button>
//       </div>
//       <div className="content-item">
   
//         <h3>About Us</h3>
//         <p>Regional Music Centre is a record label dedicated to bringing the true essence of regional music to the world. We produce, promote, and celebrate the unique sounds that define our cultural heritage, connecting audiences with the rich musical traditions of our region.</p>
//         <button>Read more</button>
//       </div>
//     </section>
//   );
// };

// export default ContentSection;

import React from "react";
import './ContentSection.css';
// Import images for the content sections.
import image1 from '../assets/guitar.svg'; // Update the path to your image
import image2 from '../assets/guitar.svg'; // Update the path to your image
import image3 from '../assets/guitar.svg'; // Update the path to your image

const ContentSection = () => {
  return (
    <section className="content-section">
      <div className="content-item">
        <div className="content-text">
          <h3>About Us</h3>
          <p>Regional Music Centre is a record label dedicated to bringing the true essence of regional music to the world. We produce, promote, and celebrate the unique sounds that define our cultural heritage, connecting audiences with the rich musical traditions of our region.</p>
          <button>Read more</button>
        </div>
        <img src={image1} alt="About Us" className="content-image" />
      </div>

      <div className="content-item">
        <div className="content-text">
          <h3>Merch</h3>
          <p>Discover our exclusive artist merch and custom pieces that blend modern aesthetics with ultimate comfort. Each item is crafted with premium materials and designed to make a statement, ensuring you stand out while feeling at ease.</p>
          <button>Read more</button>
        </div>
        <img src={image2} alt="Our Mission" className="content-image" />
      </div>

      <div className="content-item">
        <div className="content-text">
          <h3>Our Artists</h3>
          <p>We work with a diverse group of artists who are passionate about regional music. Their creativity and dedication are at the heart of our label.</p>
          <button>Read more</button>
        </div>
        <img src={image3} alt="Our Artists" className="content-image" />
      </div>
    </section>
  );
};

export default ContentSection;
