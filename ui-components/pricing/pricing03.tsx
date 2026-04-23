'use client';

import React from 'react';
import { RiArrowRightUpLongLine } from '@remixicon/react';

import * as AvatarGroupCompact from '@/components/ui/avatar-group-compact';
import * as Avatar from '@/components/ui/avatar';
import * as Button from '@/components/ui/button';
import * as Slider from '@/components/ui/slider';
import * as StatusBadge from '@/components/ui/status-badge';
import * as Tooltip from '@/components/ui/tooltip';

export default function Pricing03() {
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
  const [value, setValue] = React.useState<number[]>([0]);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <div className='bg-bg-white-0 py-10 lg:py-20 xl:py-24 w-full'>
      <div className='mx-auto flex max-w-[820px] flex-col items-center'>
        <div className='mb-6 flex flex-col px-6 lg:mb-12 lg:items-center lg:px-0'>
          <StatusBadge.Root
            variant='light'
            className='text-label-sm text-text-sub-600 bg-bg-weak-50 mb-3 h-7 w-fit rounded-[9px] px-2.5 normal-case has-[>.dot]:gap-1'
          >
            <StatusBadge.Dot className='text-primary-base mx-0 size-4 before:size-1.5' />
            Performance-based pricing
          </StatusBadge.Root>
          <h3 className='text-title-h4 xl:text-title-h3 text-text-strong-950 mb-4 !font-[550] lg:text-center'>
            Pay for outcomes, not promises
          </h3>
          <p className='text-paragraph-md text-text-sub-600 lg:text-center'>
            Choose a pricing model that scales with your campaign{' '}
            <span className='text-label-md text-text-sub-600 lg:flex lg:justify-center'>
              results — transparent, fair, and built for ROI.
            </span>
          </p>
        </div>
        <div className='mb-8 flex w-full px-3 lg:px-0'>
          <div className='bg-bg-weak-50 flex w-full flex-col gap-2.5 rounded-[28px] p-2.5 lg:flex-row lg:rounded-[36px]'>
            <div className='bg-bg-white-0 rounded-20 shadow-custom-input-4 flex h-auto w-full flex-col p-5.5 lg:w-102 lg:shrink-0 lg:rounded-[28px] lg:p-8'>
              <StatusBadge.Root
                variant='light'
                className='text-label-xs text-text-sub-600 bg-bg-weak-50 mb-4 h-6 w-fit rounded-[8px] px-2.5 normal-case lg:mb-6'
              >
                <StatusBadge.Dot className='text-text-sub-600 mx-0 size-4 before:size-1.5' />
                No flat fees
              </StatusBadge.Root>
              <h6 className='text-title-h6 text-text-strong-950 mb-2 !font-[550]'>
                Your monthly ad spend?
              </h6>
              <p className='text-paragraph-sm text-text-sub-600 mb-6 font-medium'>
                Pricing scales with your results. <br /> Pay only for what
                performs.
              </p>
              <div className='border-stroke-soft-200 mb-8 flex flex-col gap-2 border-b pb-8'>
                <div className='text-label-xs text-text-sub-600 font-medium'>
                  Your budget, your control.
                </div>
                <Tooltip.Provider>
                  <Slider.Root
                    defaultValue={[0]}
                    min={0}
                    max={10000}
                    step={1}
                    onValueChange={(val) => setValue(val)}
                    className='w-full'
                    rangeClassName='bg-primary-base rounded-[2.4px]'
                    trackClassName='rounded-[2.4px]'
                  >
                    <Tooltip.Root open={isOpen}>
                      <Tooltip.Trigger
                        asChild
                        className='bg-primary-base h-6.5 w-3'
                      >
                        <Slider.Thumb className='rounded-[20px] h-[18px] w-1 border-[3px] border-bg-white-0 shadow-none' />
                      </Tooltip.Trigger>
                      <Tooltip.Content
                        size='xsmall'
                        side='bottom'
                        forceMount
                        className='text-static-white bg-[#333333]'
                        arrowClassName='bg-[#333333] border-[#333333]'
                      >
                        {(value[0] ?? 0).toLocaleString()} active user
                      </Tooltip.Content>
                    </Tooltip.Root>
                  </Slider.Root>
                </Tooltip.Provider>
                <div className='flex items-center justify-between'>
                  <p className='text-label-xs text-text-soft-400'>0</p>
                  <p className='text-label-xs text-text-soft-400'>10,000</p>
                </div>
              </div>
              <div className='flex flex-col'>
                <div className='text-label-md text-text-strong-950 mb-2'>
                  What you’ll gain
                </div>
                <div className='text-label-sm text-text-sub-600 mb-6'>
                  With $12k in ad spend, here’s what teams typically achieve
                  using our tools.
                </div>
                <ul className='flex flex-col gap-3'>
                  <li className='text-label-sm text-text-sub-600 flex items-center gap-2.5'>
                    <ListDotIcon />
                    Extra revenue: $4,800
                  </li>
                  <li className='text-label-sm text-text-sub-600 flex items-center gap-2.5'>
                    <ListDotIcon />
                    ROI up to 380%
                  </li>
                </ul>
              </div>
            </div>
            <div className='flex h-fit w-full flex-col gap-6 p-5.5 lg:gap-5 xl:gap-6'>
              <div className='flex flex-col gap-2'>
                <h5 className='text-label-md text-text-strong-950'>
                  Growth plan
                </h5>
                <p className='text-label-sm text-text-sub-600 font-medium'>
                  For marketing teams optimizing paid campaigns, lead
                  generation, and ROI reporting.
                </p>
              </div>
              <div className='text-title-h2 lg:text-title-h3 xl:text-title-h2 text-text-strong-950 flex items-center gap-2.5'>
                $980{' '}
                <span className='text-label-md text-text-sub-600'>/mo</span>
              </div>
              <ul className='border-stroke-soft-200 flex flex-col gap-4 border-t pt-6 lg:gap-3 lg:pt-5 xl:gap-4 xl:pt-6'>
                <li className='text-label-sm text-text-sub-600 flex items-center gap-2.5'>
                  <ListDotIcon />
                  Unlimited team seats
                </li>
                <li className='text-label-sm text-text-sub-600 flex items-center gap-2.5'>
                  <ListDotIcon />
                  Spend-based pricing
                </li>
                <li className='text-label-sm text-text-sub-600 flex items-center gap-2.5'>
                  <ListDotIcon />
                  Campaign performance dashboard
                </li>
                <li className='text-label-sm text-text-sub-600 flex items-center gap-2.5'>
                  <ListDotIcon />
                  Lead quality tracking
                </li>
                <li className='text-label-sm text-text-sub-600 flex items-center gap-2.5'>
                  <ListDotIcon />
                  Priority onboarding & support
                </li>
              </ul>
              <Button.Root
                variant='primary'
                mode='filled'
                size='small'
                className='shadow-complex-7 w-full cursor-pointer gap-2 rounded-xl'
              >
                Start free trial
                <Button.Icon
                  as={RiArrowRightUpLongLine}
                  className='text-static-white/[0.64] group-disabled:text-text-disabled-300 size-5'
                />
              </Button.Root>
            </div>
          </div>
        </div>
        <div className='flex w-full flex-col gap-1 px-3 lg:flex-row lg:items-center lg:justify-center lg:px-0'>
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
            rated 4.8/5 by 200+ happy customers
          </p>
        </div>
      </div>
    </div>
  );
}
