import styles from "./testimonials.module.css";
import { testimonialData } from "../../data";

import TestimonialCard from "../testimonialCard/TestimonialCard";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section className={styles.testimonials}>

      <div className="container">

        <div className={styles.heading}>

          <span>TESTIMONIALS</span>

          <h2>Trusted by Universities Worldwide</h2>

          <p>
            Hear what lecturers, administrators and students say about
            AttendFlow.
          </p>

        </div>

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },

            768: {
              slidesPerView: 2,
            },

            1200: {
              slidesPerView: 3,
            },
          }}
          modules={[Autoplay, Pagination]}
        >
          {testimonialData.map((item) => (
            <SwiperSlide key={item.id}>
              <TestimonialCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

    </section>
  );
};

export default Testimonials;