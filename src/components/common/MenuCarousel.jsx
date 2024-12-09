import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./styles/MenuCarousel.css";

const menuItems = [
  { title: 'BHOOK KA THE END!', image: '/src/assests/Screenshot 2024-12-07 172246.png' },
  { title: 'STARTERS', image: '/src/assests/Screenshot 2024-12-07 172306.png' },
  { title: 'SOMEWHAT LOCAL', image: '/src/assests/Screenshot 2024-12-07 172325.png' },
  { title: 'SOMEWHAT SOOPER', image: '/src/assests/Screenshot 2024-12-07 182607.png' },
  { title: 'SANDWICHES & PLATTERS', image: '/src/assests/Screenshot 2024-12-07 182618.png' }

];

const MenuCarousel = () => {
  return (
    <section className="bg-white max-w-7xl mx-auto px-6 py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-4xl font-bold text-black">Explore Menu</h2>
        <Link
          to="/menu"
          className="px-6 py-3 text-md font-semibold bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600 focus:ring-orange-300 transition"
        >
          View All
        </Link>
      </div>
      <Carousel
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showArrows={true}
        showIndicators={false}
        centerMode={true}
        centerSlidePercentage={25}
        className="menu-carousel"
      >
        {menuItems.map((item, index) => (
          <div key={index} className="menu-item px-4 ">
            <div className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-orange-500">
              <img src={item.image} alt={item.title} className="w-full h-50 py-2 px-4 object-cover" />
              <div className="p-4 text-center">
                <h3 className="text-sm font-bold text-black">{item.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default MenuCarousel;