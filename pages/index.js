import * as React from 'react';
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

// install Swiper modules
SwiperCore.use([Pagination]);

const AllChannels = (
  <></>
);

export default function Index() {

  const users = [1,2,3,4,5];
  const channelItems = users.map(function(param){

    const image = (param % 2 === 0) ? '/images/live-user-1.jpg': (param % 3 === 0) ? '/images/live-user-2.jpg' : '/images/live-user-3.jpg';

      return (
        <SwiperSlide>
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

  return (
    <>
      <Menubar />
      <div className="container-fluid py-3">
        <h1 className="mb-3 display-3 fw-bold">Welcome to Twitch!</h1>
        <h6 className="text-muted text-small text-uppercase">Live channels we think you'll like</h6>
        <Swiper slidesPerView={1.5} spaceBetween={15} className="mySwiper">
          
            {channelItems}
        </Swiper>
        

        

        <div>

          {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            { index % 2 === 0 ? text : text}
          ))} */}

        </div>

        

      </div>

      
    </>
  );
}
