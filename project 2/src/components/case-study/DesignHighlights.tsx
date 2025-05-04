import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SectionHeading from '../common/SectionHeading';

interface DesignHighlightsProps {
  images: {
    url: string;
    alt: string;
  }[];
}

const DesignHighlights: React.FC<DesignHighlightsProps> = ({ images }) => {
  return (
    <section className="py-80 px-16 bg-white dark:bg-secondary-800">
      <div className="container mx-auto">
        <SectionHeading
          title="Design Highlights"
          subtitle="Key screens and features from the final design."
          alignment="center"
        />
        
        <div className="mt-48">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={32}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="!pb-48"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-[400px] object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default DesignHighlights;