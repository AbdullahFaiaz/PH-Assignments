import one from '../assets/one.jpg'
import two from '../assets/two.jpg'
import three from '../assets/three.jpg'
import four from '../assets/four.jpg'
import five from '../assets/five.jpg'
import six from '../assets/six.jpg'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const BannerSlider = () => {
  return (
    <div className='relative'>
   <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2300,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img className='lg:h-[42vw] md:h-[65vw] h-[80vw] w-full object-cover object-center' src={one} alt="image" /></SwiperSlide>
        <SwiperSlide><img className='lg:h-[42vw] md:h-[65vw] h-[80vw] w-full object-cover object-center' src={two} alt="image" /></SwiperSlide>
        <SwiperSlide><img className='lg:h-[42vw] md:h-[65vw] h-[80vw] w-full object-cover object-center' src={three} alt="image" /></SwiperSlide>
        <SwiperSlide><img className='lg:h-[42vw] md:h-[65vw] h-[80vw] w-full object-cover object-center' src={four} alt="image" /></SwiperSlide>
        <SwiperSlide><img className='lg:h-[42vw] md:h-[65vw] h-[80vw] w-full object-cover object-center' src={five} alt="image" /></SwiperSlide>
        <SwiperSlide><img className='lg:h-[42vw] md:h-[65vw] h-[80vw] w-full object-cover object-center' src={six} alt="image" /></SwiperSlide>
      </Swiper>
      <div className='text-[4vw] text-black absolute bottom-[55%] right-[35%] z-10 font-semibold drop-shadow-2xl bg-slate-400 bg-opacity-40'><p className=''>Harmony Homes</p></div>
</div>
  );
};

export default BannerSlider;
