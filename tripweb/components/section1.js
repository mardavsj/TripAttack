import React, { useRef, useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
import Author from './child/author';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const section1 = () => {

  return (
    <section className="md:py-16 py-8">
      <div className="container mx-auto md:px-20">
        <h1 className="font-light md:text-4xl text-2xl md:pb-12 pb-6 text-center">Time to pack your BAGS!</h1>
        <Swiper
          cssMode={true}
          autoplay={true}
          loop={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide>{Slide()}</SwiperSlide>
          <SwiperSlide>{Slide()}</SwiperSlide>
          <SwiperSlide>{Slide()}</SwiperSlide>
          <SwiperSlide>{Slide()}</SwiperSlide>
          <SwiperSlide>{Slide()}</SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

function Slide(){
  return (
    <div className="grid md:grid-cols-2 py-4" >
      <div className="image">
        <Link href="/">
          <div><Image src={"/assets/image1.jpg"} alt="travel-image" width={800} height={800}/></div>
        </Link>
      </div>
      <div className="flex justify-center flex-col w-4/5">
        <div className="cat ">
          <Link href="/">
            <div className="text-orange-700 hover:text-orange-600 ">Buisness Travel</div>
            <div className="text-gray-800 hover:text-gray-600">July 3 2022</div>
          </Link>
        </div>
        <div className="title">
          <Link href="/">
            <div className="text-3xl md:text-4xl font-bold text-gray-700 hover:text-gray-600">There&apos;s a sunrise and a sunset every single day, and they&apos;re absolutely free. Don&apos;t miss so many of them.</div>
          </Link>
        </div>
        <p className="text-gray-500 py-3">
          kvbk elf  elwb elwbv befl jbefgil wlbf bwfb ro3f lefbdf wgrb jfvr iuu fwegt gkegbvig4 grrbrvkf grvbgefvbg rgbrgrkugbr gjrjb ugf fgiuegbj uigrb gre  irgjb uigrrieu rgug  ugiegb i4ugigr 
        </p>
        <Author></Author>
      </div>
    </div>
  )
}

export default section1