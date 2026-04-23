'use client';

import {
  RiArrowDownDoubleLine,
  RiArrowRightDoubleLine,
  RiArrowRightUpLongLine,
} from '@remixicon/react';

import * as Badge from '@/components/ui/badge';
import * as LinkButton from '@/components/ui/link-button';
const stepsData = [
  {
    id: 'step1',
    number: '01',
    subtitle: 'Create your account',
    description: 'Sign up in minutes and connect your bank or cards.',
    colorClass: 'text-information-base',
    zIndex: 'z-3',
    roundedClass: 'rounded-t-20 rounded-b-xl lg:rounded-l-3xl lg:rounded-r-xl',
    hasArrow: true,
  },
  {
    id: 'step2',
    number: '02',
    subtitle: 'Automate your money',
    description: 'Set savings rules, schedule bills, and track spending.',
    colorClass: 'text-success-base',
    zIndex: 'z-2',
    roundedClass: 'lg:rounded-xl',
    hasArrow: true,
  },
  {
    id: 'step3',
    number: '03',
    subtitle: 'See your finances grow',
    description: 'Watch your money stay organized and grow over time.',
    colorClass: 'text-feature-base',
    zIndex: 'z-1',
    roundedClass: 'rounded-b-20 rounded-t-xl lg:rounded-r-3xl lg:rounded-l-xl',
    hasArrow: false,
  },
];

export default function HowItWorks01() {
  return (
    <div className='flex flex-col lg:items-center bg-bg-white-0 py-10 lg:py-20 w-full'>
      <div className='w-full flex flex-col lg:flex-row gap-4 lg:gap-6 lg:items-end lg:max-w-[808px] mx-auto mb-6 lg:mb-12 px-6 lg:px-0'>
        <div className='flex flex-col gap-2 lg:gap-3'>
          <Badge.Root
            variant='lighter'
            className='w-fit px-2.5 h-7 text-label-sm text-text-sub-600 normal-case rounded-[9px] bg-bg-weak-50'
          >
            Secure, simple and smart tools
          </Badge.Root>
          <h3 className='text-title-h4 lg:text-title-h3 !font-[550] text-text-strong-950'>
            Set up and take control in just 3 steps
          </h3>
        </div>
        <div className='flex flex-col gap-4 lg:gap-6'>
          <p className='text-label-sm lg:text-label-md text-text-sub-600'>
            Stay on schedule with smart, automated payments.
          </p>
          <LinkButton.Root
            className='text-label-sm lg:text-label-md text-text-strong-950 h-auto gap-1 whitespace-break-spaces hover:text-text-strong-950 transition-all duration-300 group cursor-pointer justify-start'
            asChild
          >
            <a href='#'>
              Get started free
              <LinkButton.Icon
                as={RiArrowRightUpLongLine}
                className='size-5 text-text-soft-400 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-text-strong-950'
              />
            </a>
          </LinkButton.Root>
        </div>
      </div>
      <div className='w-full lg:max-w-7xl mx-auto flex flex-col lg:flex-row gap-2 lg:gap-3 mb-6 px-6 lg:px-7'>
        {stepsData.map((step) => (
          <div
            key={step.id}
            className={`relative bg-bg-weak-25 ${step.roundedClass} p-5 lg:p-7 flex w-full ${step.zIndex}`}
          >
            {step.hasArrow && (
              <div className='flex items-center justify-center size-6 lg:size-7 bg-bg-white-0 rounded-full shadow-custom-input absolute left-11.75 lg:left-auto lg:-right-5 -bottom-4 lg:-bottom-auto lg:top-1/2 lg:-translate-y-1/2'>
                <RiArrowRightDoubleLine className='size-5 text-text-soft-400 hidden lg:block' />
                <RiArrowDownDoubleLine className='size-5 text-text-soft-400 block lg:hidden' />
              </div>
            )}
            <div
              className={`text-label-lg lg:text-title-h6 ${step.colorClass} pr-5 xl:pr-7 flex h-auto border-r border-stroke-soft-200`}
            >
              {step.number}
            </div>
            <div className='flex flex-col gap-2 lg:gap-4 pl-5 xl:pl-7'>
              <div className='text-label-sm lg:text-label-md text-text-soft-400'>
                {step.subtitle}
              </div>
              <div className='text-label-md lg:text-label-lg xl:text-title-h6 text-text-strong-950'>
                {step.description}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='text-label-sm text-text-soft-400 lg:text-center px-6 lg:px-0'>
        From setup to success, all in minutes.
      </div>
    </div>
  );
}
