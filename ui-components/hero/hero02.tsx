'use client';

import { useState } from 'react';
import {
  RiArrowRightUpLongLine,
  RiCalendarCheckLine,
  RiHeart3Line,
  RiQuestionAnswerLine,
  RiTimerFill,
} from '@remixicon/react';
import Image from '@repo/registry/next-image-mock';

import * as Badge from '@/components/ui/badge';
import * as Button from '@/components/ui/button';
import Announcement04 from '@repo/registry/default/blocks/components/announcement-04.tsx';
import Header02 from '@repo/registry/default/blocks/components/navigation-02.tsx';
import { cn } from '@/utils/cn';
const tabs = [
  {
    id: 'time-tracking',
    icon: RiTimerFill,
    title: 'Smart time tracking',
    description: 'Manage leave and attendance',
    image: 'https://alignui.com/images/blocks/hero-2-image-1.png',
    imageMobile: 'https://alignui.com/images/blocks/hero-2-image-1-mobile.png',
  },
  {
    id: 'feedback',
    icon: RiQuestionAnswerLine,
    title: 'Real-time feedback',
    description: 'Stay connected as one network',
    image: 'https://alignui.com/images/blocks/hero-2-image-1.png',
    imageMobile: 'https://alignui.com/images/blocks/hero-2-image-1-mobile.png',
  },
  {
    id: 'scheduling',
    icon: RiCalendarCheckLine,
    title: 'Simplified scheduling',
    description: 'Simplify daily team planning',
    image: 'https://alignui.com/images/blocks/hero-2-image-1.png',
    imageMobile: 'https://alignui.com/images/blocks/hero-2-image-1-mobile.png',
  },
  {
    id: 'visibility',
    icon: RiHeart3Line,
    title: 'Employee visibility',
    description: 'Track morale and engagement',
    image: 'https://alignui.com/images/blocks/hero-2-image-1.png',
    imageMobile: 'https://alignui.com/images/blocks/hero-2-image-1-mobile.png',
  },
];

const brands = [
  {
    src: 'https://alignui.com/images/blocks/hero-1-brand-1.svg',
    darkSrc: 'https://alignui.com/images/blocks/hero-1-brand-1-dark.svg',
    alt: 'Brand 1',
  },
  {
    src: 'https://alignui.com/images/blocks/hero-1-brand-2.svg',
    darkSrc: 'https://alignui.com/images/blocks/hero-1-brand-2-dark.svg',
    alt: 'Brand 2',
  },
  {
    src: 'https://alignui.com/images/blocks/hero-1-brand-3.svg',
    darkSrc: 'https://alignui.com/images/blocks/hero-1-brand-3-dark.svg',
    alt: 'Brand 3',
  },
  {
    src: 'https://alignui.com/images/blocks/hero-1-brand-4.svg',
    darkSrc: 'https://alignui.com/images/blocks/hero-1-brand-4-dark.svg',
    alt: 'Brand 4',
  },
  {
    src: 'https://alignui.com/images/blocks/hero-1-brand-5.svg',
    darkSrc: 'https://alignui.com/images/blocks/hero-1-brand-5-dark.svg',
    alt: 'Brand 5',
  },
  {
    src: 'https://alignui.com/images/blocks/hero-1-brand-6.svg',
    darkSrc: 'https://alignui.com/images/blocks/hero-1-brand-6-dark.svg',
    alt: 'Brand 6',
  },
  {
    src: 'https://alignui.com/images/blocks/hero-1-brand-7.svg',
    darkSrc: 'https://alignui.com/images/blocks/hero-1-brand-7-dark.svg',
    alt: 'Brand 7',
  },
];

