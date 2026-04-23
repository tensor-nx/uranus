'use client';

import React, { useEffect, useRef, useState } from 'react';
import { RiArrowRightUpLongLine, RiPriceTag3Fill } from '@remixicon/react';

import * as AvatarGroupCompact from '@/components/ui/avatar-group-compact';
import * as Avatar from '@/components/ui/avatar';
import * as Badge from '@/components/ui/badge';
import * as Button from '@/components/ui/button';

export default function Pricing04() {
  type PlanKey = 'monthly' | 'yearly';
  const [activePlan, setActivePlan] = useState<PlanKey>('monthly');
  const containerRef = useRef<HTMLDivElement | null>(null);
  const buttonRefs = useRef<Record<PlanKey, HTMLButtonElement | null>>({
    monthly: null,
    yearly: null,
  });
  const [thumbLeft, setThumbLeft] = useState<number>(4);
  const [thumbWidth, setThumbWidth] = useState<number>(0);

  const repositionThumb = () => {
    const container = containerRef.current;
    const activeEl = buttonRefs.current[activePlan];
    if (!container || !activeEl) return;
    const containerRect = container.getBoundingClientRect();
    const activeRect = activeEl.getBoundingClientRect();
    const left = activeRect.left - containerRect.left;
    setThumbLeft(left);
    setThumbWidth(activeRect.width);
  };

  useEffect(() => {
    repositionThumb();
    const handle = () => repositionThumb();
    window.addEventListener('resize', handle);
    const id = window.setInterval(repositionThumb, 250);
    return () => {
      window.removeEventListener('resize', handle);
      window.clearInterval(id);
    };
  }, [activePlan]);
  const ListDotIcon = () => {
    return (
      <svg
        width='13'
        height='13'
        viewBox='0 0 13 13'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M6.5 13C2.91005 13 0 10.0899 0 6.5C0 2.91005 2.91005 0 6.5 0C10.0899 0 13 2.91005 13 6.5C13 10.0899 10.0899 13 6.5 13ZM5.85195 9.1L10.4474 4.50385L9.52835 3.58475L5.85195 7.2618L4.0131 5.42295L3.094 6.34205L5.85195 9.1Z'
          className='fill-[#1FC16B] dark:fill-[#1DAF61]'
        />
      </svg>
    );
  };
  const ArrowIcon = () => {
    return (
      <svg
        width='21'
        height='15'
        viewBox='0 0 21 15'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M0.065595 13.4353C-0.0710765 13.6752 0.0126463 13.9805 0.252595 14.1172C0.492544 14.2539 0.797855 14.1701 0.934527 13.9302L0.500061 13.6827L0.065595 13.4353ZM20.8536 4.03568C21.0489 3.84042 21.0489 3.52384 20.8536 3.32858L17.6716 0.146595C17.4764 -0.0486672 17.1598 -0.0486672 16.9645 0.146595C16.7693 0.341857 16.7693 0.65844 16.9645 0.853702L19.793 3.68213L16.9645 6.51056C16.7693 6.70582 16.7693 7.0224 16.9645 7.21766C17.1598 7.41293 17.4764 7.41293 17.6716 7.21766L20.8536 4.03568ZM0.500061 13.6827L0.934527 13.9302C3.18591 9.97754 10.182 4.18213 20.5001 4.18213V3.68213V3.18213C9.81812 3.18213 2.49258 9.1743 0.065595 13.4353L0.500061 13.6827Z'
          fill='#335CFF'
        />
      </svg>
    );
  };
  return (
    <div className='bg-bg-white-0 py-10 lg:py-20 xl:py-24 w-full'>
      <div className='mx-auto flex max-w-7xl flex-col lg:items-center lg:px-7'>
        <div className='mb-6 flex flex-col px-6 lg:mb-10 lg:items-center lg:px-0'>
          <Badge.Root
            variant='lighter'
            className='bg-bg-weak-50 text-text-sub-600 text-label-sm mb-3 h-7 w-fit gap-1.5 rounded-[9px] pr-2.5 pl-1.5 normal-case'
          >
            <Badge.Icon
              as={RiPriceTag3Fill}
              className='text-text-soft-400 mx-0 size-4'
            />
            Designed for growing finance teams
          </Badge.Root>
          <h3 className='text-title-h4 xl:text-title-h2 text-text-strong-950 mb-4 !font-[550] lg:text-center'>
            Scale with clarity, not complexity
          </h3>
          <p className='text-paragraph-md text-text-sub-600 lg:text-center'>
            Choose a plan that grows with your team — simple, transparent,{' '}
            <span className='text-label-md text-text-sub-600 lg:flex lg:justify-center'>
              and optimized for finance impact.
            </span>
          </p>
        </div>
        <div className='mb-6 flex w-full flex-col justify-center gap-6 px-3 lg:mb-8 lg:gap-9 lg:px-0'>
          <div
            ref={containerRef}
            className='bg-bg-weak-50 rounded-10 relative mx-3 flex w-auto p-1 lg:mx-auto lg:w-fit'
          >
            <div
              className='bg-bg-white-0 shadow-toggle-switch absolute top-1 bottom-1 z-0 rounded-[8px] transition-all duration-300 ease-out'
              style={{ left: thumbLeft, width: thumbWidth }}
            />
            <button
              ref={(el) => {
                buttonRefs.current.monthly = el;
              }}
              className='hover:text-text-strong-950 data-[active=true]:text-text-sub-600 text-label-sm text-text-soft-400 relative z-10 flex w-full cursor-pointer items-center justify-center rounded-[8px] px-4 py-1.5 text-center shadow-none transition-all duration-300 lg:w-fit lg:min-w-24'
              data-active={activePlan === 'monthly'}
              onClick={() => setActivePlan('monthly')}
            >
              Monthly
            </button>
            <button
              ref={(el) => {
                buttonRefs.current.yearly = el;
              }}
              className='hover:text-text-strong-950 data-[active=true]:text-text-sub-600 text-label-sm text-text-soft-400 relative z-10 flex w-full cursor-pointer items-center justify-center rounded-[8px] px-4 py-1.5 text-center shadow-none transition-all duration-300 lg:w-fit lg:min-w-24'
              data-active={activePlan === 'yearly'}
              onClick={() => setActivePlan('yearly')}
            >
              Yearly
              <div className='pointer-events-none absolute -top-4.5 right-1 flex gap-0.75 lg:top-0 lg:-right-19.5 lg:gap-2.5'>
                <i className='text-primary-base size-5 -rotate-[26.32deg] lg:rotate-0'>
                  <ArrowIcon />
                </i>
                <span className='text-primary-base text-label-xs -mt-2 flex lg:-mt-1.75'>
                  Save 20%
                </span>
              </div>
            </button>
          </div>
          <div className='flex flex-col gap-4 lg:flex-row lg:gap-6'>
            <div className='bg-bg-weak-50 flex flex-col rounded-3xl p-1 lg:flex-row'>
              <div className='flex w-full flex-col p-6 lg:justify-between xl:p-8'>
                <div className='flex flex-col gap-2'>
                  <div className='flex items-center gap-2'>
                    <div className='text-label-md text-text-strong-950'>
                      Starter
                    </div>
                    <Badge.Root
                      variant='stroke'
                      className='text-label-xs text-feature-base border-feature-base stroke-feature-base h-5 w-fit rounded-[6px] border border-dashed bg-transparent px-1.75 normal-case ring-0'
                    >
                      Most popular
                    </Badge.Root>
                  </div>
                  <p className='text-paragraph-sm text-text-sub-600'>
                    For small teams managing recurring finance ops
                  </p>
                </div>
                <div className='flex flex-col gap-6'>
                  <div className='flex items-center gap-4'>
                    <p className='text-title-h3 xl:text-title-h2 text-text-strong-950'>
                      ${activePlan === 'yearly' ? '15' : '12'}
                    </p>
                    <div className='flex flex-col gap-1'>
                      <div className='text-label-sm text-text-sub-600'>
                        /{activePlan === 'yearly' ? 'year' : 'month'}
                      </div>
                      <div className='text-label-xs text-text-soft-400'>
                        {activePlan === 'yearly'
                          ? 'billed annually'
                          : 'billed monthly'}
                      </div>
                    </div>
                  </div>
                  <Button.Root
                    variant='primary'
                    mode='filled'
                    size='small'
                    className='w-full cursor-pointer gap-2 rounded-xl'
                  >
                    Start free trial
                    <Button.Icon
                      as={RiArrowRightUpLongLine}
                      className='text-static-white/[0.64] group-disabled:text-text-disabled-300 size-5 rounded-xl'
                    />
                  </Button.Root>
                </div>
              </div>
              <div className='rounded-20 bg-bg-white-0 shadow-custom-input-4 w-full shrink-0 p-6 lg:w-60 xl:w-70 xl:p-8'>
                <ul className='flex flex-col gap-5'>
                  <li className='text-label-sm text-text-sub-600 flex items-center gap-2.5'>
                    <ListDotIcon />
                    Up to 3 finance users
                  </li>
                  <li className='text-label-sm text-text-sub-600 flex items-center gap-2.5'>
                    <ListDotIcon />
                    Custom approval rules
                  </li>
                  <li className='text-label-sm text-text-sub-600 flex items-center gap-2.5'>
                    <ListDotIcon />
                    Vendor payment tracking
                  </li>
                  <li className='text-label-sm text-text-sub-600 flex items-center gap-2.5'>
                    <ListDotIcon />
                    Expense categorization
                  </li>
                  <li className='text-label-sm text-text-sub-600 flex items-center gap-2.5'>
                    <ListDotIcon />
                    One-click exports
                  </li>
                  <li className='text-label-sm text-text-sub-600 flex items-center gap-2.5'>
                    <ListDotIcon />
                    Budget reminders
                  </li>
                  <li className='text-label-sm text-text-sub-600 flex items-center gap-2.5'>
                    <ListDotIcon />
                    Real-time spend view{' '}
                  </li>
                  <li className='text-label-sm text-text-sub-600 flex items-center gap-2.5'>
                    <ListDotIcon />
                    Email support
                  </li>
                </ul>
              </div>
            </div>
            <div className='bg-bg-weak-50 flex flex-col rounded-3xl p-1 lg:flex-row'>
              <div className='flex w-full flex-col justify-between p-6 xl:p-8'>
                <div className='flex flex-col gap-2'>
                  <div className='flex items-center gap-2'>
                    <div className='text-label-md text-text-strong-950'>
                      Scale
                    </div>
                  </div>
                  <p className='text-paragraph-sm text-text-sub-600'>
                    For growing teams managing multi-step workflows
                  </p>
                </div>
                <div className='flex flex-col gap-6'>
                  <div className='flex items-center gap-4'>
                    <p className='text-title-h3 xl:text-title-h2 text-text-strong-950'>
                      ${activePlan === 'yearly' ? '49' : '39'}
                    </p>
                    <div className='flex flex-col gap-1'>
                      <div className='text-label-sm text-text-sub-600'>
                        /{activePlan === 'yearly' ? 'year' : 'month'}
                      </div>
                      <div className='text-label-xs text-text-soft-400'>
                        {activePlan === 'yearly'
                          ? 'billed annually'
                          : 'billed monthly'}
                      </div>
                    </div>
                  </div>
                  <Button.Root
                    variant='primary'
                    mode='stroke'
                    size='small'
                    className='ring-primary-base text-primary-base hover:bg-blue-alpha-10 focus:ring-primary-base cursor-pointer gap-2 rounded-xl bg-transparent focus:bg-transparent'
                  >
                    Get Started
                    <Button.Icon
                      as={RiArrowRightUpLongLine}
                      className='text-primary-base/[0.64] group-disabled:text-text-disabled-300 size-5'
                    />
                  </Button.Root>
                </div>
              </div>
              <div className='rounded-20 bg-bg-white-0 shadow-custom-input-4 w-full shrink-0 p-6 lg:w-60 xl:w-70 xl:p-8'>
                <ul className='flex flex-col gap-5'>
                  <li className='text-label-sm text-text-sub-600 flex items-center gap-2.5'>
                    <ListDotIcon />
                    Unlimited finance users
                  </li>
                  <li className='text-label-sm text-text-sub-600 flex items-center gap-2.5'>
                    <ListDotIcon />
                    Role-based access
                  </li>
                  <li className='text-label-sm text-text-sub-600 flex items-center gap-2.5'>
                    <ListDotIcon />
                    Approval chains & policies
                  </li>
                  <li className='text-label-sm text-text-sub-600 flex items-center gap-2.5'>
                    <ListDotIcon />
                    Automated transfers
                  </li>
                  <li className='text-label-sm text-text-sub-600 flex items-center gap-2.5'>
                    <ListDotIcon />
                    Smart spend alerts
                  </li>
                  <li className='text-label-sm text-text-sub-600 flex items-center gap-2.5'>
                    <ListDotIcon />
                    Monthly usage insights
                  </li>
                  <li className='text-label-sm text-text-sub-600 flex items-center gap-2.5'>
                    <ListDotIcon />
                    Team-level budgeting
                  </li>
                  <li className='text-label-sm text-text-sub-600 flex items-center gap-2.5'>
                    <ListDotIcon />
                    Priority support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-1 px-6 lg:flex-row lg:items-center lg:px-0'>
          <AvatarGroupCompact.Root size='24'>
            <AvatarGroupCompact.Stack className='*:ring'>
              <Avatar.Root className='size-5'>
                <Avatar.Image
                  src='https://alignui.com/images/blocks/avatar-1.png'
                  className='mix-blend-luminosity'
                />
              </Avatar.Root>
              <Avatar.Root className='size-5'>
                <Avatar.Image
                  src='https://alignui.com/images/blocks/avatar-2.png'
                  className='mix-blend-luminosity'
                />
              </Avatar.Root>
              <Avatar.Root className='size-5'>
                <Avatar.Image
                  src='https://alignui.com/images/blocks/avatar-3.png'
                  className='mix-blend-luminosity'
                />
              </Avatar.Root>
              <Avatar.Root className='size-5'>
                <Avatar.Image
                  src='https://alignui.com/images/blocks/avatar-4.png'
                  className='mix-blend-luminosity'
                />
              </Avatar.Root>
              <Avatar.Root className='size-5'>
                <Avatar.Image
                  src='https://alignui.com/images/blocks/avatar-5.png'
                  className='mix-blend-luminosity'
                />
              </Avatar.Root>
              <Avatar.Root className='size-5'>
                <Avatar.Image
                  src='https://alignui.com/images/blocks/avatar-6.png'
                  className='mix-blend-luminosity'
                />
              </Avatar.Root>
            </AvatarGroupCompact.Stack>
          </AvatarGroupCompact.Root>
          <p className='text-label-sm text-text-soft-400'>
            <span className='text-label-sm text-text-disabled-300 hidden lg:inline'>
              —
            </span>{' '}
            trusted by 250+ finance teams worldwide
          </p>
        </div>
      </div>
    </div>
  );
}
