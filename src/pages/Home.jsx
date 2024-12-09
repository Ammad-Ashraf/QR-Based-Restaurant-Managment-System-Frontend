import { Link } from 'react-router-dom';
import ImageCarousel from '../components/common/ImageCarousel.jsx'; 
import MenuCarousel from "../components/common/MenuCarousel.jsx"; 
import FAQs from '../components/common/FAQs.jsx';

function Home() {
  return (
    <div className="font-sans text-gray-800 bg-white">

      <div className="relative">
        <ImageCarousel />
      </div>
      <div className="relative">
        <MenuCarousel />
      </div>
      {/* About Us Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              image: '/src/assests/Screenshot 2024-12-07 183959.png',
              title: 'Delivering cheezy khushiyan',
             
            },
            {
              image: '/src/assests/Screenshot 2024-12-07 184012.png',
              title: 'Fastest Growing Brand of the Year',
              
            },
            {
              image: '/src/assests/Screenshot 2024-12-07 184024.png',
              title: 'Made with fresh, local ingredients and love',
              
            },
          ].map((item, index) => (
            <div>
              <div key={index} className="bg-white rounded-lg overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-90 object-cover" />
              </div>
              <div className="p-6">
              <h3 className="text-2xl font-semibold text-black mb-2 ">{item.title}</h3>
              
              </div>
            </div>
            
          ))}
        </div>
      </div>
      <FAQs/>
    </div>
  );
}
export default Home; 

