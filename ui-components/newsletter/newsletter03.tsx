'use client';

import { RiMailFill } from '@remixicon/react';
import Image from '@repo/registry/next-image-mock';

import * as Badge from '@/components/ui/badge';
import * as Button from '@/components/ui/button';
import * as Input from '@/components/ui/input';
const ListCircleIcon = () => {
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

export default function Newsletter03() {
  return (
    <div className='bg-bg-white-0 w-full py-10 lg:py-18 w-full'>
      <div className='mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 lg:flex-row lg:gap-10 lg:px-1 xl:gap-14 2xl:gap-18'>
        <div className='flex w-full lg:w-auto'>
          <Image
            src='https://alignui.com/images/blocks/newsletter-2-image.jpg'
            alt='newsletter'
            width={448}
            height={430}
            className='w-full rounded-3xl object-cover md:max-h-[460px] lg:max-h-[430px]'
          />
        </div>
        <div className='flex w-full flex-1 flex-col'>
          <Badge.Root
            variant='lighter'
            className='text-label-sm text-text-sub-600 bg-bg-weak-50 mb-3 h-7 w-fit rounded-[9px] px-2.5 capitalize'
          >
            Newsletter & Insights
          </Badge.Root>
          <h3 className='text-title-h4 2xl:text-title-h3 text-text-strong-950 mb-4 !font-[550]'>
            Lead with insight, move with purpose
          </h3>
          <p className='text-paragraph-md text-text-sub-600 mb-8 lg:mb-6'>
            Stay connected for expert insights, industry trends, {''}{' '}
            <br className='hidden lg:block' />
            <strong className='text-label-md text-text-sub-600'>
              and smarter ways to drive results together.
            </strong>
          </p>
          <div className='mb-8 flex flex-col gap-4 lg:mb-10'>
            <div className='flex items-center gap-2.5'>
              <div className='size-3.5'>
                <ListCircleIcon />
              </div>
              <span className='text-paragraph-sm text-text-sub-600'>
                Always informed, always ahead
              </span>
            </div>
            <div className='flex items-center gap-2.5'>
              <div className='size-3.5'>
                <ListCircleIcon />
              </div>
              <span className='text-paragraph-sm text-text-sub-600'>
                Custom solutions designed for teams
              </span>
            </div>
            <div className='flex items-center gap-2.5'>
              <div className='size-3.5'>
                <ListCircleIcon />
              </div>
              <span className='text-paragraph-sm text-text-sub-600'>
                Enterprise-level privacy and control
              </span>
            </div>
          </div>
          <div className='flex flex-col gap-4 lg:flex-row lg:gap-2.5'>
            <div className='flex w-full flex-1 flex-col gap-2 lg:w-74 lg:flex-none lg:gap-2.5 xl:w-74'>
              <Input.Root className='shadow-custom-input hover:shadow-gray-shadow has-[input:focus]:shadow-custom-input-active rounded-xl transition-none before:content-none'>
                <Input.Wrapper size='medium'>
                  <Input.Icon
                    as={RiMailFill}
                    className='group-has-[:placeholder-shown]:text-text-disabled-300 text-primary-base group-has-[:placeholder-shown]:group-hover/input-wrapper:text-text-soft-400 group-has-[:placeholder-shown]:group-has-[input:focus]/input-wrapper:text-primary-base size-5'
                  />
                  <Input.Input
                    id='email'
                    type='email'
                    placeholder='Your email address...'
                    className='text-text-strong-950 text-paragraph-sm placeholder:text-text-soft-400 placeholder:text-paragraph-sm group-has-[input:focus]:placeholder:text-text-strong-950'
                  />
                </Input.Wrapper>
              </Input.Root>
              <div className='text-paragraph-xs text-text-soft-400'>
                Your data is safe —{' '}
                <span className='text-text-sub-600 text-label-xs'>
                  view our policy
                </span>
              </div>
            </div>
            <Button.Root
              variant='primary'
              mode='filled'
              size='medium'
              className='cursor-pointer rounded-xl px-4'
            >
              Join the list
            </Button.Root>
          </div>
        </div>
      </div>
    </div>
  );
}
