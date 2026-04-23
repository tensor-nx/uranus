'use client';

import { useRef, useState } from 'react';
import { RiArrowLeftLongLine, RiArrowRightLongLine } from '@remixicon/react';
import Image from '@repo/registry/next-image-mock';
import type { Swiper as SwiperType } from 'swiper';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import * as Badge from '@/components/ui/badge';

import 'swiper/css';
const logos = [
  {
    src: 'https://alignui.com/images/blocks/brand-social-company-1.svg',
    darkSrc: 'https://alignui.com/images/blocks/brand-social-company-1-dark.svg',
    alt: 'Synergy',
  },
  {
    src: 'https://alignui.com/images/blocks/brand-social-company-4.svg',
    darkSrc: 'https://alignui.com/images/blocks/brand-social-company-4-dark.svg',
    alt: 'Apex',
  },
  {
    src: 'https://alignui.com/images/blocks/brand-social-company-3.svg',
    darkSrc: 'https://alignui.com/images/blocks/brand-social-company-3-dark.svg',
    alt: 'Horizon',
  },
  {
    src: 'https://alignui.com/images/blocks/brand-social-company-2.svg',
    darkSrc: 'https://alignui.com/images/blocks/brand-social-company-2-dark.svg',
    alt: 'Catalyst',
  },
  {
    src: 'https://alignui.com/images/blocks/brand-social-company-5.svg',
    darkSrc: 'https://alignui.com/images/blocks/brand-social-company-5-dark.svg',
    alt: 'Phoenix',
  },
  {
    src: 'https://alignui.com/images/blocks/brand-social-company-6.svg',
    darkSrc: 'https://alignui.com/images/blocks/brand-social-company-6-dark.svg',
    alt: 'Pulse',
  },
  {
    src: 'https://alignui.com/images/blocks/brand-social-company-7.svg',
    darkSrc: 'https://alignui.com/images/blocks/brand-social-company-7-dark.svg',
    alt: 'Solaris',
  },
  {
    src: 'https://alignui.com/images/blocks/brand-social-company-8.svg',
    darkSrc: 'https://alignui.com/images/blocks/brand-social-company-8-dark.svg',
    alt: 'Aurora',
  },
];

const testimonials = [
  {
    avatar: 'https://alignui.com/images/blocks/brand-social-avatar-2.png',
    name: 'Matthew Johnson',
    role: 'Revenue Strategist',
    text: "Out of all the tools we've tried, this was the first that didn't get in our way and actually helped us work smarter.",
  },
  {
    avatar: 'https://alignui.com/images/blocks/brand-social-avatar-1.png',
    name: 'Sophia Williams',
    role: 'Head of Operations',
    text: 'We achieved great results after using this tool. Everything is now faster and more organized.',
  },
  {
    avatar: 'https://alignui.com/images/blocks/brand-social-avatar-3.png',
    name: 'Juma Omondi',
    role: 'Support Engineer',
    text: 'We noticed huge improvements in our process. It saved us time and improved accuracy.',
  },
];

