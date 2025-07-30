import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageCarousel = () => {
  return (
    <div className="w-full h-full max-w-screen-xl mx-auto px-2 py-2">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={4000}
        transitionTime={800}
        className="rounded-2xl overflow-hidden"
      >
        {[
          "Screenshot 2024-12-07 155932.jpg",
          "Screenshot 2024-12-07 155944.jpg",
          "Screenshot 2024-12-07 155959.jpg",
          "Screenshot 2024-12-07 162425.jpg",
          "Screenshot 2024-12-07 162452.jpg",
        ].map((img, index) => (
          <div key={index}>
            <img
              src={`/assests/${img}`} // Make sure 'assets' is spelled correctly
              alt={`Restaurant ${index + 1}`}
              className="w-full h-[140px] sm:h-[150px] md:h-[300px] lg:h-[400px] object-cover"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
