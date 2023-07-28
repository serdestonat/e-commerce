import { Inter } from "next/font/google";
import Head from "next/head";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Swiper
        spaceBetween={5}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Link href="/" className="slide">
            <Image
              src="/cookware.png"
              alt="cookware"
              width={1920}
              height={1080}
            ></Image>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/" className="slide">
            <Image
              src="/cookware.png"
              alt="cookware"
              width={2048}
              height={1365}
            ></Image>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/" className="slide">
            <Image
              src="/cookware.png"
              alt="cookware"
              width={2048}
              height={1365}
            ></Image>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/" className="slide">
            <Image
              src="/cookware.png"
              alt="cookware"
              width={2048}
              height={1365}
            ></Image>
          </Link>
        </SwiperSlide>
        ...
      </Swiper>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="icon" href="/scremove.png" />
          <title>Home</title>
        </Head>
      </main>
    </>
  );
}
