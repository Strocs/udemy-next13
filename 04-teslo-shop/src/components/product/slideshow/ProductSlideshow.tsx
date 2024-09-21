'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperObject } from 'swiper'
import { Navigation, Thumbs, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import './slideshow.css'

interface Props {
  images: string[]
  title: string
  className?: string
}

export const ProductSlideshow = ({ images, title, className }: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>()

  return (
    <>
      <Swiper
        style={
          {
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#1e293b',
            '--swiper-navigation-size': '16px',
          } as React.CSSProperties
        }
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Thumbs, Pagination]}
        spaceBetween={0}
        thumbs={{ swiper: thumbsSwiper }}
        className={`${className} w-screen rounded-xl mb-5 group md:w-full`}
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <Image
              src={`/products/${image}`}
              alt={title}
              width={1200}
              height={1200}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        slidesPerView={4}
        spaceBetween={20}
        freeMode
        watchSlidesProgress
        modules={[Navigation, Thumbs]}
        className='thumbs !hidden md:!block'
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <Image
              src={`/products/${image}`}
              alt={title}
              width={300}
              height={300}
              className='rounded-md'
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
