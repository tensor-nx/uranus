'use client';

import { useRef, useState } from 'react';
import {
  RiArrowLeftLongLine,
  RiArrowRightLongLine,
  RiArrowRightUpLongLine,
  RiDatabase2Fill,
  RiPieChartFill,
  RiTimeFill,
  RiWalletFill,
} from '@remixicon/react';
import Image from '@repo/registry/next-image-mock';
import type { Swiper as SwiperType } from 'swiper';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import * as Badge from '@/components/ui/badge';
import * as LinkButton from '@/components/ui/link-button';

import 'swiper/css';
const statsData = [
  {
    id: 'stat1',
    value: '72%',
    label: 'Faster reports',
    icon: RiTimeFill,
    iconColor: 'text-feature-base',
    description: 'Most finance teams export clean reports and track data',
    descriptionSpan: 'automatically across multiple accounts daily',
    ptClass: 'pt-6 xl:pt-0',
    borderClass: 'border-t lg:border-t-0',
  },
  {
    id: 'stat2',
    value: '52%',
    label: 'Lower spend',
    icon: RiWalletFill,
    iconColor: 'text-success-base',
    description: 'Finance leads reduce spend and build new policies',
    descriptionSpan: 'with flexible controls and built-in approval limits.',
    ptClass: 'pt-6 xl:pt-9',
    borderClass: 'border-t',
  },
  {
    id: 'stat3',
    value: '45%',
    label: 'Cleaner data',
    icon: RiDatabase2Fill,
    iconColor: 'text-highlighted-base',
    description: 'CFOs detect duplicate records and stop leakages by',
    descriptionSpan: 'mapping every vendor to categories instantly.',
    ptClass: 'pt-6 xl:pt-9',
    borderClass: 'border-t',
  },
];

const testimonials = [
  {
    quote:
      'Budget tracking was ready out of the box — with instant sync, custom roles, and secure approval chains from day one.',
    name: 'Sophia Williams',
    image: 'https://alignui.com/images/blocks/stats-metrics-03-1.jpg',
  },
  {
    quote:
      'Automated expense reports saved us over 15 hours per week — the integration with our existing tools was seamless.',
    name: 'Michael Chen',
    image: 'https://alignui.com/images/blocks/stats-metrics-03-1.jpg',
  },
  {
    quote:
      'Real-time visibility into our spending patterns helped us reduce operational costs by 30% in the first quarter.',
    name: 'Emily Rodriguez',
    image: 'https://alignui.com/images/blocks/stats-metrics-03-1.jpg',
  },
  {
    quote:
      "The approval workflow automation eliminated major bottlenecks — our team's productivity improved significantly.",
    name: 'David Thompson',
    image: 'https://alignui.com/images/blocks/stats-metrics-03-1.jpg',
  },
  {
    quote:
      'Multi-currency support and automatic reconciliation made our international operations completely effortless.',
    name: 'Sarah Kim',
    image: 'https://alignui.com/images/blocks/stats-metrics-03-1.jpg',
  },
  {
    quote:
      'The analytics dashboard gives us insights we never had before — now every decision is fully data-driven.',
    name: 'James Wilson',
    image: 'https://alignui.com/images/blocks/stats-metrics-03-1.jpg',
  },
  {
    quote:
      'Vendor management became so much easier with automatic categorization and real-time spend tracking in place.',
    name: 'Lisa Anderson',
    image: 'https://alignui.com/images/blocks/stats-metrics-03-1.jpg',
  },
  {
    quote:
      'The mobile app lets our team submit expenses on the go — reimbursement times dropped by 80% dramatically.',
    name: 'Robert Martinez',
    image: 'https://alignui.com/images/blocks/stats-metrics-03-1.jpg',
  },
  {
    quote:
      'Compliance and audit trails are now fully automated — we passed our last quarterly audit with zero findings.',
    name: 'Jennifer Lee',
    image: 'https://alignui.com/images/blocks/stats-metrics-03-1.jpg',
  },
  {
    quote:
      'Custom reporting saved our finance team hours of manual work every month — truly a transformative solution.',
    name: 'Thomas Brown',
    image: 'https://alignui.com/images/blocks/stats-metrics-03-1.jpg',
  },
];

