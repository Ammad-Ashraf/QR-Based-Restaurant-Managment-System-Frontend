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
          <img src="/assests/Screenshot 2024-12-07 155932.jpg" alt="Restaurant 1" />
        </div>
        <div>
          <img src="/assests/Screenshot 2024-12-07 155944.jpg" alt="Restaurant 2" />
        </div>
        <div>
          <img src="/assests/Screenshot 2024-12-07 155959.jpg" alt="Restaurant 3" />
        </div>
        <div>
          <img src="/assests/Screenshot 2024-12-07 162425.jpg" alt="Restaurant 4" />
        </div>
        <div>
          <img src="/assests/Screenshot 2024-12-07 162452.jpg" alt="Restaurant 5" />
        </div>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
