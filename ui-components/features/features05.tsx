'use client';

import {
  RiArrowRightUpLongLine,
  RiBankFill,
  RiBarChartFill,
  RiFileWarningFill,
  RiTimeFill,
} from '@remixicon/react';
import Image from '@repo/registry/next-image-mock';

import * as Button from '@/components/ui/button';
const features = [
  {
    icon: RiBankFill,
    iconColor: 'text-information-base',
    title: 'Spending insights',
    description: 'See where your budget is going weekly',
  },
  {
    icon: RiTimeFill,
    iconColor: 'text-success-base',
    title: 'Workflow timing',
    description: 'View how fast approvals are completed',
  },
  {
    icon: RiFileWarningFill,
    iconColor: 'text-warning-base',
    title: 'Anomaly alerts',
    description: 'Catch unusual payment behaviors early',
  },
];

export default function Features05() {
  return (
    <div className='bg-bg-white-0 py-10 lg:py-20 w-full overflow-hidden'>
      <div className='mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 lg:flex-row lg:gap-16 lg:px-12 2xl:gap-20'>
        <div className='flex flex-1 items-center justify-center'>
          <Image
            src='https://alignui.com/images/blocks/features-05.png'
            alt='Features 05'
            width={520}
            height={584}
            className='hidden h-auto w-full object-contain lg:block'
          />
          <Image
            src='https://alignui.com/images/blocks/features-05-mobile.png'
            alt='Features 05'
            width={342}
            height={452}
            className='block h-auto w-full object-contain lg:hidden'
          />
        </div>

        <div className='flex flex-1 flex-col justify-center'>
          <div className='bg-bg-weak-50 mb-3 flex w-fit items-center gap-1.5 rounded-[9px] py-1 pr-2.5 pl-2'>
            <RiBarChartFill className='text-text-soft-400 size-4' />
            <span className='text-label-sm text-text-sub-600'>
              Smarter tools for finance ops
            </span>
          </div>

          <h2 className='text-title-h4 lg:text-title-h3 xl:text-title-h2 text-text-strong-950 mb-6 font-[550] lg:w-[calc(100%+60px)]'>
            Make smarter decisions across every finance workflow
          </h2>

          <p className='text-paragraph-md text-text-sub-600 mb-6 max-w-[474px] lg:mb-8'>
            Track approval time, workload, and transaction habits to{' '}
            <span className='text-label-md text-text-sub-600'>
              improve visibility and automate smarter workflows.
            </span>
          </p>

          <ul className='mb-6 flex flex-col gap-6 lg:mb-10'>
            {features.map((feature) => (
              <li key={feature.title} className='flex items-center gap-4'>
                <div className='bg-bg-weak-50 flex shrink-0 items-center justify-center rounded-full p-3'>
                  <feature.icon className={`${feature.iconColor} size-6`} />
                </div>
                <div className='flex flex-col gap-1'>
                  <span className='text-label-md text-text-strong-950'>
                    {feature.title}
                  </span>
                  <span className='text-paragraph-sm text-text-sub-600'>
                    {feature.description}
                  </span>
                </div>
              </li>
            ))}
          </ul>

          <Button.Root
            mode='stroke'
            size='medium'
            className='text-primary-base ring-primary-base focus:border-primary-base hover:bg-blue-alpha-10 focus:shadow-button-primary-focus w-full cursor-pointer gap-3 rounded-xl border border-transparent px-4.5 transition-all duration-300 hover:shadow-none hover:ring-transparent focus:bg-transparent focus:ring-transparent lg:w-fit'
          >
            Start tracking free
            <Button.Icon
              as={RiArrowRightUpLongLine}
              className='text-primary-base group-disabled:text-text-disabled-300 size-5'
            />
          </Button.Root>
        </div>
      </div>
    </div>
  );
}
