import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const menuItems = [
  { title: 'BHOOK KA THE END!', image: '/assests/Screenshot 2024-12-07 172246.png' },
  { title: 'STARTERS', image: '/assests/Screenshot 2024-12-07 172306.png' },
  { title: 'SOMEWHAT LOCAL', image: '/assests/Screenshot 2024-12-07 172325.png' },
  { title: 'SOMEWHAT SOOPER', image: '/assests/Screenshot 2024-12-07 182607.png' },
  { title: 'SANDWICHES & PLATTERS', image: '/assests/Screenshot 2024-12-07 182618.png' }
];

const MenuCarousel = () => {
  return (
    <section className="bg-white max-w-7xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-black">Explore Menu</h2>
        <Link
          to="/menu"
          className="px-5 py-2 text-sm font-semibold bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
        >
          View All
        </Link>
      </div>

      {/* Carousel */}
      <div className="relative">
        <Carousel
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          showArrows
          centerMode
          centerSlidePercentage={33.33}
          swipeable
          emulateTouch
          className="menu-carousel"
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                onClick={onClickHandler}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white text-black text-3xl px-3 py-1 rounded-full shadow z-10"
              >
                ‹
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                onClick={onClickHandler}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-black text-3xl px-3 py-1 rounded-full shadow z-10"
              >
                ›
              </button>
            )
          }
        >
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 lg:w-full px-2 mb-4 flex-shrink-0"
            >
              <div className="bg-white border border-orange-400 rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-200 ease-in-out">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-50 object-cover"
                />
                <div className="p-3 text-center">
                  <h3 className="text-xs sm:text-xs lg:text-base font-semibold text-black">{item.title}</h3>
                </div>
              </div>
            </div>

          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default MenuCarousel;
