'use client';

import { useRef, useState } from 'react';
import { RiArrowLeftLongLine, RiArrowRightLongLine } from '@remixicon/react';
import Image from '@repo/registry/next-image-mock';
import type { Swiper as SwiperType } from 'swiper';
import { EffectFade, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import * as StatusBadge from '@/components/ui/status-badge';

import 'swiper/css';
import 'swiper/css/effect-fade';
const testimonials = [
  {
    name: 'Matthew Johnson',
    title: 'Co-founder',
    quote:
      'Everything we needed was already built in reporting, automation, integrations.',
    highlight: 'It just worked out of the box.',
    image: 'https://alignui.com/images/blocks/testimonials-3-image-1.jpg',
    logo: 'https://alignui.com/images/blocks/testimonials-3-logo.svg',
    stats: [
      { label: 'Decision time', value: '9.5h' },
      { label: 'Conversion uplift', value: '+49%' },
    ],
  },
  {
    name: 'Sarah Williams',
    title: 'Head of Sales',
    quote:
      'Our team productivity increased dramatically after implementing this solution.',
    highlight: 'The results speak for themselves.',
    image: 'https://alignui.com/images/blocks/testimonials-3-image-1.jpg',
    logo: 'https://alignui.com/images/blocks/testimonials-3-logo.svg',
    stats: [
      { label: 'Decision time', value: '7.2h' },
      { label: 'Conversion uplift', value: '+62%' },
    ],
  },
  {
    name: 'David Chen',
    title: 'VP of Operations',
    quote:
      'The seamless integration with our existing tools made adoption effortless.',
    highlight: 'A game-changer for our workflow.',
    image: 'https://alignui.com/images/blocks/testimonials-3-image-1.jpg',
    logo: 'https://alignui.com/images/blocks/testimonials-3-logo.svg',
    stats: [
      { label: 'Decision time', value: '5.8h' },
      { label: 'Conversion uplift', value: '+71%' },
    ],
  },
];

export default function Testimonials03() {
  const swiperImageRef = useRef<SwiperType | null>(null);
  const swiperContentRef = useRef<SwiperType | null>(null);
  const swiperStat1Ref = useRef<SwiperType | null>(null);
  const swiperStat2Ref = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    swiperImageRef.current?.slidePrev();
    swiperContentRef.current?.slidePrev();
    swiperStat1Ref.current?.slidePrev();
    swiperStat2Ref.current?.slidePrev();
  };

  const handleNext = () => {
    swiperImageRef.current?.slideNext();
    swiperContentRef.current?.slideNext();
    swiperStat1Ref.current?.slideNext();
    swiperStat2Ref.current?.slideNext();
  };

  return (
    <div className='py-10 lg:py-20 xl:py-24 bg-bg-white-0 w-full'>
      <div className='flex flex-col gap-6 lg:gap-12 max-w-7xl mx-auto px-6 lg:px-7'>
        <div className='flex flex-col'>
          <StatusBadge.Root
            variant='light'
            className='w-fit pl-1.75 pr-2.5 h-7 has-[>.dot]:gap-1 text-label-sm normal-case text-text-sub-600 rounded-[9px] mb-3 bg-bg-weak-50 lg:mx-auto'
          >
            <StatusBadge.Dot className='size-4 text-primary-base mx-0 before:size-1.5' />
            Top-performing teams
          </StatusBadge.Root>
          <h2 className='text-title-h4 lg:text-title-h2 !font-[550] text-text-strong-950 lg:text-center mb-4'>
            Real stories, proven impact
          </h2>
          <p className='text-paragraph-md text-text-sub-600 lg:text-center'>
            Hear how sales teams improved performance, built trust faster, and{' '}
            <span className='text-label-md text-text-sub-600 lg:flex lg:justify-center'>
              closed more deals using our smart tools.
            </span>
          </p>
        </div>
        <div className='w-full flex flex-wrap gap-3 relative'>
          <div className='lg:h-30 order-1 w-full lg:w-[calc(24%-8px)] lg:rounded-b-[28px] gap-3 lg:gap-1 z-10 flex lg:p-6 lg:items-end justify-center lg:absolute lg:left-0 lg:bottom-0 mb-3 lg:mb-0 relative'>
            <div
              className='hidden lg:block absolute inset-0 rounded-b-[28px]'
              style={{
                background:
                  'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.03) 25%, rgba(0, 0, 0, 0.08) 50%, rgba(0, 0, 0, 0.13) 75%, rgba(0, 0, 0, 0.20) 100%)',
              }}
            />
            <button
              onClick={handlePrev}
              disabled={isBeginning}
              className='cursor-pointer border bg-bg-white-0 lg:bg-white-alpha-16 border-stroke-soft-200 lg:border-none rounded-full w-[calc(50%-6px)] h-10 lg:h-6 lg:w-11 flex items-center justify-center group disabled:bg-bg-white-0 lg:disabled:bg-white-alpha-16 disabled:cursor-not-allowed transition-all duration-300 relative z-1'
            >
              <RiArrowLeftLongLine
                className={`size-5 transition-all duration-300 ${isBeginning ? 'text-text-sub-600 lg:text-static-white' : 'text-text-sub-600 lg:text-static-white group-hover:text-text-sub-600 lg:group-hover:text-static-white'}`}
              />
            </button>
            <button
              onClick={handleNext}
              disabled={isEnd}
              className='cursor-pointer border bg-bg-white-0 lg:bg-white-alpha-16 border-stroke-soft-200 lg:border-none rounded-full w-[calc(50%-6px)] h-10 lg:h-6 lg:w-11 flex items-center justify-center group disabled:bg-bg-white-0 lg:disabled:bg-white-alpha-16 disabled:cursor-not-allowed transition-all duration-300 relative z-1'
            >
              <RiArrowRightLongLine
                className={`size-5 transition-all duration-300 ${isEnd ? 'text-text-sub-600 lg:text-static-white' : 'text-text-sub-600 lg:text-static-white group-hover:text-text-sub-600 lg:group-hover:text-static-white'}`}
              />
            </button>
          </div>

          <div className='flex order-2 rounded-[28px] overflow-hidden shadow-complex-6 w-[calc(50%-6px)] lg:w-[calc(24%-8px)] h-auto'>
            <Swiper
              modules={[Navigation, EffectFade]}
              effect='fade'
              fadeEffect={{ crossFade: true }}
              spaceBetween={0}
              slidesPerView={1}
              allowTouchMove={false}
              onSwiper={(swiper) => {
                swiperImageRef.current = swiper;
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
              }}
              onSlideChange={(swiper) => {
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
                setActiveIndex(swiper.activeIndex);
              }}
              className='w-full h-full'
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index} className='h-full'>
                  <Image
                    src={testimonial.image}
                    alt='testimonials image'
                    width={288}
                    height={372}
                    className={`w-full h-full object-cover transition-all duration-500 ease-out ${activeIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
                    style={{
                      transitionDelay: activeIndex === index ? '0s' : '0s',
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className='flex order-4 lg:order-3 w-full lg:w-[calc(55%-8px)] rounded-20 lg:rounded-[28px] bg-bg-weak-25 overflow-hidden'>
            <Swiper
              modules={[Navigation, EffectFade]}
              effect='fade'
              fadeEffect={{ crossFade: true }}
              spaceBetween={0}
              slidesPerView={1}
              allowTouchMove={false}
              onSwiper={(swiper) => {
                swiperContentRef.current = swiper;
              }}
              className='w-full'
            >
              <Image
                src='https://alignui.com/images/blocks/testimonials-3-logo.svg'
                alt='testimonials logo'
                width={93}
                height={24}
                className='absolute left-5 lg:left-auto bottom-5 lg:bottom-auto lg:top-6 xl:top-10 lg:right-6 xl:right-10 z-2 w-auto h-auto'
              />
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className='flex flex-col gap-8 lg:gap-16 xl:gap-22 2xl:gap-31 p-5 pb-19 lg:p-6 xl:p-10 relative h-full justify-between'>
                    <div
                      className={`flex flex-col gap-1 transition-all duration-500 ease-out ${activeIndex === index ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                      style={{
                        transitionDelay: activeIndex === index ? '0.2s' : '0s',
                      }}
                    >
                      <h6 className='text-label-md text-text-strong-950'>
                        {testimonial.name}
                      </h6>
                      <p className='text-label-sm text-text-soft-400'>
                        {testimonial.title}
                      </p>
                    </div>
                    <h4
                      className={`text-title-h6 md:text-title-h5 xl:text-title-h4 !font-[550] text-text-sub-600 transition-all duration-500 ease-out ${activeIndex === index ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                      style={{
                        transitionDelay: activeIndex === index ? '0.4s' : '0s',
                      }}
                    >
                      {testimonial.quote}{' '}
                      <span className='text-text-strong-950'>
                        {testimonial.highlight}
                      </span>
                    </h4>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className='flex order-3 lg:order-4 h-auto flex-col gap-3 w-[calc(50%-6px)] lg:w-[calc(21%-8px)]'>
            <div className='flex flex-col gap-2 flex-1 justify-end p-4 lg:p-6 xl:px-8 xl:py-7 bg-bg-weak-25 rounded-20 lg:rounded-[28px]'>
              <Swiper
                modules={[Navigation, EffectFade]}
                effect='fade'
                fadeEffect={{ crossFade: true }}
                spaceBetween={0}
                slidesPerView={1}
                allowTouchMove={false}
                onSwiper={(swiper) => {
                  swiperStat1Ref.current = swiper;
                }}
                className='w-full'
              >
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className={`flex flex-col gap-2 transition-all duration-500 ease-out ${activeIndex === index ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                      style={{
                        transitionDelay: activeIndex === index ? '0.6s' : '0s',
                      }}
                    >
                      <p className='text-label-sm md:text-label-md text-text-sub-600'>
                        {testimonial.stats[0].label}
                      </p>
                      <h3 className='text-title-h5 md:text-title-h4 lg:text-title-h5 xl:text-title-h3 !font-[550] text-text-strong-950'>
                        {testimonial.stats[0].value}
                      </h3>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className='flex flex-col gap-2 flex-1 justify-end p-4 lg:p-6 xl:px-8 xl:py-7 bg-bg-weak-25 rounded-20 lg:rounded-[28px]'>
              <Swiper
                modules={[Navigation, EffectFade]}
                effect='fade'
                fadeEffect={{ crossFade: true }}
                spaceBetween={0}
                slidesPerView={1}
                allowTouchMove={false}
                onSwiper={(swiper) => {
                  swiperStat2Ref.current = swiper;
                }}
                className='w-full'
              >
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className={`flex flex-col gap-2 transition-all duration-500 ease-out ${activeIndex === index ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                      style={{
                        transitionDelay: activeIndex === index ? '0.8s' : '0s',
                      }}
                    >
                      <p className='text-label-sm md:text-label-md text-text-sub-600'>
                        {testimonial.stats[1].label}
                      </p>
                      <h3 className='text-title-h5 md:text-title-h4 lg:text-title-h5 xl:text-title-h3 !font-[550] text-text-strong-950'>
                        {testimonial.stats[1].value}
                      </h3>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