export default function Hero02() {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id);
  const activeIndex = tabs.findIndex((tab) => tab.id === activeTab);
  return (
    <div className='bg-bg-white-0 w-full'>
      <Announcement04
        variant='lighter'
        text='Latest update: Time-off approvals now faster'
      />
      <Header02 announcement={true} />
      <div className='mx-auto mt-8 flex max-w-7xl flex-col px-4 lg:mt-14 lg:px-7'>
        <div className='flex flex-col px-2 md:items-center lg:px-0'>
          <div className='rounded-10 bg-bg-weak-50 mb-3 flex w-fit items-center gap-2 py-1 pr-[9px] pl-1.5'>
            <Badge.Root
              variant='lighter'
              color='gray'
              className='bg-bg-white-0 text-text-sub-600 shadow-complex-10 rounded-[5px] px-1.25'
            >
              NEW
            </Badge.Root>
            <span className='text-label-sm text-text-sub-600'>
              People-first tools for your team
            </span>
          </div>

          <h1 className='2xl:text-title-h1 xl:text-title-h3 lg:text-title-h4 text-title-h4 text-text-strong-950 mb-4 max-w-[780px] !font-[550] md:text-center'>
            Build stronger teams, not just process-driven systems
          </h1>
          <p className='text-paragraph-md text-text-sub-600'>
            From time tracking to feedback,{' '}
            <span className='text-label-md'>synergy</span> helps you lead with
            clarity.
          </p>

          <div className='mt-6 flex gap-4 md:mt-7'>
            <Button.Root className='w-full cursor-pointer gap-2 rounded-[12px] sm:w-auto'>
              Book a demo
              <Button.Icon
                as={RiArrowRightUpLongLine}
                className='text-static-white/[0.64] size-5'
              />
            </Button.Root>

            <Button.Root
              variant='neutral'
              mode='stroke'
              size='medium'
              className='w-full cursor-pointer rounded-[12px] sm:w-auto'
            >
              See it in action
            </Button.Root>
          </div>
        </div>
        <div className='mt-8 flex flex-col lg:mt-14'>
          <div className='border-stroke-soft-200 relative flex flex-col border-t px-2 lg:flex-row lg:px-0'>
            <div
              className='bg-primary-base absolute -top-0.25 left-0 hidden h-0.25 transition-all duration-300 ease-out lg:block'
              style={{
                width: `${100 / tabs.length}%`,
                transform: `translateX(${activeIndex * 100}%)`,
              }}
            />

            {tabs.map((tab, index) => {
              const isActive = activeTab === tab.id;
              const isFirst = index === 0;
              const Icon = tab.icon;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    'group border-stroke-soft-200 relative flex flex-1 cursor-pointer items-center border-b py-5 transition-all duration-300 lg:border-b-0 lg:py-8',
                    index === tabs.length - 1 && 'border-b-0',
                  )}
                >
                  <div
                    className={cn(
                      'bg-primary-base absolute -top-0.25 -left-6 h-0.25 w-[calc(100%+48px)] transition-all duration-300 lg:hidden',
                      isActive ? 'opacity-100' : 'opacity-0',
                    )}
                  />
                  <div
                    className={cn(
                      'border-l-stroke-soft-200 flex w-full items-center gap-3.5 transition-all duration-300 lg:gap-2 xl:gap-3.5',
                      !isFirst && 'lg:border-l lg:pl-3 xl:pl-7',
                    )}
                  >
                    <div
                      className={cn(
                        'bg-bg-white-0 flex items-center justify-center rounded-xl p-2 transition-all duration-300 lg:p-1.5 xl:p-2',
                        isActive
                          ? 'border-primary-base border'
                          : 'border-stroke-soft-200 group-hover:border-text-soft-400 border',
                      )}
                    >
                      <Icon
                        className={cn(
                          'size-5 transition-colors duration-300 lg:size-4 xl:size-5',
                          isActive
                            ? 'text-primary-base'
                            : 'text-text-soft-400 group-hover:text-text-sub-600',
                        )}
                      />
                    </div>
                    <div className='flex flex-col gap-1'>
                      <span
                        className={cn(
                          'text-label-sm flex transition-colors duration-300',
                          isActive
                            ? 'text-text-strong-950'
                            : 'text-text-sub-600 group-hover:text-text-strong-950',
                        )}
                      >
                        {tab.title}
                      </span>
                      <span className='text-label-xs text-text-soft-400'>
                        {tab.description}
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className='relative overflow-hidden'>
            <Image
              src='https://alignui.com/images/blocks/hero-2-bg.png'
              alt='Background'
              fill
              className='h-auto w-full rounded-[32px] object-cover md:rounded-[40px]'
            />

            <div className='absolute bottom-0 z-10 h-19 w-full rounded-b-[32px] bg-[linear-gradient(180deg,rgba(120,77,239,0.00)_0%,rgba(120,77,239,0.04)_100%)] md:rounded-b-[40px]'></div>

            <div className='relative mx-5 md:mx-[60px] lg:mx-[120px]'>
              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  className={cn(
                    'top-[56px] w-full transition-all duration-500 md:top-[80px] md:w-auto',
                    activeTab === tab.id
                      ? 'relative opacity-100'
                      : 'pointer-events-none absolute opacity-0',
                  )}
                >
                  <Image
                    src={tab.image}
                    alt={tab.title}
                    width={984}
                    height={658}
                    className='shadow-complex-11 hidden h-auto w-full rounded-3xl md:block'
                  />
                  <Image
                    src={tab.imageMobile}
                    alt={tab.title}
                    width={318}
                    height={688}
                    className='shadow-complex-11 rounded-20 mx-auto h-auto max-h-[500px] w-full object-cover object-top sm:w-2/3 md:hidden'
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='bg-bg-white-0 no-scrollbar -ml-4 flex w-[calc(100%+32px)] items-center overflow-x-auto lg:mx-0 lg:w-full lg:overflow-visible'>
          {brands.map((brand) => (
            <div
              key={brand.src}
              className={cn(
                'flex shrink-0 justify-center px-5 py-5 lg:w-full lg:shrink lg:px-0 lg:py-7',
              )}
            >
              <Image
                src={brand.src}
                alt={brand.alt}
                width={106}
                height={24}
                className='h-6 w-auto dark:hidden lg:h-5 xl:h-6'
              />
              <Image
                src={brand.darkSrc}
                alt={brand.alt}
                width={106}
                height={24}
                className='hidden h-6 w-auto dark:block lg:h-5 xl:h-6'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
