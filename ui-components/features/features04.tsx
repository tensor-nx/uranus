'use client';

import { ElementType, useState } from 'react';
import {
  RiBarChartFill,
  RiDiscussFill,
  RiFolderChart2Fill,
  RiMacLine,
  RiPieChartFill,
  RiUserFill,
} from '@remixicon/react';
import Image from '@repo/registry/next-image-mock';

import * as Badge from '@/components/ui/badge';
import { cn } from '@/utils/cn';
type ContentItem = {
  icon: ElementType;
  title: string;
  description: string;
  image: string;
  darkImage: string;
};

type Tab = {
  id: number;
  label: string;
  icon: ElementType;
  content: ContentItem[];
};

const tabs: Tab[] = [
  {
    id: 1,
    label: 'Channel performance',
    icon: RiBarChartFill,
    content: [
      {
        icon: RiFolderChart2Fill,
        title: 'Marketing insights',
        description:
          "Understand what's working—and what's not—with live performance data.",
        image: 'https://alignui.com/images/blocks/features-4-image-1.png',
        darkImage: 'https://alignui.com/images/blocks/features-4-image-1-dark.png',
      },
      {
        icon: RiPieChartFill,
        title: 'Traffic by device',
        description:
          'Track visitor trends by platform and spot shifts in real-time usage.',
        image: 'https://alignui.com/images/blocks/features-4-image-2.png',
        darkImage: 'https://alignui.com/images/blocks/features-4-image-2-dark.png',
      },
      {
        icon: RiUserFill,
        title: 'Retention overview',
        description:
          'See how users engage over time with calendar-style retention charts.',
        image: 'https://alignui.com/images/blocks/features-4-image-3.png',
        darkImage: 'https://alignui.com/images/blocks/features-4-image-3-dark.png',
      },
    ],
  },
  {
    id: 2,
    label: 'Engagement trends',
    icon: RiDiscussFill,
    content: [
      {
        icon: RiFolderChart2Fill,
        title: 'Marketing insights',
        description:
          "Understand what's working—and what's not—with live performance data.",
        image: 'https://alignui.com/images/blocks/features-4-image-1.png',
        darkImage: 'https://alignui.com/images/blocks/features-4-image-1-dark.png',
      },
      {
        icon: RiPieChartFill,
        title: 'Traffic by device',
        description:
          'Track visitor trends by platform and spot shifts in real-time usage.',
        image: 'https://alignui.com/images/blocks/features-4-image-2.png',
        darkImage: 'https://alignui.com/images/blocks/features-4-image-2-dark.png',
      },
      {
        icon: RiUserFill,
        title: 'Retention overview',
        description:
          'See how users engage over time with calendar-style retention charts.',
        image: 'https://alignui.com/images/blocks/features-4-image-3.png',
        darkImage: 'https://alignui.com/images/blocks/features-4-image-3-dark.png',
      },
    ],
  },
  {
    id: 3,
    label: 'Cross-device behavior',
    icon: RiMacLine,
    content: [
      {
        icon: RiFolderChart2Fill,
        title: 'Marketing insights',
        description:
          "Understand what's working—and what's not—with live performance data.",
        image: 'https://alignui.com/images/blocks/features-4-image-1.png',
        darkImage: 'https://alignui.com/images/blocks/features-4-image-1-dark.png',
      },
      {
        icon: RiPieChartFill,
        title: 'Traffic by device',
        description:
          'Track visitor trends by platform and spot shifts in real-time usage.',
        image: 'https://alignui.com/images/blocks/features-4-image-2.png',
        darkImage: 'https://alignui.com/images/blocks/features-4-image-2-dark.png',
      },
      {
        icon: RiUserFill,
        title: 'Retention overview',
        description:
          'See how users engage over time with calendar-style retention charts.',
        image: 'https://alignui.com/images/blocks/features-4-image-3.png',
        darkImage: 'https://alignui.com/images/blocks/features-4-image-3-dark.png',
      },
    ],
  },
];

export default function Features04() {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id ?? 1);

  return (
    <div className='bg-bg-white-0 mx-auto w-full max-w-7xl px-3 py-10 md:px-6 md:py-16 lg:px-7 xl:py-24'>
      <div className='mb-7 flex flex-col px-3 md:mb-10 md:items-center md:px-0'>
        <Badge.Root
          variant='stroke'
          className='text-label-sm text-text-sub-600 bg-bg-weak-50 mb-3 h-7 w-fit !gap-1 rounded-[9px] pr-[10px] pl-[7px] normal-case ring-transparent'
        >
          <Badge.Dot className='text-primary-base mx-0 size-4 before:size-1.5' />
          Smart features
        </Badge.Root>
        <h1 className='md:text-title-h3 lg:text-title-h2 text-title-h4 text-text-strong-950 mb-4 !font-[550] md:text-center'>
          Real-time metrics, smarter growth
        </h1>
        <p className='text-paragraph-md text-text-sub-600 max-w-[528px] md:text-center'>
          Track key metrics, automate workflows, and help your team stay{' '}
          <span className='text-label-md'>focused on closing more deals.</span>
        </p>
      </div>
      <div className='flex flex-col gap-8 md:gap-10'>
        <div className='no-scrollbar -mx-3 flex items-center overflow-x-auto px-3 py-0.5 md:mx-0 md:justify-center md:overflow-visible md:px-0 md:py-0'>
          <div className='flex shrink-0 items-center gap-3'>
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    'text-label-md flex shrink-0 cursor-pointer items-center gap-2 rounded-xl px-3.5 py-2 transition-all duration-300',
                    isActive
                      ? 'bg-blue-alpha-10 text-primary-base'
                      : 'bg-bg-white-0 text-text-sub-600 shadow-custom-input-2',
                  )}
                >
                  <tab.icon
                    className={cn(
                      'size-[22px] transition-colors duration-300',
                      isActive ? 'text-primary-base' : 'text-text-soft-400',
                    )}
                  />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
        <div className='relative'>
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={cn(
                'grid grid-cols-1 gap-4 transition-all duration-500 md:grid-cols-3 xl:gap-6',
                activeTab === tab.id
                  ? 'relative opacity-100'
                  : 'pointer-events-none absolute inset-0 opacity-0',
              )}
            >
              {tab.content.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className='bg-bg-weak-25 flex flex-col justify-between gap-5 rounded-3xl p-2.5 md:gap-8 lg:rounded-4xl'
                  >
                    <div className='flex flex-col px-4.5 pt-4.5 md:px-1 md:pt-3 lg:px-3 lg:pt-7.5 xl:px-7.5'>
                      <div className='bg-bg-white-0 shadow-complex-4 mb-5 flex size-12 items-center justify-center rounded-[14px] md:mb-4 lg:mb-8'>
                        <Icon className='text-primary-base size-7' />
                      </div>
                      <h3 className='lg:text-title-h6 md:text-label-md text-title-h6 text-text-strong-950 mb-2'>
                        {item.title}
                      </h3>
                      <p className='lg:text-label-md md:text-label-sm text-label-md text-text-sub-600'>
                        {item.description}
                      </p>
                    </div>
                    <div className='flex'>
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={372}
                        height={324}
                        className='w-full dark:hidden'
                      />
                      <Image
                        src={item.darkImage}
                        alt={item.title}
                        width={372}
                        height={324}
                        className='hidden w-full dark:block'
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
