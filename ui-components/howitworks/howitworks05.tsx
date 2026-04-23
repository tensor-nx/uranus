'use client';

import { useState } from 'react';
import {
  RiAccountBoxFill,
  RiAccountCircleFill,
  RiAccountPinCircleFill,
  RiSpeedMiniFill,
} from '@remixicon/react';
import Image from '@repo/registry/next-image-mock';

import * as Badge from '@/components/ui/badge';
import { cn } from '@/utils/cn';
const items = [
  {
    icon: RiAccountCircleFill,
    title: 'Choose your role',
    description:
      "Select whether you're joining as an employee or team manager.",
    image: 'https://alignui.com/images/blocks/hiw-5-image-1.png',
  },
  {
    icon: RiAccountBoxFill,
    title: 'Enter your details',
    description:
      'Set up your profile in minutes and connect with your team instantly.',
    image: 'https://alignui.com/images/blocks/hiw-5-image-1.png',
  },
  {
    icon: RiAccountPinCircleFill,
    title: 'Define your focus',
    description: 'Choose your department and title to tailor your experience.',
    image: 'https://alignui.com/images/blocks/hiw-5-image-1.png',
  },
];

export default function HowItWorks05() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div className='bg-bg-white-0 py-10 pb-6 lg:py-26 w-full'>
      <div className='mx-auto flex w-full max-w-7xl flex-col gap-6 px-6 md:px-7 lg:gap-12'>
        <div className='flex flex-col gap-4 lg:items-center'>
          <div className='flex flex-col gap-3 lg:items-center'>
            <Badge.Root
              variant='lighter'
              className='bg-bg-weak-50 text-text-sub-600 text-label-sm h-7 w-fit gap-1.5 rounded-[9px] pr-2.5 pl-2 normal-case'
            >
              <Badge.Icon
                as={RiSpeedMiniFill}
                className='text-primary-base mx-0 size-4'
              />
              How it works?
            </Badge.Root>
            <h2 className='text-title-h4 lg:text-title-h3 xl:text-title-h2 text-text-strong-950 font-[550] lg:text-center'>
              Start fast, join your team easier
            </h2>
          </div>
          <p className='text-paragraph-md text-text-sub-600 max-w-[528px] lg:text-center'>
            Set up your profile in minutes and sync with your workspace.{' '}
            <br className='hidden lg:block' />
            <span className='text-label-md text-text-sub-600'>
              No friction, no confusion — just flow.
            </span>
          </p>
        </div>

        <div className='mx-[-18px] flex w-[calc(100%+36px)] flex-col gap-1.5 px-0 lg:mx-0 lg:w-full lg:flex-row lg:items-stretch'>
          <div className='bg-bg-weak-25 flex w-full flex-col gap-2 rounded-[28px] p-2 lg:w-[392px] lg:shrink-0 lg:gap-2.5 lg:rounded-[40px] lg:p-2.5'>
            {items.map((item, index) => {
              const isActive = activeIndex === index;
              const Icon = item.icon;

              return (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    'flex w-full cursor-pointer gap-4 overflow-hidden p-4 transition-all duration-300 lg:flex-col lg:gap-6 lg:p-7',
                    isActive
                      ? 'bg-bg-white-0 shadow-custom-input-4 rounded-[20px] lg:rounded-[28px]'
                      : 'bg-bg-weak-25 rounded-[32px]',
                  )}
                >
                  <Icon
                    className={cn(
                      'size-6 shrink-0 transition-colors duration-300 lg:size-7',
                      isActive ? 'text-primary-base' : 'text-text-soft-400',
                    )}
                  />
                  <div className='flex flex-col gap-2 text-left'>
                    <p className='text-label-lg text-text-strong-950'>
                      {item.title}
                    </p>
                    <p className='text-paragraph-md text-text-sub-600'>
                      {item.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          <div className='bg-bg-weak-25 flex h-[440px] items-end justify-center overflow-hidden rounded-[28px] lg:hidden'>
            {items.map((item, index) => (
              <div
                key={index}
                className={cn(
                  'absolute flex items-end justify-center transition-opacity duration-500',
                  activeIndex === index
                    ? 'opacity-100'
                    : 'pointer-events-none opacity-0',
                )}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={322}
                  height={392}
                  className='h-auto w-[322px] object-contain'
                />
              </div>
            ))}
          </div>

          <div className='bg-bg-weak-25 relative hidden flex-1 items-end justify-center overflow-hidden rounded-[40px] lg:flex'>
            {items.map((item, index) => (
              <div
                key={index}
                className={cn(
                  'absolute inset-0 flex items-end justify-center transition-opacity duration-500',
                  activeIndex === index
                    ? 'opacity-100'
                    : 'pointer-events-none opacity-0',
                )}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={430}
                  height={524}
                  className='h-auto w-[430px] object-contain'
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
