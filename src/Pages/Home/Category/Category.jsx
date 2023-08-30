// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import img1 from '../../../assets/home/slide1.jpg';
import img2 from '../../../assets/home/slide2.jpg';
import img3 from '../../../assets/home/slide3.jpg';
import img4 from '../../../assets/home/slide4.jpg';
import img5 from '../../../assets/home/slide5.jpg';

const Category = () => {
    return (
        <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
            <img src={img1} alt="slide1" />
            <h3 className='text-4xl uppercase text-center -mt-16 text-white'>salad</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img2} alt="slide2" />
            <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Pizza</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img3} alt="slide3" />
            <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Soups</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img4} alt="slide4" />
            <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Desserts</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img5} alt="slide5" />
            <h3 className='text-4xl uppercase text-center -mt-16 text-white'>salad</h3>
        </SwiperSlide>
       
      </Swiper>
    );
};

export default Category;