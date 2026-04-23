'use client';

import React from 'react';

import * as Badge from '@/components/ui/badge';
import * as Button from '@/components/ui/button';
import * as Label from '@/components/ui/label';
import * as Switch from '@/components/ui/switch';

export default function Pricing01() {
  const [isYearly, setIsYearly] = React.useState(false);

  const ListDotIcon = () => {
    return (
      <svg
        width='15'
        height='15'
        viewBox='0 0 15 15'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M7.5 15C3.35775 15 0 11.6423 0 7.5C0 3.35775 3.35775 0 7.5 0C11.6423 0 15 3.35775 15 7.5C15 11.6423 11.6423 15 7.5 15ZM6.75225 10.5L12.0548 5.19675L10.9943 4.13625L6.75225 8.379L4.6305 6.25725L3.57 7.31775L6.75225 10.5Z'
          className='fill-[#335CFF] dark:fill-[#4D82FF]'
        />
      </svg>
    );
  };
  const uniqueId = React.useId();
  return (
    <div className='bg-bg-white-0 flex w-full flex-col gap-6 py-10 lg:gap-12 lg:py-20 xl:py-24'>
      <div className='flex flex-col gap-4 px-6 lg:mx-auto lg:max-w-[808px] lg:flex-row lg:items-end lg:gap-6 lg:px-0'>
        <div className='flex flex-col gap-2 lg:gap-3'>
          <Badge.Root
            variant='lighter'
            className='text-label-sm text-text-sub-600 bg-bg-weak-50 h-7 w-fit rounded-[9px] px-2.5 normal-case'
          >
            Flexible plans for every stage
          </Badge.Root>
          <h3 className='text-title-h4 xl:text-title-h3 text-text-strong-950 !font-[550]'>
            Smart pricing for modern finance teams
          </h3>
        </div>
        <div className='flex flex-col gap-4 lg:gap-5 xl:gap-7'>
          <p className='text-label-md text-text-sub-600'>
            Scalable pricing designed for fintech and global needs.
          </p>
          <div className='flex items-center gap-2'>
            <Switch.Root
              id={`${uniqueId}-s1`}
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className='[&>div]:group-data-[state=checked]/switch:!bg-information-base [&>div]:bg-bg-sub-300 cursor-pointer [&>div]:group-data-[state=checked]/switch:hover:!bg-blue-700'
            />
            <Label.Root
              className='text-label-sm text-text-sub-600 cursor-pointer'
              htmlFor={`${uniqueId}-s1`}
            >
              <span className='text-text-strong-950'>Save 20%</span> when billed
              yearly
            </Label.Root>
          </div>
        </div>
      </div>
      <div className='flex max-w-7xl flex-col gap-3 px-6 lg:mx-auto lg:flex-row lg:px-7'>
        <div className='shadow-regular-xs rounded-20 border-stroke-soft-200 flex h-fit flex-col gap-5 border p-5 lg:flex-1 lg:gap-7 lg:rounded-3xl lg:px-9 lg:py-8'>
          <div className='flex flex-col gap-2'>
            <h5 className='text-label-md text-text-strong-950'>Free plan</h5>
            <p className='text-label-sm text-text-sub-600'>
              Perfect for freelancers or individuals managing everyday finances.
            </p>
          </div>
          <div className='text-title-h3 text-text-strong-950'>$0</div>
          <ul className='border-stroke-soft-200 flex flex-col gap-4 border-t pt-5 lg:pt-7'>
            <li className='text-label-sm text-text-sub-600 flex items-center gap-2.5'>
              <ListDotIcon />
              Seamless app connections
            </li>
            <li className='text-label-sm text-text-sub-600 flex items-center gap-2.5'>
              <ListDotIcon />
              Quick integration setups
            </li>
            <li className='text-label-sm text-text-sub-600 flex items-center gap-2.5'>
              <ListDotIcon />
              Real-time data syncing
            </li>
          </ul>
          <Button.Root
            variant='neutral'
            mode='stroke'
            size='small'
            className='!rounded-10 w-full cursor-pointer'
          >
            Get started free
          </Button.Root>
        </div>
        <div className='bg-bg-weak-50 rounded-20 flex h-fit flex-col gap-5 p-5 lg:flex-1 lg:gap-7 lg:rounded-3xl lg:px-9 lg:py-8'>
          <div className='flex flex-col gap-2'>
            <h5 className='text-label-md text-text-strong-950'>
              Business plan
            </h5>
            <p className='text-label-sm text-text-sub-600'>
              For small teams and startups sending, receiving and managing
              global payments.
            </p>
          </div>
          <div className='text-title-h3 text-text-strong-950 flex items-center gap-2.5'>
            ${isYearly ? '470' : '49'}{' '}
            <span className='text-label-md text-text-sub-600'>
              /{isYearly ? 'yearly' : 'mo'}
            </span>
          </div>
          <ul className='border-stroke-soft-200 flex flex-col gap-4 border-t pt-5 lg:pt-7'>
            <li className='text-label-sm text-text-sub-600 flex items-center gap-2.5'>
              <ListDotIcon />
              Multi-user access
            </li>
            <li className='text-label-sm text-text-sub-600 flex items-center gap-2.5'>
              <ListDotIcon />
              Local + international transfers
            </li>
            <li className='text-label-sm text-text-sub-600 flex items-center gap-2.5'>
              <ListDotIcon />
              Invoicing & payment requests
            </li>
            <li className='text-label-sm text-text-sub-600 flex items-center gap-2.5'>
              <ListDotIcon />
              Virtual & physical cards
            </li>
            <li className='text-label-sm text-text-sub-600 flex items-center gap-2.5'>
              <ListDotIcon />
              Currency accounts in 10+ currencies
            </li>
            <li className='text-label-sm text-text-sub-600 flex items-center gap-2.5'>
              <ListDotIcon />
              Priority email & chat support
            </li>
          </ul>
          <Button.Root
            variant='primary'
            mode='filled'
            size='small'
            className='!rounded-10 w-full cursor-pointer bg-primary-base'
          >
            Get started free
          </Button.Root>
        </div>
        <div className='shadow-regular-xs rounded-20 border-stroke-soft-200 flex h-fit flex-col gap-5 border p-5 lg:flex-1 lg:gap-7 lg:rounded-3xl lg:px-9 lg:py-8'>
          <div className='flex flex-col gap-2'>
            <h5 className='text-label-md text-text-strong-950'>Global plan</h5>
            <p className='text-label-sm text-text-sub-600'>
              Built for scaling companies with finance teams and compliance
              needs.
            </p>
          </div>
          <div className='text-title-h3 text-text-strong-950 flex items-center gap-2.5'>
            ${isYearly ? '3,830' : '399'}{' '}
            <span className='text-label-md text-text-sub-600'>
              /{isYearly ? 'yearly' : 'mo'}
            </span>
          </div>
          <ul className='border-stroke-soft-200 flex flex-col gap-4 border-t pt-5 lg:pt-7'>
            <li className='text-label-sm text-text-sub-600 flex items-center gap-2.5'>
              <ListDotIcon />
              Dedicated account manager
            </li>
            <li className='text-label-sm text-text-sub-600 flex items-center gap-2.5'>
              <ListDotIcon />
              Custom limits & permissions
            </li>
            <li className='text-label-sm text-text-sub-600 flex items-center gap-2.5'>
              <ListDotIcon />
              Real-time transaction reporting
            </li>
            <li className='text-label-sm text-text-sub-600 flex items-center gap-2.5'>
              <ListDotIcon />
              Advanced API access
            </li>
            <li className='text-label-sm text-text-sub-600 flex items-center gap-2.5'>
              <ListDotIcon />
              Automated payouts & payroll
            </li>
            <li className='text-label-sm text-text-sub-600 flex items-center gap-2.5'>
              <ListDotIcon />
              Legal & compliance onboarding
            </li>
            <li className='text-label-sm text-text-sub-600 flex items-center gap-2.5'>
              <ListDotIcon />
              Multi-entity account support
            </li>
            <li className='text-label-sm text-text-sub-600 flex items-center gap-2.5'>
              <ListDotIcon />
              SOC 2 Type II & GDPR compliance
            </li>
          </ul>
          <Button.Root
            variant='neutral'
            mode='stroke'
            size='small'
            className='!rounded-10 w-full cursor-pointer'
          >
            Get started free
          </Button.Root>
        </div>
      </div>
    </div>
  );
}
