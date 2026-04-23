'use client';

import {
  RiArrowLeftRightLine,
  RiBankCardLine,
  RiBillLine,
  RiBrainLine,
  RiPieChartLine,
} from '@remixicon/react';

import * as Badge from '@/components/ui/badge';
const featuresData = [
  [
    {
      id: 'feature1',
      icon: RiBrainLine,
      iconColor: 'text-warning-base',
      title: 'Smart spending insights',
      description: 'Break down your expenses and spot trends faster.',
    },
    {
      id: 'feature2',
      icon: RiBillLine,
      iconColor: 'text-error-base',
      title: 'Automate your payments',
      description: 'Schedule bills and transfers so you never miss a payment.',
    },
  ],
  [
    {
      id: 'feature3',
      icon: RiPieChartLine,
      iconColor: 'text-information-base',
      title: 'Stay on top of your money',
      description: 'Track income, expenses and savings in one clear view.',
    },
  ],
  [
    {
      id: 'feature4',
      icon: RiBankCardLine,
      iconColor: 'text-feature-base',
      title: 'Manage all your cards',
      description: 'View balances, set limits and track spending easily.',
    },
    {
      id: 'feature5',
      icon: RiArrowLeftRightLine,
      iconColor: 'text-highlighted-base',
      title: 'Quick and easy transfers',
      description: 'Send money to contacts in seconds, anytime you need.',
    },
  ],
];

export default function Features01() {
  return (
    <div className='bg-bg-white-0 py-10 lg:py-20 w-full'>
      <div className='mx-auto flex max-w-7xl flex-col px-6 lg:px-7'>
        <div className='mb-6 flex flex-col lg:mb-12 lg:items-center'>
          <Badge.Root
            variant='lighter'
            className='bg-bg-weak-50 text-text-sub-600 text-label-sm mb-4 h-7 w-fit rounded-[9px] px-2.5 normal-case'
          >
            Built for modern finance
          </Badge.Root>
          <h3 className='text-title-h5 lg:text-title-h4 xl:text-title-h3 text-text-strong-950 !font-[550] lg:text-center'>
            Everything you need to take <br /> control of your money
          </h3>
        </div>
        <div className='flex flex-col gap-3 lg:flex-row'>
          {featuresData.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className={
                group.length > 1
                  ? 'flex flex-col gap-2 md:flex-row lg:flex-col'
                  : 'flex'
              }
            >
              {group.map((feature) => (
                <div
                  key={feature.id}
                  className='rounded-20 bg-bg-weak-25 flex w-full flex-col justify-between gap-6 p-6 lg:gap-8 lg:rounded-3xl lg:p-8 xl:gap-10 xl:p-10'
                >
                  <div className='bg-bg-white-0 rounded-10 shadow-custom-input-4 flex size-10 items-center justify-center lg:size-12 lg:rounded-xl'>
                    <feature.icon
                      className={`size-6 lg:size-7 ${feature.iconColor}`}
                    />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <h5 className='text-label-md lg:text-label-lg text-text-strong-950'>
                      {feature.title}
                    </h5>
                    <p className='text-label-sm lg:text-label-md text-text-soft-400'>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
