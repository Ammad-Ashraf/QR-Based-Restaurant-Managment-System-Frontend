import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageCarousel = () => {
  return (
    <div className="w-full max-w-screen-4xl mx-auto px-2 py-2">
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
              className="w-full h-[200px] sm:h-[250px] md:h-[450px] lg:h-[520px] object-cover"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
