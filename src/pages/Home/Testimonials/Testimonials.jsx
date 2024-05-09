import SectionTittle from "../../../component/sectionTittle/SectionTittle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const [reveiws, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://bistro-boss-server-peach-three.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  return (
    <section>
      <SectionTittle
        subTittle={"What Our Clients Say"}
        tittle={"Testimonials"}
      ></SectionTittle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reveiws.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="md:mx-20 flex flex-col items-center p-4 pb-20 ">
              <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
              <FaQuoteLeft className="text-5xl mt-5"/>
              <p className="pt-4">{review.details}</p>
              <h1 className="text-3xl text-[#CD9003] pt-4">{review.name}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
