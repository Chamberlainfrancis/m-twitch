import Channels from '../src/channels';
import Menubar from '../src/menu/Menubar';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

// import Swiper core and required modules
import SwiperCore, {
    Pagination
} from 'swiper/core';
import Categories from '../src/categories';

// install Swiper modules
SwiperCore.use([Pagination]);

export default function Index() {

  const users = [1,2,3,4,5];
  const channelItems = users.map(function(param){

    const image = (param % 2 === 0) ? '/images/live-user-1.jpg': (param % 3 === 0) ? '/images/live-user-2.jpg' : '/images/live-user-3.jpg';

      return (
        <SwiperSlide key={param}>
          <Channels coverImg={image} 
            avatar="/images/me.jpg" 
            title="How to Play COD" 
            name="Chamberlain" 
            category="Call of Duty" 
            language="English"
          />
        </SwiperSlide>
      );
  })

  const category = users.map( function(param) {

    let categoryImage;
    let categoryTitle;

    if(param % 2 === 0 ) {
      categoryTitle = 'Call of duty';
      categoryImage = '/images/cod.jpg';
    }else if(param % 3 === 0) {
      categoryTitle = 'Apex';
      categoryImage = '/images/Apex.jpg';
    }else{
      categoryTitle = 'Fortnite';
      categoryImage = '/images/Fortnite.jpg';
    }

      return (
        <SwiperSlide key={param}>
          <Categories coverImg={categoryImage}
            title={categoryTitle}
            name="Chamberlain" 
            language="English"
          />
        </SwiperSlide>
      );
  });

  return (
    <>
      <Menubar />
      <div className="container-fluid mt-5 py-3">
        <h1 className="mb-3 display-3 fw-bold">Welcome to Twitch!</h1>
        <div className="mb-2">
          <h6 className="text-muted text-uppercase">
            Live channels we think you'll like
          </h6>
          <Swiper slidesPerView={1.5} spaceBetween={15} className="mySwiper">
              {channelItems}
          </Swiper>
        </div>
        <div className="my-4">
          <h6 className="text-muted text-uppercase"><span className="text-danger">Categories</span>  we think you'll like</h6>
          <Swiper slidesPerView={2.5} spaceBetween={5} className="mySwiper">
              {category}
          </Swiper>
        </div>
        <div className="mb-2">
          <h6 className="text-muted text-uppercase">
            <span className="text-twitch">Recommended</span> just chatting channels
          </h6>
          <Swiper slidesPerView={1.5} spaceBetween={15} className="mySwiper">
              {channelItems}
          </Swiper>
        </div>
        <div className="my-4">
          <h6 className="text-muted text-uppercase">
            <span className="badge bg-danger">Hot</span> New categories
          </h6>
          <Swiper slidesPerView={2.5} spaceBetween={5} className="mySwiper">
              {category}
          </Swiper>
        </div>
        <div className="my-4">
          <h6 className="text-muted text-uppercase">
            Recommended fortnite channels
          </h6>
          <Swiper slidesPerView={1.5} spaceBetween={15} className="mySwiper">
              {channelItems}
          </Swiper>
        </div>
        
      </div>
    </>
  );
}