export default function BrandSocial04() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className='bg-bg-white-0 w-full'>
      <div className='mx-auto flex w-full max-w-7xl flex-col gap-8 px-3 py-10 pb-8 md:gap-12 md:px-7 md:py-16 lg:py-24'>
        <div className='flex flex-col px-3 md:items-center md:px-0'>
          <Badge.Root
            variant='stroke'
            className='text-label-sm text-text-sub-600 bg-bg-weak-50 mb-3 h-7 w-fit !gap-1 rounded-[9px] pr-[10px] pl-[7px] normal-case ring-transparent'
          >
            <Badge.Dot className='text-primary-base mx-0 size-4 before:size-1.5' />
            Brands & Social proof
          </Badge.Root>
          <h1 className='md:text-title-h3 text-title-h4 text-text-strong-950 mb-4 !font-[550] md:text-center'>
            Empowering global teams to move faster
          </h1>
          <p className='text-paragraph-md text-text-sub-600 max-w-[528px] md:text-center'>
            Used by forward-thinking teams focused on efficiency, growth, and{' '}
            <span className='text-label-md'>long-term product success.</span>
          </p>
        </div>
        <div className='flex flex-col gap-6 md:gap-8'>
          <div className='border-stroke-soft-200 bg-bg-white-0 flex flex-col overflow-hidden rounded-[28px] border md:flex-row md:rounded-[32px]'>
            <div className='flex w-full flex-col gap-7 p-7 md:w-[320px] md:shrink-0 md:gap-10 md:p-10 lg:w-[522px]'>
              <Swiper
                modules={[Navigation]}
                spaceBetween={10}
                slidesPerView={1}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                  setIsBeginning(swiper.isBeginning);
                  setIsEnd(swiper.isEnd);
                }}
                onSlideChange={(swiper) => {
                  setIsBeginning(swiper.isBeginning);
                  setIsEnd(swiper.isEnd);
                }}
                className='w-full'
              >
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide key={index} className='flex !h-auto'>
                    <div className='flex h-full flex-col gap-7 md:gap-10'>
                      <div className='flex items-center gap-5'>
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          width={40}
                          height={40}
                          className='size-10 rounded-full'
                        />
                        <div className='flex flex-col'>
                          <span className='text-label-md text-text-strong-950'>
                            {testimonial.name}
                          </span>
                          <span className='text-label-sm text-text-soft-400'>
                            {testimonial.role}
                          </span>
                        </div>
                      </div>
                      <p className='text-title-h6 text-text-strong-950 lg:text-title-h5 !font-[550]'>
                        {testimonial.text}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className='flex items-center gap-2'>
                <button
                  onClick={() => swiperRef.current?.slidePrev()}
                  disabled={isBeginning}
                  className='group border-stroke-soft-200 bg-bg-white-0 hover:bg-bg-weak-50 flex cursor-pointer items-center justify-center rounded-full border px-4 py-1 transition-colors hover:border-transparent disabled:cursor-not-allowed'
                >
                  <RiArrowLeftLongLine className='text-text-soft-400 group-hover:text-text-sub-600 size-5 transition-colors' />
                </button>
                <button
                  onClick={() => swiperRef.current?.slideNext()}
                  disabled={isEnd}
                  className='group border-stroke-soft-200 bg-bg-white-0 hover:bg-bg-weak-50 flex cursor-pointer items-center justify-center rounded-full border px-4 py-1 transition-colors hover:border-transparent disabled:cursor-not-allowed'
                >
                  <RiArrowRightLongLine className='text-text-soft-400 group-hover:text-text-sub-600 size-5 transition-colors' />
                </button>
              </div>
            </div>

            <div className='border-stroke-soft-200 grid flex-1 grid-cols-2 border-t md:grid-cols-3 md:border-t-0 md:border-l'>
              {logos.map((logo, index) => {
                const isMobileLastRow = index >= 6;
                const isDesktopLastRow = index >= 6;
                const isMobileRightColumn = index % 2 === 1;
                const isDesktopRightColumn = index % 3 === 2;

                return (
                  <div
                    key={index}
                    className={`border-stroke-soft-200 flex h-[96px] items-center justify-center gap-1.5 p-3 md:h-auto ${
                      !isMobileLastRow ? 'border-b' : 'md:border-b-0'
                    } ${!isDesktopLastRow ? 'md:border-b' : ''} ${
                      !isMobileRightColumn ? 'border-r' : ''
                    } ${isDesktopRightColumn ? 'md:border-r-0' : 'md:border-r'}`}
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={106}
                      height={24}
                      className='h-6 w-auto dark:hidden'
                    />
                    <Image
                      src={logo.darkSrc}
                      alt={logo.alt}
                      width={106}
                      height={24}
                      className='hidden h-6 w-auto dark:block'
                    />
                  </div>
                );
              })}
              <div className='hidden items-center justify-center p-3 md:flex'>
                <span className='text-label-sm text-text-soft-400'>
                  ... and more
                </span>
              </div>
            </div>
          </div>

          <div className='text-paragraph-sm text-text-soft-400 mx-auto md:max-w-[330px] md:text-center'>
            Start building trust by showcasing the partners{' '}
            <span className='text-label-sm text-text-sub-600'>
              that power your success.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
