'use client';

import { useRef, useState } from 'react';
import { RiArrowLeftLongLine, RiArrowRightLongLine } from '@remixicon/react';
import Image from '@repo/registry/next-image-mock';
import type { Swiper as SwiperType } from 'swiper';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import * as StatusBadge from '@/components/ui/status-badge';

import 'swiper/css';
const testimonials = [
  {
    date: '24 July, 2025',
    rating: 4.3,
    ratingImage: 'https://alignui.com/images/blocks/testimonials-rating-1.svg',
    platform: 'Trustpilot',
    quote: "We cut admin tasks by 60% thanks to Synergy's smart HR automation.",
    name: 'Sophia Williams',
    title: 'HR Operations Manager',
  },
  {
    date: '12 Jun, 2025',
    rating: 4.8,
    ratingImage: 'https://alignui.com/images/blocks/testimonials-rating-2.svg',
    platform: 'Trustpilot',
    quote: 'Onboarding that took 10 days now takes just 48 hours with Synergy.',
    name: 'Alexandra Sorensen',
    title: 'Head of People Experience',
  },
  {
    date: '19 May, 2025',
    rating: 4.6,
    ratingImage: 'https://alignui.com/images/blocks/testimonials-rating-3.svg',
    platform: 'Trustpilot',
    quote:
      'Real-time insights helped us align teams and reduce burnout by 40%.',
    name: 'Eduardo Garcia',
    title: 'Director of Talent & Culture',
  },
  {
    date: '3 Apr, 2025',
    rating: 4.9,
    ratingImage: 'https://alignui.com/images/blocks/testimonials-rating-1.svg',
    platform: 'Trustpilot',
    quote: 'Synergy transformed our HR department into a strategic powerhouse.',
    name: 'Maria Chen',
    title: 'Chief People Officer',
  },
  {
    date: '18 Mar, 2025',
    rating: 4.7,
    ratingImage: 'https://alignui.com/images/blocks/testimonials-rating-2.svg',
    platform: 'Trustpilot',
    quote:
      'Employee satisfaction scores increased 35% after implementing Synergy.',
    name: 'James Peterson',
    title: 'VP of Human Resources',
  },
  {
    date: '2 Feb, 2025',
    rating: 4.5,
    ratingImage: 'https://alignui.com/images/blocks/testimonials-rating-3.svg',
    platform: 'Trustpilot',
    quote: "The best investment we made for our growing team's HR needs.",
    name: 'Rachel Thompson',
    title: 'People Operations Lead',
  },
];
export default function Testimonials02() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className='bg-bg-white-0 py-10 lg:items-center lg:py-20 xl:py-24 w-full'>
      <div className='mx-auto flex max-w-[1512px] flex-col gap-6 px-6 lg:gap-12 lg:px-20'>
        <div className='flex flex-col gap-8 lg:gap-12'>
          <div className='flex flex-col'>
            <StatusBadge.Root
              variant='light'
              className='text-label-sm text-text-sub-600 shadow-custom-input-2 bg-bg-white-0 mb-3 h-7 w-fit rounded-[9px] pr-2.5 pl-1.75 normal-case has-[>.dot]:gap-1 lg:mx-auto'
            >
              <StatusBadge.Dot className='text-primary-base mx-0 size-4 before:size-1.5' />
              Testimonials
            </StatusBadge.Root>
            <h3 className='text-title-h4 lg:text-title-h3 text-text-strong-950 mb-4 !font-[550] lg:text-center'>
              Trusted by teams who lead people
            </h3>
            <p className='text-paragraph-md text-text-sub-600 lg:text-center'>
              Save hours every week, reduce complexity, and let your HR team{' '}
              <span className='text-label-md text-text-sub-600 lg:flex lg:justify-center'>
                focus on people — not processes.
              </span>
            </p>
          </div>
        </div>
        <div className='relative w-full pt-16 lg:pt-0'>
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            disabled={isBeginning}
            className='border-stroke-soft-200 group disabled:bg-bg-weak-50 absolute top-0 left-0 flex h-10 w-[calc(50%-6px)] cursor-pointer items-center justify-center rounded-full border transition-all duration-300 disabled:cursor-not-allowed lg:top-1/2 lg:-left-16 lg:w-10 lg:-translate-y-1/2'
          >
            <RiArrowLeftLongLine
              className={`size-5 transition-all duration-300 ${isBeginning ? 'text-text-soft-400' : 'text-text-sub-600 group-hover:text-text-sub-600'}`}
            />
          </button>
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              1440: {
                slidesPerView: 3,
              },
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            className='w-full rounded-t-3xl rounded-b-xl'
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className='flex !h-auto'>
                <div className='border-stroke-soft-200 bg-bg-white-0 shadow-regular-xs flex h-full w-full flex-col justify-between gap-8 rounded-[28px] border p-8 lg:gap-10 xl:p-10'>
                  <div className='text-label-sm text-text-soft-400'>
                    {testimonial.date}
                  </div>
                  <div className='flex flex-1 flex-col justify-center gap-6'>
                    <div
                      className={`relative flex items-center gap-4 before:absolute before:top-1/2 before:-left-10.25 before:h-6 before:w-0.5 before:-translate-y-1/2 before:content-[""] ${
                        index % 3 === 0
                          ? 'before:bg-success-base'
                          : index % 3 === 1
                            ? 'before:bg-feature-base'
                            : 'before:bg-away-base'
                      }`}
                    >
                      <Image
                        src={testimonial.ratingImage}
                        alt='testimonials image'
                        width={132}
                        height={24}
                        className='h-6 w-auto shrink-0'
                      />
                      <p className='text-label-md text-text-soft-400'>
                        <span className='text-text-sub-600'>
                          {testimonial.rating}/5
                        </span>{' '}
                        {testimonial.platform}{' '}
                      </p>
                    </div>
                    <h5 className='text-title-h6 lg:text-title-h5 text-text-strong-950'>
                      {testimonial.quote}
                    </h5>
                  </div>
                  <div className='flex flex-col gap-1'>
                    <div className='text-label-md text-text-strong-950'>
                      {testimonial.name}
                    </div>
                    <div className='text-label-md text-text-sub-600/50'>
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            disabled={isEnd}
            className='border-stroke-soft-200 group disabled:bg-bg-weak-50 absolute top-0 right-0 flex h-10 w-[calc(50%-6px)] cursor-pointer items-center justify-center rounded-full border transition-all duration-300 disabled:cursor-not-allowed lg:top-1/2 lg:-right-16 lg:w-10 lg:-translate-y-1/2'
          >
            <RiArrowRightLongLine
              className={`size-5 transition-all duration-300 ${isEnd ? 'text-text-soft-400' : 'text-text-sub-600 group-hover:text-text-sub-600'}`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