export default function StatsMetrics03() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className='bg-bg-white-0 py-10 lg:py-21 px-6 lg:px-7 overflow-hidden w-full'>
        <div className='flex flex-col w-full lg:flex-row gap-6 lg:gap-10 xl:gap-14 justify-center'>
          <div className='w-full lg:max-w-[504px] xl:max-w-[574px] flex flex-col lg:pl-8 xl:pl-12 2xl:pl-20 lg:border-l lg:border-stroke-soft-200 relative'>
            <div className='hidden lg:flex absolute top-[44px] -left-0.25 bg-primary-base w-0.25 h-36 z-10 rounded-full'></div>
            <Badge.Root
              variant='lighter'
              className='w-fit bg-bg-weak-50 text-text-sub-600 gap-1.5 pl-2 pr-2.5 h-7 rounded-[9px] normal-case text-label-sm mb-4'
            >
              <Badge.Icon
                as={RiPieChartFill}
                className='size-4 text-text-soft-400 mx-0'
              />
              Built for financial precision
            </Badge.Root>
            <h3 className='text-title-h5 xl:text-title-h3 text-text-strong-950 !font-[550] mb-4 lg:mb-6'>
              Financial clarity tools are a shared mission today, not just for
              finance leads
            </h3>
            <p className='text-paragraph-md text-text-sub-600 mb-4 lg:mb-6'>
              Predict growth, control spend, and close the books faster{' '}
              <span className='text-label-md text-text-sub-600 lg:flex mb-4 lg:mb-6'>
                across every wallet — all in real time.
              </span>
            </p>
            <LinkButton.Root
              className='text-primary-base text-label-md cursor-pointer h-auto gap-1 whitespace-break-spaces group w-fit mb-6 lg:mb-9'
              asChild
            >
              <a href='#'>
                See it in action now
                <LinkButton.Icon
                  as={RiArrowRightUpLongLine}
                  className='size-5 text-primary-base group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300'
                />
              </a>
            </LinkButton.Root>
            <div className='flex flex-col gap-5 w-[calc(100vw-48px)] lg:w-full lg:max-w-[504px] xl:max-w-[574px]'>
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
                  setActiveIndex(swiper.activeIndex);
                }}
                className='w-full'
              >
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide key={index} className='!h-auto flex'>
                    <div className='flex flex-col gap-6 xl:gap-8 p-5 xl:p-8 rounded-20 bg-bg-weak-50 h-full justify-between'>
                      <p className='text-paragraph-lg lg:text-paragraph-md xl:text-paragraph-lg text-text-strong-950'>
                        {testimonial.quote}
                      </p>
                      <div className='flex items-center gap-3'>
                        <div className='flex items-center gap-3 flex-1'>
                          <Image
                            src={testimonial.image}
                            alt='Stats Metrics Person'
                            width={24}
                            height={24}
                            className='size-5 lg:size-6 object-cover rounded-full'
                          />
                          <div className='text-label-sm text-text-strong-950'>
                            {testimonial.name}
                          </div>
                        </div>
                        <div className='flex items-center gap-1.25'>
                          <Image
                            src='https://alignui.com/images/blocks/stats-metrics-03-2.svg'
                            alt='Stats Metrics Logo'
                            width={16}
                            height={16}
                            className='size-4 object-cover'
                          />
                          <div className='hidden lg:flex text-label-md text-text-sub-600'>
                            Pulse <span className='text-text-sub-600'>™</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-1'>
                  <button
                    onClick={() => swiperRef.current?.slidePrev()}
                    disabled={isBeginning}
                    className={`cursor-pointer rounded-[96px] w-9 h-5 flex items-center justify-center group transition-all duration-300 ${
                      isBeginning
                        ? 'border border-stroke-soft-200 bg-transparent !cursor-not-allowed'
                        : 'border border-bg-weak-50 bg-bg-weak-50'
                    }`}
                  >
                    <RiArrowLeftLongLine
                      className={`size-4 transition-all duration-300 ${
                        isBeginning
                          ? 'text-text-soft-400'
                          : 'text-text-sub-600 group-hover:text-text-strong-950'
                      }`}
                    />
                  </button>
                  <button
                    onClick={() => swiperRef.current?.slideNext()}
                    disabled={isEnd}
                    className={`cursor-pointer rounded-[96px] w-9 h-5 flex items-center justify-center group transition-all duration-300 ${
                      isEnd
                        ? 'border border-stroke-soft-200 bg-transparent !cursor-not-allowed'
                        : 'border border-bg-weak-50 bg-bg-weak-50'
                    }`}
                  >
                    <RiArrowRightLongLine
                      className={`size-4 transition-all duration-300 ${
                        isEnd
                          ? 'text-text-soft-400'
                          : 'text-text-sub-600 group-hover:text-text-strong-950'
                      }`}
                    />
                  </button>
                </div>
                <div className='flex items-center gap-2.5'>
                  <div className='text-label-xs lg:text-label-sm text-text-soft-400'>
                    {activeIndex + 1}/{testimonials.length}
                  </div>
                  <div className='text-label-xs lg:text-label-sm text-text-soft-400 flex items-center gap-2.5'>
                    <span className='text-label-xs lg:text-label-sm text-text-disabled-300'>
                      —
                    </span>{' '}
                    Pulse Technology
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full lg:max-w-[594px] flex flex-col lg:justify-center gap-6 xl:gap-9 lg:pl-8 xl:pl-14 lg:border-l lg:border-stroke-soft-200'>
            {statsData.map((stat) => (
              <div
                key={stat.id}
                className={`flex flex-col ${stat.ptClass} ${stat.borderClass} border-stroke-soft-200`}
              >
                <h3 className='text-title-h4 lg:text-title-h5 xl:text-title-h3 text-text-strong-950 !font-[550] mb-3 lg:mb-1 xl:mb-3'>
                  {stat.value}
                </h3>
                <div className='flex items-center gap-1.5 text-label-md text-text-sub-600 mb-3 lg:mb-1 xl:mb-3'>
                  {stat.label}
                  <stat.icon className={`size-5 ${stat.iconColor} mx-0`} />
                </div>
                <p className='text-paragraph-md text-text-soft-400'>
                  {stat.description}{' '}
                  <span className='text-label-md text-text-sub-600 lg:flex'>
                    {stat.descriptionSpan}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
