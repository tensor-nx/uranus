'use client';

import { RiMailFill } from '@remixicon/react';
import Image from '@repo/registry/next-image-mock';

import * as Badge from '@/components/ui/badge';
import * as Button from '@/components/ui/button';
import * as Input from '@/components/ui/input';
const CheckIcon = () => {
  return (
    <svg
      width='14'
      height='14'
      viewBox='0 0 14 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M7 14C3.1339 14 0 10.8661 0 7C0 3.1339 3.1339 0 7 0C10.8661 0 14 3.1339 14 7C14 10.8661 10.8661 14 7 14ZM6.3021 9.8L11.2511 4.8503L10.2613 3.8605L6.3021 7.8204L4.3218 5.8401L3.332 6.8299L6.3021 9.8Z'
        className='fill-primary-base'
      />
    </svg>
  );
};

const features = [
  'Accurate analytics, updated in real time',
  'Shared dashboards for your entire team',
  'Enterprise-level security and privacy',
];

export default function Newsletter05() {
  return (
    <div className='bg-bg-white-0 px-2 py-8 lg:px-0 lg:py-20 w-full'>
      <div className='mx-auto w-full max-w-7xl lg:px-7'>
        <div className='shadow-custom-input bg-bg-white-0 flex flex-col gap-8 overflow-hidden rounded-[24px] pt-6 lg:flex-row lg:gap-10 lg:rounded-[32px] lg:pt-8 lg:pl-10 xl:gap-16 xl:pt-12 xl:pl-20'>
          <div className='flex flex-col gap-8 px-6 lg:w-[380px] lg:shrink-0 lg:gap-10 lg:px-0 lg:pt-8 xl:w-[430px]'>
            <div className='flex flex-col gap-4'>
              <div className='flex flex-col gap-3'>
                <Badge.Root
                  variant='lighter'
                  className='bg-bg-weak-50 text-label-sm text-text-sub-600 h-7 w-fit rounded-[9px] px-2.5 normal-case'
                >
                  Finance & Insights
                </Badge.Root>
                <h3 className='text-title-h4 text-text-strong-950 lg:text-title-h3 font-[550]'>
                  Gain clarity, make decisions faster
                </h3>
              </div>
              <p className='text-paragraph-md text-text-sub-600'>
                Access real-time data, uncover trends, and manage your{' '}
                <span className='text-label-md text-text-sub-600'>
                  financial performance with confidence.
                </span>
              </p>
            </div>

            <div className='flex flex-col gap-4 lg:gap-2.5'>
              <div className='flex flex-col gap-2 lg:flex-row lg:gap-2.5'>
                <Input.Root className='shadow-custom-input flex-1 rounded-xl before:content-none'>
                  <Input.Wrapper size='medium'>
                    <Input.Icon
                      as={RiMailFill}
                      className='group-has-[:placeholder-shown]:text-text-disabled-300 size-5'
                    />
                    <Input.Input
                      id='newsletter-email'
                      type='email'
                      placeholder='Your email address...'
                      className='text-text-strong-950 text-label-sm placeholder:text-text-soft-400 placeholder:text-label-sm'
                    />
                  </Input.Wrapper>
                </Input.Root>
                <div className='text-paragraph-xs text-text-soft-400 lg:hidden'>
                  Your data is safe{' '}
                  <span className='text-text-disabled-300'>—</span>{' '}
                  <span className='text-label-xs text-text-sub-600'>
                    view our policy
                  </span>
                </div>
                <Button.Root
                  variant='primary'
                  mode='filled'
                  size='medium'
                  className='bg-primary-base mt-2 cursor-pointer rounded-xl px-4 lg:mt-0'
                >
                  Join the list
                </Button.Root>
              </div>
              <div className='text-paragraph-xs text-text-soft-400 hidden lg:block'>
                Your data is safe{' '}
                <span className='text-text-disabled-300'>—</span>{' '}
                <span className='text-label-xs text-text-sub-600'>
                  view our policy
                </span>
              </div>
            </div>

            <div className='flex flex-col gap-4'>
              {features.map((feature) => (
                <div key={feature} className='flex items-center gap-2.5'>
                  <div className='size-3.5 shrink-0'>
                    <CheckIcon />
                  </div>
                  <span className='text-paragraph-sm text-text-sub-600'>
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className='flex flex-1 items-start px-6 lg:justify-end lg:px-0'>
            <Image
              src='https://alignui.com/images/blocks/newsletter-5-image.png'
              alt='Finance dashboard'
              width={1224}
              height={740}
              className='hidden w-full object-contain lg:block lg:w-full lg:h-auto dark:lg:hidden'
            />
            <Image
              src='https://alignui.com/images/blocks/newsletter-5-image-dark.png'
              alt='Finance dashboard'
              width={1224}
              height={740}
              className='hidden lg:w-full lg:h-auto dark:lg:block'
            />
            <Image
              src='https://alignui.com/images/blocks/newsletter-5-image-mobile.png'
              alt='Finance dashboard'
              width={326}
              height={668}
              className='mx-auto block w-full max-w-[540px] object-contain lg:hidden dark:hidden'
            />
            <Image
              src='https://alignui.com/images/blocks/newsletter-5-image-mobile-dark.png'
              alt='Finance dashboard'
              width={326}
              height={668}
              className='mx-auto hidden w-full max-w-[540px] object-contain dark:block dark:lg:hidden'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
