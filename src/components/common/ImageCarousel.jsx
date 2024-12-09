import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import styles

const ImageCarousel = () => {
  return (
    <div className="relative overflow-hidden">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={4000}
        transitionTime={800}
        className="h-[500px]"
      >
        <div>
          <img src="/src/assests/Screenshot 2024-12-07 155932.png" alt="Restaurant 1" />
        </div>
        <div>
          <img src="/src/assests/Screenshot 2024-12-07 155944.png" alt="Restaurant 2" />
        </div>
        <div>
          <img src="/src/assests/Screenshot 2024-12-07 155959.png" alt="Restaurant 3" />
        </div>
        <div>
          <img src="/src/assests/Screenshot 2024-12-07 162425.png" alt="Restaurant 4" />
        </div>
        <div>
          <img src="/src/assests/Screenshot 2024-12-07 162452.png" alt="Restaurant 5" />
        </div>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
