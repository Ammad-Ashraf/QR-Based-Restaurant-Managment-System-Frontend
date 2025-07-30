import { Link } from 'react-router-dom';
import ImageCarousel from '../components/common/ImageCarousel.jsx'; 
import MenuCarousel from "../components/common/MenuCarousel.jsx"; 
import FAQs from '../components/common/FAQs.jsx';

function Home() {
  return (
    <div className="font-sans text-gray-800 bg-white">
      <ImageCarousel />
      <MenuCarousel />
      <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                image: '/assests/Screenshot 2024-12-07 183959.png',
                title: 'Delivering cheezy khushiyan',
              },
              {
                image: '/assests/Screenshot 2024-12-07 184012.png',
                title: 'Fastest Growing Brand of the Year',
              },
              {
                image: '/assests/Screenshot 2024-12-07 184024.png',
                title: 'Made with fresh, local ingredients and love',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col bg-white rounded-xl overflow-hidden"
              >
                <div className="w-full h-60 sm:h-60 md:h-64 lg:h-72 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1 p-4 flex items-center justify-center">
                  <h3 className="text-center text-base sm:text-lg md:text-xl font-semibold text-black">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQs />
    </div>
  );
}

export default Home;
