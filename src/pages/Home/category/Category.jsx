import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTittle from "../../../component/sectionTittle/SectionTittle";

const Category = () => {
  return (
    <section>
        <SectionTittle subTittle={"From 11:00am to 10:00pm"} tittle={"Oder Online"}></SectionTittle>
      <Swiper
        slidesPerView={4}
        spaceBetween={40}
        centeredSlides={false}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24 "
      >
        <SwiperSlide>
          <img className="rounded-lg" src={slide1} alt="" />
          <h1 className="md:text-4xl font-bold text-white uppercase text-center -mt-16">Salad</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-lg" src={slide2} alt="" />
          <h1 className="md:text-4xl font-bold text-white uppercase text-center -mt-16">Pizza</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-lg" src={slide3} alt="" />
          <h1 className="md:text-4xl font-bold text-white uppercase text-center -mt-16">Soup</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-lg" src={slide4} alt="" />
          <h1 className="md:text-4xl font-bold text-white uppercase text-center -mt-16">Desserts</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-lg" src={slide5} alt="" />
          <h1 className="md:text-4xl font-bold text-white uppercase text-center -mt-16 pb-6">Salad</h1>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
